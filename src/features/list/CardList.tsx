import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";
import Card, { CardPropTypes } from "../../components/card/Card";

const CardList = (props: {
  list: CardPropTypes[];
  title: string;
  onItemClick: (id: string) => void;
  onShowAllClick?: () => void;
}): ReactElement => {
  const { list, title, onShowAllClick, onItemClick } = props;

  return (
    <Box sx={{ marginBottom: 6 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ marginBottom: 1 }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {onShowAllClick && (
          <Button
            color="inherit"
            sx={{ marginRight: 2 }}
            endIcon={<ArrowForwardIosIcon />}
          >
            See all
          </Button>
        )}
      </Stack>
      <Grid
        container
        spacing={{ xs: 4, md: 4, lg: 1 }}
        columns={{ xs: 2, sm: 3, md: 4, lg: 5 }}
      >
        {list?.length ? (
          list.map((item) => (
            <Grid item key={item.id}>
              <Box onClick={() => onItemClick(item.id)}>
                <Card {...item} />
              </Box>
            </Grid>
          ))
        ) : (
          <>No item</>
        )}
      </Grid>
    </Box>
  );
};

export default CardList;
