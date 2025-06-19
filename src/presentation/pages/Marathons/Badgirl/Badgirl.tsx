import { Header } from '@src/presentation/components/Header';
import { BackButton } from '@src/presentation/components/TelegramBackBtn/TelegramBackBtn';
import { Link } from 'react-router-dom';
import { Routes } from '@src/routes';
import styles from './Badgirl.module.css';

export const Badgirl = () => {

  return (
    <div className={styles.wrapper}>
      <BackButton />
      <Header 
        title={'Плохая девочка'}
        desc={'Марафон'}
        background={'marathon'}
      />
      <div className={styles.cards}>
        <div className={styles.card}>
          <Link to={Routes.Reviews}>
            <div className={styles.title}>
              Отзывы
            </div>
            <div className={styles.desc}>
              Почитай истории тех, кто<br/>уже прошел этот путь
            </div>
          </Link>
        </div>
      </div>
      <Link to={''} className={styles.payment}>Открыть доступ {'>'}</Link>
    </div>
  );
}
