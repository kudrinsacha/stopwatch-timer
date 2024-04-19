import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SLayout = styled.div`
  text-transform: uppercase;
  color: white;
`;

export const SHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background: #232323;
  min-height: 100px;
`;

export const SLink = styled(Link)`
  text-decoration: none;
  color: white;
  transition: all ease-in 0.2s;
  &:hover {
    color: grey;
  }
`;

export const SMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
`;
