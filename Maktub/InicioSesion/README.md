# Onboarding - Maktub (Figma `142:833`)

Implementación frontend del nodo **Bienvenido** desde Figma con enfoque pixel-oriented, responsive y accesible.

## Figma base

- URL: `https://www.figma.com/design/44Fv6kVulQok2A2yCloAfc/Draft-hubmaktub?node-id=142-833&m=dev`
- Nodo implementado: `142:833`

## Stack aplicado

- HTML5 semántico
- CSS modular (`css/tokens.css`, `css/main.css`)
- JavaScript Vanilla (`js/onboarding.js`)
- Tailwind CDN incluido en `index.html` (sin dependencia instalada)
- Fuente externa: `Satoshi` (Fontshare)

## Estructura

- `index.html`: pantalla de bienvenida con formulario.
- `css/tokens.css`: design tokens (color, radios, spacing, sombras, gradientes).
- `css/main.css`: layout, componentes y breakpoints mobile-first.
- `js/onboarding.js`: validación progresiva y control de estado del botón principal.
- `assets/figma/background-esferas.svg`: fondo exportado desde Figma MCP.
- `assets/figma/logotipo.svg`: logotipo exportado desde Figma MCP.

## UX + Accesibilidad

- Jerarquía visual equivalente al diseño (`h1`, subtítulo, labels, CTA).
- Formulario con `label` asociado por `for/id`.
- Estados interactivos de inputs, checkbox y botón (`hover`, `focus-visible`, `disabled`, `active`).
- Validación clara en tiempo real con microcopy específico por campo.
- `aria-invalid`, `aria-describedby`, `aria-disabled`.
- `skip link` para navegación por teclado.

## QA funcional aplicado

- `Continuar` inicia deshabilitado.
- Se habilita solo con:
  - Nombre válido.
  - Correo válido.
  - Términos aceptados.
- Errores visibles y enfoque automático al primer campo inválido al enviar.

## Cómo ejecutar

1. Abrir `index.html` en el navegador.
2. Verificar:
   - Diseño base y layout responsivo.
   - Estado deshabilitado del botón al iniciar.
   - Habilitación del botón al completar formulario válido.
