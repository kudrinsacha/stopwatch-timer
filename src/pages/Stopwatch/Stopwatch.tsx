import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  memo,
} from 'react';
import { INITIAL_IS_PLAY, INITIAL_VALUE_TIME } from '../../constans/constans';
import { SButtons, SButton, SStopwatch, STime } from './Stopwatch.styled';

export const Stopwatch = memo(() => {
  const [time, setTime] = useState(INITIAL_VALUE_TIME);
  const [isPlay, setIsPlay] = useState(INITIAL_IS_PLAY);
  const stopwatchRef = useRef<number | null>(null);

  const formattedTime = useMemo(() => {
    const hours = Math.floor(time / 3_600_000);
    const minutes = Math.floor((time - hours * 3_600_000) / 60_000);
    const seconds = (time - hours * 3_600_000 - minutes * 60_000) / 1000;

    return `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
  }, [time]);

  const play = useCallback(() => {
    setIsPlay((prevState) => !prevState);
  }, []);

  const reset = useCallback(() => {
    setIsPlay(false);
    setTime(0);
  }, []);

  useEffect(() => {
    if (isPlay) {
      stopwatchRef.current = setInterval(() => {
        setTime((prevState) => prevState + 1000);
      }, 1000);
    }

    return () => {
      if (stopwatchRef.current) clearInterval(stopwatchRef.current);
    };
  }, [isPlay]);

  return (
    <SStopwatch>
      <STime>{formattedTime}</STime>
      <SButtons>
        {(isPlay || time !== 0) && (
          <SButton onClick={reset} variant="outlined" color="error">
            Сбросить
          </SButton>
        )}
        <SButton onClick={play} variant="outlined">
          {!isPlay ? 'Запустить' : 'Пауза'}
        </SButton>
      </SButtons>
    </SStopwatch>
  );
});
