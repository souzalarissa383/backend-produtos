import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProdutoService } from './produto.service';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  create(@Body() produto: any) {
    return this.produtoService.create(produto);
  }

  @Get()
  findAll() {
    return this.produtoService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() produto: any) {
    return this.produtoService.update(id, produto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.produtoService.delete(id);
  }
}
