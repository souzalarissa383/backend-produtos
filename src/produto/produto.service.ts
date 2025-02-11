import { Injectable } from '@nestjs/common';
import sqlite3 from 'sqlite3';
import { LogService } from '../log/log.service';

@Injectable()
export class ProdutoService {
  private db: sqlite3.Database;

  constructor(private logService: LogService) {
    this.db = new sqlite3.Database('database.sqlite');
    this.createTable();
  }

  private createTable() {
    this.db.run(`
      CREATE TABLE IF NOT EXISTS produtos (
        CODPROD INTEGER PRIMARY KEY AUTOINCREMENT,
        DSCRPROD TEXT,
        MARCA TEXT,
        VALOR TEXT
      );
    `);
  }

  async create(produto: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO produtos (DSCRPROD, MARCA, VALOR) VALUES (?, ?, ?)`;
      this.db.run(sql, [produto.DSCRPROD, produto.MARCA, produto.VALOR], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ CODPROD: this.lastID, ...produto });
        }
      });
    });
  }

  async findAll(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM produtos`;
      this.db.all(sql, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  async update(id: number, produto: any): Promise<void> {
    return new Promise((resolve, reject) => {
      const sql = `UPDATE produtos SET DSCRPROD = ?, MARCA = ?, VALOR = ? WHERE CODPROD = ?`;
      this.db.run(sql, [produto.DSCRPROD, produto.MARCA, produto.VALOR, id], async (err) => {
        if (err) {
          reject(err);
        } else {
          await this.logService.createLog('PRODUTO', id);
          resolve();
        }
      });
    });
  }

  async delete(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM produtos WHERE CODPROD = ?`;
      this.db.run(sql, [id], async (err) => {
        if (err) {
          reject(err);
        } else {
          await this.logService.createLog('PRODUTO', id);
          resolve();
        }
      });
    });
  }
}
