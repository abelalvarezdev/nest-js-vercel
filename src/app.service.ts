import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'This is my first hello world with nest js';
  }
  postHello(): string {
    return 'This is hello from post';
  }
}
