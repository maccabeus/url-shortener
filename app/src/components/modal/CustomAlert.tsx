import { Alert, AlertTitle } from "@mui/material";
import { FC, ReactElement, ReactNode } from "react";
import { useCustomAlertStyles } from "./styles/CustomAlert";

export interface AlertInterface {
    open: boolean
    type: "success" | "error" | "info"
    title: string
    message: string
    action?: ReactNode
}

const CustomAlert: FC<AlertInterface> = (props): ReactElement => {
    const { open, type, title, message, action } = props;
    const styles = useCustomAlertStyles();
    if (open) {
        return (
            <Alert severity={type} className={styles.alert} action={action} >
                <AlertTitle>{title}</AlertTitle>
                {message}
            </Alert>)
    } else {
        return (<>{null}</>)
    }
}

export default CustomAlert;