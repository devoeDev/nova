@echo off
cd /d "%~dp0"
title Nova Alianca - Build

if not exist "node_modules" (
  call npm install
  if errorlevel 1 pause & exit /b 1
)

call npm run build
if errorlevel 1 (
  echo.
  echo O build apresentou um erro.
  pause
  exit /b 1
)

echo.
echo Build criado na pasta dist.
pause
