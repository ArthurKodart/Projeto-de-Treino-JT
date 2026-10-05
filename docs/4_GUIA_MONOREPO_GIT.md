# 🤝 Guia de Trabalho em Equipe no Mesmo Repositório (Git & Monorepo)
> **Objetivo**: Ensinar como Frontend, Backend e PO trabalham juntos no mesmo projeto sem apagar o código do colega e sem medo de conflitos!

---

## 🚨 0. Passo Inicial Obrigatório: Criando o Repositório da sua Equipe

O repositório oficial do mentor é o modelo/template:  
🔗 `https://github.com/ArthurKodart/Projeto-de-Treino-JT.git`

Como **duas equipes** desenvolverão este projeto em paralelo, cada equipe terá seu próprio GitHub:

1. **O PO ou um dos integrantes da equipe** entra no seu GitHub e clica em **New Repository**.
   - Nome sugerido: `cinetech-equipe-1` (ou `cinetech-equipe-2`).
   - Visibilidade: **Público**.
   - **Não** marque para criar README ou .gitignore (o projeto já tem).
2. Adicione os outros membros da sua equipe como colaboradores:
   - No GitHub do repositório criado: vá em **Settings** $\to$ **Collaborators** $\to$ **Add people**.
3. No terminal do computador, clone o repositório modelo do mentor:
   ```bash
   git clone https://github.com/ArthurKodart/Projeto-de-Treino-JT.git
   cd Projeto-de-Treino-JT
   ```
4. Conecte ao repositório novo da sua equipe:
   ```bash
   git remote set-url origin https://github.com/SEU_USUARIO/NOME_DO_REPO_DA_EQUIPE.git
   git push -u origin main
   ```
5. A partir deste momento, todos os integrantes da equipe farão `git clone`, `git pull` e `git push` no repositório oficial da própria equipe!

---

## 🌳 1. Por que "Monorepo"?

Ter o **Backend** e o **Frontend** na mesma pasta/repositório é chamado de **Monorepo**.
- **A grande vantagem para o time**: Tudo o que o projeto precisa para rodar está em um único lugar.
- **A regra de ouro**:
  - Quem está no Frontend **só mexe nos arquivos dentro da pasta `frontend/`**.
  - Quem está no Backend **só mexe nos arquivos dentro da pasta `backend/`**.
  - O PO e o time em conjunto só alteram a pasta `docs/` e o `README.md`.

Seguindo essa regra simples, **conflitos de código (*merge conflicts*) são praticamente impossíveis**, pois ninguém edita o mesmo arquivo ao mesmo tempo!

---

## 🌿 2. O Fluxo de Branches (Ramificações do Git)

Nunca faça alterações diretamente na branch principal (`main`). Cada frente de trabalho deve ter sua própria branch:

| Branch | Quem usa? | Exemplo de Tarefa |
| :--- | :--- | :--- |
| `main` | Todo o time | Código estável, testado e aprovado pelo PO. |
| `feat/back-catalogo` | Time de Backend | Criar rota de busca e integração com a TVMaze. |
| `feat/back-favoritos` | Time de Backend | Criar banco SQLite e rotas de salvar favorito. |
| `feat/front-telas` | Time de Frontend | Criar páginas de Catálogo e Minha Lista com mock. |
| `feat/front-integracao` | Time de Frontend | Ligar o fetch do front com a API do backend. |

---

## 💻 3. Passo a Passo de Comandos Git no Dia a Dia

### Passo 1: Antes de começar o dia de trabalho
Sempre baixe o que os colegas fizeram:
```bash
git checkout main
git pull origin main
```

### Passo 2: Criar sua branch de trabalho
```bash
# Se você for do Backend:
git checkout -b feat/back-catalogo

# Se você for do Frontend:
git checkout -b feat/front-telas
```

### Passo 3: Salvar seu progresso (Commits Frequentes)
Trabalhou em um arquivo e testou? Salve com uma mensagem clara:
```bash
git add .
git commit -m "feat(back): implementa busca na tvmaze com limpeza de tags html"
```
> **Dica de Mensagem de Commit**:
> - `feat:` para coisas novas (ex: `feat(front): cria componente MovieCard`)
> - `fix:` para correções de erros (ex: `fix(back): corrige cors no main.py`)
> - `docs:` para melhorias na documentação (ex: `docs: atualiza checklist do PO`)

### Passo 4: Enviar seu código para o repositório remoto
```bash
git push -u origin sua-branch
```

---

## ⚡ 4. O Momento da Integração (Front $\times$ Back)

Quando a Sprint estiver terminando:
1. O time de Backend sobe suas mudanças e faz o merge para a branch `main`.
2. O time de Frontend faz `git pull origin main` para receber a pasta `backend/` atualizada.
3. Ambos rodam seus terminais lado a lado:
   - Terminal 1: `uvicorn app.main:app --reload` (na porta 8000)
   - Terminal 2: `npm run dev` (na porta 5173)
4. O Frontend testa se as chamadas do navegador chegam no terminal do Backend.
5. O PO é chamado para a homologação final dos critérios de aceitação!

---

## 🆘 5. Socorro! E se der Conflito de Merge?

Se o Git avisar `CONFLICT (content): Merge conflict in...`:
1. **Não entre em pânico**: O Git nunca apaga código sozinho. Ele apenas marca no arquivo com `<<<<<<< HEAD` e `>>>>>>>`.
2. Abra o arquivo indicado no VS Code. O editor mostrará botões em azul:
   - *"Accept Current Change"* (Manter o seu)
   - *"Accept Incoming Change"* (Manter o do colega)
   - *"Accept Both Changes"* (Manter os dois)
3. Chame o colega que editou aquele arquivo, decidam juntos qual é o código correto, salvem o arquivo e façam um novo commit.
