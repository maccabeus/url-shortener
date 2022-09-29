import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {BASE_APP_COLOR , BASE_APP_COLOR_WHITE} from "../../../configs/StyleConstants";

export const useTitleTextStyles = makeStyles((theme: Theme) =>
  createStyles({
    small: {
      color: BASE_APP_COLOR_WHITE,
      fontSize: 30,
      fontWeight: "bold"
    },
    medium: {
      color: BASE_APP_COLOR_WHITE,
      fontSize: 30,
      fontWeight: "bold"
    },
    large: {
      color: BASE_APP_COLOR_WHITE,
      fontSiz: 30,
      fontWeight: "bold"
    },
  })
)