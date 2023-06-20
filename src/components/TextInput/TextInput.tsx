import styles from "./TextInput.module.css";
import { ICustomInput, ICustomInputProps } from "../../types";

interface ITextInput extends ICustomInputProps {
    stateValue: any;
    inputType?: "text" | "email";
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
    onChange,
}) => {
    return (
        <>
            {label && (
                <label htmlFor={inputName} className={styles[".label"]}>
                    {labelText}
                </label>
            )}
            <input
                type={inputType}
                name={inputName}
                className={styles[".input"]}
                placeholder={placeholder ? placeholderText : undefined}
                required={required}
                value={stateValue}
                onChange={onChange}
            />
        </>
    );
};

export default TextInput;