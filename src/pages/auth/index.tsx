import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { Form, Grid, Header, Segment, Button } from "semantic-ui-react";
import { mutationLogin } from "./mutation";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const { data, mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: mutationLogin,
  });
  const navigate = useNavigate();

  const handleLogin = async () => {
    await mutate();
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem("guest_session_id", data.guest_session_id);
      navigate("/");
    }
  }, [data]);

  return (
    <Grid textAlign="center" verticalAlign="middle" style={{ height: "100vh" }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as={"h2"} color="violet" textAlign="center">
          Welcome Login by registering as a Guest below.
        </Header>
        <Form size="large">
          <Segment stacked>
            <Button onClick={handleLogin} color="violet" size="large" fluid>
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Auth;
