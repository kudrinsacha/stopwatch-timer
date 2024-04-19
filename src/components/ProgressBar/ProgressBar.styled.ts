import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

export const SProgressBar = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SProgress = styled(CircularProgress)``;

export const SProgressValue = styled.div`
  position: absolute;
  left: 40px;
`;
