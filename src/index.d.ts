/**
 * Base interface shared between multiples inputs.
 */
interface ICustomInputProps {
    placeholder?: boolean;
    placeholderText?: string;
    label?: boolean;
    labelText?: string;
    inputName: string;
    required?:boolean;
    onChange: React.ChangeEventHandler
}

/**
 * React CSS Modules type definition.
 */
declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}