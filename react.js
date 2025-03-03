function createElement(type, props, ...children) {
  const reactElement = {
    type,
    props: {
      ...props,
    },
  };

  if(children.length > 0) {
    reactElement.props.children = children;
  }

  return reactElement;
}
export default {
  createElement,
};
