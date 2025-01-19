$nextInstalled = npm list next -g --depth=0 2>$null
if (-not $nextInstalled) {
    Write-Host "Next.js nao encontrado. Instalando..."
    npm install next
} else {
    Write-Host "Next.js ja está instalado."
}


$sassInstalled = npm list sass -g --depth=0 2>$null
if (-not $sassInstalled) {
    Write-Host "Sass nao encontrado. Instalando..."
    npm install sass
} else {
    Write-Host "Sass ja esta instalado."
}


Write-Host "Iniciando o servidor de desenvolvimento..."
npm run dev