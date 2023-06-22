import { ICustomInput, ICustomInputProps } from "../../types";

import styles from "../style/CustomInput.module.css";

/**
 * Represents a custom text input component.
 */
interface ITextInput extends ICustomInputProps {
    /**
     * The current value of the input state.
     */
    stateValue: any;
    /**
     * The type of the input.
     * Defaults to "text" if not provided.
     */
    inputType?: "text" | "email";
    /**
     * The maximum allowed length for the input value.
     */
    maxLength: number;
    /**
     * The minimum allowed length for the input value.
     * Defaults to 0 if not provided.
     */
    minLength?: number;
}

/**
 * Custom text input component.
 * @param inputName - The name of the input element.
 * @param label - Determines whether to display a label for the input.
 * @param labelText - The text to be displayed as the label.
 * @param placeholder - Determines whether to display a placeholder for the input.
 * @param placeholderText - The text to be displayed as the placeholder.
 * @param required - Determines whether the input is required.
 * @param inputType - The type of the input. Defaults to "text".
 * @param stateValue - The current value of the input state.
 * @param maxLength - The maximum allowed length for the input value.
 * @param minLength - The minimum allowed length for the input value. Defaults to 0.
 * @param onChange - The event handler for the input's change event.
 */
const TextInput:ICustomInput<ITextInput> = ({
    inputName,
    label = false,
    labelText,
    placeholder = false,
    placeholderText,
    required = false,
    inputType = "text",
    stateValue,
    maxLength,
    minLength = 0,
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
                type={inputType}
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

export default TextInput;