import styled from 'styled-components';
import { useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown'
import { FaPlus, FaMinus, FaPencilAlt, FaTrash } from 'react-icons/fa';
import { DangerButton, PrimaryButton } from '../Button';
import { useAuth } from '../../hooks/auth';

const ListSection = styled.div`
  .flex;
  .flex-col;
`;

const ListButton = styled.button`
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

const RepositoryDetails = ({ repo, onRepoDelete }) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');
  const contentRef = useRef(null);
  const toggleList = () => {
    setActive(active => !active);
    setHeight(
      active? '0px' : `${contentRef.current.scrollHeight}px`
    );
  };
  const { user } = useAuth();
  const title = `${user.sub}/${repo.name}`;

  return (
    <ListSection>
      <ListButton onClick={toggleList}>
        <ButtonTitle>
          {title}
        </ButtonTitle>
        <ActionsContainer>
          <PrimaryButton size="lg" onClick={(evt) => {
            evt.stopPropagation();
          }}>
            <FaPencilAlt />
          </PrimaryButton>
          <DangerButton size="lg" onClick={(evt) => {
            evt.stopPropagation();
            onRepoDelete(repo);
          }}>
            <FaTrash />
          </DangerButton>
        </ActionsContainer>
        <IconConteiner>
          {!active && <FaPlus />}
          {active && <FaMinus />}
        </IconConteiner>
      </ListButton>
      <ListContent ref={contentRef} style={{ maxHeight: `${height}` }}>
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
