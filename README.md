# My React Library

## Overview

This project focuses on creating our own React library to understand how React works under the hood. The library includes a custom React-DOM tree capable of handling various types of React elements.

## Technologies Used

- React (Custom implementation)
- Parcel (Used as the bundler for fast and efficient builds)

## Features

The custom React-DOM tree can handle react elements of the following types:

- Arrays (e.g., [div, span, p])
- Strings (e.g., div, span, p)
- React elements with type as a function (e.g., <App />), supporting:
    - props as an object
    - props as an array
    - props as children elements
    - nested children elements

## Testing

The product listing component has been tested using this custom React library to ensure it properly renders and manages elements dynamically.
Component structure is as follows:
- Products component (Parent component that renders a list of Card components and structures the UI with a heading and a scrollable card container)
    - Card component (Represents an individual product card displaying its image, title, brand, and price)

The product listing component was tested using our custom React library to ensure that:
- The Products component correctly renders multiple Card components.
- Props are passed correctly to child components.
- The custom render function handles arrays of elements efficiently.

access link: https://my-custom-react-library.netlify.app/

## Usage

Import and use the custom React library components in your project as needed.

## License

This project is open-source and available under the MIT License.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.
