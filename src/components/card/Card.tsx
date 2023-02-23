import {
  Card as MuiCard,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { ReactElement } from "react";
import placeHolder from "../../assets/images/ph.png";

type colorTypes =
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning"
  | undefined;

export interface CardPropTypes {
  id: string;
  imgPath: string;
  title: string;
  subTitle?: string;
  tags?: { text: string; color?: colorTypes }[];
}

const Card = (props: CardPropTypes): ReactElement => {
  const { id, title, subTitle, imgPath = placeHolder, tags } = props;

  return (
    <>
      <MuiCard key={id} sx={{ maxWidth: 180 }}>
        <CardActionArea>
          <CardMedia component="img" image={imgPath} alt={title} />
          <CardContent sx={{ minHeight: 104 }}>
            <Typography gutterBottom variant="h6" component="div">
              {title}
            </Typography>
            {subTitle && (
              <Typography variant="body2" color="text.secondary">
                {subTitle}
              </Typography>
            )}

            {tags &&
              tags.map((item, index) => (
                <Chip
                  key={`chip-${id}-${index}`}
                  label={item.text}
                  size="small"
                  variant="outlined"
                  color={item.color}
                  sx={{ mr: 1, mb: 1 }}
                />
              ))}
          </CardContent>
        </CardActionArea>
      </MuiCard>
    </>
  );
};

export default Card;
