export const select = (el: string, all: boolean = false): HTMLElement | HTMLElement[] | null => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };
  
  export const on = (type: string, el: string, listener: EventListenerOrEventListenerObject, all: boolean = false) => {
    const selectEl = select(el, all);
    if (selectEl) {
      if (all && Array.isArray(selectEl)) {
        selectEl.forEach(e => e.addEventListener(type, listener));
      } else if (selectEl instanceof HTMLElement) {
        selectEl.addEventListener(type, listener);
      }
    }
  };
  
  /* Add other utility functions here */
  