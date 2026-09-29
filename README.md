# APS Pointer 3.2 — Open Demo

Demonstração pública e independente de um dashboard de monitoramento de Access Points.

> **Importante:** este repositório não contém dados, credenciais, endereços, nomes de unidades, logs ou qualquer outra informação do ambiente de produção que originou o projeto.

## Sobre o projeto

O APS Pointer foi criado para apresentar, de forma visual e centralizada, o estado de pontos de acesso distribuídos entre diferentes unidades. Esta edição é uma **demo segura para portfólio e GitHub**: ela reproduz o conceito da interface usando somente dados simulados e não realiza qualquer comunicação de rede.

### Recursos demonstrados

- Dashboard responsivo para desktop, TV e monitores grandes
- Visão geral de APs online, instáveis e offline
- Filtros por status e fabricante
- Pesquisa por AP, fabricante, setor, unidade e IP de documentação
- Seleção e desseleção de unidades
- Painel detalhado por unidade
- Latência e perda de pacotes simuladas
- Atualização automática simulada a cada 60 segundos
- Interface 100% frontend, sem backend

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

Os endereços exibidos usam `192.0.2.0/24` (**TEST-NET-1**), bloco reservado para documentação e exemplos.

## Executar localmente

Não há instalação ou dependências.

1. Clone ou baixe este repositório.
2. Abra `index.html` em um navegador moderno.

Também é possível publicar diretamente com **GitHub Pages**, pois a aplicação é totalmente estática.

## Estrutura

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

## Escopo desta edição

A edição publicada aqui é uma demonstração do conceito e da experiência de uso. A implementação de produção possui integrações e rotinas operacionais que não fazem parte deste repositório público.

## Versão

**3.2 — Open Demo**

## Licença

Distribuído sob a licença MIT. Consulte `LICENSE`.
