import { Typography } from "@material-ui/core";
import { useParams } from "@reach/router";
import React, { useEffect } from "react";
import { useState } from "react";
import Table from "../table";
import { getApiNearestPostcode, getApiPostcode } from "../util/postcode";
import { Wrapper } from "./postcode.style";

const Postcode = () => {
  const [data, setData] = useState({
    postcode: {},
    nearest: [],
  });

  const { postcode } = useParams();

  useEffect(() => {
    const getResult = async () => {
      try {
        const postcodeResponse = await fetch(getApiPostcode(postcode));
        const { result: postcodeResult } = await postcodeResponse.json();

        const nearestPostcodeResponse = await fetch(
          getApiNearestPostcode(postcode)
        );
        const { result: nearestPostcodeResult } =
          await nearestPostcodeResponse.json();

        setData({
          postcode: postcodeResult,
          nearest: nearestPostcodeResult,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getResult();
  }, [postcode]);

  const nearestPostcode = data?.nearest;
  const currPostcode = data?.postcode;

  return (
    <Wrapper>
      <Typography component="h1" variant="h3">
        Searched Postcode
      </Typography>
      <Table list={currPostcode} />

      <Typography component="h2" variant="h4">
        Nearest
      </Typography>
      {nearestPostcode.map((tableData) => (
        <Table list={tableData} />
      ))}
    </Wrapper>
  );
};

export default Postcode;
