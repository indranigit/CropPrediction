import React from "react";
import { Icon } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import {
  Button,
  Container,
  FormContainer,
  Input,
  Link,
  LinkContainer,
  Title,
  Wrapper,
} from "./style";

const Form = () => {
  return (
    <Container>
      <Wrapper type="login">
        <Title>Header Text</Title>
        <FormContainer type="login">
          <Input placeholder="Season" />
          <Input placeholder="Ph Value" />
          <Input placeholder="Temperature" />
          <Input placeholder="Humidity" />
          <Input placeholder="Rainfall" />
          <Input placeholder="Yield" />
          <Input placeholder="Water" />
          <LinkContainer>
            <Link>Detect Automatically </Link>
            <Icon sx={{ cursor: "pointer" }}>
              <LocationOnOutlinedIcon />
            </Icon>
          </LinkContainer>
          <Button>Predict</Button>
        </FormContainer>
      </Wrapper>
    </Container>
  );
};

export default Form;
