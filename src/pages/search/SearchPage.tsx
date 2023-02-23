import {
  Alert,
  CircularProgress,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ReactElement } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CardPropTypes } from "../../components/card/Card";
import CardList from "../../features/list/CardList";
import { useSearchShowQuery } from "../../services/show/ShowService";
import PageContainer from "../_base/PageContainer";

const SearchPage = (): ReactElement => {
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const {
    data: searchResults = [],
    isLoading: isSearchLoading,
    error: searchError,
  } = useSearchShowQuery({ term: searchParams.get("term") || "" });

  const getSearchResults = (): CardPropTypes[] => {
    const searchedList = searchResults.slice();

    searchedList.sort((a, b) => b.score - a.score);

    const mappedList = searchedList.map((item) => {
      return {
        id: item.show.id,
        imgPath: item.show.image?.medium,
        title: item.show.name,
        tags: item.show.schedule?.days.map((item) => {
          return { text: item, color: "warning" };
        }),
      };
    });

    return mappedList as CardPropTypes[];
  };

  const onListItemClick = (id: string) => {
    navigate("/detail/" + id);
  };

  return (
    <>
      <PageContainer headerText="Search" back>
        {searchError != null ? (
          <Alert severity="error" sx={{ my: 4, mr: 4 }}>
            Something went wrong! Please try again later.
          </Alert>
        ) : (
          <></>
        )}

        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            {isSearchLoading && <CircularProgress disableShrink />}
            <CardList
              list={getSearchResults()}
              title={`Search Results for "${searchParams.get("term")}"`}
              onItemClick={onListItemClick}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <Typography variant="h5">Advanced Search</Typography>
              <TextField
                id="standard-basic"
                label="Summary"
                variant="standard"
              />
              <TextField id="standard-basic" label="Date" variant="standard" />
              <TextField
                id="standard-basic"
                label="Show Type"
                variant="standard"
              />
              <Typography variant="caption">
                *Advanced search has not implemented
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </PageContainer>
    </>
  );
};

export default SearchPage;
