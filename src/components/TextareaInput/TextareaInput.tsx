import { ICustomInput, ICustomInputProps } from "../../types";

import styles from "../style/CustomInput.module.css";

interface ITextareaInput extends ICustomInputProps {
    maxLength: number;
    minLength?: number
    stateValue: any;
}

const TextareaInput: ICustomInput<ITextareaInput> = ({
    inputName,
    label = false,
    labelText,
    placeholder = false,
    placeholderText,
    required = false,
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
            <textarea
                name={inputName}
                className={styles["input"]}
                placeholder={placeholder ? placeholderText : undefined}
                required={required}
                value={stateValue}
                maxLength={maxLength}
                minLength={minLength}
                onChange={onChange}
            />
        </>
    );
};

export default TextareaInput;
