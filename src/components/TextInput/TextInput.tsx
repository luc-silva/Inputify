import { ICustomInput, ICustomInputProps } from "../../types";

import styles from "../style/CustomInput.module.css";

interface ITextInput extends ICustomInputProps {
    stateValue: any;
    inputType?: "text" | "email";
    maxLength: number
    minLength?: number
}

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