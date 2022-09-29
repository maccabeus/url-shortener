import { FC, ReactElement } from "react";
import TitleText from "../text/TitleText";
import { useNavigationBarStyles } from "./styles/NavigationBarStyles";

export interface AppNavigationBarProps {
    title: string
    rightHeader?: ReactElement
}

/**
 * Create a Navigation Bar element
 * @returns {ReactElement} return a navigation bar element
 */
const AppNavigationBar: FC<AppNavigationBarProps> = (props): ReactElement => {
    const { title , rightHeader} = props;
    const styles= useNavigationBarStyles();
    return (
        <div className={styles.nav}>
            <div>
                <TitleText text={title} size="large" />
            </div>
            <div className={styles.rightHeader}>
                {rightHeader}
            </div>
        </div>
    )
}

export default AppNavigationBar;