import { BackButton } from '@src/presentation/components/TelegramBackBtn/TelegramBackBtn';
import { observer } from 'mobx-react-lite';
import styles from './Payment.module.css';
import { Icon } from '@src/presentation/components/Icon';
import paymentStore from '@src/application/store/paymentStore';
import userStore from '@src/application/store/userStore';
import { useEffect } from 'react';

export const Payment = observer(() => {

  const handleSubmitPhone = async () => {
    await paymentStore.createPayment(
      '999.00',
      'Марафон Плохая девочка',
      userStore.data?.telegramId,
    );
  };

  useEffect(() => {
    if (paymentStore.confirmationUrl) {
      window.location.href = paymentStore.confirmationUrl;
    }
  }, [paymentStore.confirmationUrl]);

  return (
    <div className={styles.wrapper}>
      <BackButton />
      <Icon name={'linePaymentUp'} className={styles.up}/>
      <Icon name={'linePaymentDown'} className={styles.down}/>
      <div className={styles.header}>Марафон</div>
      <div className={styles.subHeader}>Плохая девочка</div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <Icon name={'heart'}/>
          <div className={styles.cardTitle}>Бережность</div>
          <div className={styles.cardDesc}>Мы будем постепенно шаг за шагом двигаться к изменениям</div>
        </div>
        <div className={styles.card}>
          <Icon name={'star'}/>
          <div className={styles.cardTitle}>Удобство</div>
          <div className={styles.cardDesc}>Короткие и ёмкие уроки, аудио практики</div>
        </div>
        <div className={styles.card}>
          <Icon name={'lamp-on'}/>
          <div className={styles.cardTitle}>Лайфхаки</div>
          <div className={styles.cardDesc}>Дополнительные материалы для повседневных ситуаций</div>
        </div>
        <div className={styles.card}>
          <Icon name={'message'} className={styles.color}/>
          <div className={styles.cardTitle}>Поддержка</div>
          <div className={styles.cardDesc}>Вы всегда можете написать мне лично и я помогу с заданиями</div>
        </div>
      </div>
      <div className={styles.callToAction}>Сделай шаг к изменениям за</div>
      <div className={styles.price}>999 ₽</div>
      <button className={styles.button} onClick={handleSubmitPhone}>Открыть доступ {'>'}</button>
    </div>
  );
});
