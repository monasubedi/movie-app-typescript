import React from "react";
import { DisplayType } from ".";
import { Card, Grid } from "semantic-ui-react";

interface DisplayData {
  id: number;
  overview: string;
  poster_path: string;
  title?: string;
  name?: string;
  vote_average: number;
  release_date: string;
}

interface Props {
  data: DisplayData[];
  displayType: DisplayType;
}

const ColumnDisplay: React.FC<Props> = (props: Props) => {
  const { data, displayType } = props;

  //   console.log("data is", data);

  return (
    <Grid
      columns={3}
      padded="vertically"
      textAlign="center"
      stackable
      centered
      verticalAlign="top"
    >
      {data.map((displayData: DisplayData) => (
        <Grid.Column key={displayData.id}>
          <Card.Group>
            <Card
              fluid
              image={`https://image.tmdb.org/t/p/original/${displayData.poster_path}`}
              header={
                displayType === DisplayType.Movies
                  ? displayData.title
                  : displayData.name
              }
              meta={`Release Date:
                ${displayData.release_date} |  ${displayData.vote_average}`}
              description={displayData.overview.slice(0, 350) + "..."}
            />
          </Card.Group>
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default ColumnDisplay;
