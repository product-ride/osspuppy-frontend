import { useRef, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import styled from "styled-components";
import { addRepo, addTier, deleteRepo, deleteTier, fetchTiers, updateTier, updateRepo } from '../../api';
import TierModal from '../TierModal';
import RepositoryDetails from '../RepoDetails';
import { DangerButton, PrimaryButton } from '../Button'
import { useToasts } from 'react-toast-notifications';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import ConfirmModal from '../ConfirmModal';
import RepoModal from '../RepoModal';
import { useRouter } from 'next/router';
import { useAuth } from '../../hooks/auth';

const TierContainer = styled.div`
  .px-4;
  .lg: px-32;
  .pt-4;
  .pb-8;
  .mt-4;
`;

const TierList = styled.div`
  .w-full;
  .p-4;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const TitleContainer = styled.div`
  .flex;
  .justify-between;
  items-center;
`;

const Title = styled.h3`
  .text-2xl;
  .mt-0;
`;

const TierItem = styled.div`
  .p-4;
  .mb-4;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const TierTitle = styled.div`
  font-weight: 700;
`;

const TierRepoTitle = styled.u``;

const TierLabel = styled.div`
  font-weight: 700;
`;

const TierDesc = styled.div`
  width: 80%;
  .my-4;
`;

const TierRow = styled.div`
  .flex;
  .justify-between;
  .items-center;
`;

const TierDetails = ({ tiers }) => {
  const [isTierModalOpen, setIsTierModalOpen] = useState(false);
  const [isRepoModalOpen, setIsRepoModalOpen] = useState(false);
  const [isDeleteTierConfirmModalOpen, setIsDeleteTierConfirnModalOpen] = useState(false);
  const [isDeleteRepoConfirmModalOpen, setIsDeleteRepoConfirnModalOpen] = useState(false);
  const client = useQueryClient();
  const toast = useToasts();
  const selectedTier = useRef(null);
  const selectedRepo = useRef(null);
  const { isLoggedIn } = useAuth();
  const { data, isLoading, isSuccess: isTierLoaded } = useQuery('tiers', fetchTiers, { initialData: { tiers }, enabled: !!isLoggedIn });
  const router = useRouter();
  const { username } = router.query;
  const { mutate: addTierMutation, isLoading: isAddingTier } = useMutation(addTier, {
    onSuccess: () => {
      client.invalidateQueries('tiers');
      setIsTierModalOpen(false);
    },
    onError: () => {
      toast.addToast('Could not create the tier, please try again!', {
        appearance: 'error',
        autoDismiss: true
      });
    }
  });
  const { mutate: addRepoMutation, isLoading: isAddingRepo } = useMutation(addRepo, {
    onSuccess: () => {
      client.invalidateQueries('tiers');
      setIsRepoModalOpen(false);
    },
    onError: (err) => {
      if (err.statusCode === 404) {
        toast.addToast('Sorry! that repo was not found', {
          appearance: 'error',
          autoDismiss: true
        });
      } else {
        toast.addToast('Could not add the repo, please try again!', {
          appearance: 'error',
          autoDismiss: true
        });
      }
    }
  });
  const { mutate: deleteTierMutation } = useMutation(deleteTier, {
    onSuccess:() => client.invalidateQueries('tiers'),
    onError: () => {
      toast.addToast('Could not delete the tier, please try again!', {
        appearance: 'error',
        autoDismiss: true
      });
    }
  });
  const { mutate: deleteRepoMutation } = useMutation(deleteRepo, {
    onSuccess:() => client.invalidateQueries('tiers'),
    onError: () => {
      toast.addToast('Could not delete the repo, please try again!', {
        appearance: 'error',
        autoDismiss: true
      });
    }
  });
  const { mutate: updateTierMutation, isLoading: isUpdatingTier } = useMutation(updateTier, {
    onSuccess:() => {
      client.invalidateQueries('tiers');
      setIsTierModalOpen(false);
    },
    onError: () => {
      toast.addToast('Could not update the tier, please try again!', {
        appearance: 'error',
        autoDismiss: true
      });
    }
  });
  const { mutate: updateRepoMutation, isLoading: isUpdatingRepo } = useMutation(updateRepo, {
    onSuccess:() => {
      client.invalidateQueries('tiers');
      setIsRepoModalOpen(false);
    },
    onError: () => {
      toast.addToast('Could not update the repo, please try again!', {
        appearance: 'error',
        autoDismiss: true
      });
    }
  });

  return (
    <TierContainer>
      <TierList>
        <TitleContainer suppressHydrationWarning={true}>
          <Title>Tier Details</Title>
          {
            isLoggedIn && (
              <PrimaryButton size="lg" onClick={() => {
                setIsTierModalOpen(true);
                selectedTier.current = null;
              }}>Add Tier</PrimaryButton>
            )
          }
        </TitleContainer>
        {isLoading && <div>Loading...</div>}
        {
          isTierLoaded && (
            data.tiers.map(tier => (
              <TierItem key={tier.id}>
                <TierRow>
                  <TierTitle>{tier.minAmount}$ a month</TierTitle>
                  <TierLabel>{tier.title}</TierLabel>
                  {
                    isLoggedIn && (
                      <div>
                        <PrimaryButton size="lg" onClick={() => {
                          selectedTier.current = tier;
                          selectedRepo.current = null;
                          setIsRepoModalOpen(true);
                        }}>Add Repo</PrimaryButton>
                        <PrimaryButton size="lg" onClick={() => {
                          selectedTier.current = tier;
                          setIsTierModalOpen(true);
                        }}>
                          <FaPencilAlt />
                        </PrimaryButton>
                        <DangerButton size="lg" onClick={() => {
                            selectedTier.current = tier;
                            setIsDeleteTierConfirnModalOpen(true);
                          }}>
                          <FaTrash />
                        </DangerButton>
                      </div>
                    )
                  }
                </TierRow>
                <TierDesc>
                  {tier.description}
                </TierDesc>
                {tier.repositories && tier.repositories.length > 0 && <TierRepoTitle>List of Repos and details:</TierRepoTitle>}
                {
                  tier.repositories.map(repo => (
                    <RepositoryDetails
                      key={repo.id}
                      repo={repo}
                      onRepoDelete={(repo) => {
                        selectedTier.current = tier;
                        selectedRepo.current = repo;
                        setIsDeleteRepoConfirnModalOpen(true);
                      }}
                      onRepoEdit={(repo) => {
                        selectedTier.current = tier;
                        selectedRepo.current = repo;
                        setIsRepoModalOpen(true);
                      }}
                    />
                  ))
                }
              </TierItem>
            ))
          )
        }
      </TierList>
      <TierModal 
        isSubmitting={isAddingTier || isUpdatingTier}
        onSubmit={(data) => {
          if (selectedTier.current) {
            updateTierMutation({
              id: selectedTier.current.id,
              ...data
            });
          } else {
            addTierMutation(data)
          }
        }}
        close={() => setIsTierModalOpen(false)}
        isOpen={isTierModalOpen}
        tier={selectedTier.current}
      />
      <RepoModal
        isOpen={isRepoModalOpen}
        isSubmitting={isAddingRepo || isUpdatingRepo}
        close={() => setIsRepoModalOpen(false)}
        onSubmit={(data) => {
          if (selectedRepo.current) {
            updateRepoMutation({
              tierId: selectedTier.current.id,
              ownerOrOrg: username,
              ...data,
              name: selectedRepo.current.name
            });
          } else {
            addRepoMutation({
              tierId: selectedTier.current.id,
              ownerOrOrg: username,
              ...data
            });
          }
        }}
        repo={selectedRepo.current}
      />
      <ConfirmModal
        heading="Are you sure to delete the tier?"
        isOpen={isDeleteTierConfirmModalOpen}
        close={() => setIsDeleteTierConfirnModalOpen(false)}
        onYes={() => deleteTierMutation(selectedTier.current.id)}
      />
      <ConfirmModal
        heading="Are you sure to delete the repo?"
        isOpen={isDeleteRepoConfirmModalOpen}
        close={() => setIsDeleteRepoConfirnModalOpen(false)}
        onYes={() => deleteRepoMutation({
          name: selectedRepo.current.name,
          ownerOrOrg: username,
          tierId: selectedTier.current.id
        })}
      />
    </TierContainer>
  );
};

export default TierDetails;
