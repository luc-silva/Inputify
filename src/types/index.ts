import React from "react";

/**
 * Base interface for props shared between multiples inputs.
 */
export interface ICustomInputProps {
    placeholder?: boolean;
    placeholderText?: string;
    label?: boolean;
    labelText?: string;
    inputName: string;
    required?:boolean;
    onChange: React.ChangeEventHandler
}

/**
 * Base type declarion for custom inputs.
 */
export type ICustomInput<T> = (props:ICustomInputProps & T) => JSX.Element
