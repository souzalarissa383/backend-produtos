import { Controller, Get, Query } from '@nestjs/common';
import { LogService } from './log.service';

@Controller('log')
export class LogController {
  constructor(private readonly logService: LogService) {}

  @Get()
  findLogs(@Query('entidade') entidade: string, @Query('pagina') pagina: number) {
    return this.logService.findLogs(entidade, pagina);
  }
}