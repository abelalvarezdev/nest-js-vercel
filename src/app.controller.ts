import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  getHealth(): string {
    return 'Ok';
  }

  @Get('cells')
  getcells() {
    return this.appService.getCells();
  }
  @Post()
  postHello(): string {
    return this.appService.postHello();
  }
}
