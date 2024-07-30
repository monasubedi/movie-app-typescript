import React, { useState } from "react";
import { DisplayType } from ".";
import { Card, Form, Grid, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { rateMovie, rateTvshows } from "./mutation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface DisplayData {
  id: number;
  overview: string;
  poster_path: string;
  title?: string;
  name?: string;
  vote_average: number;
  release_date: string;
  rating?: number;
}

interface Props {
  data: DisplayData[];
  displayType: DisplayType;
  isRated?: boolean;
}

const ColumnDisplay: React.FC<Props> = (props: Props) => {
  const { data, displayType, isRated } = props;
  const [rating, setRating] = useState<number>(0);

  const onSuccess = () => {
    toast.success("Succesfully rated.");
  };

  const onError = () => {
    toast.error("Something went wrong!");
  };

  const { mutate: rateMoviesMutation } = useMutation({
    mutationKey: ["rateMovies"],
    mutationFn: (id: number) => rateMovie(id, rating),
    onSuccess,
    onError,
  });
  const { mutate: rateTvShowMutation } = useMutation({
    mutationKey: ["rateTvshows"],
    mutationFn: (id: number) => rateTvshows(id, rating),
    onSuccess,
    onError,
  });

  const rate =
    displayType === DisplayType.Movies
      ? rateMoviesMutation
      : rateTvShowMutation;

  return (
    <Grid
      columns={3}
      padded="vertically"
      textAlign="center"
      stackable
      centered
      verticalAlign="top"
    >
      {data &&
        data.map((displayData: DisplayData) => (
          <Grid.Column key={displayData.id}>
            <Card.Group>
              <Link
                to={`/${
                  displayType === DisplayType.Movies ? "movie" : "tvshow"
                }/${displayData.id}`}
              >
                <Card
                  style={{ height: 780 }}
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
                {isRated && <Label>Your Rating: {displayData?.rating}</Label>}
              </Link>
              <Form>
                <Form.Group>
                  <Form.Field>
                    <Form.Input
                      type="number"
                      min="0"
                      max="10"
                      step="0.5"
                      onChange={(e) => setRating(Number(e.target.value))}
                      action={{
                        color: "violet",
                        labelPosition: "right",
                        icon: "star",
                        content: "Rate",
                        onClick: () => {
                          rate(displayData.id);
                        },
                      }}
                    />
                  </Form.Field>
                </Form.Group>
              </Form>
            </Card.Group>
          </Grid.Column>
        ))}
    </Grid>
  );
};

export default ColumnDisplay;
