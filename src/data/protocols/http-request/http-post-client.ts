import { HttpResponse } from './http-response';

export interface HttpPostClient {
  post(url: string, body: Record<string, any>, headers?: Record<string, any>): Promise<HttpResponse>;
}
