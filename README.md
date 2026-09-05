# Fyvi Soluções Tecnológicas

Site institucional da Fyvi preparado para deploy nativo no Vercel com Next.js.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel

## Rodar localmente

Recomendado: Node.js 24.

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Validar produção localmente

```bash
npm run build
npm run start
```

## Deploy no Vercel

1. Envie este projeto para um repositório GitHub.
2. No Vercel, clique em **Add New → Project**.
3. Importe o repositório da Fyvi.
4. Confirme **Framework Preset: Next.js**.
5. Deixe **Root Directory** como `./`.
6. Deixe Build Command, Output Directory e Install Command nos valores automáticos.
7. Em Node.js Version, use **24.x**.
8. Clique em **Deploy**.

A homepage é prerenderizada pelo Next.js e entregue pela infraestrutura do Vercel, sem depender de um servidor web permanente como no deploy anterior.

## Domínio próprio

Depois do primeiro deploy:

1. Abra o projeto no Vercel.
2. Vá em **Settings → Domains**.
3. Adicione o domínio desejado.
4. Siga os registros DNS mostrados pelo Vercel.

## Variáveis de ambiente

A versão atual do site não exige variáveis de ambiente.

## Contato configurado

Os botões do site direcionam para o WhatsApp da Fyvi: `+55 13 99770-5812`.
