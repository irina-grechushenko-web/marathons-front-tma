import { BackButton } from '@src/presentation/components/TelegramBackBtn/TelegramBackBtn';
import styles from './Day3.module.css';
import { Card } from '../../components/Card';
import { Pm } from '../../components/Pm';
import { Separator } from '../../components/Separator';
import { useEffect } from 'react';
import { miniApp } from '@telegram-apps/sdk-react';
import { Header } from '../../components/Header';
import { Paragraphs } from '../../components/Paragraphs';
import userStore from '@src/application/store/userStore';
import { Button } from '../../components/Button';

export const Day3 = () => {

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
        header={'День 3'}
        subHeader={'Разговор с сопротивлением'}
      />

      <Pm />

      <Paragraphs>
        <p>Почему мы снова и снова не отказываем?</p>
        <p>Вы уже видели, как тяжело бывает сказать «нет», даже если понимаете, что это нужно. Почему так?</p>
        <p>Потому что включается сценарий.</p>
        <p>Это как автоматический маршрут в навигаторе. Мы снова и снова движемся по привычной дороге, даже если она ведёт не туда — просто потому, что так привыкли.</p>
      </Paragraphs>

      <Card 
        header='Как проявляется сценарий:'
      >
        <div className={styles.cardWrapper}>
          <ul className={styles.ul}>
            <li>Ты устала, но соглашаешься помочь коллеге, хотя уже пообещала себе этого не делать.</li>
            <li>Ты хочешь сказать «нет», но в последний момент соглашаешься, даже не успев подумать.</li>
            <li>Тебя просят о чём-то, и ты чувствуешь напряжение, будто внутри идёт борьба.</li>
          </ul>
        </div>
      </Card>

      <Paragraphs>
        <p>
          Эти сценарии сложились ещё в детстве. Когда-то они помогали нам получать одобрение,
          избегать конфликтов, быть «удобными» и «хорошими».
        </p>
        <p>
          Но теперь они стали автоматическими, и мы даже не успеваем осознать,
          как снова оказываемся в привычной роли.
        </p>
      </Paragraphs>
      
      <Card 
        header='Почему сценарий так держится?'
      >
        <div className={styles.cardWrapper}>
          <ul className={styles.ul}>
            <li>
              Он срабатывает быстрее, чем ты успеваешь его осознать. Это как рефлекс — запускается сам,
              ещё до того, как ты принимаешь решение.
            </li>
            <li>
              Он подкрепляется эмоциями. Ты можешь понимать, что имеешь право сказать «нет»,
              но тело реагирует тревогой, напряжением, виной.
            </li>
            <li>
              Он кажется способом выживания. Мозг воспринимает отказ как угрозу: «если я скажу „нет“,
              меня осудят, отвергнут, на меня разозлятся».
            </li>
          </ul>
        </div>
      </Card>

      <Paragraphs>
        <p>
          Важно понимать: этот сценарий – не судьба. Это просто привычка,
          и её можно менять.
        </p>
        <p>
          Но прежде чем что-то менять,
          важно понять сопротивление. 
        </p>
      </Paragraphs>

      <Separator>
        Практика<br/>«Разговор с сопротивлением»
      </Separator>

      <Card 
        header='Перед практикой'
      >
        <ul className={styles.numberUl}>
          <li>Подготовьте ручку и листочек</li>
          <li>Найдите комфортное место</li>
          <li>Закройте глаза и прослушайте аудиозапись</li>
        </ul>
        <span>ВАЖНО:</span>
        <ul className={styles.ul}>
          <li>постарайтесь погрузиться в себя</li>
          <li>не старайтесь оценивать мысли и эмоции «хорошо» или «плохо»</li>
          <li>первое, что пришло в голову то и правильно.</li>
        </ul>
        <p>Открыв глаза, запишите первое, что пришло в голову</p>
      </Card>

      {userStore.data?.badGirl.day3 === 'open' && <Button currentDayKey='day3' openMarathonDay='instructions' updateDayKey='day4' audio2>Завершить третий день {'>'}</Button> }
    </div>
  );
};