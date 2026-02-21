# Clubmaktub / Registro
Incluye páginas separadas, componentes reutilizables, tokens de diseño y validaciones en JavaScript.

## Cómo ejecutar
1. Abre cualquier archivo `.html` directamente en el navegador, o
2. Levanta un servidor local:
   ```bash
   python -m http.server 8000
   ```
   Luego visita `http://localhost:8000`.

## Estructura
```
/project
├── index.html
├── ingresapin.html
├── login.html
├── newPassword.html
├── pagoUSDT.html
├── plan.html
├── passReset.html
├── PassReset.html
├── confirmacodigo.html
├── verificacion.html
├── completaRegistro.html
├── ui-kit.html
├── assets/
│   ├── css/
│   │   ├── tokens.css
│   │   └── styles.css
│   └── img/
├── js/
│   └── main.js
└── README.md
```

> Nota: En sistemas con sistema de archivos sin distinción de mayúsculas/minúsculas (como macOS por defecto), `PassReset.html` y `passReset.html` apuntan al mismo archivo.

## Decisiones técnicas
- **Tokens en `assets/css/tokens.css`**: todos los colores, tipografías, espaciados, radios y layout viven en `:root` para facilitar escalabilidad.
- **Clases prefijo `mk-`**: consistencia y aislamiento del estilo del proyecto. Las únicas clases externas son las de Bootstrap Icons (`bi`).
- **Mobile First**: layout adaptado con breakpoints (`768px` y `992px`). El panel izquierdo se oculta en móvil.
- **Validación frontend**: `js/main.js` maneja validaciones obligatorias, confirmación de contraseña, PIN auto-avance, copiado de token y selección de planes.
- **UI Kit**: `ui-kit.html` concentra los componentes y estados principales para QA visual.

## Páginas principales
- `index.html`: Crea tu cuenta (flujo de planes).
- `verificacion.html`: Verifica tu cuenta.
- `confirmacodigo.html`: Confirma tu código de verificación.
- `completaRegistro.html`: Completa tu registro.
- `ingresapin.html`: Ingresa tu PIN.
- `plan.html`: Escoge tu plan.
- `pagoUSDT.html`: Realizar pago.
- `passReset.html`: Recuperar contraseña.
- `newPassword.html`: Cambiar nueva contraseña.
- `login.html`: Inicia sesión.
- `ui-kit.html`: Sistema de diseño / componentes.
