import { CircularProgress, Grid, Alert } from "@mui/material";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { CardPropTypes } from "../../components/card/Card";
import CardList from "../../features/list/CardList";
import Schedule from "../../features/schedule/Schedule";
import {
  useGetScheduleByDateQuery,
  useGetShowsQuery,
} from "../../services/show/ShowService";
import PageContainer from "../_base/PageContainer";

const HomePage = (): ReactElement => {
  const navigate = useNavigate();
  const {
    data: showList = [],
    isLoading: isShowListLoading,
    error: showListError,
  } = useGetShowsQuery();

  const onListItemClick = (id: string) => {
    navigate("/detail/" + id);
  };

  const {
    data: scheduleData = [],
    isLoading: isScheduleListLoading,
    error: scheduleListError,
  } = useGetScheduleByDateQuery({
    date: new Date().toISOString().slice(0, 10),
  });

  const getShowList = (genre: string): CardPropTypes[] => {
    const filteredList = showList.filter((item) => item.genres.includes(genre));

    filteredList.sort((a, b) => b.weight - a.weight);

    const mappedList = filteredList.slice(0, 5).map((item) => {
      return {
        id: item.id,
        imgPath: item.image.medium,
        title: item.name,
        tags: item.schedule.days.map((item) => {
          return { text: item, color: "warning" };
        }),
      };
    });

    return mappedList as CardPropTypes[];
  };

  return (
    <>
      <PageContainer headerText="UbiTV">
        {showListError != null || scheduleListError != null ? (
          <Alert severity="error" sx={{ my: 4, mr: 4 }}>
            Something went wrong! Please try again later.
          </Alert>
        ) : (
          <></>
        )}

        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            {isShowListLoading && <CircularProgress disableShrink />}
            <CardList
              list={getShowList("Action")}
              title="Action"
              onShowAllClick={() => alert("t")}
              onItemClick={onListItemClick}
            />
            <CardList
              list={getShowList("Comedy")}
              title="Comedy"
              onShowAllClick={() => alert("t")}
              onItemClick={onListItemClick}
            />
            <CardList
              list={getShowList("Romance")}
              title="Romance"
              onShowAllClick={() => alert("t")}
              onItemClick={onListItemClick}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            {isScheduleListLoading && <CircularProgress disableShrink />}
            <Schedule
              title={`Schedule for ${new Date().toDateString()}`}
              scheduleList={scheduleData.map((item) => {
                return {
                  id: item.id,
                  title: item.name,
                  subTitle: item._embedded?.show?.type,
                  imgPath: item._embedded?.show?.image?.medium,
                  time: item.airtime || "00:00",
                };
              })}
            />
          </Grid>
        </Grid>
      </PageContainer>
    </>
  );
};

export default HomePage;
