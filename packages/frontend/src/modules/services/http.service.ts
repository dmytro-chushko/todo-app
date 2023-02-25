import axios, { AxiosStatic } from 'axios';

class HttpSerivce {
  baseUrl: string;

  fetchingService: AxiosStatic;

  apiVersion: string;

  constructor(
    baseUrl = process.env.REACT_APP_SERVER_URL,
    fetchingService = axios,
    apiVersion = 'api'
  ) {
    this.baseUrl = baseUrl || '';
    this.fetchingService = fetchingService;
    this.apiVersion = apiVersion;
  }

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}/${this.apiVersion}/${url}`;
  }

  async get<T>(url: string): Promise<T> {
    const result = await this.fetchingService.get(this.getFullApiUrl(url));

    return result.data;
  }

  async put<T, U>(url: string, body: U): Promise<T> {
    const result = await this.fetchingService.put(this.getFullApiUrl(url), body);

    return result.data;
  }
}

export default HttpSerivce;
