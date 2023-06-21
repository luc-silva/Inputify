import React from "react";

/**
 * Properties from custom HTML input components.
 * @interface ICustomInputProps
 * @property {boolean} [placeholder=false] - Specifies whether a component will contain a placeholder.
 * @property {string} [placeholderText] - Placeholder text.
 * @property {boolean} [label=false] - Specifies whether a component will contain a label element.
 * @property {string} [labelText] - Label text.
 * @property {string} inputName - HTML element name.
 * @property {boolean} [required=false] - Specifies whether the component is required.
 * @property {React.ChangeEventHandler} onChange - Callback function called when the field value is changed.
 */
export interface ICustomInputProps {
    placeholder?: boolean;
    placeholderText?: string;
    label?: boolean;
    labelText?: string;
    inputName: string;
    required?: boolean;
    onChange: React.ChangeEventHandler;
}

/**
 * Base type declarion for custom inputs.
 */
export type ICustomInput<T> = (props: ICustomInputProps & T) => JSX.Element;
