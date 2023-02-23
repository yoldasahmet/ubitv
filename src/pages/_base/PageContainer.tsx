import { Box, Container, SxProps, Theme, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import Header from "../../features/header/Header";

const contentStyle: SxProps<Theme> = {
  flexGrow: 1,
  display: "flex",
  flex: 1,
  flexDirection: "column",
  paddingBottom: 12,
  overflow: "auto",
  paddingTop: 12,
};

const PageContainer = (props: {
  headerText: string;
  back?: boolean;
  children: ReactElement | ReactElement[];
}): ReactElement => {
  const { headerText = "Ubi", back } = props;
  return (
    <Box sx={contentStyle}>
      <Header title={headerText} back={back} />
      <Container maxWidth="xl">
        <Box sx={{ padding: "0 24px" }}>{props.children}</Box>
      </Container>
    </Box>
  );
};

export default PageContainer;
