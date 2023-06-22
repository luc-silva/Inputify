import { ICustomInput, ICustomInputProps } from "../../types";

import styles from "../style/CustomInput.module.css";
/**
 * Represents a custom number input component.
 */
interface INumberInput extends ICustomInputProps {
    /**
     * The value of the input state.
     */
    stateValue: any;
    /**
     * The maximum allowed value for the input.
     */
    maxValue: number;
    /**
     * The minimum allowed value for the input.
     * Defaults to 0 if not provided.
     */
    minValue?: number;
}

/**
 * Custom number input component.
 * @param inputName - The name of the input element.
 * @param label - Determines whether to display a label for the input.
 * @param labelText - The text to be displayed as the label.
 * @param placeholder - Determines whether to display a placeholder for the input.
 * @param placeholderText - The text to be displayed as the placeholder.
 * @param required - Determines whether the input is required.
 * @param stateValue - The current value of the input state.
 * @param maxValue - The maximum allowed value for the input.
 * @param minValue - The minimum allowed value for the input. Defaults to 0.
 * @param onChange - The event handler for the input's change event.
 */
const NumberInput: ICustomInput<INumberInput> = ({
    inputName,
    label = false,
    labelText,
    placeholder = false,
    placeholderText,
    required = false,
    stateValue,
    maxValue,
    minValue = 0,
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
                type="number"
                name={inputName}
                className={styles["input"]}
                placeholder={placeholder ? placeholderText : undefined}
                required={required}
                value={stateValue}
                onChange={onChange}
                max={maxValue}
                min={minValue}
            />
        </>
    );
};

export default NumberInput;
