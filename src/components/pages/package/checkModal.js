import React from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";


const TMPContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  textAlign: 'center',
  maxWidth: "441px",
  width: "100%",
  background: "#fff",
  borderRadius: "26px",
}));
const TMPIcon = styled("div")(({ theme }) => ({
  margin: '20px 0px'
}));
const TMPTitle = styled("div")(({ theme }) => ({
  margin: '20px 0px'
}));
const ThemeComponents = styled(Button)(({ theme }) => ({
  marginRight: "20px",
  borderRadius: "5.16px",
  height: "32.67px",
  padding: "0px 30px",
  margin: '20px 0px',
  color: "#fff",
  fontWeight: "bold",
  background:
    "#356ad8",
    [theme.breakpoints.down("sm")]: {
  fontSize: "10px",

    },
    '&:hover': {
      background: "#356ad8",
   },
}));
export default function Index(props) {
  return (
    <TMPContainer>
      <Container>
        <Typography>
           
             
             <TMPIcon>
              </TMPIcon>

             
              <TMPTitle>{props.errorMsg}</TMPTitle>
           
              <ThemeComponents
                onClick={
                  () => props.closeModal()
                }
              >
                OKAY
              </ThemeComponents>
            
        </Typography>
      </Container>
    </TMPContainer>
  );
}
