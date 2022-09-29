import { FC } from "react";
import Button from "@material-ui/core/Button";
import { useCustomButtonStyles } from "./styles/CustomButtonStyles";
import { ImCopy } from 'react-icons/im';



export interface CopyButtonProps {
    size?: number
    onButtonClick?: (value: any) => void;
}

const CopyButton: FC<CopyButtonProps> = (props) => {

    const { onButtonClick } = props;
    const styles = useCustomButtonStyles();

    return (
        <ImCopy onClick={onButtonClick} className={styles.copy} size={25} ></ImCopy>
    )
}
export default CopyButton;