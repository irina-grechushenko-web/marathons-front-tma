import classNames from 'classnames';
import styles from './Header.module.css';
import { lines, type LineName } from './Line';
import { useEffect } from 'react';
import { miniApp } from '@telegram-apps/sdk-react';
interface HeaderProp {
  title: string;
  desc: string;
  avatar?: boolean;
  background: LineName;
}

export const Header: React.FC<HeaderProp> = ({title, desc, avatar = false, background = 'main'}) => {
  const LineComponent = lines[background];

  useEffect(()=>{
    if (miniApp.setHeaderColor.isAvailable()) {
      if( background==='main'){
        miniApp.setHeaderColor('#184A3F')
      }
      if( background==='marathon'){
        miniApp.setHeaderColor('#FDAE37')
      }
      if( background==='reviews'){
        miniApp.setHeaderColor('#FDAE37')
      }
    }
  },[])

  return (
    <div className={classNames(styles.wrapper, styles[`wrapper--${background}`])}>
      {avatar && <div className={styles.avatar}></div>}
      <div className={classNames(styles.title, styles[`title--${background}`])}>{title}</div>
      <div className={classNames(styles.description, styles[`desc--${background}`])}>{desc}</div>
      <LineComponent className={classNames(styles.line, styles[`line--${background}`])} />
    </div>
  );
}
