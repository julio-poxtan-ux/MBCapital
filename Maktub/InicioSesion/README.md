# Onboarding - Maktub (Figma `135:173`)

Implementación frontend pixel-oriented del diseño de Figma para la pantalla de bienvenida/registro inicial.

## Stack

- HTML5 semántico
- CSS modular con variables (`css/tokens.css`) y componentes (`css/main.css`)
- Bootstrap `5.3.7` (CDN)
- JavaScript Vanilla (`js/onboarding.js`)
- Fuentes externas:
  - `Satoshi` (Fontshare)
  - `Roboto` (Google Fonts)

## Estructura

- `index.html`: composición semántica, metadatos SEO, accesibilidad base.
- `css/tokens.css`: design tokens (color, tipografía, spacing, radios, sombras).
- `css/main.css`: layout, componentes BEM, estados interactivos, breakpoints.
- `js/onboarding.js`: validaciones accesibles, estado de campos, control del botón CTA.
- `assets/figma/*.svg`: recursos exportados desde MCP Figma.

## Decisiones de arquitectura y UX

- Componentización por bloques reutilizables:
  - `onb-topbar`
  - `onb-card`
  - `onb-field`
  - `onb-checkbox`
  - `onb-button`
- Diseño mobile-first con ajustes para tablet/desktop sin overflow horizontal.
- Inputs y CTA con estados `default`, `focus`, `error`, `disabled` y feedback inmediato.
- Validación progresiva:
  - Error visible en correo al cargar (como en diseño Figma).
  - Mensajes específicos por campo.
  - Botón `Continuar` solo habilitado con formulario válido y términos aceptados.

## Accesibilidad (WCAG AA orientativo)

- Jerarquía semántica: `header`, `main`, `section`, `form`, `label`, `button`.
- Labels asociados con `for`/`id`.
- Estados ARIA:
  - `aria-invalid`
  - `aria-disabled`
  - `aria-describedby`
- Navegación por teclado:
  - `:focus-visible` en enlaces, inputs, checkbox y botón.
  - `skip link` para salto a contenido principal.
- Mensajes de error con `role="alert"` y microcopy claro.

## Performance

- Assets en SVG nativos (sin librerías de iconos extra).
- CSS sin `!important` y sin estilos inline.
- JS liviano (sin dependencias, sin rendering adicional).

## QA funcional y visual aplicado

- Layout:
  - Paridad de spacing, tipografías, radios y gradientes con el nodo `135:173`.
  - Top bar, card y fondo con esferas colocados según medidas Figma.
- Funcional:
  - Validación de nombre, email y aceptación de términos.
  - Estado del botón sincronizado con validez del formulario.
- Responsive:
  - Desktop: layout centrado.
  - Tablet/Mobile: card fluida, tipografía y paddings adaptados.

## Cómo ejecutar

1. Abrir `index.html` en navegador.
2. Verificar estados:
   - Campo email en error inicial.
   - `Continuar` deshabilitado hasta completar datos válidos y checkbox.
