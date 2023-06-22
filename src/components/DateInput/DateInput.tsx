import { ICustomInput, ICustomInputProps } from "../../types";

import styles from "../style/CustomInput.module.css";

/**
 * Represents a custom date input component.
 */
interface IDateInput extends ICustomInputProps {
    /**
     * The value of the input state.
     */
    stateValue: string;
}

/**
 * Custom date input component.
 * @param inputName - The name of the input element.
 * @param label - Determines whether to display a label for the input.
 * @param labelText - The text to be displayed as the label.
 * @param placeholder - Determines whether to display a placeholder for the input.
 * @param placeholderText - The text to be displayed as the placeholder.
 * @param required - Determines whether the input is required.
 * @param stateValue - The current value of the input state.
 * @param onChange - The event handler for the input's change event.
 */
const DateInput: ICustomInput<IDateInput> = ({
    inputName,
    label = false,
    labelText,
    placeholder = false,
    placeholderText,
    required = false,
    stateValue,
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
                type="date"
                name={inputName}
                className={styles["input"]}
                placeholder={placeholder ? placeholderText : undefined}
                required={required}
                value={stateValue}
                onChange={onChange}
            />
        </>
    );
};
export default DateInput;
