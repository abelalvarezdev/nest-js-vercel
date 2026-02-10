import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cell } from './entity/Cell';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Cell)
    private readonly cellRepository: Repository<Cell>,
  ) {}
  getHello(): string {
    return 'This is my first hello world with nest js';
  }
  postHello(): string {
    return 'This is hello from post';
  }
  async getCells() {
    return await this.cellRepository.find();
  }
}
