import { Header } from '@src/presentation/components/Header';
import { BackButton } from '@src/presentation/components/TelegramBackBtn/TelegramBackBtn';
import styles from './Reviews.module.css';

export const Reviews = () => {
 
  return (
    <div className={styles.wrapper}>
      <BackButton />
      <Header 
        title={'Отзывы'}
        desc={'Плохих девочек'}
        background={'reviews'}
      />
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.name}>
            Елизавета Васильева
          </div>
          <div className={styles.text}>
            Потрясно не вероятный марафон, стала другим человеком, 
            слетала на луну, посмотрела космос, нашла мужа, родила 
            детей, а теперь я руководитель компании орифлейм. 
            Спасибо Ира, ванлав.
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.name}>
            Елизавета Васильева
          </div>
          <div className={styles.text}>
            Потрясно не вероятный марафон, стала другим человеком, 
            слетала на луну, посмотрела космос, нашла мужа, родила 
            детей, а теперь я руководитель компании орифлейм. 
            Спасибо Ира, ванлав.
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.name}>
            Елизавета Васильева
          </div>
          <div className={styles.text}>
            Потрясно не вероятный марафон, стала другим человеком, 
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.name}>
            Елизавета Васильева
          </div>
          <div className={styles.text}>
            Потрясно не вероятный марафон, стала другим человеком, 
            слетала на луну, посмотрела космос, нашла мужа, родила 
            детей, а теперь я руководитель компании орифлейм. 
            Спасибо Ира, ванлав.
          </div>
        </div>
      </div>
    </div>
  );
}
