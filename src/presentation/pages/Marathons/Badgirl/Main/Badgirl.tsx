import { Header } from '@src/presentation/components/Header';
import { BackButton } from '@src/presentation/components/TelegramBackBtn/TelegramBackBtn';
import { Link } from 'react-router-dom';
import { Routes } from '@src/routes';
import styles from './Badgirl.module.css';
import { MarathonItem } from '@src/presentation/components/MarathonItem';
import { observer } from 'mobx-react-lite';
import userStore from '@src/application/store/userStore';

export const Badgirl = observer(() => {

  if (!userStore.data) {
    return <div>Загрузка...</div>;
  }

  const {
    reviews,
    diagnostics,
    introductoryDay,
    day1,
    day2,
    day3,
    instructions,
    day4,
    tutorial,
    day5
  } = userStore.data.badGirl;

  return (
    <div className={styles.wrapper}>
      <BackButton />

      <Header 
        title={'Плохая девочка'}
        desc={'Марафон'}
        background={'marathon'}
      />

      <div className={styles.cards}>
        <MarathonItem 
          title='Отзывы'
          desc={`Почитай истории тех, кто \nуже прошел этот путь`} 
          route={Routes.Reviews}
          status={reviews}
          iconName='message'
        />
        <MarathonItem 
          title='Диагностика'
          desc={`Диагностика состояния, быстрый \nэкскурс в Ваше состояние`} 
          route={Routes.Diagnostics}
          status={diagnostics}
          iconName='arrowRight'
        />
        <MarathonItem 
          title='Вводный день'
          desc={`Осознание тригеров и автоматических да`} 
          route={Routes.IntroductoryDay}
          status={introductoryDay}

        />
        <MarathonItem 
          title='День 1'
          desc={`Разберем ситуации где вы автоматически соглашаетесь`} 
          route={Routes.Day1}
          status={day1}

        />
        <MarathonItem 
          title='День 2'
          desc={`Разбираем привычку уступать, и выявляем вторичные выгоды`} 
          route={Routes.Day2}
          status={day2}
        />
        <MarathonItem 
          title='День 3'
          desc={`Осознаем сценарий поведения и поговорим с сопротивлением`} 
          route={Routes.Day3}
          status={day3}
        />
        <MarathonItem 
          title='Мини-иструкция'
          desc={`Как отказывать без вины`} 
          route={Routes.Instructions}
          status={instructions}
        />
        <MarathonItem 
          title='День 4'
          desc={`Создаем новый сценарий своего поведения, где вы выбираете себя`} 
          route={Routes.Day4}
          status={day4}
        />
        <MarathonItem 
          title='Примеры отказов'
          desc={`Примеры фраз для использования в повседневной жизни`} 
          route={Routes.Tutorial}
          status={tutorial}
        />
        <MarathonItem 
          title='День 5'
          desc={`Проводим эксперимент, и запись прямого эфира по марафону`} 
          route={Routes.Day5}
          status={day5}
        />
      </div>
      {day1 === 'close' && <Link to={Routes.Payment} className={styles.payment}>Открыть доступ {'>'}</Link>}
    </div>
  );
});
