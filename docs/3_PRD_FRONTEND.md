# ⚛️ PRD Técnico: Frontend (React + TypeScript + Vite)
> **Foco**: Time de Frontend  
> **Missão**: Construir uma interface web moderna, fluida e responsiva do zero, consumindo a API FastAPI e gerenciando estados locais com React.

---

## 📂 1. Estrutura de Arquivos que VOCÊS Devem Criar

O repositório foi entregue apenas com a configuração básica do Vite (`package.json`, `index.html`, `index.css` e um `src/App.tsx` inicial).
A equipe de Frontend deve criar as pastas e arquivos abaixo dentro de `frontend/src/`:

```text
frontend/src/
├── App.tsx                     # [Já existe] Ponto de montagem principal das abas
├── index.css                   # [Já existe] Estilos e tema escuro moderno
├── main.tsx                    # [Já existe] Inicialização do React
│
├── types/                      # 📁 PASTA A CRIAR: Tipagem TypeScript
│   └── index.ts                # 📄 ARQUIVO A CRIAR: Interfaces Movie, FavoriteItem
│
├── services/                   # 📁 PASTA A CRIAR: Camada de Comunicação HTTP & Mock
│   ├── mockData.ts             # 📄 ARQUIVO A CRIAR: Dados falsos de filmes para não travar no Dia 1
│   └── api.ts                  # 📄 ARQUIVO A CRIAR: Funções de fetch() para chamar o Backend
│
├── components/                 # 📁 PASTA A CRIAR: Componentes Visuais Reutilizáveis
│   ├── Navbar.tsx              # 📄 ARQUIVO A CRIAR: Barra superior com abas (Catálogo / Minha Lista)
│   ├── MovieCard.tsx           # 📄 ARQUIVO A CRIAR: Card visual do filme com pôster e botão
│   └── ReviewModal.tsx         # 📄 ARQUIVO A CRIAR: Janela flutuante para nota e resenha
│
└── pages/                      # 📁 PASTA A CRIAR: Telas Principais da Aplicação
    ├── CatalogPage.tsx         # 📄 ARQUIVO A CRIAR: Barra de busca e grid de filmes
    └── MyListPage.tsx          # 📄 ARQUIVO A CRIAR: Lista de filmes favoritados e botão de excluir
```

---

## 🏗️ 2. Estratégia de Desenvolvimento Paralelo (Sem Bloqueios)

Para não ficar de braços cruzados esperando o time de Backend terminar os endpoints:
1. **No Dia 1**: Crie o arquivo `src/services/mockData.ts` contendo 3 filmes fictícios.
2. Monte a **Navbar**, os **Cards** e a **Tela de Catálogo** usando esses dados mockados.
3. Toda a estética, botões, responsividade e layout podem ser construídos e validados antes mesmo de o Backend estar pronto!
4. Quando o Backend avisar que o endpoint está no ar, basta trocar o mock pela chamada real no `src/services/api.ts`.

---

## 📋 3. Tabela de Execução Sequencial (Checklist do Frontend)

Siga esta ordem exata para construir a interface:

