# 🪟 Guia de Instalação - Windows

## 🚀 **Instalação Rápida (Recomendada)**

### **Pré-requisitos:**
1. **Node.js 18.x ou 20.x** - [Download aqui](https://nodejs.org/)
2. **Git** - [Download aqui](https://git-scm.com/)

### **Comandos no PowerShell/CMD:**

```powershell
# 1. Clonar o repositório
git clone https://github.com/borgh/decastro-construtora-clone.git

# 2. Navegar para a pasta do projeto
cd decastro-construtora-clone

# 3. SOLUÇÃO PARA O ERRO - Usar PNPM (Mais Eficiente)
npm install -g pnpm
pnpm install

# 4. Executar o projeto
pnpm dev
```

## 🔧 **Soluções Alternativas:**

### **Opção A - NPM com Correções:**
```powershell
cd decastro-construtora-clone
npm cache clean --force
del /s /q node_modules
del package-lock.json
npm install --legacy-peer-deps
npm run dev
```

### **Opção B - Yarn:**
```powershell
npm install -g yarn
cd decastro-construtora-clone
yarn cache clean
rmdir /s node_modules
del yarn.lock
yarn install
yarn dev
```

### **Opção C - NPM Forçado:**
```powershell
cd decastro-construtora-clone
npm install --force
npm run dev
```

## ✅ **Verificação de Funcionamento:**

Após executar qualquer uma das soluções, você deve ver:
```
Local:   http://localhost:5173/
Network: use --host to expose
```

Acesse `http://localhost:5173/` no navegador.

## 🌐 **Site Online (Sempre Funcionando):**

Se tiver problemas com a instalação local, o site está sempre disponível online:
**https://wnqkbpue.manus.space**

## 📋 **Estrutura do Projeto:**

```
decastro-construtora-clone/
├── src/                      # Código fonte React
│   ├── components/           # Componentes React
│   ├── pages/               # Páginas do site
│   ├── assets/              # Imagens e recursos
│   └── hooks/               # Hooks customizados
├── public/                  # Arquivos públicos
├── package.json             # Dependências (CORRIGIDO)
├── .npmrc                   # Configurações NPM (NOVO)
├── README.md                # Documentação principal
├── SOLUCAO_ERRO_NPM.md     # Guia de solução de erros
└── INSTALACAO_WINDOWS.md   # Este arquivo
```

## 🛠️ **Comandos Úteis:**

### **Desenvolvimento:**
```powershell
pnpm dev          # Executar em modo desenvolvimento
pnpm build        # Build para produção
pnpm preview      # Visualizar build de produção
```

### **Limpeza (se necessário):**
```powershell
# Limpar tudo e reinstalar
rmdir /s node_modules
del package-lock.json
del pnpm-lock.yaml
pnpm install
```

## 🎯 **Funcionalidades do Site:**

- ✅ **Página inicial** com hero section animado
- ✅ **Empreendimentos** com páginas individuais
- ✅ **Sistema de notícias** com filtros funcionais
- ✅ **Página sobre** com timeline da empresa
- ✅ **Contato** com formulários
- ✅ **WhatsApp** integrado (botões funcionais)
- ✅ **Design responsivo** para mobile/desktop
- ✅ **Animações modernas** e efeitos parallax

## 🆘 **Suporte:**

Se ainda tiver problemas:

1. **Verifique a versão do Node.js:**
   ```powershell
   node --version
   # Deve ser 18.x ou 20.x
   ```

2. **Atualize o npm:**
   ```powershell
   npm install -g npm@latest
   ```

3. **Use PNPM (recomendado):**
   ```powershell
   npm install -g pnpm
   pnpm install
   ```

4. **Acesse o site online:** https://wnqkbpue.manus.space

---

**✅ O projeto funciona perfeitamente! As correções foram aplicadas para resolver os conflitos de dependências.**

