# aps pointer 3.2 — open demo

<img width="1913" height="823" alt="Screenshot_2" src="https://github.com/user-attachments/assets/5d9ca0d5-d7d7-4dc6-bed0-4f9612ff2375" />

demonstração pública e independente de um dashboard para monitoramento de dispositivos ip via snmp em uma rede interna.

> **Importante:** este repositório não contém dados, credenciais, endereços, nomes de unidades, logs ou qualquer outra informação do ambiente de produção que originou o projeto.

## sobre o projeto
 
baseado na ideia de monitoramento gerenciável via snmp, ao perceber que a empresa de exemplo não tinha nenhum tipo de acompanhamento para com os materiais.

### recursos disponíveis

- dashboard responsivo para desktop, TV e monitores grandes 
- visão geral de APs online, instáveis e offline
- filtros por status e fabricante (tipo de equipamento, etc.)
- pesquisa por AP, fabricante, setor, unidade e IP de documentação
- seleção e desseleção de unidades
- latência e perda de pacotes simuladas
- interface 100% frontend, sem backend

## Segurança e privacidade

Esta versão foi construída especificamente para publicação pública.

- Não contém IPs reais
- Não contém credenciais ou senhas
- Não contém SSIDs reais
- Não contém nomes reais de lojas, filiais ou setores internos
- Não contém histórico ou logs do ambiente original
- Não executa PowerShell
- Não envia ping
- Não acessa dispositivos, servidores ou APIs
- Não depende da rede corporativa

os endereços exibidos usam `192.0.2.0/24` (**TEST-NET-1**), bloco reservado para documentação e exemplos.

## executar localmente

não há instalação ou dependências.

1. clone ou baixe este repositório.
2. abra `index.html` em qualquer navegador para executar o css.

```text
APS-Pointer-3.2-GitHub/
├── index.html
├── assets/
│   ├── app.js
│   └── style.css
├── README.md
├── SECURITY.md
├── LICENSE
└── .gitignore
```

## Versão
**3.2 — Open Demo**

## licença

Distribuído sob a licença MIT. Consulte `LICENSE`.
