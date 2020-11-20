import styled from 'styled-components';
import { useState, useRef } from 'react';
import './icon';
import Arrow from './icon';
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
.p-5
`;

const CollapsibleList = (props) => {
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');
  const [setRotate, setRotateState] = useState('arrow_icon');
  const content = useRef(null);
  const toggleList = () => {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === 'active' ? 'arrow_icon' : 'arrow_icon_rotate'
    );
  };
  return (
    <ListSection>
      <ListButton onClick={toggleList}>
        <ButtonTitle>{props.title}</ButtonTitle>
        <Arrow rotateIcon={`${setRotate}`} width={10} fill={'#777'} />
      </ListButton>
      <ListContent ref={content} style={{ maxHeight: `${setHeight}` }}>
        <ListText>{props.content}</ListText>
      </ListContent>
    </ListSection>
  );
};

export default CollapsibleList;
