import { useState } from "react";
import { Button, ButtonGroup } from "semantic-ui-react";
import ColumnDisplay from "./column-display";
import { useQuery } from "@tanstack/react-query";
import { fetchMovies, fetchTvShows } from "./query";
import { Navigate } from "react-router-dom";

export enum DisplayType {
  Movies = "movies",
  TvShows = "tvshows",
}

const Home = () => {
  const { data: moviesData, isLoading: moviesLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });
  const { data: tvshowsData, isLoading: tvshowsLoading } = useQuery({
    queryKey: ["tvshows"],
    queryFn: fetchTvShows,
  });

  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.Movies
  );
  if (localStorage.getItem("guest_session_id") === null) {
    return <Navigate to={"/auth"} />;
  }
  return (
    <div
      style={{
        height: "auto",
        maxWidth: "1024px",
        margin: "60px auto",
        textAlign: "center",
      }}
    >
      <ButtonGroup>
        <Button
          color={displayType === DisplayType.Movies ? "blue" : undefined}
          onClick={() => setDisplayType(DisplayType.Movies)}
        >
          Movies
        </Button>
        <Button
          color={displayType === DisplayType.TvShows ? "blue" : undefined}
          onClick={() => setDisplayType(DisplayType.TvShows)}
        >
          TV Shows
        </Button>
      </ButtonGroup>
      <div style={{ marginTop: 20 }}>
        {moviesLoading || tvshowsLoading ? (
          <p>Loading...</p>
        ) : displayType === DisplayType.Movies ? (
          <ColumnDisplay
            data={moviesData.results}
            displayType={DisplayType.Movies}
          />
        ) : (
          <ColumnDisplay
            data={tvshowsData.results}
            displayType={DisplayType.TvShows}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
