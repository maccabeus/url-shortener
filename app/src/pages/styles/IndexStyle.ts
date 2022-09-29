import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useIndexStyle = makeStyles((theme: Theme) =>
  createStyles({
    column: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
      paddingTop: 0,
      overflowY: "auto",
      width: "100%",
    }
  })
)