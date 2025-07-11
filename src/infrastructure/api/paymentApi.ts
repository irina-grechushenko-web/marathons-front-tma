class paymentApi {
  static baseUrl = import.meta.env.VITE_API_URL;

  private static async fetchData(endpoint: string, method: string, body?: any) {
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

  static async createPayment(amount: string, description: string, telegramId: string | undefined) {
    return this.fetchData('payment/create-payment', 'POST', { amount, description, telegramId });
  }
}

export default paymentApi;