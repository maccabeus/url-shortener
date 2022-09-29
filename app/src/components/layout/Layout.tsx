import { Box, CssBaseline } from "@material-ui/core";
import { FC, ReactChild, ReactChildren, ReactElement } from "react";
import { useLayoutStyles } from "./styles/LayoutStyles";

export interface LayoutComponentProps {
    header?: ReactElement
    children?: Array<ReactChild> | ReactElement | ReactChildren
}

const Layout: FC<LayoutComponentProps> = (props): ReactElement => {
    const { children, header } = props;
    const styles = useLayoutStyles();
    return (

        <Box className={styles.root}>
            <CssBaseline />
            <div className={styles.header}>
                {header}
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </Box>
    )
}

export default Layout;