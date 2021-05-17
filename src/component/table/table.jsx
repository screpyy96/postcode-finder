import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
import { number } from "yup";
import { StyledPaper } from "./table.style";

const Table = ({ list = {} }) => {
  const data = Object.keys(list)
    .filter((key) => ["number", "string"].includes(typeof list[key]))
    .map((key) => ({
      key,
      value: list[key],
    }));

  return (
    <StyledPaper>
      <MuiTable>
        <TableHead>
          <TableRow>
            <TableCell>Key</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map(({ key, value }) => (
            <TableRow key={key}>
              <TableCell>{key}</TableCell>
              <TableCell>{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </StyledPaper>
  );
};

export default Table;
