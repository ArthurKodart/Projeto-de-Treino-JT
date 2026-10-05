"""
CineTech - Backend Inicial (Ponto de Partida)
Este é o único arquivo fornecido. Seu objetivo inicial é apenas verificar se o servidor roda.
Todo o restante (routers, services, schemas e banco de dados) deve ser criado pela equipe
seguindo o guia em: docs/2_PRD_BACKEND.md
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="CineTech API",
    description="API do CineTech - Desenvolvida pelo time do Jovem Tech",
    version="0.1.0"
)

# CORS liberado para o Frontend (React/Vite na porta 5173)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def health_check():
    return {
        "status": "online",
        "message": "Servidor CineTech rodando! Agora siga as instruções em docs/2_PRD_BACKEND.md para construir a API."
    }
