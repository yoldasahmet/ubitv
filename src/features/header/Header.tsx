import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { Search, SearchIconWrapper, StyledInputBase } from "./HeaderSearch";

const Header = (props: { title?: string; back?: boolean }): ReactElement => {
  const { title = "Ubi", back } = props;
  const navigate = useNavigate();

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event && event.key === "Enter") {
      const textVal = (event.target as HTMLInputElement).value;
      if (textVal) {
        navigate("/search?term=" + textVal);
      }
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="primary">
        <Container maxWidth="xl" sx={{ alignSelf: "center" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
              onClick={() => (back ? navigate(-1) : navigate("/"))}
            >
              {back ? <ArrowBackIosNewIcon /> : <MovieFilterIcon />}
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                display: { xs: "none", sm: "block" },
                flexGrow: 1,
                letterSpacing: 4,
              }}
            >
              {title}
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>

              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onKeyUp={handleSearch}
              />
            </Search>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
