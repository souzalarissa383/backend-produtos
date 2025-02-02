import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './produto.entity';
import { LogService } from '../log/log.service';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepo: Repository<Produto>,
    private logService: LogService,
  ) {}

  async create(produto: Produto): Promise<Produto> {
    const newProduto = await this.produtoRepo.save(produto);
    await this.logService.createLog('PRODUTO', newProduto.CODPROD);
    return newProduto;
  }

  async findAll(): Promise<Produto[]> {
    return this.produtoRepo.find();
  }

  async update(id: number, produto: Partial<Produto>): Promise<void> {
    await this.produtoRepo.update(id, produto);
    await this.logService.createLog('PRODUTO', id);
  }

  async delete(id: number): Promise<void> {
    await this.produtoRepo.delete(id);
    await this.logService.createLog('PRODUTO', id);
  }
}
