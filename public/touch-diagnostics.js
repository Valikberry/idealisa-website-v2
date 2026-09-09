/* Opt-in physical-device trace. No listeners/UI/data collection without ?touchDebug=1.
   Nothing is sent to a server. Inspect window.idealisaTouchTrace or the on-screen log.
   A/B switches: &nativeScroll=1, &flatHeader=1, &noNoise=1 (test separately). */
(() => {
  const params = new URLSearchParams(location.search);
  if (params.get("touchDebug") !== "1") return;
  const events = [];
  let panel;
  const label = (node) => node instanceof Element
    ? node.tagName.toLowerCase() + (node.id ? "#" + node.id : "") + (node.classList.length ? "." + [...node.classList].slice(0, 2).join(".") : "")
    : node === window ? "window" : "document";
  const box = (element) => {
    if (!element) return null;
    const r = element.getBoundingClientRect();
    return { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) };
  };
  function snapshot() {
    const button = document.querySelector(".menu-toggle");
    const header = document.querySelector(".site-header");
    const rect = button?.getBoundingClientRect();
    return {
      viewport: [innerWidth, innerHeight],
      visualViewport: window.visualViewport && { width: visualViewport.width, height: visualViewport.height, offsetLeft: visualViewport.offsetLeft, offsetTop: visualViewport.offsetTop, scale: visualViewport.scale },
      hydrated: header?.getAttribute("data-nav-hydrated") === "true",
      expanded: button?.getAttribute("aria-expanded"),
      button: box(button), header: box(header), call: box(document.querySelector(".call-button")),
      hitStack: rect ? document.elementsFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2).slice(0, 6).map(label) : [],
      headerTransform: header && getComputedStyle(header).transform,
      pseudo: button && { position: getComputedStyle(button, "::before").position, inset: getComputedStyle(button, "::before").inset },
      lenis: document.documentElement.classList.contains("lenis"),
    };
  }
  function render() {
    if (!panel) return;
    const s = snapshot();
    panel.textContent = `TOUCH TRACE | ${s.viewport.join("×")}\nhydrated=${s.hydrated} open=${s.expanded} lenis=${s.lenis}\nbutton=${JSON.stringify(s.button)}\nhit=${s.hitStack.slice(0, 2).join(" > ")}\n` + events.slice(-5).map(e => `${e.type}: ${e.target || ""} cancelled=${e.cancelled ?? "-"} open=${e.expanded ?? "-"}`).join("\n");
  }
  function record(entry) {
    events.push({ time: Math.round(performance.now()), ...entry });
    if (events.length > 120) events.shift();
    render();
  }
  window.idealisaTouchTrace = { events, snapshot };
  for (const type of ["pointerdown", "pointerup", "pointercancel", "touchstart", "touchmove", "touchend", "touchcancel", "click"]) {
    window.addEventListener(type, event => {
      const p = event.changedTouches?.[0] || event;
      // Limit the trace to header interactions; do not record form input/content.
      if (p.clientY > 180) return;
      const entry = { type, target: label(event.target), x: p.clientX, y: p.clientY, trusted: event.isTrusted, pointerType: event.pointerType, hit: document.elementsFromPoint(p.clientX, p.clientY).slice(0, 6).map(label) };
      // After propagation: include downstream cancellation and React's update.
      setTimeout(() => record({ ...entry, cancelled: event.defaultPrevented, expanded: document.querySelector(".menu-toggle")?.getAttribute("aria-expanded") }), 0);
    }, { capture: true, passive: true });
  }
  // Identify the actual cancelling caller, only in this opt-in diagnostic session.
  const originalPreventDefault = Event.prototype.preventDefault;
  Event.prototype.preventDefault = function () {
    if (/^(touch|pointer|click)/.test(this.type)) {
      const p = this.changedTouches?.[0] || this;
      if (p.clientY <= 180) record({ type: "preventDefault:" + this.type, target: label(this.target), stack: new Error().stack });
    }
    return originalPreventDefault.call(this);
  };
  window.addEventListener("error", event => record({ type: "error", target: event.message || label(event.target) }), true);
  function mount() {
    const style = document.createElement("style");
    style.textContent = (params.get("flatHeader") === "1" ? "@media(max-width:820px){#dc-root .site-header{left:10px!important;right:10px!important;transform:none!important}#dc-root .site-header nav{backdrop-filter:none!important;-webkit-backdrop-filter:none!important}}" : "") + (params.get("noNoise") === "1" ? ".noise-overlay{display:none!important}" : "");
    document.head.appendChild(style);
    panel = document.createElement("pre");
    panel.setAttribute("aria-hidden", "true");
    panel.style.cssText = "position:fixed;bottom:70px;left:6px;right:6px;z-index:2147483647;pointer-events:none;background:#fff;color:#111;border:1px solid #111;padding:8px;font:10px/1.4 monospace;white-space:pre-wrap;overflow-wrap:anywhere;max-height:200px;overflow:hidden;margin:0";
    document.body.appendChild(panel);
    new MutationObserver(render).observe(document.querySelector(".site-header") || document.body, { attributes: true, subtree: true, attributeFilter: ["data-nav-hydrated", "aria-expanded"] });
    record({ type: "ready", target: "tap the hamburger" });
    window.addEventListener("resize", render, { passive: true });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount, { once: true });
  else mount();
})();
