import React, { useState } from "react";
import { DisplayType } from "../home";
import { Container, Header, Menu, Segment } from "semantic-ui-react";
import { useQuery } from "@tanstack/react-query";
import { fetchRatedMovies, fetchRatedTvShows } from "./query";
import ColumnDisplay from "../home/column-display";
import { Navigate } from "react-router-dom";

const Rated = () => {
  const [activeTabs, setActiveTabs] = useState<DisplayType>(DisplayType.Movies);
  const { data: ratedMovies } = useQuery({
    queryKey: ["ratedMovies"],
    queryFn: fetchRatedMovies,
  });
  const { data: ratedTvShows } = useQuery({
    queryKey: ["ratedTvShows"],
    queryFn: fetchRatedTvShows,
  });
  if (localStorage.getItem("guest_session_id") === null) {
    return <Navigate to={"/auth"} />;
  }

  return (
    <Container style={{ marginTop: 60 }}>
      <Menu pointing secondary>
        <Menu.Item
          name="Movies"
          active={activeTabs === DisplayType.Movies}
          onClick={() => setActiveTabs(DisplayType.Movies)}
        />
        <Menu.Item
          name="TV Shows"
          active={activeTabs === DisplayType.TvShows}
          onClick={() => setActiveTabs(DisplayType.TvShows)}
        />
      </Menu>
      <Segment>
        {activeTabs === DisplayType.Movies ? (
          <div style={{ textAlign: "center" }}>
            <Header as={"h2"}>Rated Movies</Header>
            <ColumnDisplay
              data={ratedMovies?.results}
              displayType={DisplayType.Movies}
              isRated
            />
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <Header as={"h2"}>TV Shows</Header>
            <ColumnDisplay
              data={ratedTvShows?.results}
              displayType={DisplayType.TvShows}
              isRated
            />
          </div>
        )}
      </Segment>
    </Container>
  );
};

export default Rated;
