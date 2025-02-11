import { Injectable } from '@nestjs/common';
import * as sqlite3 from 'sqlite3';
import { open } from 'sqlite';

@Injectable()
export class LogService {
  private db: any;

  constructor() {
    this.initDb();
  }

  async initDb() {
    this.db = await open({
      filename: './database.sqlite',
      driver: sqlite3.Database,
    });
  }

  async createLog(entidade: string, entidadeId: number): Promise<void> {
    await this.db.run(
      'INSERT INTO Log (ENTIDADE, ENTIDADE_ID, DTINC) VALUES (?, ?, CURRENT_TIMESTAMP)',
      [entidade, entidadeId]
    );
  }

  async findLogs(entidade: string, pagina: number) {
    const offset = (pagina - 1) * 50;
    return this.db.all(
      'SELECT * FROM Log WHERE ENTIDADE = ? ORDER BY DTINC DESC LIMIT 50 OFFSET ?',
      [entidade, offset]
    );
  }
}
