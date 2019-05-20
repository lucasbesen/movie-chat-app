import React, { useState } from 'react';
import styled from 'styled-components';
import MaterialTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from "@material-ui/core/Paper";
import Input from '@material-ui/core/Input';
import {debounce} from 'lodash';
import { withRouter } from 'react-router-dom';
import queryString from "query-string";

import {formatRevenue, formatRuntime} from "../utils";

import GenreSelectField from './GenreSelectField';

const StyledRow = styled(TableRow)`
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;

const Table = ({ rows, onRowClick, onFilterByTitle, onFilterByGenre, location }) => {
  const search = queryString.parse(location.search);
  const [titleFilter, setTitleFilter] = useState(search && search.title ? search.title : '');
  const onChangeFilter = debounce(value => {
    onFilterByTitle(value);
  }, 800);
  const handleTitleFilter = (value) => {
    onChangeFilter(value);
    setTitleFilter(value);
  };

  return (
    <Paper>
      <MaterialTable>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Runtime</TableCell>
            <TableCell>Revenue</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Genres</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell colSpan={5}>
              <Input placeholder="Filter by title" value={titleFilter} onChange={e => handleTitleFilter(e.target.value)} />
            </TableCell>
            <TableCell>
              <GenreSelectField onChangeFilter={value => onFilterByGenre(value)} location={location} />
            </TableCell>
          </TableRow>
          {rows.map((row, index) => (
            <StyledRow key={index} onClick={() => onRowClick(row.title)}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell>{row.year}</TableCell>
              <TableCell>{formatRuntime(row.runtime)}</TableCell>
              <TableCell>{formatRevenue(row.revenue)}</TableCell>
              <TableCell>{row.rating}</TableCell>
              <TableCell>{`${row.genre.map(value => value)}`}</TableCell>
            </StyledRow>
          ))}
        </TableBody>
      </MaterialTable>
    </Paper>
  );
};

export default withRouter(Table);
