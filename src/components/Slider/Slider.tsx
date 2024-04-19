import React, { useCallback } from 'react';
import { SSlider } from './Slider.styled';

export const Slider = (timeState: { time: number; setTime: Function }) => {
  const { time, setTime } = timeState;
  const marks = [
    {
      value: 0,
      label: '0 мин',
    },
    {
      value: 900_000,
      label: '15 мин',
    },
    {
      value: 1_800_000,
      label: '30 мин',
    },
    {
      value: 2_700_000,
      label: '45 мин',
    },
    {
      value: 3_600_000,
      label: '60 мин',
    },
  ];

  const sliderValueChange = useCallback(
    (_: Event, newValue: number | number[]) => {
      if (typeof newValue === 'number') {
        setTime(newValue);
      }
    },
    [setTime]
  );

  return (
    <SSlider
      max={3_600_000}
      value={time}
      step={15_000}
      marks={marks}
      onChange={sliderValueChange}
    />
  );
};
