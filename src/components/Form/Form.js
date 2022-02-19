import React, { useEffect, useState } from "react";
import { Icon } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import axios from "axios";

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

  const [location, setlocation] = useState({ lat: null, lon: null });

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

  const handleOnDetchAutomaticallyClick = async () => {
    try {
      const apiKey = process.env.REACT_APP_WEATHER_API;
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}`
      );

      const { daily } = data;

      let tempSum = 0,
        humiditySum = 0;

      daily.forEach((element) => {
        humiditySum += element.humidity;
        let avg = (element.temp.max + element.temp.min) / 2;
        tempSum += avg;
      });

      const avgTemp = tempSum / daily.length;
      const avgHumidity = humiditySum / daily.length;

      setData((prevState) => ({
        ...prevState,
        temperature: avgTemp,
        humidity: avgHumidity,
      }));
    } catch (error) {
      alert("Error detecting weather conditions automatically");
      console.log(error);
    }
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert(
        "Auto detection of location is not compatible with your current browser"
      );
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position.coords.latitude, position.coords.longitude);
          setlocation({
            ...location,
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (err) => {
          alert("Unable to retrieve your location");
          console.log(err);
        }
      );
    }
  };

  useEffect(() => {
    getLocation();
    console.log(location);
  }, []);

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
            value={data.phValue}
            onChange={(e) => handleChange(e)}
          />
          <Input
            name="temperature"
            placeholder="Temperature"
            value={data.temperature}
            onChange={(e) => handleChange(e)}
          />
          <Input
            name="humidity"
            placeholder="Humidity"
            value={data.humidity}
            onChange={(e) => handleChange(e)}
          />
          <Input
            name="rainfall"
            placeholder="Rainfall"
            value={data.rainfall}
            onChange={(e) => handleChange(e)}
          />
          <Input
            name="yield"
            placeholder="Yield"
            value={data.yield}
            onChange={(e) => handleChange(e)}
          />
          <Input
            name="water"
            placeholder="Water"
            value={data.water}
            onChange={(e) => handleChange(e)}
          />
          <LinkContainer onClick={handleOnDetchAutomaticallyClick}>
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
