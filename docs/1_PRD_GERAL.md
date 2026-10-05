# 🎬 Documento de Requisitos de Produto (PRD Geral): CineTech
> **Projeto de Treinamento e Nivelamento Prático (2 Semanas)**  
> **Programa Jovem Tech | Parceria EMAP / Porto do Itaqui & FAPEMA**  
> **Metodologia**: Vibe Coding com Senso Crítico + Arquitetura em Camadas

---

## 📌 1. Visão Geral e Contexto

O **CineTech** é uma plataforma web criada como um projeto-treino para capacitar jovens talentos em desenvolvimento de software fullstack moderno. 

### O que o sistema faz?
1. **Catálogo Global de Filmes & Séries**: O usuário digita qualquer título no campo de busca e a aplicação consulta a **API pública e gratuita da TVMaze**, trazendo pôster, título, sinopse, gêneros e nota.
2. **Diário Pessoal de Avaliações (Minha Lista)**: O usuário pode salvar títulos em sua própria lista, atribuir uma nota pessoal de 1 a 5 estrelas, definir o status (*"Já Assistido"* ou *"Quero Assistir"*) e escrever uma resenha. Esses dados são salvos no banco de dados local da aplicação (**SQLite**).

---

## 📺 2. Pílulas Rápidas de Estudo (Vídeos de até 10 Minutos)

Assistam a estes vídeos rápidos antes de começar o desenvolvimento:

| Tecnologia / Conceito | O que você vai aprender | Link Recomendado (YouTube BR) | Duração |
| :--- | :--- | :--- | :--- |
| **O que é uma API?** | Como dados trafegam na web via JSON e HTTP (GET, POST) | [Código Fonte TV - O que é API?](https://www.youtube.com/watch?v=vGuqKIRWpc0) | ~9 min |
| **FastAPI em Minutos** | Por que usar FastAPI e como o Swagger funciona | [Dunossauro - FastAPI em 5 Minutos](https://www.youtube.com/watch?v=0kO7M_i3mC0) | ~7 min |
| **TypeScript na Prática** | Como a tipagem evita erros bobos no código | [Rocketseat - TypeScript em 8 Minutos](https://www.youtube.com/watch?v=0mYq5LrQN1s) | ~8 min |
| **React & Componentes** | O que são componentes, propriedades e `useState` | [Fernanda Kipper - Entenda React](https://www.youtube.com/watch?v=2msN7j0yHqw) | ~10 min |
| **O que é CORS?** | Por que o navegador bloqueia o Front e como liberar no Back | [Código Fonte TV - O terror do CORS](https://www.youtube.com/watch?v=GZV-FUdeVwE) | ~8 min |

---

## 🏢 3. Divisão de Papéis no Time

| Papel | Integrantes | Foco Principal | Onde Trabalha |
| :--- | :--- | :--- | :--- |
| **Product Owner (PO)** | 1 pessoa | Validação de regras de negócio, testes de aceitação e acompanhamento do cronograma. | Documentos `docs/` e validação no navegador |
| **Time de Backend** | 1 a 2 pessoas | Criar a API FastAPI em 4 camadas, integrar com a TVMaze e salvar no SQLite. | Pasta `backend/` |
| **Time de Frontend** | 1 a 2 pessoas | Criar a interface em React + TypeScript, componentes visuais e chamadas de API. | Pasta `frontend/` |

---

## 📋 4. Contratos de Dados JSON (Alinhamento do Dia 1)

Para que o Front e o Back trabalhem juntos sem travar, este é o formato de dados combinado entre as duas partes:

### A. Objeto de Filme retornado pela busca (`Movie`):
```json
{
  "id": 169,
  "title": "Breaking Bad",
  "summary": "Um professor de química diagnosticado com câncer começa a produzir metanfetamina...",
  "image": "https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg",
  "rating": 9.2,
  "genres": ["Drama", "Crime", "Suspense"]
}
```

### B. Objeto para Salvar Favorito (`POST /api/favorites`):
```json
{
  "movie_id": 169,
  "title": "Breaking Bad",
  "poster_url": "https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg",
  "user_rating": 5.0,
  "status": "assistido",
  "notes": "Série espetacular, melhor final de todos!"
}
```

---

## 🗂️ 5. Navegação pela Documentação

Consulte os guias específicos detalhados:
- 👉 **[Guia Completo do Backend](./2_PRD_BACKEND.md)**
- 👉 **[Guia Completo do Frontend](./3_PRD_FRONTEND.md)**
- 👉 **[Como Trabalhar em Equipe no Mesmo Repositório (Git)](./4_GUIA_MONOREPO_GIT.md)**
- 👉 **[Quadro de Acompanhamento do PO (Checklist & Testes)](./5_ACOMPANHAMENTO_PO.md)**
