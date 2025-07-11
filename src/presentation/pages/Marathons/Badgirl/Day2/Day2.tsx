import { BackButton } from '@src/presentation/components/TelegramBackBtn/TelegramBackBtn';
import styles from './Day2.module.css';
import { Icon } from '@src/presentation/components/Icon';
import { Card } from '../../components/Card';
import { Pm } from '../../components/Pm';
import { Quote } from '../../components/Quote';
import { Separator } from '../../components/Separator';
import { useEffect } from 'react';
import { miniApp } from '@telegram-apps/sdk-react';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import userStore from '@src/application/store/userStore';

export const Day2 = () => {

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
        header={'День 2'}
        subHeader={'Почему я все еще так делаю?'}
      />
      <Pm />

      <Card 
        header='Сегодня мы узнаем:'
      >
        <div className={styles.cardWrapper}>
          <Icon name={'message-question'}/>
          <p>
            Почему привычка уступать кажется такой важной?
          </p>
        </div>
        <div className={styles.cardWrapper}>
          <Icon name={'message-question'}/>
          <p>
            Как сопротивление мешает менять сценарии?
          </p>
        </div>
        <div className={styles.cardWrapper}>
          <Icon name={'message-question'}/>
          <p>
            Что поможет говорить «нет» без чувства вины?
          </p>
        </div>
      </Card>
      
      <Quote>
        <p>«Помню, как мне в 20 лет предложили за очень маленькие деньги, поработать  в магазине электротоваров, для опыта.</p>
        <p>Там было сложно сразу в первый день, я не справлялась, и я хотела отказаться, но не смогла.</p>
        <p>Стоит ли говорить, что этот опыт мне так и не пригодился?! А по учебе - меня чуть не отчислили за прогулы из-за работы… »</p>
      </Quote>

      <div className={styles.textWrapper} style={{'fontWeight': '700'}}>
        <p>
          Внутри всё протестовало, но я согласилась. Мне казалось, что 
          отказаться — значит потерять какую-то возможность, разочаровать людей и 
          показаться грубой.
        </p>
      </div>

      <Separator>
        Выявление вторичных выгод
      </Separator>

      <div className={styles.textWrapper} style={{'fontWeight': '700'}}>
        <p>Давайте разберёмся, зачем мы продолжаем играть роль «хорошей девочки».</p>
          <br />
          Наше поведение — это не просто привычка. Оно даёт нам что-то важное:
          <ul>
            <li>безопасность</li>
            <li>принятие</li>
            <li>одобрение</li>
          </ul>
          <p>
            Возможно, в детстве, когда вы уступали, вас хвалили. 
            Или если соглашались на просьбу, вас больше любили.
          </p>
          <br />
          <p> 
            Мы бессознательно стараемся сохранить эти «бонусы».
            Но так ли они полезны?
          </p>
      </div>

      <Card 
        header='Задание'
        subHeader='Найдите 3-5 скрытых выгод, которые даёт вам этот сценарий.'
      >
        Примеры:
        <ul className={styles.ul}>
          <li>«Когда я всем угождаю, меня любят»</li>
          <li>«Так проще избежать конфликтов»</li>
          <li>«Я чувствую себя хорошей»</li>
        </ul>
      </Card>

      {userStore.data?.badGirl.day2 === 'open' && <Button currentDayKey='day2' updateDayKey='day3'>Завершить второй день {'>'}</Button> }
    </div>
  );
};