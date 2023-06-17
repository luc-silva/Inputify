import React from "react";
import styles from "./TextareaInput.module.css";
import { ICustomInputProps } from "../../types";

interface ITextareaInput extends ICustomInputProps {
    stateValue: any;
}

export const TextareaInput = ({
    inputName,
    label = false,
    labelText,
    placeholder = false,
    placeholderText,
    required = false,
    stateValue,
    onChange,
}: ITextareaInput) => {
    return (
        <>
            {label && (
                <label htmlFor={inputName} className={styles[".label"]}>
                    {labelText}
                </label>
            )}
            <textarea
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
