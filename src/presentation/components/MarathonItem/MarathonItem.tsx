import { Link } from 'react-router-dom';
import styles from './MarathonItem.module.css';
import { Icon } from '../Icon';
import type { IconName } from '../Icon/types';
import classNames from 'classnames';

type Status = 'open' | 'close' | 'pending' | 'finished' | 'update';

interface MarathonItemProp {
  title: string;
  desc: string;
  route: string;
  status: Status;
  iconName?: IconName;
}

export const MarathonItem: React.FC<MarathonItemProp> = ({title, desc, route, status, iconName}) => {

  return (
        <div className={classNames(styles.card, styles[`card--${status}`])}>
          <Link to={route}>
            <div className={styles.title}>{title}</div>
            <div className={styles.desc}>{desc}</div>
            {iconName && <Icon className={styles.icon} name={iconName}/>}
            {status === 'pending' && <Icon className={styles.icon} name={'timer'}/>}
            {status === 'update' && <Icon className={styles.icon} name={'timer'}/>}
            {status === 'close' && <Icon className={styles.icon} name={'lock'}/>}
          </Link>
        </div>
  );
}
