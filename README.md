# Sistema de Gestão de Produtos com Log de Alterações

Este é um sistema de backend desenvolvido com **NestJS** e **SQLite** para o gerenciamento de produtos e rastreamento das operações realizadas. O sistema oferece endpoints REST para CRUD de produtos e consulta dos logs de alterações.

## Funcionalidades

### 1. Gerenciamento de Produtos (CRUD)
**Endpoint:** `/produto`

- **POST**: Criar Produto - Adiciona um novo produto.
- **GET**: Buscar Produtos - Retorna todos os produtos cadastrados.
- **PUT**: Atualizar Produto - Atualiza um produto existente.
- **DELETE**: Remover Produto - Exclui um produto.

**Campos do Produto**:
- `CODPROD`: Código único do produto (Chave primária, auto-incrementada).
- `DSCRPROD`: Descrição do produto.
- `MARCA`: Marca do produto.
- `VALOR`: Valor do produto.

### 2. Logs de Operações
**Endpoint:** `/log?entidade=PRODUTO&pagina=1`

- Permite listar logs de alterações realizadas no sistema, com filtros para tipo de entidade e paginação (50 logs por página).

**Parâmetros**:
- `entidade`: Nome da entidade (ex: "PRODUTO").
- `pagina`: Número da página para controle de paginação.

### 3. Monitoramento de Status
**Endpoint:** `/status`

- Verifique o status geral do sistema, incluindo:
  - Data e hora atual.
  - Status do servidor (ok/falha).

## Estrutura de Banco de Dados

### Tabela: Produtos
| Campo     | Tipo     | Descrição               |
|-----------|----------|-------------------------|
| CODPROD   | INT      | Código do produto (Chave Primária) |
| DSCRPROD  | STRING   | Descrição do produto    |
| MARCA     | STRING   | Marca do produto        |
| VALOR     | STRING   | Valor do produto        |

### Tabela: Logs
| Campo      | Tipo     | Descrição                        |
|------------|----------|----------------------------------|
| ID         | INT      | Chave primária (auto-incrementada) |
| ENTIDADE   | STRING   | Nome da entidade alterada (ex: "PRODUTO") |
| ENTIDADE_ID| INT      | ID da entidade alterada         |
| DTINC      | DATE     | Data e hora da alteração        |

## Tecnologias

- **NestJS**: Framework Node.js para desenvolvimento de backend.
- **SQLite**: Banco de dados relacional para armazenamento dos dados.

## Como Rodar o Projeto

1. Clone o repositório
   ```bash
   git clone <link-do-repositório>
   cd <diretório-do-projeto>
   ```
