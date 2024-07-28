import styled from '@emotion/styled';
import React, { type ReactNode } from 'react';
import { BsSquare, BsCircle, BsHandIndexThumb } from 'react-icons/bs';
import { HiPencil } from 'react-icons/hi';

import type { UserMode } from '~/config/types';
import useActiveObjectId from '~/store/useActiveObjectId';
import useUserMode from '~/store/useUserMode';

const Nav = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 5px;
  padding-bottom: 10px;
  width: 100%;
  position: relative;
  background-color: #111111;
`;

const Div = styled('div')`
  pointer-events: auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const Ul = styled('ul')`
  width: 100%;
  height: 100%;
  list-style: none;
  padding: 0;
  display: grid;
  grid-gap: 1.15rem;
  align-items: center;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  & > li {
    width: 100%;
    height: 100%;
  }
`;

const SelectButton = styled('button')`
  position: absolute;
  top: -35px;
  right: 10px;
  color: gray;
  background: transparent;
  border: none;
`;

interface UserModeButton {
  mode: UserMode;
  label: string;
  icon: ReactNode;
}

const userModeButtonsSecondary: UserModeButton[] = [
  {
    mode: 'rectangle',
    label: 'مربع',
    icon: <BsSquare />,
  },
  {
    mode: 'ellipse',
    label: 'دایره',
    icon: <BsCircle />,
  },
  {
    mode: 'free-draw',
    label: 'قلم',
    icon: <HiPencil />,
  },
];

export default function OverlayNavbar() {
  const setActiveObjectId = useActiveObjectId((state) => state.setActiveObjectId);

  const userMode = useUserMode((state) => state.userMode);
  const setUserMode = useUserMode((state) => state.setUserMode);

  const renderUserModeButtons = (buttons: UserModeButton[]) => (
    <Div>
      <Ul style={{ gridTemplateColumns: `repeat(${buttons.length}, minmax(0, 1fr))` }}>
        {buttons.map(({ mode, label, icon }) => {
          const isActive = userMode === mode;
          return (
            <li key={mode}>
              <button
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: isActive ? '#92a0ff' : '#212121',
                  color: isActive ? 'black' : 'white',
                  border: 'none',
                  padding: '10px',
                  borderRadius: '100%',
                }}
                onClick={() => {
                  setUserMode(mode);
                  setActiveObjectId(null);
                }}
              >
                {icon}
              </button>
              <p
                style={{
                  textAlign: 'center',
                  color: isActive ? '#92a0ff' : 'white',
                  marginTop: '5px',
                }}
              >
                <bdi>{label}</bdi>
              </p>
            </li>
          );
        })}
      </Ul>
    </Div>
  );

  return (
    <Nav>
      {renderUserModeButtons(userModeButtonsSecondary)}
      <SelectButton
        onClick={() => {
          setUserMode('select');
          setActiveObjectId(null);
        }}
      >
        <BsHandIndexThumb color="white" size={'20px'} />
      </SelectButton>
    </Nav>
  );
}
