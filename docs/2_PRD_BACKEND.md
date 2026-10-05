# 🐍 PRD Técnico: Backend (Python + FastAPI)
> **Foco**: Time de Backend  
> **Missão**: Construir uma API RESTful profissional do zero, dividida em 4 camadas, consumindo uma API externa e persistindo dados em banco SQLite.

---

## 📂 1. Estrutura de Arquivos que VOCÊS Devem Criar

O repositório foi entregue apenas com `requirements.txt` e um `app/main.py` inicial.
A equipe de Backend deve criar as pastas e arquivos abaixo, um por um:

```text
backend/app/
├── main.py                     # [Já existe] Ponto de entrada e configuração do CORS
│
├── schemas/                    # 📁 PASTA A CRIAR: Camada de Validação (Pydantic)
│   ├── movie.py                # 📄 ARQUIVO A CRIAR: Formato dos filmes buscados
│   └── favorite.py             # 📄 ARQUIVO A CRIAR: Formato dos favoritos e validação de nota
│
├── services/                   # 📁 PASTA A CRIAR: Camada de Regra de Negócio & Consumo Externo
│   ├── tvmaze_service.py       # 📄 ARQUIVO A CRIAR: Chamada HTTP para https://api.tvmaze.com
│   └── favorite_service.py     # 📄 ARQUIVO A CRIAR: Operações de salvar/buscar no SQLite
│
├── routers/                    # 📁 PASTA A CRIAR: Camada de Rotas HTTP
│   ├── movies.py               # 📄 ARQUIVO A CRIAR: Rota GET /api/movies/search
│   └── favorites.py            # 📄 ARQUIVO A CRIAR: Rotas POST, GET, DELETE /api/favorites
│
└── database/                   # 📁 PASTA A CRIAR: Camada de Banco de Dados
    ├── connection.py           # 📄 ARQUIVO A CRIAR: Conexão com SQLite via SQLAlchemy
    └── models.py               # 📄 ARQUIVO A CRIAR: Modelo da tabela favorite_movies
```

---

## 🏗️ 2. As 4 Camadas Explicadas

| Camada | Pasta | Por que existe? | Responsabilidade Única |
| :--- | :--- | :--- | :--- |
| **Camada 1: Routers** | `app/routers/` | Atua como a "porta de entrada" da API. | Recebe a requisição HTTP do navegador, valida parâmetros e chama o Service. **Não** faz chamadas externas e **não** acessa o banco diretamente. |
| **Camada 2: Services** | `app/services/` | Onde mora a inteligência e as regras de negócio. | Faz chamadas HTTP externas (`httpx`), limpa textos e coordena o que deve ser salvo ou buscado. |
| **Camada 3: Schemas** | `app/schemas/` | Define o "contrato" dos dados. | Usa o `Pydantic` para garantir que ninguém envie uma nota menor que 1 ou maior que 5, e padroniza o JSON de saída. |
| **Camada 4: Database** | `app/database/` | Conexão e armazenamento físico. | Define a conexão com o SQLite local e mapeia a tabela no banco através do SQLAlchemy. |

---

## 📋 3. Tabela de Execução Sequencial (Checklist do Backend)

Siga esta ordem exata para construir a API:

