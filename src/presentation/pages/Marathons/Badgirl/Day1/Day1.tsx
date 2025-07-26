import { BackButton } from '@src/presentation/components/TelegramBackBtn/TelegramBackBtn';
import styles from './Day1.module.css';
import { Icon } from '@src/presentation/components/Icon';
import { Card } from '../../components/Card';
import { Pm } from '../../components/Pm';
import { useEffect } from 'react';
import { miniApp } from '@telegram-apps/sdk-react';
import { Header } from '../../components/Header';
import userStore from '@src/application/store/userStore';
import { Button } from '../../components/Button';

export const Day1 = () => {

  useEffect(()=>{
    miniApp.setHeaderColor('#FDAE37')
  },[])

  return (
    <div className={styles.wrapper}>
      <svg className={styles.svg} width="100%" height="259" viewBox="0 0 375 259" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M75.7502 312C128.945 232.888 72.0043 216.309 -1.58585 223.322C-45.83 227.54 -50.0866 173.696 -12.5435 154.188C33.1721 126.404 83.3633 156.413 129.76 164.544C162.195 165.407 176.886 132.432 152.843 110.348C133.506 93.672 115.653 68.865 128.994 42.952C147.382 5.03054 197.804 14.2678 220.012 44.3984C240.978 64.0154 253.335 125.431 284.748 117.616C300.011 113.812 298.503 97.9746 303.246 86.1728C314.143 56.8079 356.928 51.2291 375 76.8261" stroke="#F9EEE0" strokeWidth="36" strokeMiterlimit="10" strokeLinecap="round"/>
      </svg>

      <BackButton />
      <Header
        header={'День 1'}
        subHeader={'Мои автоматические «да»'}
      />
      <Pm />

      <Card 
        header='Шаг 1'
        subHeader='Вспомните ситуации, когда вы автоматически соглашались:'
      >
        <div className={styles.cardWrapper}>
          <Icon name={'message-question'}/>
          <p>
            За последние 3 дня было ли что-то, на что вы согласились,
            но не хотели? (вспомните минимум 4 ситуации)
          </p>
        </div>
        <div className={styles.cardWrapper}>
          <Icon name={'message-question'}/>
          <p>
            Подумайте:<br/>
            - кто вас просил?<br/>
            - как вы ответили?<br/>
            - что чувствовали потом?
          </p>
        </div>
      </Card>

      <div className={styles.textWrapper}>
        <Icon name={'lamp-on'}/>
        <p>
          Лучше всего записывать свои ответы на бумаге, так наш мозг лучше обрабатывает информацию
        </p>
      </div>

      <Card 
        header='Шаг 2'
        subHeader={`Выберите минимум одно «автоматическое да»\n и разберите его:`}
      >
        <div className={styles.cardWrapper}>
          <Icon name={'message-question'}/>
          <p>
            Почему вы согласились?<br/>
            (Страх отказа, желание быть хорошей, неудобно отказать?)
          </p>
        </div>
        <div className={styles.cardWrapper}>
          <Icon name={'message-question'}/>
          <p>
            Что можно было сказать вместо этого?
          </p>
        </div>
        <div className={styles.cardWrapper}>
          <Icon name={'message-question'}/>
          <p>
            Выпишите:<br/>
            - Пример ситуации.<br/>
            - Почему сказали «да»?<br/>
            - Что можно было сказать вместо этого? 
          </p>
        </div>
      </Card>

      <div className={styles.textWrapper} style={{'fontWeight': '700'}}>
        <Icon name={'heart'}/>
        <p>
          Вот тут теперь предлагаю, не соскакивать, найдите в себе
          силы и подумайте, как же можно было отказать. Пишите, и я помогу
          вам сформулировать.
          <br/>
          <br/>
          Эти мысли только сначала кажутся сложными и что их нет, но когда 
          вы начинаете думать накидывать варианты - ваш мозг генерирует их,
          и с большей вероятностью выдаст их вам при следующем «автоматическом да».
        </p>
      </div>
      {userStore.data?.badGirl.day1 === 'open' && <Button currentDayKey='day1' updateDayKey='day2'>Завершить первый день {'>'}</Button> }
    </div>
  );
};