export function render(reactElement, rootElement) {

  // we need to create DOM element here
  function createDOMElement(reactElement) {
    const { type, props } = reactElement;
    console.log(props);
    const DOMElement = document.createElement(type);
    props.children.forEach((child) => {
      console.log(child);
      if (typeof child === "string") {
        const textNote = document.createTextNode(child);
        DOMElement.appendChild(textNote);
      } else {
        DOMElement.appendChild(createDOMElement(child)); // if react element then call createDOMElement again (recursion)
      }
    });

    return DOMElement;
  }
  const DOMElement = createDOMElement(reactElement);
  rootElement.appendChild(DOMElement);
}
export default {
  render,
};
