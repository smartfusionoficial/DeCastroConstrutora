# 🏗️ De Castro Construtora - Execução no Windows

## 📋 Pré-requisitos

1. **Node.js** (versão 18 ou superior)
   - Download: https://nodejs.org/
   - Escolha a versão LTS (recomendada)

2. **Git** (opcional, para clonar o repositório)
   - Download: https://git-scm.com/

## 🚀 Como executar o projeto

### Opção 1: Execução Automática (Recomendada)

1. **Abra o Prompt de Comando como Administrador**
2. **Navegue até a pasta do projeto:**
   ```cmd
   cd caminho\para\decastro-reorganized\frontend
   ```
3. **Execute o script automático:**
   ```cmd
   start-windows.bat
   ```

### Opção 2: Execução Manual

1. **Abra o Prompt de Comando**
2. **Navegue até a pasta frontend:**
   ```cmd
   cd caminho\para\decastro-reorganized\frontend
   ```
3. **Instale as dependências:**
   ```cmd
   npm install
   ```
4. **Inicie o servidor:**
   ```cmd
   npm run dev -- --config vite.config.windows.js
   ```

## 🌐 Acessando o site

Após executar qualquer uma das opções acima:

- **URL Local:** http://localhost:5173
- **URL da Rede:** http://SEU_IP:5173 (para acessar de outros dispositivos)

O navegador deve abrir automaticamente. Se não abrir, copie e cole a URL no seu navegador.

## 🔧 Solução de Problemas

### Página em branco no navegador

1. **Limpe o cache do navegador:**
   - Pressione `Ctrl + Shift + R` para forçar atualização
   - Ou pressione `F12`, clique com botão direito no ícone de atualizar e escolha "Esvaziar cache e recarregar"

2. **Verifique o console do navegador:**
   - Pressione `F12` para abrir as ferramentas de desenvolvedor
   - Vá na aba "Console" e veja se há erros

3. **Tente uma porta diferente:**
   ```cmd
   npm run dev -- --port 3000 --config vite.config.windows.js
   ```

### Erro "comando não encontrado"

- Certifique-se de que o Node.js está instalado corretamente
- Reinicie o Prompt de Comando após instalar o Node.js
- Verifique se o Node.js está no PATH do sistema

### Erro de permissão

- Execute o Prompt de Comando como Administrador
- Ou use PowerShell como Administrador

## 📁 Estrutura do Projeto

```
frontend/
├── src/                    # Código fonte
│   ├── components/         # Componentes React
│   ├── pages/             # Páginas do site
│   ├── assets/            # Imagens e recursos
│   └── App.jsx            # Componente principal
├── public/                # Arquivos públicos
├── package.json           # Dependências do projeto
├── vite.config.js         # Configuração padrão
├── vite.config.windows.js # Configuração para Windows
└── start-windows.bat      # Script de inicialização
```

## 🛠️ Comandos Úteis

```cmd
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Fazer build para produção
npm run build

# Visualizar build de produção
npm run preview

# Limpar cache do npm
npm cache clean --force
```

## 📞 Suporte

Se continuar com problemas:

1. Verifique se todas as dependências estão instaladas
2. Tente deletar a pasta `node_modules` e executar `npm install` novamente
3. Certifique-se de estar na pasta `frontend` ao executar os comandos
4. Verifique se não há antivírus bloqueando o Node.js

---

**Desenvolvido para De Castro Construtora** 🏢
