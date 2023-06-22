import { ICustomInput, ICustomInputProps } from "../../types";

import styles from "../style/CustomInput.module.css";

/**
 * Represents a custom select input component.
 */
interface ISelectInput extends ICustomInputProps {
    /**
     * The available options for the select input.
     */
    options: any[];
}

/**
 * Custom select input component.
 * @param inputName - The name of the input element.
 * @param label - Determines whether to display a label for the input.
 * @param labelText - The text to be displayed as the label.
 * @param placeholder - Determines whether to display a placeholder for the input.
 * @param placeholderText - The text to be displayed as the placeholder.
 * @param required - Determines whether the input is required.
 * @param options - The available options for the select input.
 * @param onChange - The event handler for the input's change event.
 */
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
