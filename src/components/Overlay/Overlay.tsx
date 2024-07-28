import styled from '@emotion/styled';
import React from 'react';

// import OverlayMenu from '~/components/Overlay/OverlayMenu';
import OverlayNavbar from '~/components/Overlay/OverlayNavbar';
import OverlaySidebar from '~/components/Overlay/OverlaySidebar';
import theme from '~/theme';

const FixedDiv = styled('div')`
  background: #111111;
  border-top: 3px solid #000;
  pointer-events: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50%;
  z-index: ${theme.layers.overlay};
  user-select: none;
`;

const TopDiv = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${theme.variables.overlayGutter};
`;

const BottomDiv = styled('div')`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 85px;
  width: 100%;
  border-top: 1px solid #4b4b4b;
`;

const BottomCenterDiv = styled('div')`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const GuideText = styled('div')`
  color: white;
  text-align: center;
  font-weight: 400;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
const Button = styled('div')`
  background-color: #92a0ff;
  width: 500px;
  text-align: center;
  color: #000;
  font-weight: 700;
  padding: 7px;
  border-radius: 10px;
  @media (max-width: 1000px) {
    width: 100%;
    justify-content: space-between;
  }
`;
interface Props {
   handleSave?: () => void,
}
export default  function Overlay(props:Props) {
  return (
    <FixedDiv>
      <TopDiv>
        <OverlayNavbar />
        {/* <OverlayMenu /> */}
      </TopDiv>
      <BottomDiv>
        <OverlaySidebar />
        <GuideText>
          <bdi>با ابزار های بالا یه چیزی بکش!</bdi>
        </GuideText>
      </BottomDiv>
      <BottomCenterDiv>
        <Button
        onClick={props.handleSave}
        >
          <bdi>ذخیره</bdi>
        </Button>
      </BottomCenterDiv>
    </FixedDiv>
  );
}
