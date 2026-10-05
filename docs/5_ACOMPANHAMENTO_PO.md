# 📋 Quadro de Acompanhamento do Product Owner (PO)
> **Foco**: Product Owner (PO) & Gestão de Entregas  
> **Objetivo**: Acompanhar o projeto passo a passo, garantir trabalho paralelo sem bloqueios e homologar as entregas no navegador.

---

## 🧭 1. Guia do PO para Evitar Bloqueios

No projeto CineTech, o **Frontend NÃO precisa esperar o Backend** para começar!
- O time de **Frontend** cria as telas, layout, cards e botões usando dados falsos de teste (`mockData.ts`).
- O time de **Backend** cria os Schemas, o Service da TVMaze e as rotas no FastAPI.
- Eles só precisam se conectar no momento da **Integração**, que está claramente sinalizado no checklist abaixo.

---

## 📊 2. Checklist Mestre Passo a Passo (Unificado)

Use esta tabela nas reuniões diárias com a equipe para marcar o progresso:

### 🗓️ SEMANA 1: Sprint 1 — Catálogo Global & Busca na TVMaze

| Passo | Time | Arquivo / Ação | Natureza da Tarefa | O que valida o sucesso? | Status |
| :---: | :---: | :--- | :--- | :--- | :---: |
| **01** | **PO** | Alinhamento inicial com todo o time. | **Independente** | Todos leram o `docs/1_PRD_GERAL.md` e assistiram aos vídeos curtos de 10 min. | [ ] |
| **02** | **Back** | `backend/requirements.txt` | **Independente** | Executou `pip install -r requirements.txt` no ambiente virtual sem erros. | [ ] |
| **03** | **Front** | `frontend/package.json` | **Independente** | Executou `npm install` e `npm run dev` abrindo a tela inicial em `localhost:5173`. | [ ] |
| **04** | **Front** | Criar `src/types/index.ts` e `src/services/mockData.ts` | **Independente** | Interfaces criadas e lista de 3 filmes mockados pronta para teste. | [ ] |
| **05** | **Front** | Criar `src/components/Navbar.tsx` | **Independente** | Barra superior com logo e botões "Catálogo" e "Minha Lista" funcionando. | [ ] |
| **06** | **Front** | Criar `src/components/MovieCard.tsx` | **Independente** | Card exibindo pôster, título, gêneros e botão estilizado. | [ ] |
| **07** | **Front** | Criar `src/pages/CatalogPage.tsx` | **Independente** | Campo de busca renderizando a lista de cards com os dados do mock. | [ ] |
| **08** | **Back** | Criar `app/schemas/movie.py` | **Independente** | Schema Pydantic com id, title, summary, image, rating e genres. | [ ] |
| **09** | **Back** | Criar `app/services/tvmaze_service.py` | **Independente** | Função assíncrona consumindo `https://api.tvmaze.com/search/shows?q=...` com `httpx`. | [ ] |
| **10** | **Back** | Criar `app/routers/movies.py` e registrar no `main.py` | **Independente** | Rota `GET /api/movies/search?q={termo}` disponível. | [ ] |
| **11** | **Back** | Teste no Swagger UI (`http://localhost:8000/docs`) | **Independente** | Buscar "Matrix" no Swagger e ver os dados reais retornando com HTTP 200. | [ ] |
| **12** | **Front** | Criar `src/services/api.ts` com `searchMovies` | **BLOQUEADO: Depende do Passo 10** | Substituir o mock pela chamada `fetch` real para o Backend. | [ ] |
| **13** | **PO** | **HOMOLOGAÇÃO DA SEMANA 1** | **BLOQUEADO: Depende do Passo 12** | Buscar filmes reais no navegador (`localhost:5173`) e ver os cards na tela! 🚀 | [ ] |

---

### 🗓️ SEMANA 2: Sprint 2 — Diário Pessoal (API Própria & Banco SQLite)

| Passo | Time | Arquivo / Ação | Natureza da Tarefa | O que valida o sucesso? | Status |
| :---: | :---: | :--- | :--- | :--- | :---: |
| **14** | **Front** | Criar `src/components/ReviewModal.tsx` | **Independente** | Modal com seletor de 1 a 5 estrelas, select e textarea abre e fecha visualmente. | [ ] |
| **15** | **Front** | Criar `src/pages/MyListPage.tsx` | **Independente** | Página listando os filmes salvos e botão de excluir com layout pronto. | [ ] |
| **16** | **Back** | Criar `app/database/connection.py` e `models.py` | **Independente** | Conexão SQLite configurada e tabela `favorite_movies` mapeada com SQLAlchemy. | [ ] |
| **17** | **Back** | Criar `app/schemas/favorite.py` | **Independente** | Validação Pydantic garantindo que notas sejam entre 1.0 e 5.0. | [ ] |
| **18** | **Back** | Criar `app/services/favorite_service.py` | **Independente** | Funções de adicionar, listar e excluir no banco SQLite. | [ ] |
| **19** | **Back** | Criar `app/routers/favorites.py` e registrar no `main.py` | **Independente** | Endpoints `POST`, `GET` e `DELETE` criados e visíveis no Swagger `/docs`. | [ ] |
| **20** | **Back** | Teste no Swagger UI (`http://localhost:8000/docs`) | **Independente** | Salvar e listar favoritos diretamente no Swagger. | [ ] |
| **21** | **Front** | Atualizar `src/services/api.ts` e ligar telas | **BLOQUEADO: Depende dos Passos 14, 15 e 19** | Front envia o POST ao salvar no modal e carrega o GET na aba "Minha Lista". | [ ] |
| **22** | **PO** | **HOMOLOGAÇÃO FINAL DO PROJETO** | **BLOQUEADO: Depende do Passo 21** | Executar o roteiro de testes completo abaixo e aprovar a entrega! 🏆 | [ ] |

---

## 🧪 3. Roteiro de Testes para Homologação do PO

Quando o time disser que terminou, o PO deve sentar com a equipe e realizar estes 4 testes práticos:

### 🎯 Teste 1: Busca e Catálogo em Tempo Real
1. Acesse `http://localhost:5173`.
2. Digite `Spider-Man` no campo de busca e clique em **Pesquisar**.
3. **Critério de Aceitação**: Devem aparecer filmes do Homem-Aranha com imagens, sinopse e nota.

### 🎯 Teste 2: Salvar no Diário com Avaliação
1. No primeiro filme retornado, clique em **Adicionar ao Diário**.
2. No modal:
   - Clique na **5ª estrela** (deve pintar 5 estrelas de amarelo).
   - Defina o status como **"Já Assistido"**.
   - Digite o comentário: *"Clássico excelente!"*.
   - Clique em **Salvar no Diário**.
3. **Critério de Aceitação**: O modal deve fechar e o filme deve indicar que já está salvo.

### 🎯 Teste 3: Persistência no Banco (Teste do F5)
1. Clique na aba superior **"Minha Lista"**.
2. Verifique se o filme salvo aparece com as 5 estrelas e o comentário.
3. Agora aperte a tecla **F5** no teclado para recarregar toda a página do navegador.
4. **Critério de Aceitação**: O filme **não pode sumir**! Se continuar lá, significa que o SQLite gravou com sucesso no disco.

### 🎯 Teste 4: Remoção do Diário
1. Na aba "Minha Lista", clique no botão **Remover** (ícone de lixeira) do filme.
2. **Critério de Aceitação**: O filme deve sumir da tela imediatamente e a lista deve voltar a exibir o estado vazio.
