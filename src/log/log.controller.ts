import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { LogService } from './log.service';

@Controller('log')
export class LogController {
  constructor(private readonly logService: LogService) {}

  @Get()
  findLogs(@Query('entidade') entidade: string, @Query('pagina') pagina: number) {
    return this.logService.findLogs(entidade, pagina);
  }

  @Post()
  async createLog(@Body() body: { entidade: string; entidadeId: number }) {
    await this.logService.createLog(body.entidade, body.entidadeId);
    return { message: 'Log criado com sucesso' };
  }
}
