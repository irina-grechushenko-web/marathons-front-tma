
import { Icon } from '@src/presentation/components/Icon';
import styles from './Pm.module.css';
import { Link } from 'react-router-dom';

export const Pm = () => {
  const telegramUsername = 'Irina_Grechushenko';
  const telegramUrl = `https://t.me/${telegramUsername}`;

  return (
    <Link to={telegramUrl} target="_blank" rel="noopener noreferrer">
      <div className={styles.pm}>
        <Icon name={'message'}/>
        <div className={styles.text}>Напишите мне, если остались вопросы по заданию</div>
        <Icon name={'arrowRightNonCircle'}/>
      </div>
    </Link>
  );
};