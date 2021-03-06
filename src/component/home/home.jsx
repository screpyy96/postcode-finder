import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import {
  Button,
  Typography,
  TextField as MuiTextField,
} from "@material-ui/core";
import { navigate } from "@reach/router";

import { initialFormValues, postcodeSchema } from "./home.form";
import { AppWrapper, Row, Styledfrom, TextInput } from "./home.styled";
import { useDebounce } from "../util/hook/debounce";
import { API_URL } from "../config";
import { Autocomplete } from "formik-material-ui-lab";
import { getSlug } from "../util";

const Home = () => {
  const [term, setTerm] = useState("");
  const [autocompleteData, setAutocompleteData] = useState([]);

  const onSubmit = (values) => {
    console.log(values);
    navigate(`/find/${getSlug(values.autocomplete || term, true)}`);
  };

  const handlePress = (e) => {
    setTerm(e.target.value);
  };

  const debounceTerm = useDebounce(term, 1000);

  useEffect(() => {
    const getResult = async () => {
      try {
        const resultData = await fetch(
          `${API_URL}${debounceTerm}/autocomplete`
        );
        const { result } = await resultData.json();

        setAutocompleteData(result || []);
      } catch (error) {
        console.log(error);
      }
    };

    debounceTerm && getResult();
  }, [debounceTerm]);

  return (
    <AppWrapper>
      <Formik
        initialValues={initialFormValues}
        onSubmit={onSubmit}
        validationSchema={postcodeSchema}
      >
        {({ isValid }) => (
          <Styledfrom>
            <Row>
              <Typography variant="h3">Postcode Info</Typography>
            </Row>

            <TextInput
              options={autocompleteData}
              onKeyUp={handlePress}
              component={Autocomplete}
              name="autocomplete"
              variant="outlined"
              renderInput={(params) => (
                <MuiTextField
                  {...params}
                  label="Postcode"
                  name="autocomplete"
                  variant="outlined"
                />
              )}
            />
            {/* <Field
              onKeyUp={handlePress}
              component={TextField}
              id="postcode"
              label="search"
              name="postcode"
              variant="outlined"
            /> */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={!isValid}
            >
              Find Postcode
            </Button>
          </Styledfrom>
        )}
      </Formik>
    </AppWrapper>
  );
};

export default Home;
