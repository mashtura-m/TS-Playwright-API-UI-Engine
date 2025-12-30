import { APIRequestContext, APIResponse } from '@playwright/test'
import * as dotenv from 'dotenv';

dotenv.config();

export class ApiClient {
  private baseURL: string;
  private xAuthSecretKey: string;
  private requestContext: APIRequestContext;
  private apiUrl!: string;

  constructor(requestContext: APIRequestContext) {
    this.baseURL = process.env.BASE_URL || '';
    this.xAuthSecretKey = process.env.SECRET_KEY || '';
    this.requestContext = requestContext;
    console.log(`Got Base URL: ${this.baseURL} | x-Auth-Secret-Key: ${this.xAuthSecretKey}`);

  }
  async getRequest(endpoint: string, headers: Record<string, string> = {}): Promise<APIResponse> {
    this.apiUrl = this.baseURL + endpoint;
    const response = await this.requestContext.get(
      this.apiUrl,
      { headers })
    return response;
  }

  async postRequest(endpoint: string, data: any, headers: Record<string, string> = {}): Promise<APIResponse> {
    this.apiUrl = this.baseURL + endpoint;
    const response = await this.requestContext.post(
      this.apiUrl,
      {
        data,
        headers
      }
    );
    console.log(`POST Request to ${this.apiUrl} with Response status: ${response.status()}`);
    return response;
  }
































}