
import { Icon } from '@src/presentation/components/Icon';
import styles from './Pm.module.css';

export const Pm = () => {

  return (
    <div className={styles.pm}>
      <Icon name={'message'}/>
      <div className={styles.text}>Напишите мне, если остались вопросы по заданию</div>
      <Icon name={'arrowRight'}/>
    </div>
  );
};