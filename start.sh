#!/bin/bash
if ! npm list next &> /dev/null; then
  echo "Next.js nao encontrado. Instalando..."
  npm install next
else
  echo "Next.js ja esta instalado."
fi


if ! npm list sass &> /dev/null; then
  echo "Sass nao encontrado. Instalando..."
  npm install sass
else
  echo "Sass ja esta instalado."
fi

echo "Iniciando o servidor de desenvolvimento..."
npm run dev