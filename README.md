# API Vendas 2024

API REST desenvolvida com Node.js, Express, TypeScript, e TypeORM.

## 🚀 Tecnologias

- Node.js
- TypeScript
- Express
- TypeORM
- PostgreSQL
- Jest (Testes)
- Swagger (Documentação)
- Docker

## 📋 Pré-requisitos

- Node.js (versão LTS)
- Docker e Docker Compose
- PostgreSQL

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
- Copie o arquivo `.env.example` para `.env`
- Ajuste as variáveis conforme necessário

4. Inicie os containers Docker:
```bash
docker-compose up -d
```

## 🏃‍♂️ Executando o projeto

### Desenvolvimento
```bash
npm run dev
```

### Testes
```bash
npm test
```

### Lint
```bash
npm run lint
```

## 📚 Documentação da API

A documentação da API está disponível através do Swagger UI em:
```
http://localhost:3000/api-docs
```

## 🛠️ Estrutura do Projeto

```
src/
├── common/           # Código compartilhado e utilitários
├── modules/          # Módulos da aplicação
└── config/          # Configurações
```

## 🔄 Migrations

Executar migrations:
```bash
npm run typeorm migration:run
```

## 📄 Licença

ISC

## Estrutura do Projeto

### Domain Layer

#### Repositories

O projeto utiliza um padrão de repositório genérico que implementa operações CRUD básicas e busca avançada:

- `RepositoryInterface<Model, CreateProps>`: Interface base para todos os repositórios
- `InMemoryRepository<Model>`: Implementação abstrata base para repositórios em memória

##### Funcionalidades dos Repositórios

- **CRUD Operations**
  - Create: Criação de novos registros
  - Read: Busca por ID
  - Update: Atualização de registros existentes
  - Delete: Remoção de registros

- **Busca Avançada**
  - Paginação
  - Ordenação
  - Filtros

##### Tipos de Dados

```typescript
interface SearchInput {
  page: number
  sort?: string | null
  sort_dir?: string | null
  filter?: string | null
}

interface SearchOutput<Model> {
  items: Model[]
  per_page: number
  total: number
  current_page: number
  sort: string | null
  sort_dir: string | null
  filter: string | null
}
```

### Error Handling

O projeto inclui tratamento de erros padronizado:

- `NotFoundError`: Erro para recursos não encontrados

### Características Técnicas

- Typescript
- Arquitetura em Camadas
- Repository Pattern
- Generic Types
- Error Handling
- Paginação
- Ordenação
- Filtros de Busca
- Clean Code

## Como Usar

Para criar um novo repositório para sua entidade:

1. Crie uma classe que estenda `InMemoryRepository`:

```typescript
class YourEntityRepository extends InMemoryRepository<YourEntity> {
  protected async applyFilter(
    items: YourEntity[],
    filter: string | null
  ): Promise<YourEntity[]> {
    if (!filter) {
      return items;
    }
    // Implemente sua lógica de filtro específica
  }
}
```

2. Configure os campos ordenáveis:

```typescript
const repo = new YourEntityRepository();
repo.sortableFields = ['name', 'createdAt', /* outros campos */];
```

3. Use os métodos disponíveis:

```typescript
// Criar
const entity = await repo.create({ name: 'Example' });

// Buscar por ID
const found = await repo.findById(entity.id);

// Atualizar
await repo.update({ id: entity.id, name: 'Updated' });

// Deletar
await repo.delete(entity.id);

// Buscar com filtros
const result = await repo.search({
  page: 1,
  per_page: 15,
  sort: 'name',
  sort_dir: 'asc',
  filter: 'example'
});
```
