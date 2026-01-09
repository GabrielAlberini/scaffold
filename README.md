
# Scaffold CLI

## 📌 Descripción
**Scaffold** es una herramienta de línea de comandos (CLI) escrita en **Node.js** que permite generar proyectos base a partir de plantillas predefinidas.

El objetivo del proyecto es acelerar el inicio de nuevos desarrollos creando automáticamente la estructura inicial según el tipo de proyecto elegido.

---

## 🧰 Tecnologías
- Node.js
- JavaScript (ES Modules)
- npm

---

## 📂 Estructura del Proyecto

```
scaffold/
├── bin/
│   └── index.js          # Punto de entrada del CLI
├── lib/
│   ├── createProject.js  # Lógica de creación del proyecto
│   ├── copyTemplate.js   # Copia de plantillas
│   └── validateArgs.js   # Validación de argumentos
├── templates/
│   ├── express/          # Template backend Express
│   ├── react/            # Template frontend React
│   └── vanilla/          # Template JS vanilla
├── package.json
└── README.md
```

---

## 🚀 Instalación

### Opción 1: uso local
```bash
npm install
node bin/index.js <tipo> <nombre>
```

### Opción 2: instalación global
```bash
npm install -g .
scaffold <tipo> <nombre>
```

---

## ▶️ Uso

```bash
scaffold <tipo> <nombre-del-proyecto>
```

### Tipos disponibles
- `express`
- `react`
- `vanilla`

### Ejemplos
```bash
scaffold express api-backend
scaffold react mi-app
scaffold vanilla landing-page
```

Esto creará una nueva carpeta con el nombre indicado y copiará dentro la plantilla correspondiente.

---

## 🧠 Funcionamiento Interno

1. El CLI lee los argumentos ingresados
2. `validateArgs.js` verifica tipo y nombre
3. `createProject.js` localiza la plantilla correcta
4. `copyTemplate.js` copia los archivos al nuevo proyecto

---

## 📄 package.json (datos clave)
- Nombre: scaffold
- Tipo: módulo ES (`type: module`)
- Comando CLI registrado: `scaffold`

---

## 🎯 Uso Educativo
Este proyecto es ideal para:
- Aprender cómo crear CLIs en Node.js
- Entender el uso del campo `bin` en npm
- Implementar generadores de proyectos
- Practicar manejo de archivos y directorios

---

## 📜 Licencia
ISC

---

## ✨ Autor
Proyecto scaffold para fines educativos y de práctica.
