import { ICustomInput, ICustomInputProps } from "../../types";

import styles from "./SelectInput.module.css";

interface ISelectInput extends ICustomInputProps {
    options: any[];
}
const SelectInput: ICustomInput<ISelectInput> = ({
    inputName,
    label = false,
    labelText,
    placeholder = false,
    placeholderText,
    required = false,
    options,
    onChange,
}) => {
    return (
        <>
            {label && (
                <label htmlFor={inputName} className={styles["label"]}>
                    {labelText}
                </label>
            )}
            <select
                name={inputName}
                className={styles["input"]}
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

export default SelectInput;
