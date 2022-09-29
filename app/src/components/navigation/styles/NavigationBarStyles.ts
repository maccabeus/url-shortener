import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { BASE_APP_COLOR_YELLOW } from "../../../configs/StyleConstants";

export const useNavigationBarStyles = makeStyles((theme: Theme) =>
  createStyles({
    nav: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    rightHeader: {
      marginLeft: "auto"
    }
  })
)