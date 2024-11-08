import "./App.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import { useState } from "react";
import Typography from "@mui/material/Typography";

function Calculator() {
  const [result, setResult] = useState("");
  const [operation, setoperation] = useState("");
  const allButton = [
    { id: 0, btn: "C" },
    { id: 1, btn: "(" },
    { id: 2, btn: ")" },
    { id: 3, btn: "*" },
    { id: 4, btn: "√" },
    { id: 5, btn: "%" },
    { id: 6, btn: "±" },
    { id: 7, btn: "/" },
    { id: 8, btn: "7" },
    { id: 9, btn: "8" },
    { id: 10, btn: "9" },
    { id: 11, btn: "-" },
    { id: 12, btn: "4" },
    { id: 13, btn: "5" },
    { id: 14, btn: "6" },
    { id: 15, btn: "+" },
    { id: 16, btn: "1" },
    { id: 17, btn: "2" },
    { id: 18, btn: "3" },
    { id: 20, btn: "." },
    { id: 21, btn: "0" },
    { id: 22, btn: "dell" },
    { id: 23, btn: "=" },
  ];

  function handelResult(value) {
    if (value !== "√" && value !== "%" && value !== "C" && value !== "dell" && value !== "±") {
      const resultFinall = operation + value;
      setoperation(resultFinall);
    }

    if (value == "=") {
      try {
        setResult(eval(operation));
      } catch {
        console.log("failed format")
      }
      
    } else if (value == "C") {
      setResult("");
      setoperation("");
    } else if (value === "dell") {
      setoperation(operation.replace(operation[operation.length - 1], ""));
    } else if (value == "±") {
      setoperation(operation * -1);
    } else if (value === "√") {
      setResult(Math.sqrt(operation));
    } else if (value === "%") {
      setResult(operation * 0.01);
    }
  }

  const allButtonLiist = allButton.map((bt) => {
    return (
      <Grid
        key={bt.id}
        sx={{ boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.3)" }}
        size={bt.btn === "=" ? 6 : 3}
      >
        <Button
          onClick={() => {
            handelResult(bt.btn);
          }}
          sx={{
            borderRadius: "25%",
            color: "white",
            backgroundColor: `${
              bt.btn == "*" ||
              bt.btn == "-" ||
              bt.btn == "+" ||
              bt.btn == "/" ||
              bt.btn == "." ||
              bt.btn == "="
                ? "rgb(88 28 135)"
                : "rgb(55 65 81)"
            } `,
            "&hover": { backgroundColor: "rgb(rgb(107 114 128))" },
          }}
          className="w-full"
          variant="contained"
        >
          {bt.btn}
        </Button>
      </Grid>
    );
  });

  return (
    <>
      <div className="cc bg-gray-950 min-h-screen">
        <Container className="pt-16" maxWidth="sm">
          <Box
            sx={{
              backgroundColor: "rgb(31 41 55)",
              color: "white",
              padding: "10px 120px",
              gap: "10px",
            }}
          >
            <Grid container spacing={2}>
              <Grid
                sx={{
                  boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.3)",
                  backgroundColor: "rgb(55 65 81)",
                  height: "100px",
                  borderRadius: "10px",
                  padding: "10px",
                }}
                size={12}
              >
                <Typography variant="h5" gutterBottom>
                  {operation}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  {result}
                </Typography>
              </Grid>

              {allButtonLiist}
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default Calculator;
