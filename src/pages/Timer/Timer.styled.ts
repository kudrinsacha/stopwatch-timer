import styled from 'styled-components';
import { Button } from '@mui/material';

export const STimer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const STime = styled.div`
  font-size: 30px;
  text-align: center;
`;

export const SButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const SButton = styled(Button)`
  min-width: 120px;
`;
