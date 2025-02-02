import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Log } from './log.entity';

@Injectable()
export class LogService {
  constructor(
    @InjectRepository(Log)
    private logRepo: Repository<Log>,
  ) {}

  async createLog(entidade: string, entidadeId: number): Promise<void> {
    await this.logRepo.save({ ENTIDADE: entidade, ENTIDADE_ID: entidadeId });
  }

  async findLogs(entidade: string, pagina: number) {
    return this.logRepo.find({
      where: { ENTIDADE: entidade },
      take: 50,
      skip: (pagina - 1) * 50,
    });
  }
}