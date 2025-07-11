type Status = 'open' | 'close' | 'pending' | 'finished';

export interface BadGirlStatus {
  reviews: Status;
  diagnostics: Status;
  introductoryDay: Status;
  day1: Status;
  day2: Status;
  day3: Status;
  instructions: Status;
  day4: Status;
  tutorial: Status;
  day5: Status;
  currentDay: number;
}

export interface UserData {
  _id: string;
  telegramId: string;
  badGirl: BadGirlStatus;
  initData: {
    authDate: string;
    chatInstance: string;
    chatType: string;
    hash: string;
    signature?: string;
    user: {
      allowsWriteToPm: boolean;
      firstName: string;
      id: number;
      isPremium?: boolean;
      languageCode: string;
      lastName?: string;
      photoUrl?: string;
      username?: string;
    };
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}