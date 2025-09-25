# 🔧 Solução de Problemas - Windows

## ❌ Erro: "Could not read package.json: Error: ENOENT"

### 🎯 Causa
Você está na pasta errada. O npm precisa estar na pasta `frontend`.

### ✅ Solução

**Opção 1 - Use o script automático (RECOMENDADO):**
1. Vá para a pasta raiz do projeto (onde está este arquivo)
2. Execute: `INICIAR-WINDOWS.bat`

**Opção 2 - Navegação manual:**
```cmd
cd frontend
npm install
npm run dev
```

---

## 📁 Estrutura Correta do Projeto

```
DeCastroConstrutora/                    ← Você deve estar AQUI
├── frontend/                           ← O npm deve rodar AQUI
│   ├── package.json                   ← Arquivo que o npm procura
│   ├── src/
│   └── ...
├── backend/
├── INICIAR-WINDOWS.bat                ← Execute este arquivo
└── README.md
```

---

## 🚀 Passos Corretos para Executar

### 1️⃣ Baixar/Clonar o Projeto
```cmd
git clone https://github.com/smartfusionoficial/DeCastroConstrutora.git
cd DeCastroConstrutora
```

### 2️⃣ Executar o Projeto
```cmd
INICIAR-WINDOWS.bat
```

**OU manualmente:**
```cmd
cd frontend
npm install
npm run dev
```

---

## 🔍 Outros Problemas Comuns

### Erro: "node não é reconhecido"
**Solução:** Instale o Node.js
- Download: https://nodejs.org/
- Escolha a versão LTS
- Reinicie o Prompt após instalar

### Erro: "npm não é reconhecido"
**Solução:** O npm vem com o Node.js
- Reinstale o Node.js
- Certifique-se de marcar "Add to PATH" durante a instalação

### Página em branco no navegador
**Solução:**
1. Pressione `Ctrl + Shift + R` para forçar atualização
2. Abra o console (F12) e veja se há erros
3. Tente acessar: http://localhost:5173

### Erro de permissão
**Solução:**
- Execute o Prompt de Comando como Administrador
- Clique com botão direito no Prompt → "Executar como administrador"

### Porta 5173 já está em uso
**Solução:**
```cmd
cd frontend
npm run dev -- --port 3000
```

---

## 📞 Verificação do Ambiente

Execute estes comandos para verificar se tudo está instalado:

```cmd
node --version
npm --version
```

**Versões recomendadas:**
- Node.js: 18.x ou superior
- npm: 9.x ou superior

---

## 🆘 Se nada funcionar

1. **Delete a pasta `node_modules`** (se existir)
2. **Execute:**
   ```cmd
   cd frontend
   npm cache clean --force
   npm install
   npm run dev
   ```

3. **Ou use o Yarn como alternativa:**
   ```cmd
   npm install -g yarn
   cd frontend
   yarn install
   yarn dev
   ```

---

**✅ Seguindo estes passos, o projeto funcionará perfeitamente no Windows!**
