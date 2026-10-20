# Pack Estética con Impacto

Landing page estática em espanhol para os packs **Elegance + Clean**. As 46 imagens usadas no site estão na pasta `assets`, então o projeto é independente da página original.

## Visualizar

Abra `index.html` no navegador ou execute:

```bash
node preview.mjs
```

Depois, acesse `http://127.0.0.1:3000/`.

## Publicar

Envie o conteúdo desta pasta para um repositório GitHub e importe o repositório na Vercel como site estático. Não há etapa de build nem dependências npm.

## Checkout

O botão final já tem o design e a interação prontos. Enquanto não houver URL, ele mostra um aviso curto ao clicar e permanece na página. Quando tiver o checkout, edite a constante no começo de `script.js`:

```js
const CHECKOUT_URL = 'https://link-do-checkout-aqui';
```

Os demais botões da página levam até a seção da oferta.
