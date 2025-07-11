import { makeAutoObservable } from 'mobx';
import paymentApi from '@infrastructure/api/paymentApi';

class PaymentStore {
  confirmationUrl: string | null = null;
  loading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async createPayment(amount: string, description: string, telegramId: string | undefined ) {
    this.loading = true;
    this.error = null;
    this.confirmationUrl = null;
    try {
      const data = await paymentApi.createPayment(amount, description, telegramId);
      this.confirmationUrl = data.confirmationUrl;
    } catch (error: any) {
      this.error = error.message || 'Ошибка при создании платежа';
    } finally {
      this.loading = false;
    }
  }
}

export default new PaymentStore();