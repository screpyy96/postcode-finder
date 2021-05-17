import React from "react";
import { TextField } from "formik-material-ui";
import { Field, Formik } from "formik";
import { Button, Typography } from "@material-ui/core";
import { navigate } from "@reach/router";

import { initialFormValues, postcodeSchema } from "./home.form";
import { AppWrapper, Row, Styledfrom } from "./home.styled";

const Home = () => {
  const onSubmit = (values) => {
    navigate(`/find/${values.postcode}`);
  };

  return (
    <AppWrapper>
      <Formik
        initialValues={initialFormValues}
        validationSchema={postcodeSchema}
        onSubmit={onSubmit}
      >
        {({ isValid }) => (
          <Styledfrom>
            <Row>
              <Typography variant="h3">Postcode Info</Typography>
            </Row>
            <Field
              component={TextField}
              id="postcode"
              label="search"
              name="postcode"
              variant="outlined"
            />
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
