import { type ReactNode } from 'react';
import styles from './Button.module.css';
import { observer } from 'mobx-react-lite';
import userStore from '@src/application/store/userStore';
import { useNavigate } from 'react-router-dom';
import { Routes } from '@src/routes';

interface ButtonProps {
  children: ReactNode;
  openMarathonDay?: string;
  updateDayKey?: string;
  currentDayKey: string;
  finishDayKey?: string;
  audio1?: boolean;
  audio2?: boolean;
}

export const Button: React.FC<ButtonProps> = observer(({children, currentDayKey, openMarathonDay, updateDayKey, finishDayKey, audio1, audio2}) => {
  const id = userStore.data?._id;
  const navigate = useNavigate();
  const audioPath1 = '/audio1.ogg';
  const audioPath2 = '/audio2.ogg';

  const sendAudioToTelegram = async (audioPath: string) => {
    try {
      const botToken = import.meta.env.VITE_TOKEN_BOT;
      const chatId = userStore.data?.telegramId;
      // 1. Получаем файл из public-папки
      const response = await fetch(audioPath);
      const blob = await response.blob();
      const file = new File([blob], audioPath.split('/').pop() || 'audio.mp3');

      // 2. Отправляем через FormData
      const formData = new FormData();
      formData.append('caption', "Ирина Гречушенко");
      formData.append('audio', file);

      const tgResponse = await fetch(
        `https://api.telegram.org/bot${botToken}/sendAudio?chat_id=${chatId}`,
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await tgResponse.json();
      console.log('Аудио отправлено:', data);
    } catch (error) {
      console.error('Ошибка отправки аудио:', error);
    }
  };

  const handleUpdateMarathons = async () => {
    if (!id) return;

    try {
      // Сценарий 1: Есть оба параметра - вызываем обе функции последовательно
      if (updateDayKey && openMarathonDay) {
        await userStore.openMarathonDay(id, currentDayKey, openMarathonDay);
        await userStore.updateMarathon(id, currentDayKey, updateDayKey);
        console.log('1cценарий')
      } 
      // Сценарий 2: Только обновление дня
      else if (updateDayKey) {
        await userStore.updateMarathon(id, currentDayKey, updateDayKey);
        console.log('2cценарий')
      }
      // Сценарий 3: Только открытие следующего дня
      else if (openMarathonDay) {
        await userStore.openMarathonDay(id, currentDayKey, openMarathonDay);
        console.log('3cценарий')
      }
      // Сценарий 4: Финиш
      else if (finishDayKey) {
        await userStore.finishMarathonDay(id, finishDayKey);
        console.log('4cценарий')
      }

      if (audio1) await sendAudioToTelegram(audioPath1);
      if (audio2) await sendAudioToTelegram(audioPath2);
      navigate(Routes.Badgirl);
    } catch (error) {
      console.error('Ошибка при обновлении марафона:', error);
    }
  };

  return (
    <button className={styles.button} onClick={handleUpdateMarathons}>{children}</button>
  );
});