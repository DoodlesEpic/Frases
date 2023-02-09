# Frases

Um web app que mostra frases. Pegas de um banco de dados Firebase Firestore. O código é escrito usando Javascript vanilla com as SDKs do Firebase. O CSS Bootstrap utilizando de um dos exemplos do site. O projeto utiliza o Vite como bundle para remover CSS não usado do Bootstrap e minificar o JavaScript das SDKs do Firebase.

![Screenshot do site com a frase "Deus não joga dados"](https://user-images.githubusercontent.com/37254797/168518801-0bf22611-31d1-467a-be77-4ae3b8671a07.png)

## Hospedagem

O website é apenas uma página estática então poderia estar no GitHub pages, mas como ele está acessando o banco de dados, mesmo que isso seja apenas um arquivo, eu preferi manter apenas no Firebase Hosting.
<https://dfrases.web.app>

## Build

Para realizar uma build local do projeto:

```sh
yarn
```

```
yarn build
```

## Licença

O código está sob a licença MIT. [LICENSE](LICENSE)

