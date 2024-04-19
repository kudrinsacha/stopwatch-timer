import React, { useCallback } from 'react';
import { SAdornment, SChangeInputs, SInput } from './ChangeInputs.styled';

const MS_IN_SECONDS = 1000;
const MS_IN_MINUTE = 60_000;

export const ChangeInputs = (timeState: {
  time: number;
  setTime: Function;
}) => {
  const { time, setTime } = timeState;
  const minutes = Math.floor(time / MS_IN_MINUTE);
  const seconds = Math.floor((time - minutes * MS_IN_MINUTE) / MS_IN_SECONDS);

  const minutesValueChange = useCallback(
    (
      e:
        | React.FocusEvent<HTMLInputElement>
        | React.PointerEvent
        | React.KeyboardEvent,
      newValue: number | null
    ) => {
      if (typeof newValue === 'number') {
        setTime(seconds * MS_IN_SECONDS + newValue * MS_IN_MINUTE);
      }
    },
    [seconds, setTime]
  );

  const secondsValueChange = useCallback(
    (
      e:
        | React.FocusEvent<HTMLInputElement>
        | React.PointerEvent
        | React.KeyboardEvent,
      newValue: number | null
    ) => {
      if (typeof newValue === 'number') {
        setTime(minutes * MS_IN_MINUTE + newValue * MS_IN_SECONDS);
      }
    },
    [minutes, setTime]
  );

  return (
    <SChangeInputs>
      <SInput
        placeholder="Минуты"
        min={0}
        max={719}
        value={minutes}
        onChange={minutesValueChange}
        startAdornment={<SAdornment>м</SAdornment>}
      />
      <SInput
        placeholder="Секунды"
        min={0}
        max={59}
        value={seconds}
        onChange={secondsValueChange}
        startAdornment={<SAdornment>с</SAdornment>}
      />
    </SChangeInputs>
  );
};
