# ⚡ Instalação Rápida - Windows

## 🚀 **Solução Imediata para o Erro ERESOLVE**

### **Comando Único (Recomendado):**
```powershell
npm install --legacy-peer-deps
```

### **Ou use PNPM (Mais Eficiente):**
```powershell
npm install -g pnpm
pnpm install
```

### **Ou use Yarn:**
```powershell
npm install -g yarn
yarn install
```

## 📋 **Passo a Passo Completo:**

### **1. Abrir PowerShell como Administrador**
- Pressione `Win + X`
- Selecione "Windows PowerShell (Admin)"

### **2. Navegar para o Projeto**
```powershell
cd C:\Binance\De_Castro_Construtora\decastro-construtora-clone
```

### **3. Limpar Cache (Se Necessário)**
```powershell
npm cache clean --force
```

### **4. Instalar Dependências**
```powershell
# Opção 1 - NPM com Legacy Peer Deps (RECOMENDADO)
npm install --legacy-peer-deps

# Opção 2 - PNPM (Mais Rápido)
npm install -g pnpm
pnpm install

# Opção 3 - Yarn (Mais Estável)
npm install -g yarn
yarn install
```

### **5. Executar o Projeto**
```powershell
# Com NPM
npm run dev

# Com PNPM
pnpm dev

# Com Yarn
yarn dev
```

## ✅ **Resultado Esperado:**
```
  VITE v6.3.5  ready in 1234 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

## 🔧 **Se Ainda Houver Problemas:**

### **Limpeza Completa:**
```powershell
# Remover node_modules e package-lock
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json -ErrorAction SilentlyContinue
Remove-Item yarn.lock -ErrorAction SilentlyContinue
Remove-Item pnpm-lock.yaml -ErrorAction SilentlyContinue

# Reinstalar
npm install --legacy-peer-deps
```

### **Verificar Versão do Node.js:**
```powershell
node --version
# Deve ser 18.x ou 20.x
```

### **Atualizar NPM:**
```powershell
npm install -g npm@latest
```

## 🌐 **Site Online (Sempre Funcionando):**
Se tiver problemas locais, o site está sempre disponível:
**https://wnqkbpue.manus.space**

## 📞 **Suporte Rápido:**
- **Erro resolvido**: Versões do React corrigidas para compatibilidade
- **Arquivo .npmrc**: Configurado para resolver conflitos automaticamente
- **Múltiplas opções**: NPM, PNPM ou Yarn

---

**✅ Agora deve funcionar perfeitamente no Windows!**

