import { useEffect, useRef, useState } from 'react';
import { miniApp } from '@telegram-apps/sdk-react';
import { BackButton } from '@src/presentation/components/TelegramBackBtn/TelegramBackBtn';
import { observer } from 'mobx-react-lite';
import { quizStore } from '@src/application/store/quizStore';
import styles from './Quiz.module.css';
import { Result } from './components/Result';

export const Quiz = observer(() => {
  const [totalPathLength, setTotalPathLength] = useState(0);
  const [progress, setProgress] = useState(0);
  const pathRef = useRef<SVGPathElement>(null);
  const backgroundPathRef = useRef<SVGPathElement>(null);

  const handleAnswerYes = () => {
    quizStore.answerYes();
    updateProgress();
  };

  const handleAnswerNo = () => {
    quizStore.answerNo();
    updateProgress();
  };

  const updateProgress = () => {
    const newProgress = (quizStore.currentQuestionNumber / quizStore.totalQuestions) * 100;
    setProgress(newProgress);
  };

  useEffect(() => {
    miniApp.setHeaderColor('#F4E7D7');
    quizStore.reset();
    
    if (backgroundPathRef.current) {
      const length = backgroundPathRef.current.getTotalLength();
      backgroundPathRef.current.style.strokeDasharray = `${length}`;
      backgroundPathRef.current.style.strokeDashoffset = `${length}`;
    }

    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setTotalPathLength(length);
      pathRef.current.style.strokeDasharray = `${length}`;
      pathRef.current.style.strokeDashoffset = `${length}`;
    }
  }, []);

  if (quizStore.isCompleted) {
    return <Result />;
  }

  return (
    <div className={styles.wrapper}>
      <BackButton />
      <div className={styles.svgContainer}>
        <svg 
          width="100%" 
          height="275px"
          viewBox="0 0 375 275"
          preserveAspectRatio="none"
        >
          <path
            ref={backgroundPathRef}
            d="M-26.5 99.5C11.344 43.3657 85.0867 59.6207 96.7511 122.295C100.588 142.14 99.9939 162.139 95.8008 181.901C91.6435 204.243 80.2879 226.775 56.187 230.639C43.8099 233.196 29.3184 227.322 21.4194 218.594C1.74906 196.99 17.4402 160.831 41.9806 122.699C55.1654 103.151 69.4906 84.5072 85.6212 67.9796C106.23 47.9087 142.34 14.7109 172.677 17.1247C187.988 18.7655 201.161 28.4443 199.569 45.3642C198.251 70.0129 184.092 110.024 177.974 135.422C175.919 144.779 175.195 156.206 180.778 164.791C187.144 174.267 200.032 174.969 207.824 167.692C232.887 142.223 270.767 88.0267 299.204 63.9845C315.904 53.2475 340.053 59.4424 344.424 80.5239C348.7 102.141 336.881 123.638 329.244 143.364C322.129 160.344 314.883 177.264 309.205 194.719C304.917 209.023 299.738 222.554 302.149 237.346C303.884 248.071 312.685 256.965 323.685 257.892C353.451 260.199 370.414 225.003 385 203.708"
            stroke="#F9EEE0"
            strokeWidth="33"
            strokeMiterlimit="5"
            strokeLinecap="round"
            fill="none"
          >
            <animate
              attributeName="stroke-dashoffset"
              from={totalPathLength}
              to="0"
              dur="1.5s"
              fill="freeze"
              begin="0.5s"
              calcMode="spline"
              keySplines="0.25 0.1 0.25 1"
            />
          </path>
          <path
            ref={pathRef}
            d="M-26.5 99.5C11.344 43.3657 85.0867 59.6207 96.7511 122.295C100.588 142.14 99.9939 162.139 95.8008 181.901C91.6435 204.243 80.2879 226.775 56.187 230.639C43.8099 233.196 29.3184 227.322 21.4194 218.594C1.74906 196.99 17.4402 160.831 41.9806 122.699C55.1654 103.151 69.4906 84.5072 85.6212 67.9796C106.23 47.9087 142.34 14.7109 172.677 17.1247C187.988 18.7655 201.161 28.4443 199.569 45.3642C198.251 70.0129 184.092 110.024 177.974 135.422C175.919 144.779 175.195 156.206 180.778 164.791C187.144 174.267 200.032 174.969 207.824 167.692C232.887 142.223 270.767 88.0267 299.204 63.9845C315.904 53.2475 340.053 59.4424 344.424 80.5239C348.7 102.141 336.881 123.638 329.244 143.364C322.129 160.344 314.883 177.264 309.205 194.719C304.917 209.023 299.738 222.554 302.149 237.346C303.884 248.071 312.685 256.965 323.685 257.892C353.451 260.199 370.414 225.003 385 203.708"
            stroke="#FDAE37"
            strokeWidth="33"
            strokeMiterlimit="5"
            strokeLinecap="round"
            fill="none"
            style={{
              strokeDasharray: totalPathLength,
              strokeDashoffset: totalPathLength - (totalPathLength * progress / 100),
              transition: 'stroke-dashoffset 0.5s ease'
            }}
          />
        </svg>
      </div>
      
      <div className={styles.questionInfo}>
          <div className={styles.title}>{quizStore.currentQuestion.title}</div>
          <div className={styles.desc}>{quizStore.currentQuestion.desc}</div>
      </div>
      
      <div className={styles.buttons}>
        <button onClick={handleAnswerNo}>Нет</button>
        <button onClick={handleAnswerYes}>Да</button>
      </div>
    </div>
  );
});