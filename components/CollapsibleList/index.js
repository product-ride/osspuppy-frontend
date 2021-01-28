import styled from 'styled-components';
import { useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown'
import { FaPlus, FaMinus } from 'react-icons/fa';

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

const IconConteiner = styled.div`
  margin-left: auto;
`;

const CollapsibleList = ({ title, content }) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');
  const contentRef = useRef(null);
  const toggleList = () => {
    setActive(active => !active);
    setHeight(
      active? '0px' : `${contentRef.current.scrollHeight}px`
    );
  };
  return (
    <ListSection>
      <ListButton onClick={toggleList}>
        <ButtonTitle>
          {title}
        </ButtonTitle>
        <IconConteiner>
          {!active && <FaPlus />}
          {active && <FaMinus />}
        </IconConteiner>
      </ListButton>
      <ListContent ref={contentRef} style={{ maxHeight: `${height}` }}>
        <ListText>
          <ReactMarkdown>
            {content || 'No description available'}
          </ReactMarkdown>
        </ListText>
      </ListContent>
    </ListSection>
  );
};

export default CollapsibleList;
