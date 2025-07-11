import { Icon } from '@src/presentation/components/Icon';
import styles from './Header.module.css';
import classNames from 'classnames';

interface CardProps {
  header?: string;
  subHeader?: string;
  small?: boolean;
}

export const Header: React.FC<CardProps> = ({header, subHeader, small }) => {

  return (
    <div className={styles.header}>
      {header && <div className={classNames(styles.h1, {[styles.small]: small})}>{header}</div> }
      {subHeader && <div className={styles.h2}>{subHeader}</div> } 
      <Icon name={'header-line'} className={styles.headerLine}/>
    </div>
  );
};