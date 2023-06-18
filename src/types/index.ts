/**
 * Base interface shared between multiples inputs.
 */
export interface ICustomInputProps {
    placeholder?: boolean;
    placeholderText?: string;
    label?: boolean;
    labelText?: string;
    inputName: string;
    required?:boolean;
    onChange: React.ChangeEventHandler
}