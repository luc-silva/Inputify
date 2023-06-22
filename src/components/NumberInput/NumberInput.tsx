import { ICustomInput, ICustomInputProps } from "../../types";

import styles from "../style/CustomInput.module.css";

interface INumberInput extends ICustomInputProps {
    stateValue: any;
    maxValue: number;
    minValue?: number;
}

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
