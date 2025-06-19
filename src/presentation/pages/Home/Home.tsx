import { Header } from '@src/presentation/components/Header';
import styles from './Home.module.css';

export const Home = () => {

  return (
    <div className={styles.wrapper}>
      <Header 
        title={'Марафоны'}
        desc={'Выбери свой путь'}
        avatar
        background={'main'}
      />
    </div>
  );
}
