import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  memo,
} from 'react';
import { ChangeInputs } from '../../components/ChangeInputs/ChangeInputs';
import { Slider } from '../../components/Slider/Slider';
import { ProgressBar } from '../../components/ProgressBar/ProgressBar';
import {
  INITIAL_IS_PLAY,
  INITIAL_VALUE_TIME,
  INITIAL_TOTAL_TIME,
} from '../../constans/constans';
import bruh from '../../assets/sounds/bruh.mp3';
import { STimer, SButtons, SButton, STime } from './Timer.styled';

export const Timer = memo(() => {
  const [time, setTime] = useState(INITIAL_VALUE_TIME);
  const [totalTime, setTotalTime] = useState(INITIAL_TOTAL_TIME);
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
    setTotalTime(0);
  }, []);

  useEffect(() => {
    if (isPlay) {
      stopwatchRef.current = setInterval(() => {
        setTime((prevState) => prevState - 1000);
      }, 1000);
    }

    return () => {
      if (stopwatchRef.current) clearInterval(stopwatchRef.current);
    };
  }, [isPlay]);

  useEffect(() => {
    if (time === 0 && isPlay) {
      const audio = new Audio(bruh);
      setIsPlay(false);
      setTotalTime(0);
      audio.play();
    }

    if (isPlay) {
      if (totalTime < time) {
        setTotalTime(time);
      }
    }
  }, [isPlay, time, totalTime]);

  return (
    <STimer>
      <ProgressBar time={time} totalTime={totalTime} isPlay={isPlay}>
        <STime>{formattedTime}</STime>
      </ProgressBar>
      {!isPlay && <ChangeInputs time={time} setTime={setTime} />}
      {!isPlay && time <= 3_600_000 && <Slider time={time} setTime={setTime} />}
      <SButtons>
        <SButton
          onClick={reset}
          variant="outlined"
          color="error"
          disabled={time === 0}
        >
          Сбросить
        </SButton>
        <SButton onClick={play} variant="outlined" disabled={time === 0}>
          {!isPlay ? 'Запустить' : 'Пауза'}
        </SButton>
      </SButtons>
    </STimer>
  );
});
