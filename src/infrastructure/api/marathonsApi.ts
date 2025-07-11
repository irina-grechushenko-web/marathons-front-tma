class marathonsApi {
  static baseUrl = import.meta.env.VITE_API_URL;

  constructor() {}

  static async fetchData(endpoint: string, method: string, body?: any) {
    try {
      const options: RequestInit = {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: body ? JSON.stringify(body) : undefined,
      };

      const response = await fetch(`${this.baseUrl}/${endpoint}`, options);

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.statusText}`);
      }

      return await response.json();
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  
  static updateStatusMarathons(userId: string, currentDayKey: string, nextDayKey: string) {
    return this.fetchData('update-day/update', 'POST', {userId, currentDayKey, nextDayKey})
  }

  static openStatusMarathons(userId: string, currentDayKey: string, nextDayKey: string) {
    return this.fetchData('update-day/open', 'POST', {userId, currentDayKey, nextDayKey})
  }
  static finishStatusMarathons(userId: string, finishDayKey: string) {
    return this.fetchData('update-day/finish', 'POST', {userId, finishDayKey})
  }
}

export default marathonsApi;
