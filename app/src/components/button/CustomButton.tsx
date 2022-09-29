import { FC } from "react";
import Button from "@material-ui/core/Button";
import { useCustomButtonStyles } from "./styles/CustomButtonStyles";
import ClipLoader from "react-spinners/ClipLoader";


export interface CustomButtonProps {
    text: string
    loading?: boolean;
    onButtonClick?: (value: any) => void
}

const CustomButton: FC<CustomButtonProps> = (props) => {

    const { onButtonClick, text, loading } = props;
    const styles = useCustomButtonStyles();

    const Spinner = () => {
        if (loading) {
            return (<div style={{ marginLeft: "auto" }}> <ClipLoader color={"white"} loading={loading} size={30} /> </div>);
        }
        return null;
    }

    return (
        <Button className={styles.button} onClick={onButtonClick} disabled={loading}>
            {text}
            <Spinner />
        </Button>
    )
}
export default CustomButton;