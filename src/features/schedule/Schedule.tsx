import { Timeline } from "@mui/lab";
import { Typography } from "@mui/material";
import { ReactElement } from "react";
import ScheduleItem from "./ScheduleItem";
import { ScheduleItemModel } from "./ScheduleItemModel";

const Schedule = (props: {
  scheduleList: ScheduleItemModel[];
  title?: string;
  onItemClick?: string;
}): ReactElement => {
  const { scheduleList, title } = props;

  return (
    <>
      <Typography variant="h6" textAlign={"center"} sx={{ paddingLeft: 8 }}>
        {title}
      </Typography>
      <Timeline>
        {scheduleList &&
          scheduleList.map((item) => {
            return <ScheduleItem key={item.id} {...item} />;
          })}
      </Timeline>
    </>
  );
};

export default Schedule;
