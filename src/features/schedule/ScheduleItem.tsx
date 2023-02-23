import {
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Avatar, Box, Typography } from "@mui/material";
import { ReactElement } from "react";
import { ScheduleItemModel } from "./ScheduleItemModel";

const ScheduleItem = (props: ScheduleItemModel): ReactElement => {
  const { id, title, subTitle, imgPath, time } = props;

  return (
    <>
      <TimelineItem key={id}>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {time}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <Box my={1}>
            <Avatar sx={{ width: 48, height: 48 }} alt={title} src={imgPath} />
          </Box>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="body1" component="p">
            {title}
          </Typography>
          <Typography variant="caption">{subTitle}</Typography>
        </TimelineContent>
      </TimelineItem>
    </>
  );
};

export default ScheduleItem;
