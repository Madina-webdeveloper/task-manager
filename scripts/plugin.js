// -------------------SELECTING ELEMENTS-------------------------

const $=(selector)=>document.querySelector(selector);
const $$=(selectors)=>document.querySelectorAll(selectors);


// --------------- CREATE ELEMENTS ----------------

const createElement = (tagName, className, content) => {
    const newEelement = document.createElement(tagName);
    if (className) {
      newEelement.setAttribute("class", className);
    }
    if (content) {
      newEelement.innerHTML = content;
    }
    return newEelement;
   };
