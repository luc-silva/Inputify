import { ICustomInput, ICustomInputProps } from "../../types";

import styles from "../style/CustomInput.module.css";

/**
 * Represents a custom password input component.
 */
interface IPasswordInput extends ICustomInputProps {
    /**
     * The value of the input state.
     */
    stateValue: string;
    /**
     * The maximum allowed length for the input value.
     */
    maxLength: number;
    /**
     * The minimum allowed length for the input value.
     * Defaults to 8 if not provided.
     */
    minLength?: number;
}

/**
 * Custom password input component.
 * @param inputName - The name of the input element.
 * @param label - Determines whether to display a label for the input.
 * @param labelText - The text to be displayed as the label.
 * @param placeholder - Determines whether to display a placeholder for the input.
 * @param placeholderText - The text to be displayed as the placeholder.
 * @param required - Determines whether the input is required.
 * @param stateValue - The current value of the input state.
 * @param maxLength - The maximum allowed length for the input value.
 * @param minLength - The minimum allowed length for the input value. Defaults to 8.
 * @param onChange - The event handler for the input's change event.
 */
const PasswordInput: ICustomInput<IPasswordInput> = ({
    inputName,
    label = false,
    labelText,
    placeholder = false,
    placeholderText,
    required = false,
    stateValue,
    maxLength,
    minLength = 8,
    onChange,
}) => {
    return (
        <>
            {label && (
                <label htmlFor={inputName} className={styles["label"]}>
                    {labelText}
                </label>
            )}
            <input
                type="password"
                name={inputName}
                className={styles["input"]}
                placeholder={placeholder ? placeholderText : undefined}
                required={required}
                value={stateValue}
                onChange={onChange}
                maxLength={maxLength}
                minLength={minLength}
            />
        </>
    );
};
export default PasswordInput;
