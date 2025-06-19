import { Header } from '@src/presentation/components/Header';
import styles from './Badgirl.module.css';
import { BackButton } from '@src/presentation/components/TelegramBackBtn/TelegramBackBtn';

export const Badgirl = () => {

  return (
    <div className={styles.wrapper}>
      <BackButton />
      <Header 
        title={'Плохая девочка'}
        desc={'Марафон'}
        background={'marathon'}
      />
    </div>
  );
}
