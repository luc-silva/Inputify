import styles from "./TextareaInput.module.css";
import { ICustomInput, ICustomInputProps } from "../../types";

interface ITextareaInput extends ICustomInputProps {
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
    onChange,
}) => {
    return (
        <>
            {label && (
                <label htmlFor={inputName} className={styles[".label"]}>
                    {labelText}
                </label>
            )}
            <textarea
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

export default TextareaInput;
