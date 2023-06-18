import React from "react";
import { ICustomInputProps } from "../../types";
import styles from "./DateInput.module.css";

interface IDateInput extends ICustomInputProps {
    stateValue: string;
}

const DateInput = ({
    inputName,
    label = false,
    labelText,
    placeholder = false,
    placeholderText,
    required = false,
    stateValue,
    onChange,
}: IDateInput) => {
    return (
        <>
            {label && (
                <label htmlFor={inputName} className={styles[".label"]}>
                    {labelText}
                </label>
            )}
            <input
                type="date"
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
export default DateInput;
