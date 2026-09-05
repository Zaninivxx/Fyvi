# Deploy da Fyvi no Vercel

## 1. Atualizar o GitHub

Substitua os arquivos do repositório pelos arquivos desta versão e envie para a branch principal.

Se usar Git pelo terminal:

```bash
git add .
git commit -m "chore: migrate hosting to Vercel"
git push origin main
```

> O arquivo `railway.json` e a camada Vinext/Vite/Worker foram removidos de propósito.

## 2. Criar o projeto no Vercel

1. Entre no Vercel.
2. Clique em **Add New → Project**.
3. Importe o repositório GitHub da Fyvi.
4. Use estas configurações:
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: **Default / automático** (`npm run build`)
   - Output Directory: **Default / automático** (`.next`)
   - Install Command: **Default / automático** (`npm install` ou `npm ci`)
   - Node.js Version: **24.x**
5. Não é necessário cadastrar variável de ambiente na versão atual.
6. Clique em **Deploy**.

## 3. Conferir antes de trocar o domínio

Teste a URL `*.vercel.app` gerada pelo Vercel e confira:

- abertura da home;
- animações;
- imagens do antes/depois;
- slider de comparação;
- botão do WhatsApp;
- link do MetroReport;
- versão mobile.

Só depois disso aponte o domínio oficial para o Vercel.

## 4. Conectar o domínio

No projeto do Vercel:

1. Abra **Settings → Domains**.
2. Adicione o domínio da Fyvi.
3. Copie os registros DNS indicados pelo Vercel para o provedor do domínio.
4. Aguarde o Vercel marcar o domínio como configurado.

Você pode manter o Render ativo durante a migração e removê-lo somente depois que o domínio estiver funcionando no Vercel.

## 5. Próximos deploys

Depois que o repositório estiver conectado ao Vercel, cada novo `git push` na branch de produção gera um novo deploy automaticamente.
