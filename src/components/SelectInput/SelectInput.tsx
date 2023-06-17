import React from "react";
import { ICustomInputProps } from "../../types";
import styles from "./SelectInput.module.css";

interface ISelectInput extends ICustomInputProps {
    options: any[];
}
export const SelectInput = ({
    inputName,
    label = false,
    labelText,
    placeholder = false,
    placeholderText,
    required = false,
    options,
    onChange,
}: ISelectInput) => {
    return (
        <>
            {label && (
                <label htmlFor={inputName} className={styles[".label"]}>
                    {labelText}
                </label>
            )}
            <select
                name={inputName}
                className={styles[".input"]}
                placeholder={placeholder ? placeholderText : undefined}
                required={required}
                onChange={onChange}
            >
                {options.map((value) => {
                    return <option value={value}>{value}</option>;
                })}
            </select>
        </>
    );
};
