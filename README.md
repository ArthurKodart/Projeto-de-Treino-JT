# 🍿 CineTech — Projeto de Treinamento | Jovem Tech
> **Parceria**: EMAP / Porto do Itaqui & FAPEMA  
> **Metodologia**: Vibe Coding com Senso Crítico | Arquitetura em Camadas

Bem-vindo ao repositório de treino prático do **CineTech**! Este projeto foi projetado como um "quebra-cabeça pedagógico" para que você e sua equipe aprendam o fluxo real de desenvolvimento de software fullstack (Backend com FastAPI + Frontend com React/TypeScript).

---

## 🚨 ATENÇÃO EQUIPES: Como Iniciar o Projeto (Criando o Repositório da sua Equipe)

Este repositório (`https://github.com/ArthurKodart/Projeto-de-Treino-JT.git`) é o **repositório modelo / template**. Como **duas equipes** farão este mesmo desafio em paralelo:

> **⚠️ CADA EQUIPE DEVE CRIAR SEU PRÓPRIO REPOSITÓRIO NO GITHUB!**  
> Não enviem código para o repositório modelo. Cada equipe terá seu próprio GitHub para que os membros colaborem entre si.

### Passo a passo para a equipe:
1. **O PO ou um dos integrantes** deve criar um novo repositório no seu próprio perfil do GitHub (ex: `cinetech-equipe-1` ou `cinetech-equipe-2`).
2. Adicione os outros membros da sua equipe como **Colaboradores** (*Settings > Collaborators* no GitHub).
3. Clone este repositório modelo para o seu computador:
   ```bash
   git clone https://github.com/ArthurKodart/Projeto-de-Treino-JT.git
   cd Projeto-de-Treino-JT
   ```
4. Troque o link do repositório remoto para apontar para o GitHub da **sua equipe**:
   ```bash
   git remote set-url origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO-DA-EQUIPE.git
   git push -u origin main
   ```
5. Agora todos os integrantes da sua equipe podem clonar e trabalhar no repositório oficial de vocês!

*(Instruções detalhadas sobre branches, commits e colaboração estão no [Guia Git & Monorepo](./docs/4_GUIA_MONOREPO_GIT.md)).*

---

## 📚 Central de Documentação (Pasta `docs/`)

O projeto possui guias específicos para cada papel da equipe. Acesse o documento correspondente à sua função:

| Documento | Destinado a | O que contém |
| :--- | :--- | :--- |
| 👉 **[1. PRD Geral](./docs/1_PRD_GERAL.md)** | **Todo o Time** | Visão do produto, vídeos rápidos de estudo (< 10 min) e contratos JSON. |
| 👉 **[2. PRD Backend](./docs/2_PRD_BACKEND.md)** | **Time de Backend** | Arquitetura em 4 camadas, endpoints, Swagger, banco SQLite e prompts para IA. |
| 👉 **[3. PRD Frontend](./docs/3_PRD_FRONTEND.md)** | **Time de Frontend** | Componentes, telas, como usar mock para não travar e prompts para IA. |
| 👉 **[4. Guia Git & Monorepo](./docs/4_GUIA_MONOREPO_GIT.md)** | **Todo o Time** | Como trabalhar em equipe no mesmo repositório, branches, commits e merges sem conflito. |
| 👉 **[5. Acompanhamento do PO](./docs/5_ACOMPANHAMENTO_PO.md)** | **Product Owner (PO)** | Matriz de dependências (o que bloqueia o quê), checklist das 2 semanas e roteiro de testes. |

---

## 💡 Como Visualizar os Documentos na sua IDE
1. Abra qualquer arquivo `.md` da pasta `docs/`.
2. Pressione o atalho: **`Ctrl + Shift + V`** (ou `Ctrl + K` seguido de `V` para abrir lado a lado).
3. Todas as tabelas, links e checklists serão exibidos com formatação rica e legível.

---

## ⚡ Comandos Rápidos para Rodar e Testar

### 1. Backend (Terminal 1)
```bash
cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```
- **Swagger Interativo**: Acesse [http://localhost:8000/docs](http://localhost:8000/docs) para testar os endpoints sem precisar do front!

### 2. Frontend (Terminal 2)
```bash
cd frontend
npm install
npm run dev
```
- **Aplicação no Ar**: Acesse [http://localhost:5173](http://localhost:5173) no navegador.
- *Nota*: Se o backend ainda não estiver rodando, o CineTech ativa automaticamente o **Modo Mock**, permitindo que o time de Front desenvolva telas e layouts sem ficar bloqueado!
