import axios, { AxiosStatic } from 'axios';
import { TOKEN_STORAGE } from '../common/consts/app-keys.const';

class HttpSerivce {
  baseUrl: string;

  fetchingService: AxiosStatic;

  apiVersion: string;

  constructor(
    baseUrl = process.env.REACT_APP_SERVER_URL,
    fetchingService = axios,
    apiVersion = process.env.REACT_APP_API_VERSION
  ) {
    this.baseUrl = baseUrl || '';
    this.fetchingService = fetchingService;
    this.apiVersion = apiVersion || '';
  }

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}/${this.apiVersion}/${url}`;
  }

  private setTokenIfAuth(isAuth?: boolean) {
    const config = { headers: { Authorization: '' } };

    if (isAuth) {
      config.headers = { Authorization: `Bearer ${localStorage.getItem(TOKEN_STORAGE) || ''}` };
    }

    return config;
  }

  async get<T>(url: string, isAuth?: boolean): Promise<T> {
    const config = this.setTokenIfAuth(isAuth);
    const result = await this.fetchingService.get(this.getFullApiUrl(url), config);

    return result.data;
  }

  async add<T, U>(url: string, body: U, isAuth?: boolean): Promise<T> {
    const config = this.setTokenIfAuth(isAuth);
    const result = await this.fetchingService.post(this.getFullApiUrl(url), body, config);

    return result.data;
  }

  async put<T, U>(url: string, body: U, isAuth?: boolean): Promise<T> {
    const config = this.setTokenIfAuth(isAuth);
    const result = await this.fetchingService.put(this.getFullApiUrl(url), body, config);

    return result.data;
  }

  async delete<T>(url: string, isAuth?: boolean): Promise<T> {
    const config = this.setTokenIfAuth(isAuth);
    const result = await this.fetchingService.delete(this.getFullApiUrl(url), config);

    return result.data;
  }
}

export default HttpSerivce;
