import { FC, ReactElement, useEffect, useState, } from "react";
import Box from "@mui/material/Box";
import { API_BASE_PATH, SHORT_PATH } from "../configs/ApiConfigs";
import Layout from "../components/layout/Layout";
import CustomAlert, { AlertInterface } from "../components/modal/CustomAlert";
import AppNavigationBar from "../components/navigation/NavigationBar";
import { useIndexStyle } from './styles/IndexStyle';
import { apiPostService } from '../services/ApiService';
import WideInput from "../components/form/WideInput";
import CustomButton from "../components/button/CustomButton";
import CopyButton from "../components/button/CopyButton";
import { isValidUrl } from '../library/utilities';

const Index: FC<any> = (): ReactElement => {

    const styles = useIndexStyle();

    const [shortLink, setShortLink] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [urlText, setUrlText] = useState<string>("");

    const [alertProps, setAlertProps] = useState<AlertInterface>({
        open: false,
        title: "Notification",
        type: "info",
        message: ""
    });

    const generateShortLink = async () => {

        if (!isValidUrl(urlText)) {
            return setAlertProps({ ...alertProps, message: "You must provide a valid URL", open: true, type: "error", action: <></> });
        }
        try {
            setShortLink("");
            setLoading(true);

            const apiPath = `${API_BASE_PATH}${SHORT_PATH}`;
            const responseData = await apiPostService(apiPath, { url: urlText });
            console.log("response: ", responseData);
            const { error, message, data } = responseData;
            if (error) {
                showErrorAlert(message);
            } else {
                if (!data.shortLink) {
                    const message = "Short link is missing. Try again"
                    showErrorAlert(message);
                } else {
                    setShortLink(data.shortLink);
                    const detailedMessage = `${message}  ${data.shortLink}`;
                    setAlertProps({
                        title: "Click copy Icon to copy",
                        message: detailedMessage,
                        action: <CopyShortUrlView url={data.shortLink} />,
                        open: true, type: "success"
                    });
                }
            }
            setLoading(false);
        } catch (err: any) {
            setAlertProps({ ...alertProps, message: err.message, open: true, type: "error", action: <></> })
            setLoading(false);
        }
    }

    const showAlert = (message: string, type: AlertInterface["type"], action: AlertInterface["action"] = <></>) => {
        setAlertProps({ ...alertProps, message, action, type, open: true })
    }
    const showErrorAlert = (message: string) => {
        showAlert(message, "error");
    }

    const onValueChange = (event: any) => {
        const value = event.target.value;
        setUrlText(value);
    }

    const HeaderSectionWithButton = () => {
        return <AppNavigationBar title="Short.it!" />;
    }

    const CopyShortUrlView = (props: any) => {
        const copyUrl = () => {
            navigator.clipboard.writeText(props.url);
            setAlertProps({ ...alertProps, message: "URL copied", type: "info", action: <></> });
        }
        return (<CopyButton onButtonClick={copyUrl} />)
    }

    useEffect(() => {
    }, [shortLink]);

    return (
        <>
            <Layout header={<HeaderSectionWithButton />}>
                <Box className={styles.column}>
                    <CustomAlert  {...alertProps} />
                    <WideInput onClick={generateShortLink} value={urlText}
                        onValueChange={onValueChange} placeholder="https://yoururlvale.com/whatever" />
                    <CustomButton text="Shorten Now" onButtonClick={generateShortLink} loading={loading} />
                </Box>
            </Layout>
        </>
    )
}
export default Index;