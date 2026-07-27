@echo off
cd /d "%~dp0"
title Nova Alianca - React

echo ==============================================
echo       NOVA ALIANCA - INICIANDO O SITE
echo ==============================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo ERRO: Node.js nao foi encontrado.
  echo Instale o Node.js e execute este arquivo novamente.
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo Instalando dependencias...
  call npm install
  if errorlevel 1 (
    echo.
    echo Nao foi possivel instalar as dependencias.
    pause
    exit /b 1
  )
)

echo.
echo Abrindo o site em http://localhost:3000
call npm run dev
pause
