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
            Ксения Агаркова
          </div>
          <div className={styles.text}>
            Хочу выразить огромную благодарность за марафон. Всё чётко, кратко, полезно, понятно.
            Лично я считаю, что сопротивления к прохождению этапов марафона у меня было по минимуму. Был только небольшой самосаботаж.
            Для себя я получила 2 очень важных инсайта, которые мне подсветила именно ты! Я теперь чаще останавливаю себя в оправданиях своих решений перед другими. Отслеживаю требования оправданий передо мной. Не всегда я имею успех в этом деле, но теперь я отчетливо это вижу.
            Ирина, пока писала тебе отзыв появилась мысль одна, озвучу тебе её в личке!
            От всей души благодарю тебя, что пригласила в марафон. Благодарю тебя за то, что ты делаешь!
          </div>
        </div>
      </div>
    </div>
  );
}
