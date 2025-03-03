export function render(reactElement, rootElement) {
  // 🟢 Clear previous content in the root element before rendering new elements
  rootElement.innerHTML = "";

  function createDOMElement(reactElement) {
    // 🟢 Handle null or undefined elements by returning an empty text node
    if (!reactElement) return document.createTextNode("");

    // 🟢 If reactElement is an array, process each element separately using recursion
    if (Array.isArray(reactElement)) {
      return reactElement.map(createDOMElement);
    }

    // 🟢 If reactElement is a string, create and return a text node
    if (typeof reactElement === "string") {
      return document.createTextNode(reactElement);
    }

    // 🟢 If reactElement is a functional component, call the function with props
    // and process the returned element recursively
    if (typeof reactElement?.type === "function") {
      return createDOMElement(reactElement.type(reactElement.props));
    }

    // 🟢 Destructure type and props, ensuring reactElement is valid
    const { type, props = {} } = reactElement || {};
    if (!type) return document.createTextNode("");

    // 🟢 Create a DOM element using the type (e.g., 'div', 'span', etc.)
    const DOMElement = document.createElement(type);

    // 🟢 Set attributes/properties on the DOM element (except children)
    Object.entries(props).forEach(([key, value]) => {
      if (key !== "children") {
        DOMElement[key] = value;
      }
    });

    // 🟢 Ensure props.children is always treated as an array
    const children = Array.isArray(props.children) ? props.children : [props.children];

    // 🟢 Recursively create and append children to the DOM element
    children.forEach((child) => {
      const childElement = createDOMElement(child);
      if (Array.isArray(childElement)) {
        // If the child is an array (e.g., multiple elements), append each element
        childElement.forEach((nestedChild) => DOMElement.appendChild(nestedChild));
      } else {
        DOMElement.appendChild(childElement);
      }
    });

    return DOMElement; // 🟢 Return the created DOM element
  }

  // 🟢 Convert the React element tree into a real DOM element
  const DOMElement = createDOMElement(reactElement);

  // 🟢 Append the created DOM elements to the root container
  if (Array.isArray(DOMElement)) {
    DOMElement.forEach((el) => rootElement.appendChild(el));
  } else {
    rootElement.appendChild(DOMElement);
  }
}

export default {
  render,
};
