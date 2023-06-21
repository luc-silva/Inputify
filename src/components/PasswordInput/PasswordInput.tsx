import { ICustomInput, ICustomInputProps } from "../../types";

import styles from "../style/CustomInput.module.css";

interface IPasswordInput extends ICustomInputProps {
    stateValue: string;
    maxLength: number;
    minLength?: number;
}

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
