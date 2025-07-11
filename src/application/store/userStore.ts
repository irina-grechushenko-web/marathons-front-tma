
import type { BadGirlStatus, UserData } from '@src/domain/model/user';
import authApi from '@src/infrastructure/api/authApi';
import marathonsApi from '@src/infrastructure/api/marathonsApi';
import { makeAutoObservable, runInAction } from 'mobx';

class userStore {
  data: UserData | null = null;
  isLoading: boolean = false;
  error: string | null = null;

  authApi: authApi;
  marathonsApi: marathonsApi;

  constructor() {
    this.authApi = new authApi();
    this.marathonsApi = new marathonsApi();
    makeAutoObservable(this);
  }


  setStatusLoading(status: boolean) {
    this.isLoading = status;
  }

 get completedDaysCount(): number {
    if (!this.data?.badGirl) return 0;
    
    const { badGirl } = this.data;
    const daysToCheck = [
      'introductoryDay',
      'day1',
      'day2',
      'day3',
      'day4',
      'day5'
    ];

    return daysToCheck.reduce((count, dayKey) => {
      return badGirl[dayKey as keyof BadGirlStatus] === 'finished' 
        ? count + 1 
        : count;
    }, 0);
  }
  
  async authorize(initDataRaw: string) {
    this.setStatusLoading(true);
    try {
      const { data } = await this.authApi.auth(initDataRaw);
      runInAction(() => {
        this.data = data.user;
      });
    } catch (error) {
      this.error = 'Ошибка при авторизации';
    } finally {
      this.setStatusLoading(false);
    }
  }

  async updateMarathon(userId: string, currentDayKey: string, nextDayKey: string) {
    try {
      const { data } = await marathonsApi.updateStatusMarathons(userId, currentDayKey, nextDayKey);
      this.data = data.user;
    } catch (error) {
      this.error = 'Ошибка при авторизации';
    } finally {
      this.setStatusLoading(false);
    }
  }
  async openMarathonDay(userId: string, currentDayKey: string, openMarathonDay: string) {
    try {
      const { data } = await marathonsApi.openStatusMarathons(userId, currentDayKey, openMarathonDay);
      this.data = data.user;
    } catch (error) {
      this.error = 'Ошибка при авторизации';
    } finally {
      this.setStatusLoading(false);
    }
  }
  async finishMarathonDay(userId: string, finishDayKey: string) {
    try {
      const { data } = await marathonsApi.finishStatusMarathons(userId, finishDayKey);
      this.data = data.user;
    } catch (error) {
      this.error = 'Ошибка при авторизации';
    } finally {
      this.setStatusLoading(false);
    }
  }
}

export default new userStore();
