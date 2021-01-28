import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import styled from "styled-components";
import { addTier, fetchTiers } from '../../api';
import AddTierModal from '../AddTierModal/index';
import CollapsibleList from '../CollapsibleList';
import { PrimaryButton } from '../Button'
import { useToasts } from 'react-toast-notifications';
import { FaPencilAlt } from 'react-icons/fa';

const TierContainer = styled.div`
  .px-4;
  .lg: px-32;
  .pt-4;
  .pb-8;
  .mt-4;
  background: #fafafa;
`;

const TierList = styled.div`
  .w-full;
  .p-4;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 30px 60px 0px;
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

const AddButton = styled(PrimaryButton)`
  .h-10;
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
  const client = useQueryClient();
  const toast = useToasts();
  const { data, isLoading, error } = useQuery('tiers', fetchTiers);
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

  return (
    <TierContainer>
      <TierList>
        <TitleContainer>
          <Title>Tier Details</Title>
          <AddButton onClick={() => setIsTierModalOpen(true)}>Add Tier</AddButton>
        </TitleContainer>
        {isLoading && <div>Loading...</div>}
        {
          !isLoading && !error && (
            data.tiers.map(tier => (
              <TierItem key={tier.id}>
                <TierRow>
                  <TierTitle>{tier.minAmount}$ a month</TierTitle>
                  <TierLabel>{tier.title}</TierLabel>
                  <AddButton>
                    <FaPencilAlt />
                  </AddButton>
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
      <AddTierModal 
        isSubmitting={isAddingTier}
        onSubmit={(data) => addTierMutation(data)}
        close={() => setIsTierModalOpen(false)}
        isOpen={isTierModalOpen}
      />
    </TierContainer>
  );
};

export default TierDetails;
