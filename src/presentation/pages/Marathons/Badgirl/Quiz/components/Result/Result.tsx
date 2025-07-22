import { useEffect } from 'react';
import { miniApp } from '@telegram-apps/sdk-react';
import { BackButton } from '@src/presentation/components/TelegramBackBtn/TelegramBackBtn';
import { observer } from 'mobx-react-lite';
import styles from './Result.module.css';
import { quizStore } from '@src/application/store/quizStore';
import { Link } from 'react-router-dom';
import { Icon } from '@src/presentation/components/Icon';
import userStore from '@src/application/store/userStore';
import { Routes } from '@src/routes';

export const Result = observer(() => {
  const result = quizStore.calculateResult;

  useEffect(() => {
    miniApp.setHeaderColor('#FDAE37');
  }, []);

  return (
    <div className={styles.wrapper}>
      <BackButton />
      <div className={styles.title}>Твой результат</div>
      <div className={styles.score}>{result.score}</div>
      <div className={styles.desc}>{result.description}</div>
      {userStore.data?.badGirl.introductoryDay === 'close' && <Link to={Routes.Payment} className={styles.link}>Пройти марафон</Link>}
      {userStore.data?.badGirl.introductoryDay === 'open' && <Link to={Routes.IntroductoryDay} className={styles.link}>Пройти марафон</Link>}
      {userStore.data?.badGirl.introductoryDay === 'pending' && <Link to={Routes.Badgirl} className={styles.link}>Вернуться к марафону</Link>}
      <Icon name={'resultLine1'} className={styles.line1} />
      <Icon name={'resultLine2'} className={styles.line2} />
    </div>
  );
});