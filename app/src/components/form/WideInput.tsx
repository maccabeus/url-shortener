import { FC, ReactElement } from 'react';
import { useFormStyles } from './styles/FormStyles';
import CustomButton from '../button/CustomButton';


export interface AddDeviceFormProps {
    value?: string;
    onClick?: () => void;
    placeholder?: string;
    onValueChange?: (...args: any) => void;
}

const WideInput: FC<AddDeviceFormProps> = (props): ReactElement => {

    const { value, placeholder, onValueChange } = props;

    const styles = useFormStyles()

    return (
        <div className={styles.content}>
            <input type="text" className={styles.input}
                placeholder={placeholder} value={value}
                onChange={onValueChange} />
        </div>
    )
}
export default WideInput;