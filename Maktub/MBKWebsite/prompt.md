Actua como Frontend Architect + UI Designer + QA. Necesito maquetar una landing page mobile-first en Bootstrap 5.3.8, inspirada en la referencia adjunta (look dark blue/cyan neon, estilo ecosistema Web3) y respetando su organizacion visual.

## Objetivo
Construir una landing de una sola pagina con navbar fija, secciones bien diferenciadas y flujo narrativo de arriba hacia abajo.

## Estructura visual (en este orden)
1. Hero principal
2. Bloque Membresia Maktub
3. Nuestros servicios
4. Ecosistema: conectando personas a Web3
5. Bloque token Mak (valor del ecosistema)
6. Bloque de beneficios: Por que ser parte de Maktub
7. Footer/Contacto

## Direccion de arte
- Paleta base: negro profundo + azules oscuros + acentos cian/neon.
- Estilo visual: gradientes atmosfericos, halos/luces sutiles, bordes brillantes, efecto glass en tarjetas.
- Fondo: no usar color plano; combinar degradados, texturas suaves y luces radiales.
- Tipografia moderna y legible (jerarquia marcada en titulos grandes).
- Animaciones suaves de entrada (fade/slide), sin exceso.
- Mantener contraste AA para textos.

## Navbar
- Fija arriba (sticky o fixed).
- Logo MKB a la izquierda.
- Links: Conex, Membresia Maktub, Iniciar sesion.
- CTA opcional al final de navbar.
- Menu hamburguesa en mobile con overlay y cierre al seleccionar opcion.
- Estado activo segun seccion visible.

## Contenido por seccion
### 1) Hero
- Headline: "TU ECOSISTEMA."
- Subheadline: "Donde cada accion se transforma en propiedad y recompensa."
- Texto de apoyo corto sobre finanzas, tecnologia y educacion.
- Botones: "Contactenos" y "Adquiere Mak".
- Bloque de aliados con logos (placeholders): DocPrime, MB Capital, Club Maktub.

### 2) Membresia Maktub
- Tarjeta destacada grande con imagen de membresias.
- Titulo: "Membresia Maktub".
- Copy breve: acceso a club/comunidad, tecnologia y educacion.
- Boton secundario de mas informacion.

### 3) Nuestros servicios
- Titulo de seccion y subtitulo.
- Selector visual de dos categorias: "Tecnologia" y "Educacion".
- Dos cards de servicios:
  - Conex (tecnologia)
  - Mentorias (educacion)
- Cada card con icono, descripcion corta y CTA.

### 4) Ecosistema Web3
- Titulo: "Conectando personas a Web3".
- Parrafo explicativo del ecosistema y experiencia digital.
- Segment control/tabs (placeholders) para cambiar vistas.
- Mockup/screenshot de dashboard centrado.

### 5) Token Mak (propuesta de valor)
- Copy principal sobre Mak como activo con acceso, voz y recompensa.
- Elemento visual protagonista (icono/cubo luminoso).
- Fila de beneficios con iconos (4 items):
  - Participacion
  - Seguridad
  - Utilidad
  - Alcance global

### 6) Por que ser parte de Maktub
- Pretitulo: "Tu participacion no solo cuenta. Se recompensa."
- Titulo: "Por que Ser Parte de Maktub?"
- Descripcion corta.
- Grid de 3 cards:
  - Mak
  - Servicios
  - Educacion y referencia

### 7) Contacto/Footer
- Titulo: "Conectate con nosotros".
- Texto corto invitando a comunidad/canal.
- Boton CTA (ej. "Ir a Canal").
- Logo principal al costado derecho (elemento glow).
- Footer inferior con redes y enlaces legales.

## Requisitos tecnicos
- HTML semantico: header, nav, main, section, footer.
- Mobile-first real con Bootstrap 5.3.8 (container/grid utilitario).
- Evitar overflow horizontal en cualquier viewport.
- Imagenes con lazy loading.
- Soporte prefers-reduced-motion para reducir/desactivar animaciones.
- JavaScript vanilla para:
  - menu mobile
  - nav activa por seccion (IntersectionObserver)
  - animaciones de entrada por seccion
- No usar librerias externas de animacion.

## Estructura obligatoria de archivos
- /index.html
- /assets/css/tokens.css (variables de color, tipografia, espaciados, radios, sombras, z-index)
- /assets/css/styles.css
- /assets/js/main.js
- /assets/img/ (logos, mockups, posters, placeholders)

## SEO y performance
- Metas minimas: title, description, og:title, og:description, og:image, viewport.
- Cargar scripts al final o con defer.
- Optimizar peso de imagenes y usar formatos modernos cuando aplique.

## Entregables esperados
1. Codigo completo de `index.html`.
2. Codigo completo de `assets/css/tokens.css`.
3. Codigo completo de `assets/css/styles.css`.
4. Codigo completo de `assets/js/main.js`.
5. Checklist QA final:
   - responsive mobile/tablet/desktop
   - nav fija y estado activo correcto
   - sin overflow horizontal
   - contraste legible
   - animaciones suaves + soporte reduce-motion
   - coherencia visual con la referencia adjunta
