import { FC, ReactElement } from "react";
import { useTitleTextStyles } from "./styles/TitleTextStyle";

export interface TitleTextProps {
    text: string
    size: "small" | "medium" | "large"
}

const TitleText: FC<TitleTextProps> = (props): ReactElement => {
    const { text, size } = props;
    const styles = useTitleTextStyles();
    return (
        <div className={styles.medium}>{text}</div>
    )
}

export default TitleText