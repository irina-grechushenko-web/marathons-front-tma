class authApi {
  url = import.meta.env.VITE_API_URL;
  constructor() {}

  async auth(initDataRaw: string): Promise<any> {
    try {
      const response = await fetch(`${this.url}/auth`, {
        method: 'POST',
        headers: {
          Authorization: `tma ${initDataRaw}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Authorization failed with status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Authorization error:', error);
      throw error;
    }
  }
}

export default authApi;
