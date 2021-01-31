import { useRef, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import styled from "styled-components";
import { addTier, deleteTier, fetchTiers, updateTier } from '../../api';
import TierModal from '../TierModal';
import CollapsibleList from '../CollapsibleList';
import { DangerButton, PrimaryButton } from '../Button'
import { useToasts } from 'react-toast-notifications';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import ConfirmModal from '../ConfirmModal';

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

const TierDetails = () => {
  const [isTierModalOpen, setIsTierModalOpen] = useState(false);
  const [isDeleteConfirmModalOpen, setIsDeleteConfirnModalOpen] = useState(false);
  const client = useQueryClient();
  const toast = useToasts();
  const { data, isLoading, isSuccess: isTierLoaded } = useQuery('tiers', fetchTiers);
  const selectedTier = useRef(null);
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
  const { mutate: deleteTierMutation } = useMutation(deleteTier, {
    onSuccess:() => client.invalidateQueries('tiers'),
    onError: () => {
      toast.addToast('Could not delete the tier, please try again!', {
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

  return (
    <TierContainer>
      <TierList>
        <TitleContainer>
          <Title>Tier Details</Title>
          <PrimaryButton size="lg" onClick={() => {
            setIsTierModalOpen(true);
            selectedTier.current = null;
          }}>Add Tier</PrimaryButton>
        </TitleContainer>
        {isLoading && <div>Loading...</div>}
        {
          isTierLoaded && (
            data.tiers.map(tier => (
              <TierItem key={tier.id}>
                <TierRow>
                  <TierTitle>{tier.minAmount}$ a month</TierTitle>
                  <TierLabel>{tier.title}</TierLabel>
                  <div>
                    <PrimaryButton size="lg" onClick={() => {
                      selectedTier.current = tier;
                      setIsTierModalOpen(true);
                    }}>
                      <FaPencilAlt />
                    </PrimaryButton>
                    <DangerButton size="lg" onClick={() => {
                        selectedTier.current = tier;
                        setIsDeleteConfirnModalOpen(true);
                      }}>
                      <FaTrash />
                    </DangerButton>
                  </div>
                </TierRow>
                <TierDesc>
                  {tier.description}
                </TierDesc>
                {tier.repositories && tier.repositories.length > 0 && <TierRepoTitle>List of Repos and details:</TierRepoTitle>}
                {
                  tier.repositories.map(repo => (
                    <CollapsibleList key={repo.id} title={`${repo.ownerOrOrg}/${repo.name}`} content={repo.description}/>
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
      <ConfirmModal
        heading="Are you sure to delete the tier?"
        isOpen={isDeleteConfirmModalOpen}
        close={() => setIsDeleteConfirnModalOpen(false)}
        onYes={() => deleteTierMutation(selectedTier.current.id)}
      />
    </TierContainer>
  );
};

export default TierDetails;