| Ordem | Pasta / Arquivo a Criar | O que deve ser feito? | Dependência | Status |
| :---: | :--- | :--- | :--- | :---: |
| **F01** | `frontend/` | Executar `npm install` no terminal para baixar as dependências. | Nenhuma | [ ] |
| **F02** | `src/types/index.ts` | Criar as interfaces TypeScript: `Movie`, `FavoriteItem` e `CreateFavoritePayload`. | F01 | [ ] |
| **F03** | `src/services/mockData.ts` | Criar lista de filmes e favoritos de teste para usar no desenvolvimento. | F02 | [ ] |
| **F04** | `src/components/Navbar.tsx` | Criar o cabeçalho com logo do CineTech e botões para alternar as abas ("Catálogo" e "Minha Lista"). | F01 | [ ] |
| **F05** | `src/components/MovieCard.tsx` | Criar o card visual com capa do filme, título, gêneros, nota e botão "Adicionar ao Diário". | F02 | [ ] |
| **F06** | `src/pages/CatalogPage.tsx` | Criar a página de busca com input de texto, botão de pesquisar e renderização do grid de `MovieCard`. | F05 e F03 | [ ] |
| **F07** | `src/App.tsx` | Atualizar o `App.tsx` para exibir a `Navbar` e a `CatalogPage`, testando a visualização no navegador. | F04 e F06 | [ ] |
| **F08** | `src/services/api.ts` | Implementar `searchMovies(query)` com `fetch()` chamando `http://localhost:8000/api/movies/search`. | F02 | [ ] |
| **F09** | **INTEGRAÇÃO SPRINT 1** | Conectar a `CatalogPage` com o `api.searchMovies`. Testar busca real com o backend rodando! 🚀 | F08 e Backend B06 | [ ] |
| **F10** | `src/components/ReviewModal.tsx` | Criar o modal com seletor de 1 a 5 estrelas, select de status ("assistido"/"quero_assistir") e campo de resenha. | F02 | [ ] |
| **F11** | `src/pages/MyListPage.tsx` | Criar a tela que lista os favoritos salvos com suas notas e botão de excluir. | F02 | [ ] |
| **F12** | `src/services/api.ts` | Implementar as funções `getFavorites()`, `addFavorite(payload)` e `removeFavorite(id)`. | F08 | [ ] |
| **F13** | **INTEGRAÇÃO SPRINT 2** | Integrar o `ReviewModal` e a `MyListPage` com o backend para salvar e excluir filmes no banco. | F12 e Backend B13 | [ ] |

---

## 🤖 4. Guia de Prompts para Vibe Coding

Ao pedir para a Inteligência Artificial gerar ou aprimorar os arquivos, utilize estes prompts:

### Prompt para Tarefa F02 (`src/types/index.ts`):
> *"Crie um arquivo de tipos TypeScript `index.ts` para o projeto CineTech contendo: 1) interface `Movie` com id (number), title (string), summary (string), image (string opcional), rating (number opcional), genres (string[]); 2) interface `FavoriteItem` com id, movie_id, title, poster_url, user_rating (number), status ('assistido' | 'quero_assistir'), notes (string opcional); 3) interface `CreateFavoritePayload` sem o id inicial."*

### Prompt para Tarefa F04 (`src/components/Navbar.tsx`):
> *"Crie um componente `Navbar` em React com TypeScript que recebe as props: `activeTab: 'catalog' | 'mylist'`, `setActiveTab` e `favoritesCount: number`. Exiba o logo 'CineTech' e dois botões de navegação estilizados com ícones do lucide-react (Film, Clapperboard, BookmarkCheck) e badge com o número de favoritos."*

### Prompt para Tarefa F05 (`src/components/MovieCard.tsx`):
> *"Crie o componente `MovieCard.tsx` em React com TypeScript. Ele deve receber `movie: Movie`, `onOpenReview` e `isFavorited: boolean`. Mostre a imagem do pôster (com placeholder se não houver), badge de avaliação com estrela no canto da imagem, título, tags de gêneros e botão de 'Adicionar ao Diário' com ícone PlusCircle ou Check."*

### Prompt para Tarefa F10 (`src/components/ReviewModal.tsx`):
> *"Crie um modal em React com TypeScript chamado `ReviewModal.tsx`. Ele deve abrir quando um filme for selecionado para salvar. Deve conter: nome do filme, seletor interativo de 1 a 5 estrelas clicáveis (ícones Star que mudam de cor ao clicar), select para 'Já Assistido' ou 'Quero Assistir', campo textarea para resenha pessoal e botões Cancelar e Salvar."*

### Prompt para Tarefa F08 e F12 (`src/services/api.ts`):
> *"Crie o módulo `api.ts` usando fetch() no TypeScript para se comunicar com o backend FastAPI em `http://localhost:8000/api`: 1) `searchMovies(query: string)` chamando `/movies/search?q={query}`; 2) `getFavorites()` chamando `/favorites`; 3) `addFavorite(payload)` com POST JSON; 4) `removeFavorite(id)` com DELETE `/favorites/{id}`. Trate erros e inclua tipagem completa."*

---

## ⚡ 5. Comandos para Executar o Frontend

```bash
cd frontend

# 1. Instalar dependências:
npm install

# 2. Rodar o servidor de desenvolvimento:
npm run dev
```
> Aplicação no navegador: **`http://localhost:5173`**
