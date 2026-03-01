(() => {
  document.body.classList.add("motion-ready");

  const scrollRoot = document.getElementById("main-content");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const mobileMenu = document.getElementById("mobileMenu");
  const navLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
  const sectionNodes = Array.from(document.querySelectorAll("main section[id]"));
  const segmentedButtons = Array.from(document.querySelectorAll("[data-segment]"));
  const revealNodes = Array.from(document.querySelectorAll(".reveal"));
  const sectionVisibility = new Map();

  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const prefersReducedMotion = reducedMotionQuery.matches;

  const setMenuState = (open) => {
    if (!mobileMenu || !navToggle) return;

    mobileMenu.classList.toggle("is-open", open);
    mobileMenu.setAttribute("aria-hidden", String(!open));
    navToggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
  };

  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      setMenuState(!isOpen);
    });

    mobileMenu.addEventListener("click", (event) => {
      if (event.target === mobileMenu) {
        setMenuState(false);
      }
    });
  }

  const setActiveLink = (id) => {
    navLinks.forEach((link) => {
      const linkHash = link.getAttribute("href");
      const shouldBeActive = linkHash === `#${id}`;
      link.classList.toggle("is-active", shouldBeActive);
    });
  };

  const setActiveSection = (id) => {
    sectionNodes.forEach((section) => {
      section.classList.toggle("is-active", section.id === id);
    });
    if (id) setActiveLink(id);
  };

  const navigateToHash = (hash) => {
    if (!hash || !hash.startsWith("#")) return;

    const target = document.querySelector(hash);
    if (!target) return;

    const behavior = prefersReducedMotion ? "auto" : "smooth";
    target.scrollIntoView({ behavior, block: "start" });
    window.history.replaceState(null, "", hash);
  };

  navLinks.forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (!href.startsWith("#")) return;

    link.addEventListener("click", (event) => {
      event.preventDefault();
      navigateToHash(href);
      setMenuState(false);
    });
  });

  if (sectionNodes.length > 0) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { id } = entry.target;
          if (entry.isIntersecting) {
            sectionVisibility.set(id, entry.intersectionRatio);
          } else {
            sectionVisibility.delete(id);
          }
        });

        let nextActiveId = null;
        let highestRatio = 0;
        sectionVisibility.forEach((ratio, id) => {
          if (ratio >= highestRatio) {
            highestRatio = ratio;
            nextActiveId = id;
          }
        });

        if (!nextActiveId && sectionNodes[0]) {
          nextActiveId = sectionNodes[0].id;
        }
        setActiveSection(nextActiveId);
      },
      {
        root: scrollRoot || null,
        threshold: [0.15, 0.35, 0.55, 0.75, 0.95],
        rootMargin: "-6% 0px -18% 0px",
      }
    );

    sectionNodes.forEach((section) => sectionObserver.observe(section));
  }

  if (window.location.hash) {
    setTimeout(() => navigateToHash(window.location.hash), 10);
  } else if (sectionNodes[0]) {
    setActiveSection(sectionNodes[0].id);
  }

  if (prefersReducedMotion) {
    document.body.classList.remove("motion-ready");
    sectionNodes.forEach((section) => section.classList.add("is-active"));
    revealNodes.forEach((node) => node.classList.add("is-visible"));
  } else if (revealNodes.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        root: scrollRoot || null,
        threshold: 0.16,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    revealNodes.forEach((node) => revealObserver.observe(node));
  }

  segmentedButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const scope = button.parentElement;
      if (!scope) return;

      scope.querySelectorAll("[data-segment]").forEach((peer) => {
        peer.classList.remove("is-active");
        peer.setAttribute("aria-selected", "false");
      });

      button.classList.add("is-active");
      button.setAttribute("aria-selected", "true");
    });
  });

  const runOverflowCheck = () => {
    const horizontalOverflow = Math.max(
      0,
      document.documentElement.scrollWidth - window.innerWidth
    );
    if (horizontalOverflow > 1) {
      document.body.classList.add("has-overflow-x");
      console.warn(`[layout] Horizontal overflow detected: ${Math.ceil(horizontalOverflow)}px`);
      return;
    }
    document.body.classList.remove("has-overflow-x");
  };

  window.addEventListener("resize", runOverflowCheck, { passive: true });
  window.addEventListener("load", runOverflowCheck, { once: true });
  setTimeout(runOverflowCheck, 250);
})();
