# Frases

Um web app simples que exibe frases aleatórias salvas em um banco de dados do Firebase Firestore.

![Screenshot do site com a frase "Deus não joga dados"](https://user-images.githubusercontent.com/37254797/168518801-0bf22611-31d1-467a-be77-4ae3b8671a07.png)

## Visão Geral

Desenvolvi este projeto originalmente para me familiarizar com o ecossistema do Firebase. O código foi escrito com TypeScript e usa as SDKs modulares do Firebase (Firestore Lite) para manter o pacote final bem leve. O visual é baseado em um dos exemplos do Bootstrap, usando o Vite e o PurgeCSS durante a build para remover todo o CSS que não é utilizado na página.

Apesar de ser uma página estática que poderia ficar no GitHub Pages, preferi hospedar direto no Firebase Hosting para manter tudo integrado no mesmo lugar. Você pode acessar o site em:

<https://dfrases.web.app>

## Funcionalidades

- Busca frases aleatórias diretamente no Firestore Lite
- Animação suave de transição ao trocar de frase
- Bundle otimizado com remoção automática de estilos não usados do Bootstrap

## Build

Para instalar as dependências e gerar a build de produção localmente:

```sh
yarn
yarn build
```

Para rodar o servidor de desenvolvimento local:

```sh
yarn dev
```

## Licença

O código está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
