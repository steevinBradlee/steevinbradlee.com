import styled from 'styled-components';

const LeftRightDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MobileHide = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export { LeftRightDiv, MobileHide };