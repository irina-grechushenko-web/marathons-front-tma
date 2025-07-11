import { useEffect } from 'react';
import { backButton, useSignal } from '@telegram-apps/sdk-react';

/**
 * Компонент для управления кнопкой "Назад" в Telegram Mini Apps
 */
export function BackButton() {
  const isVisible = useSignal(backButton.isVisible);

  useEffect(() => {
    console.log('BackButton is', isVisible ? 'visible' : 'hidden');
  }, [isVisible]);

  useEffect(() => {
    backButton.show();
    
    return () => {
      backButton.hide();
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      window.history.back();
    };

    backButton.onClick(handleClick);
    
    return () => {
      backButton.offClick(handleClick);
    };
  }, []);

  return null;
}