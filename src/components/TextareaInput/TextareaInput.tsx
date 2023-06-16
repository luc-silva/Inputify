import React from "react";
import styles from "./TextareaInput.module.css";

interface ITextInput extends ICustomInputProps {
    stateValue: string;
}

export const TextInput = ({
    inputName,
    label = false,
    labelText,
    placeholder = false,
    placeholderText,
    required = false,
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
