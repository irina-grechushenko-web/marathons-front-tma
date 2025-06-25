import type { ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: ReactNode;
  header?: string;
  subHeader?: string;
}

export const Card: React.FC<CardProps> = ({children, header, subHeader}) => {

  return (
    <div className={styles.card}>
      {header && <div className={styles.cardHeader}>{header}</div>}
      {subHeader && <div className={styles.cardSubHeader}>{subHeader}</div>}
      <div className={styles.cardMain}>{children}</div>
    </div>
  );
};