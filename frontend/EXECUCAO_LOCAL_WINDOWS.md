# 🚀 Guia de Execução Local - Windows

## ❌ **PROBLEMA IDENTIFICADO**

O erro que você está enfrentando acontece porque você está tentando executar o projeto na **pasta raiz**, mas o projeto React está configurado para rodar **diretamente na raiz do repositório**.

### **Erro Comum:**
```
npm error Could not read package.json: Error: ENOENT: no such file or directory
```

## ✅ **SOLUÇÃO CORRETA**

### **1. Navegue para o Diretório Correto:**
```powershell
cd C:\Binance\De_Castro_Construtora\decastro-construtora-clone
```

### **2. Instale as Dependências (Primeira vez):**
```powershell
npm install --legacy-peer-deps
```

### **3. Execute o Projeto:**
```powershell
npm start
```
**OU**
```powershell
npm run dev
```

## 🎯 **Comandos Disponíveis**

| Comando | Descrição |
|---------|-----------|
| `npm start` | Inicia servidor de desenvolvimento |
| `npm run dev` | Mesmo que start (alias) |
| `npm run build` | Gera build de produção |
| `npm run preview` | Visualiza build local |
| `npm run lint` | Verifica código |

## ✅ **Resultado Esperado**

Quando executar corretamente, você verá:
```
  VITE v6.3.5  ready in 1234 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

## 🔧 **Se Ainda Houver Problemas**

### **Limpeza Completa:**
```powershell
# Remover node_modules e locks
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item package-lock.json -ErrorAction SilentlyContinue

# Reinstalar
npm install --legacy-peer-deps
```

### **Verificar Estrutura:**
```powershell
# Deve mostrar package.json na raiz
dir package.json
```

## 🌐 **Alternativa Online**

Se continuar com problemas locais, o site está sempre disponível online:
**https://wnqkbpue.manus.space**

## 📁 **Estrutura do Projeto**

```
decastro-construtora-clone/
├── package.json          ← Arquivo principal do NPM
├── src/                  ← Código fonte React
├── public/               ← Arquivos públicos
├── dist/                 ← Build de produção
└── node_modules/         ← Dependências
```

## 💡 **Dica Importante**

**SEMPRE execute os comandos NPM na pasta que contém o arquivo `package.json`!**

