import { Form } from "formik";
import styled from "styled-components";

export const Styledfrom = styled(Form)`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, auto);
`;

export const Row = styled.div`
  grid-column: 1/-1;
`;

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
