# Frontend - Portfólio

Aplicação front-end do portfólio profissional, desenvolvida com React e Vite.

## Scripts disponíveis

- `npm run dev` - inicia o servidor de desenvolvimento.
- `npm run build` - gera o build de produção.
- `npm run preview` - executa preview local do build.
- `npm run lint` - executa verificação de lint.

## Tecnologias

- React
- Vite
- React Router
- i18next / react-i18next
- React Icons
- EmailJS

## Estrutura principal

```
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── locales/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Configuração do formulário de contato

Atualize o arquivo `src/services/email.js` com suas credenciais do EmailJS:

- `YOUR_SERVICE_ID`
- `YOUR_TEMPLATE_ID`
- `YOUR_PUBLIC_KEY`
