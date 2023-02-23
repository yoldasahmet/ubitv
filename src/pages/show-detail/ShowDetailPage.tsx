import {
  Breadcrumbs,
  Button,
  Chip,
  Divider,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { ReactElement } from "react";
import { useParams } from "react-router-dom";
import { useGetShowsQuery } from "../../services/show/ShowService";
import PageContainer from "../_base/PageContainer";

const ShowDetailPage = (): ReactElement => {
  let { id } = useParams();

  const { data: showList = [] } = useGetShowsQuery();

  const selectedShow = showList.find((item) => String(item.id) === id);

  return (
    <>
      <PageContainer headerText="Show Details" back>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Stack spacing={2}>
              <Typography variant="h3">{selectedShow?.name}</Typography>

              <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
                <Rating
                  name="size-large"
                  defaultValue={selectedShow?.rating?.average}
                  size="large"
                  readOnly
                  precision={0.2}
                  max={10}
                />

                <Chip
                  key={`chip-${selectedShow?.id}`}
                  label={selectedShow?.schedule?.days}
                  variant="outlined"
                  sx={{ mr: 1 }}
                />

                <Breadcrumbs aria-label="breadcrumb" sx={{ paddingTop: "4px" }}>
                  {selectedShow?.genres?.map((item) => (
                    <Typography key={item} color="text.primary">
                      {item}
                    </Typography>
                  ))}
                </Breadcrumbs>
              </Stack>

              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={{ xs: 0, md: 3 }}
              >
                <Button variant="outlined">
                  {selectedShow?.runtime + " mins"}
                </Button>
                <Button variant="outlined">
                  {selectedShow?.schedule?.time || "00:00"}
                </Button>
                <Button variant="outlined">{selectedShow?.type}</Button>
                <Button variant="outlined">{selectedShow?.status}</Button>
                <Button variant="outlined">{selectedShow?.language}</Button>
              </Stack>

              <div
                style={{ paddingRight: 24, fontSize: 18, lineHeight: 2 }}
                dangerouslySetInnerHTML={{
                  __html: selectedShow?.summary || "",
                }}
              ></div>

              <Typography variant="body1" component="div"></Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <img
                src={`${selectedShow?.image?.original}`}
                alt={selectedShow?.name}
                loading="lazy"
                width="100%"
              />
            </Stack>
          </Grid>
        </Grid>
      </PageContainer>
    </>
  );
};

export default ShowDetailPage;
