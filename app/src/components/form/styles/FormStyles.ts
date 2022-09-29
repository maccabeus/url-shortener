import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  BASE_APP_COLOR_LIGHT, FORM_INPUT_MARGIN, MIN_FORM_BORDER, FORM_FONT_SIZE
} from "../../../configs/StyleConstants";

export const useFormStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "50%"
    },
    input: {
      height: 60,
      minWidth: "100%",
      fontSize: FORM_FONT_SIZE * 1.5,
      borderRadius: MIN_FORM_BORDER * 100,
      borderColor: BASE_APP_COLOR_LIGHT,
      marginBottom: FORM_INPUT_MARGIN * 2,
      paddingLeft: FORM_INPUT_MARGIN * 3,
      border: "none",
    }
  })
)