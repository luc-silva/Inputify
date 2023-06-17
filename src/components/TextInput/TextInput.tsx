import React from "react";
import styles from "./TextInput.module.css";
import { ICustomInputProps } from "../../types";

type InputType = "text" | "email";
interface ITextInput extends ICustomInputProps {
    stateValue: any;
    inputType?: InputType;
}

export const TextInput = ({
    inputName,
    label = false,
    labelText,
    placeholder = false,
    placeholderText,
    required = false,
    inputType = "text",
    stateValue,
    onChange,
}: ITextInput) => {
    return (
        <>
            {label && (
                <label htmlFor={inputName} className={styles[".label"]}>
                    {labelText}
                </label>
            )}
            <input
                type={inputType}
                name={inputName}
                className={styles[".input"]}
                placeholder={placeholder ? placeholderText : undefined}
                required={required}
                value={stateValue}
                onChange={onChange}
            />
        </>
    );
};