| Ordem | Pasta / Arquivo a Criar | O que deve ser feito? | Dependência | Status |
| :---: | :--- | :--- | :--- | :---: |
| **B01** | `backend/requirements.txt` | Executar `pip install -r requirements.txt` no terminal com o ambiente ativado. | Nenhuma | [ ] |
| **B02** | `app/schemas/movie.py` | Criar a classe `MovieSchema(BaseModel)` com campos: `id`, `title`, `summary`, `image`, `rating`, `genres`. | B01 | [ ] |
| **B03** | `app/services/tvmaze_service.py` | Criar a função assíncrona `search_movies_in_tvmaze(query: str)` usando `httpx.AsyncClient` para consumir `https://api.tvmaze.com/search/shows?q={query}`. | B02 | [ ] |
| **B04** | `app/routers/movies.py` | Criar o `APIRouter` com o endpoint `GET /api/movies/search?q={termo}`, chamando o `tvmaze_service`. | B03 | [ ] |
| **B05** | `app/main.py` | Importar e registrar o router de filmes usando `app.include_router(movies.router)`. | B04 | [ ] |
| **B06** | **TESTE SPRINT 1** | Abrir `http://localhost:8000/docs` e testar a busca por "Batman". Deve retornar filmes reais em JSON! 🚀 | B05 | [ ] |
| **B07** | `app/database/connection.py` | Configurar o engine SQLite (`sqlite:///./cinetech.db`) e a função `get_db()`. | Nenhuma | [ ] |
| **B08** | `app/database/models.py` | Criar a classe `FavoriteMovie(Base)` com as colunas: id, movie_id, title, poster_url, user_rating, status, notes. | B07 | [ ] |
| **B09** | `app/schemas/favorite.py` | Criar `FavoriteCreateSchema` (validando nota de 1.0 a 5.0) e `FavoriteResponseSchema`. | Nenhuma | [ ] |
| **B10** | `app/services/favorite_service.py` | Criar as funções `create_favorite`, `list_favorites` e `delete_favorite` manipulando a sessão do banco. | B08 e B09 | [ ] |
| **B11** | `app/routers/favorites.py` | Criar as rotas `POST /api/favorites`, `GET /api/favorites` e `DELETE /api/favorites/{id}`. | B10 | [ ] |
| **B12** | `app/main.py` | Registrar `app.include_router(favorites.router)` e inicializar as tabelas com `Base.metadata.create_all(bind=engine)`. | B11 | [ ] |
| **B13** | **TESTE SPRINT 2** | Abrir o Swagger `/docs` e testar salvar, listar e apagar favoritos. | B12 | [ ] |

---

## 🤖 4. Guia de Prompts para Vibe Coding

Ao criar cada arquivo com auxílio da Inteligência Artificial, use prompts objetivos como estes:

### Prompt para Tarefa B02 (`app/schemas/movie.py`):
> *"Crie um arquivo `movie.py` usando Pydantic BaseModel no FastAPI. Crie a classe `MovieSchema` com os campos: `id: int`, `title: str`, `summary: Optional[str]`, `image: Optional[str]`, `rating: Optional[float]` e `genres: List[str] = []`."*

### Prompt para Tarefa B03 (`app/services/tvmaze_service.py`):
> *"Crie a função assíncrona `search_movies_in_tvmaze(query: str) -> List[MovieSchema]` usando `httpx.AsyncClient`. Faça uma chamada GET para `https://api.tvmaze.com/search/shows?q={query}`. Se a query estiver vazia, retorne lista vazia. Para cada item da resposta, limpe as tags HTML do campo summary e converta os dados para instâncias de `MovieSchema`."*

### Prompt para Tarefa B04 (`app/routers/movies.py`):
> *"Crie um arquivo de rotas no FastAPI usando `APIRouter(prefix='/api/movies', tags=['Filmes'])`. Crie a rota `GET /search` que recebe `q: str = Query(...)`, chama `search_movies_in_tvmaze(q)` e retorna a lista de filmes."*

### Prompt para Tarefas B07 e B08 (`app/database/connection.py` e `models.py`):
> *"Crie a conexão com SQLite no FastAPI usando SQLAlchemy (`create_engine`, `sessionmaker`, `declarative_base` e a função geradora `get_db`). Em seguida, crie o modelo `FavoriteMovie` com colunas: id (chave primária), movie_id (int), title (string), poster_url (string, opcional), user_rating (float, default 5.0), status (string, default 'assistido') e notes (text, opcional)."*

### Prompt para Tarefas B10 e B11 (`favorite_service.py` e `routers/favorites.py`):
> *"Crie o service e o router para o CRUD de favoritos no FastAPI com SQLAlchemy: rotas GET /api/favorites (lista todos), POST /api/favorites (recebe dados validados pelo Pydantic e salva no SQLite) e DELETE /api/favorites/{id} (remove do banco e retorna 204)."*

---

## ⚡ 5. Comandos para Executar o Servidor

```bash
cd backend

# 1. Criar e ativar o ambiente virtual:
python -m venv venv
.\venv\Scripts\Activate.ps1

# 2. Instalar dependências:
pip install -r requirements.txt

# 3. Rodar servidor com auto-reload:
uvicorn app.main:app --reload --port 8000
```
> Documentação Swagger para testes: **`http://localhost:8000/docs`**
