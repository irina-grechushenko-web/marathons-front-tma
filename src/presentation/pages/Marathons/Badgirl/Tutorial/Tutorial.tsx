import { BackButton } from '@src/presentation/components/TelegramBackBtn/TelegramBackBtn';
import styles from './Tutorial.module.css';
import { Pm } from '../../components/Pm';
import { useEffect } from 'react';
import { miniApp } from '@telegram-apps/sdk-react';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { Icon } from '@src/presentation/components/Icon';

export const Tutorial = () => {

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
        header={'Примеры отказов'}
        small
      />

      <Pm />
      
      <Card
        header={'Работа'}
      >
        <div className={styles.block}>
          <div className={styles.blockHeader}>«Можешь остаться после работы?»</div>
          <ul>
            <li>«Сегодня не могу, у меня уже есть планы.»</li>
            <li>«Нет, у меня личные дела.»</li>
            <li>«Сейчас для меня важно соблюдать баланс, поэтому я ухожу вовремя.»</li>
          </ul>
        </div>
        <div className={styles.block}>
          <div className={styles.blockHeader}>«Возьми этот проект, ты ведь справишься!»</div>
          <ul>
            <li>«Спасибо за доверие, но у меня уже максимальная загрузка.»</li>
            <li>«Нет, не могу взять это на себя. Возможно, кто-то ещё готов?»</li>
            <li>«Сейчас не готова брать новые задачи.»</li>
          </ul>
        </div>
      </Card>

      <Card
        header={'Семья'}
      >
        <div className={styles.block}>
          <div className={styles.blockHeader}>«Ты могла бы приехать к нам на выходных?»</div>
          <ul>
            <li>«Нет, у меня другие планы.»</li>
            <li>«Сегодня не получится, давайте договоримся на другой раз.»</li>
            <li>«Мне нужно отдохнуть, поэтому я останусь дома.»</li>
          </ul>
        </div>
        <div className={styles.block}>
          <div className={styles.blockHeader}>«Почему ты не хочешь помогать?»</div>
          <ul>
            <li>«Я понимаю, что вам нужна помощь, но я не могу сейчас это сделать.»</li>
            <li>«Мне важно беречь свои ресурсы, поэтому не смогу.»</li>
            <li>«Сейчас для меня важно восстанавливать силы, поэтому я отказываюсь.»</li>
          </ul>
        </div>
      </Card>

      <Card
        header={'Друзья и знакомые'}
      >
        <div className={styles.block}>
          <div className={styles.blockHeader}>«Пойдём с нами в бар/кафе/кино?»</div>
          <ul>
            <li>«Сегодня не хочу, но спасибо за приглашение!»</li>
            <li>«Я не в настроении для тусовок, но давайте как-нибудь в другой раз.»</li>
            <li>«Сегодня нет, я выбираю отдохнуть.»</li>
          </ul>
        </div>
        <div className={styles.block}>
          <div className={styles.blockHeader}>«Дай списать/одолжи денег/подвези меня»</div>
          <ul>
            <li>«Нет, не могу.»</li>
            <li>«Я не одалживаю деньги/не делаю таких вещей.»</li>
            <li>«Нет, я не могу этим помочь.»</li>
          </ul>
        </div>
      </Card>

      <Card
        header={'Личный границы'}
      >
        <div className={styles.block}>
          <div className={styles.blockHeader}> «Ты слишком серьёзно это воспринимаешь!»</div>
          <ul>
            <li>«Для меня это важно, и я прошу уважать мои чувства.»</li>
            <li>«Я имею право воспринимать это так, как чувствую.»</li>
          </ul>
        </div>
        <div className={styles.block}>
          <div className={styles.blockHeader}>«Ты должна помочь, ведь ты хороший человек!»</div>
          <ul>
            <li>«Быть хорошим человеком не значит жертвовать сосбой.»</li>
            <li>«Я могу быть хорошим и при этом отказывать.»</li>
            <li>«Нет, я не могу этим помочь.»</li>
          </ul>
        </div>
      </Card>

      <div className={styles.textWrapper}>
        <Icon name={'lamp-on'}/>
        <p>
          Можно подобрать для себя 2-3 <br/>комфортные фразы и начать их<br/> практиковать.
        </p>
      </div>

    </div>
  );
};