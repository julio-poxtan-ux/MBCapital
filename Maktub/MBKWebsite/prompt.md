**“Actúa como Frontend Architect + UI Designer + QA. Necesito maquetar una landing page mobile-first usando Tailwind CSS (sin frameworks adicionales). Entrega un proyecto listo para correr localmente.

# Objetivo

Construye una landing con navbar sticky/fixed, 1 hero, 5 secciones + 1 footer, donde cada sección ocupa la pantalla completa (fullscreen) y el contenido se muestra “por sección” (una sección por viewport).

# Comportamiento de scroll
- Implementa scroll por secciones con CSS scroll-snap (snap vertical) para que al scrollear se “encaje” en cada sección.
	•	Añade transiciones/animaciones al entrar cada sección usando IntersectionObserver (fade/slide sutil).
	•	Respeta accesibilidad: si prefers-reduced-motion: reduce, desactiva animaciones y deja transiciones instantáneas.

# Layout y responsive
	•	Mobile-first con breakpoints claros (Boostrap 5.3.8) y usa un grid consistente (container + max-width).
	•	Evitar overflow horizontal bajo cualquier resolución (incluye verificación).
	•	Cada sección usa min-h-screen y padding seguro para mobile (evita problemas de 100vh en iOS; usa unidades modernas si aplica).

# Navbar
	•	Navbar superior fijo (sticky o fixed), con:
	•	Logo a la izquierda
	•	Links a las 6 secciones (anclas)
	•	Estado activo del link según la sección visible
	•	Menú hamburguesa en mobile con overlay y cierre al seleccionar link

# Fondos por sección
	•	Cada sección debe soportar:
	1.	Fondo sólido/gradiente distinto, y/o
	2.	Opción de video de fondo (HTML5 video) con:
	•	muted, autoplay, loop, playsinline
	•	poster como fallback
	•	overlay oscuro/blur opcional para legibilidad
	•	fallback a imagen si el video no carga

Estructura del proyecto (OBLIGATORIA)

# Entrega esta estructura:
	•	/index.html
	•	/assets/img/ (imágenes y posters)
	•	/assets/js/main.js (IntersectionObserver, nav activo, menu mobile, scroll suave)
Incluye comentarios claros y nombres de clases/IDs consistentes.

# Contenido y componentes
	•	Usa HTML semántico: header, nav, main, section, footer.
	•	Incluye un Skip to content.
	•	Define contenido placeholder realista por sección: Hero, Features, Benefits, Testimonials, Pricing, FAQ, y Footer.
	•	Botones con estados hover/active/focus visibles.

# SEO y performance
	•	Metas básicas: title, description, og:title, og:description, og:image (placeholder), viewport.
	•	Optimiza performance: lazy-load en imágenes, evita scripts pesados, y no uses librerías externas.

# Entregables
	1.	Código completo de index.html
	2.	Código de /assets/js/main.js
	3.	Instrucciones para compilar Tailwind (si usas CLI) y alternativa CDN (si decides no compilar)
	4.	Checklist QA final: snap ok, nav activo ok, sin overflow horizontal, responsive ok, reduce-motion ok.”**