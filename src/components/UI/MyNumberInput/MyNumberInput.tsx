import * as React from 'react';
import {
  NumberInputProps,
  Unstable_NumberInput as BaseNumberInput,
} from '@mui/base/Unstable_NumberInput';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';

const StyledInput = styled(BaseNumberInput)`
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
  color: #007fff;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  input {
    font-size: 0.875rem;
    font-family: inherit;
    font-weight: 400;
    line-height: 1.375;
    color: #dae2ed;
    background: #1c2025;
    border: 1px solid #434d5b;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    margin: 0 8px;
    padding: 10px 12px;
    outline: 0;
    min-width: 0;
    width: 4rem;
    text-align: center;

    &:hover {
      border-color: #b0b8c4;
    }

    &:focus {
      border-color: 1px solid #434d5b;
    }

    &:focus-visible {
      outline: 0;
    }
  }
  button {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    line-height: 1.5;
    border: 1px solid;
    border-radius: 999px;
    border-color: #303740;
    background: #1c2025;
    color: #dae2ed;
    width: 32px;
    height: 32px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;

    &:hover {
      cursor: pointer;
      background: #434d5b;
      border-color: #9da8b7;
      color: #f3f6f9;
    }

    &:focus-visible {
      outline: 0;
    }

    &.increment {
      order: 1;
    }
  }
`;

export const NumberInput = React.forwardRef(function CustomNumberInput(
  props: NumberInputProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <StyledInput
      slots={{
        root: 'div',
        input: 'input',
        incrementButton: 'button',
        decrementButton: 'button',
      }}
      slotProps={{
        incrementButton: {
          children: <AddIcon fontSize="small" />,
          className: 'increment',
        },
        decrementButton: {
          children: <RemoveIcon fontSize="small" />,
        },
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      ref={ref}
    />
  );
});
