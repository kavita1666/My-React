export function render(reactElement, rootElement) {
  // we need to create DOM element here

  function createDOMElement(reactElement) {
    // if reactElement is function
    if (typeof reactElement.type === "function") {
      console.log("----here", reactElement.props);
      return createDOMElement(reactElement.type(reactElement.props));
    }

    // if reactElement is array then we need to create DOM element for each element in array
    if (Array.isArray(reactElement)) {
      // console.log('----here')
      return reactElement.map((el) => createDOMElement(el)); //recursion
    }

    // let's check if reactElement is string or not
    if (typeof reactElement === "string") {
      return document.createTextNode(reactElement);
    }

    // else destructure reactElement to get type and props
    const { type, props } = reactElement;
    const DOMElement = document.createElement(type); // create DOM element with type as string

    // handle props attributes like class, id, name, title...
    Object.entries(props).forEach(([key, value]) => {
      DOMElement[key] = value;
    });

    props.children.forEach((child) => {
      if (Array.isArray(child)) {
        DOMElement.appendChild(...child.map((el) => createDOMElement(el)))
      } else if (typeof child === "string") {
        const textNote = document.createTextNode(child);
        DOMElement.appendChild(textNote);
      } else {
        DOMElement.appendChild(createDOMElement(child)); // if react element, then call createDOMElement again (recursion)
      }
    });

    return DOMElement;
  }

  const DOMElement = createDOMElement(reactElement);
  if (Array.isArray(DOMElement)) {
    rootElement.appendChild(...DOMElement);
  } else {
    rootElement.appendChild(DOMElement);
  }
}
export default {
  render,
};
