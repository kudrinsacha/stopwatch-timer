import React, { useEffect, useState } from 'react';
import { SProgressBar, SProgress, SProgressValue } from './ProgressBar.styled';

export const ProgressBar = (props: {
  time: number;
  totalTime: number;
  isPlay: boolean;
  children: React.ReactElement;
}) => {
  const { time, totalTime, isPlay, children } = props;
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (isPlay && totalTime !== 0) {
      const progressPercent = Math.floor((time / totalTime) * 100);
      setProgress(progressPercent);
    }
    if (time === 0) {
      setProgress(100);
    }
  }, [isPlay, time, totalTime]);

  return (
    <SProgressBar>
      <SProgress variant="determinate" value={progress} size={220} />
      <SProgressValue>{children}</SProgressValue>
    </SProgressBar>
  );
};
