import React, { useState } from "react";
import { Icon } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import {
  Button,
  Container,
  FormContainer,
  Input,
  Link,
  LinkContainer,
  Option,
  Select,
  Title,
  Wrapper,
} from "./style";

const Form = () => {
  const [data, setData] = useState({
    season: null,
    phValue: null,
    temperature: null,
    humidity: null,
    rainfall: null,
    yield: null,
    water: null,
  });

  const handleClick = () => {
    alert(`Entered Data:\n
            season: ${data.season}
            phValue: ${data.phValue}
            temperature: ${data.temperature}
            humidity: ${data.humidity}
            rainfall: ${data.rainfall}
            yield: ${data.yield}
            water: ${data.water}
        `);
  };

  const handleChange = (event) => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Container>
      <Wrapper type="login">
        <Title>Header Text</Title>
        <FormContainer type="login">
          <Select name="season" onChange={(e) => handleChange(e)}>
            <Option selected={true} disabled={true}>
              Select Season
            </Option>
            <Option>Spring</Option>
            <Option>Summer</Option>
            <Option>Monsoon</Option>
            <Option>Autumn</Option>
            <Option>Winter</Option>
          </Select>
          <Input
            name="phValue"
            placeholder="Ph Value"
            onChange={(e) => handleChange(e)}
          />
          <Input
            name="temperature"
            placeholder="Temperature"
            onChange={(e) => handleChange(e)}
          />
          <Input
            name="humidity"
            placeholder="Humidity"
            onChange={(e) => handleChange(e)}
          />
          <Input
            name="rainfall"
            placeholder="Rainfall"
            onChange={(e) => handleChange(e)}
          />
          <Input
            name="yield"
            placeholder="Yield"
            onChange={(e) => handleChange(e)}
          />
          <Input
            name="water"
            placeholder="Water"
            onChange={(e) => handleChange(e)}
          />
          <LinkContainer>
            <Link>Detect Automatically </Link>
            <Icon sx={{ cursor: "pointer" }}>
              <LocationOnOutlinedIcon />
            </Icon>
          </LinkContainer>
          <Button onClick={handleClick}>Predict</Button>
        </FormContainer>
      </Wrapper>
    </Container>
  );
};

export default Form;
