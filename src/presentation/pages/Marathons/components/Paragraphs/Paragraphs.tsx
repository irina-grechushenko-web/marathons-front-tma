import type { ReactNode } from 'react';
import styles from './Paragraphs.module.css';

interface ParagraphsProps {
  children: ReactNode;
}

export const Paragraphs: React.FC<ParagraphsProps> = ({children}) => {

  return (
    <div className={styles.paragraphs}>
      {children}
    </div>
  );
};