import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { BASE_APP_COLOR_WHITE, FORM_BUTTON_PADDING, BASE_APP_COLOR, FORM_FONT_SIZE, MIN_BUTTON_WIDTH, MIN_BUTTON_HEIGHT } from "../../../configs/StyleConstants";

export const useCustomButtonStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      borderRadius: 1000,
      backgroundColor: BASE_APP_COLOR,
      height: MIN_BUTTON_HEIGHT,
      width: MIN_BUTTON_WIDTH * 2,
      fontSize: FORM_FONT_SIZE,
      padding: FORM_BUTTON_PADDING,
      color: BASE_APP_COLOR_WHITE,
    },
    copy: {
      cursor: "pointer"
    }
  })
)