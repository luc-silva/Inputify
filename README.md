# Inputify

Custom HTML inputs (and utils) library.

## About

I've made this lib just to reuse the component in my own projects. There's nothing really especial in it.
I don't have experience in real projects with any of the tech that I use, and that includes React, so I don't think it is well structured. Worry not! I will refactor it when possible.

## Warning

- This project isn't something serious, so I sugest to not really use it.

- There isn't any type of security aplied in the inputs.

## Features

- Control your HTML input with props.
- HTML Labes included inside the component.
- Typescript interfaces will help you out with what is required or not.
- Values state controlled by a Change Event handler.

## Usage

1. Import a custom input from the lib.

    ```javascript
    import { TextInput } from "inputify/dist"
    ```

    or

    ```javascript
    import * as Inputify from "inputify/dist";
    ```

2. Then, use it in the place of a HTML input element.

    ```jsx
        //...
            <TextInput 
                //... properties
            />
        //...

        ///or
        //...
            <Inputify.TextInput 
                //... properties
            />
        //...
    ```

- A callback compatible with change effect is ALWAYS required. That means that in order to send a request with the inputs data, you will need a submit buttom and surround the inputs with a HTML form element.
  
- Each input has a pre-defined style (CSS Modules). Custom styles will be added in a near future.
  