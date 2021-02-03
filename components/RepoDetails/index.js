import styled from 'styled-components';
import { useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown'
import { FaPlus, FaMinus, FaPencilAlt, FaTrash } from 'react-icons/fa';
import { DangerButton, PrimaryButton } from '../Button';
import { useRouter } from 'next/router';
import { useAuth } from '../../hooks/auth';

const ListSection = styled.div`
  .flex;
  .flex-col;
`;

const ListBox = styled.div`
  .bg-gray-300;
  .flex;
  .items-center;
  border: none;
  outline: none;
  width:100%;
  .mt-2;
  .px-5;
  &:hover {
    background-color: #cbd5e0;
    cursor:pointer;
  }
`;

const ButtonTitle = styled.p`
  .text-gray-700;
  .text-lg;
  @media(max-width:500px){
    font-size:14px;
  }
`;

const ListContent = styled.div`
  .overflow-auto;
  .bg-white;
  transition: max-height 0.3s ease;
`;

const ListText = styled.div`
  .px-5
`;

const ActionsContainer = styled.div`
  margin-left: auto;
`;

const IconConteiner = styled.div`
  margin-left: 20px;
`;

const RepositoryDetails = ({ repo, onRepoDelete, onRepoEdit }) => {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);
  const router = useRouter();
  const { username } = router.query;
  const title = `${username}/${repo.name}`;
  const { isLoggedIn } = useAuth();

  return (
    <ListSection>
      <ListBox onClick={() => setActive(active => !active)}>
        <ButtonTitle>
          {title}
        </ButtonTitle>
        <ActionsContainer suppressHydrationWarning={true}>
          {
            isLoggedIn && (
              <>
                <PrimaryButton size="lg" onClick={(evt) => {
                  evt.stopPropagation();
                  onRepoEdit(repo);
                }}>
                  <FaPencilAlt />
                </PrimaryButton>
                <DangerButton size="lg" onClick={(evt) => {
                  evt.stopPropagation();
                  onRepoDelete(repo);
                }}>
                  <FaTrash />
                </DangerButton>
              </>
            )
          }
        </ActionsContainer>
        <IconConteiner>
          {!active && <FaPlus />}
          {active && <FaMinus />}
        </IconConteiner>
      </ListBox>
      <ListContent ref={contentRef} style={{ maxHeight: active? contentRef.current.scrollHeight: '0px' }}>
        <ListText>
          <ReactMarkdown>
            {repo.description}
          </ReactMarkdown>
        </ListText>
      </ListContent>
    </ListSection>
  );
};

export default RepositoryDetails;
