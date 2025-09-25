# 🚀 Execução Rápida no Windows

## ⚡ Início Rápido

### 1️⃣ Pré-requisitos
- **Node.js 18+** instalado: https://nodejs.org/

### 2️⃣ Execução Automática

**Opção A - Prompt de Comando:**
```cmd
cd frontend
start-windows.bat
```

**Opção B - PowerShell:**
```powershell
cd frontend
.\start-windows.ps1
```

### 3️⃣ Acesso
- **URL:** http://localhost:5173
- O navegador abrirá automaticamente

---

## 🔧 Solução de Problemas

### Página em branco?
1. Pressione `Ctrl + Shift + R` no navegador
2. Ou pressione `F12` → Console → veja erros

### Erro de comando?
- Instale o Node.js: https://nodejs.org/
- Reinicie o Prompt/PowerShell

### Erro de permissão?
- Execute como Administrador

---

## 📁 Estrutura
```
decastro-reorganized/
├── frontend/              ← Entre nesta pasta
│   ├── start-windows.bat  ← Execute este arquivo
│   ├── start-windows.ps1  ← Ou este (PowerShell)
│   └── package.json
└── backend/
```

---

## 🆘 Comandos Manuais

Se os scripts automáticos não funcionarem:

```cmd
cd frontend
npm install
npm run dev -- --config vite.config.windows.js
```

---

**✅ Pronto! O site estará rodando em http://localhost:5173**
