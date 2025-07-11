import { BackButton } from '@src/presentation/components/TelegramBackBtn/TelegramBackBtn';
import styles from './Day5.module.css';
import { Pm } from '../../components/Pm';
import { useEffect } from 'react';
import { miniApp } from '@telegram-apps/sdk-react';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { Paragraphs } from '../../components/Paragraphs';
import { Separator } from '../../components/Separator';
import { Button } from '../../components/Button';
import userStore from '@src/application/store/userStore';

export const Day5 = () => {

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
        header='День 5'
        subHeader='Финал'
      />

      <Pm />

      <Paragraphs>
        <p>Поздравляю!<br/>Ты дошла до финала марафона!</p>
      </Paragraphs>

      <Card
        header={'Мы разобрались:'}
      >
        <div className={styles.block}>
          <ul>
            <li>Почему сложно отказывать и выбирать себя.</li>
            <li>Как старый сценарий управляет тобой.</li>
            <li>Как создать новый сценарий жизни.</li>
            <li>Как справляться с чувством вины.</li>
          </ul>
        </div>
      </Card>

      <Paragraphs>
        <p>Но теория — это только первый шаг.</p>
        <p>Настоящие изменения происходят, когда ты начинаешь действовать.</p>
      </Paragraphs>

      <Card
        header={'Семья'}
      >
        <p>Выбери одну ситуацию на ближайшую неделю, где ты попробуешь применить новый сценарий.</p>
        <p>Это может быть отказ, просьба о помощи, отказ от самокритики, защита своих границ — любое действие, которое показывает, что ты выбираешь себя.</p>
      </Card>

      <Paragraphs>
        <p>Ты сделала огромный шаг!</p>
      </Paragraphs>

      <Separator>
        <p>Ты больше не<br/>«хорошая девочка».</p>
        <p>Ты девушка, которая выбирает себя.</p>
      </Separator>

      <Paragraphs>
        <p>Как тебе марафон?<br/>Что было самым полезным?</p>
        <p>Поделись своими впечатлениями в личные сообщения</p>
      </Paragraphs>

      {userStore.data?.badGirl.day5 === 'open' && <Button finishDayKey='day5'currentDayKey='day5'>Завершить марафон</Button> }
    </div>
  );
};