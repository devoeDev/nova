# Nova Aliança — versão premium em React + TypeScript

## Como abrir no Windows

Não abra o `index.html` com dois cliques.

1. Extraia o ZIP.
2. Entre na pasta do projeto.
3. Dê dois cliques em `INICIAR-SITE.bat`.
4. Mantenha o terminal aberto.
5. Acesse `http://localhost:3000`.

Também pode iniciar pelo terminal:

```bash
npm install
npm run dev
```

## Logo

Coloque sua logo com este nome:

```text
public/logo1.png
```

Use preferencialmente PNG ou WEBP com fundo transparente. Se a imagem não existir, o site mostra o nome da empresa em texto.

## Dados que precisam ser personalizados

- WhatsApp: `src/lib/whatsapp.ts`
- Telefone, e-mail e redes sociais: `src/components/Footer.tsx`
- Textos principais: arquivos dentro de `src/components`

## Para publicar

Execute:

```bash
npm run build
```

Ou use `GERAR-BUILD.bat`. Depois envie o conteúdo da pasta `dist` para a hospedagem.

## Melhorias desta versão

- Hero mais comercial e profissional.
- Logo maior e melhor encaixada.
- Indicador de progresso da página.
- Nova seção de capacidades com desenhos técnicos.
- Seção de soldagem mantida e valorizada.
- FAQ com dúvidas frequentes.
- Formulário mais rápido com seleção de serviço por botões.
- Animações mais suaves e responsivas.
- Melhor navegação no celular.
- Foco visível, link de acessibilidade e redução de movimento.
- Nenhuma dependência do ícone inexistente `Stairs`.
