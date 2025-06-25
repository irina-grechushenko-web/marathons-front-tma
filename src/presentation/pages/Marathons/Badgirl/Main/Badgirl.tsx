import { Header } from '@src/presentation/components/Header';
import { BackButton } from '@src/presentation/components/TelegramBackBtn/TelegramBackBtn';
import { Link } from 'react-router-dom';
import { Routes } from '@src/routes';
import styles from './Badgirl.module.css';
import { MarathonItem } from '@src/presentation/components/MarathonItem';

export const Badgirl = () => {

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
          status='open'
          iconName='message'
        />
        <MarathonItem 
          title='Диагностика'
          desc={`Диагностика состояния, быстрый \nэкскурс в Ваше состояние`} 
          route={Routes.Diagnostics}
          status='finished'
          iconName='arrowRight'
        />
        <MarathonItem 
          title='Вводный день'
          desc={`Разберём ситуации, когда вы \nавтоматически соглашались `} 
          route={''}
          status='open'

        />
        <MarathonItem 
          title='День 1'
          desc={`Разберём ситуации, когда вы \nавтоматически соглашались `} 
          route={Routes.Day1}
          status='open'

        />
        <MarathonItem 
          title='День 2'
          desc={`Зачем мы продолжаем играть \nроль «хорошей девочки»`} 
          route={Routes.Day2}
          status='open'
        />
        <MarathonItem 
          title='День 3'
          desc={``} 
          route={Routes.Reviews}
          status='close'
        />
        <MarathonItem 
          title='Мини-иструкция'
          desc={`Как отказывать без вины`} 
          route={Routes.Reviews}
          status='close'
        />
        <MarathonItem 
          title='День 4'
          desc={``} 
          route={Routes.Reviews}
          status='close'
        />
        <MarathonItem 
          title='Примеры отказов'
          desc={``} 
          route={Routes.Reviews}
          status='close'
        />
        <MarathonItem 
          title='День 5'
          desc={`Как отказывать без вины`} 
          route={Routes.Reviews}
          status='close'
        />
      </div>
      <Link to={''} className={styles.payment}>Открыть доступ {'>'}</Link>
    </div>
  );
}
