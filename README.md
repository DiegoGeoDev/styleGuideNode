# Configuração do Ambiente (Node)

## 1- Criar um servidor http simples

**1.1. Criar o arquivo package.json**

```bash
npm init -y
```

**1.2. Instalar o express**

```bash
npm i express
```

**1.3. Criar o arquivo .gitignore**

Clicar com o botão direito no explorador de arquivos no VS Code e escolher a opção `New File`, nomear o arquivo como `.gitignore`, abrir o arquivo e adicionar o seguinte conteúdo:

```plaintext
/node_modules
```

**1.4. Criar o arquivo serve.js**

Clicar com o botão direito no explorador de arquivos no VS Code e escolher a opção `New File`, nomear o arquivo como `server.js`, abrir o arquivo e adicionar o seguinte conteúdo:

```javascript
const express = require('express');

const app = express();

app.get('/', (req, res) => {
	return res.send('Servidor Simples');
});

const PORT = 3333;

app.listen(PORT, () => {
	console.log('SERVER:', 'RODANDO NA PORTA ' + PORT);
});
```

## 2- Instalar e Configurar o ESLint

```bash
npm i -D eslint
npx eslint --init
```

**2.1. Responder o questionário para criar o arquivo .eslintrc.json**

- How would you like to use ESLint?<br>
  `To check syntax, find problems, and enforce code style`

- What type of modules does your project use?<br>
  `CommonJS (require/exports)`

- Which framework does your project use?<br>
  `None of these`

- Does your project use TypeScript?<br>
  `No`

- Where does your code run?<br>
  `node`

- How would you like to define a style for your project?<br>
  `Use a popular style guide`

- Which style guide do you want to follow?<br>
  `Standard: https://github.com/standard/standard`

- What format do you want your config file to be in?<br>
  `JSON`

**2.2. Instalar os pacotes necessários**

Instalar os pacotes que são apresentados durante a criação do arquivo .eslintrc.json

**2.3 Instalar os pacotes para integração com Prettier**

```bash
npm i -D prettier eslint-plugin-prettier eslint-config-prettier
```

**2.4 Atualizar o arquivo .eslintrc.json**

```json
{
	"env": {
		"node": true
	},
	"extends": ["standard", "prettier"],
	"plugins": ["prettier"],
	"rules": {
		"prettier/prettier": "error",
		"quotes": [
			"error",
			"single",
			{
				"avoidEscape": true,
				"allowTemplateLiterals": true
			}
		],
		"no-unused-vars": "warn",
		"no-var": "error",
		"no-use-before-define": "warn",
		"no-console": "warn",
		"func-names": "off",
		"object-shorthand": "off",
		"global-require": "off"
	}
}
```

**2.5 Criar o arquivo .prettierrc**

```json
{
	"singleQuote": true,
	"useTabs": true,
	"endOfLine": "auto"
}
```

## 3- Pesquisar por mais Opções de Configuração

- [ESLint](https://eslint.org/)<br>
- [Preetier](https://prettier.io/)
