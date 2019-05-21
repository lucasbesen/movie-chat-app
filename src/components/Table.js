// @flow
import React, { useState } from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import MaterialTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';

import type { RouteComponentProps } from 'react-router-dom';

import { formatRevenue, formatRuntime, paginateResult } from '../utils';

import { GenreSelectField } from './';

import type { Movie } from '../utils';

const StyledRow = styled(TableRow)`
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;

type Props = {
  handlePageChange: (value: number) => void,
  onFilterByGenre: (value: string) => void,
  onFilterByTitle: (value: string) => void,
  onRowClick: (id: string) => void,
  rows: Movie[],
} & RouteComponentProps;

const Table = ({ rows, onRowClick, onFilterByTitle, onFilterByGenre, location, handlePageChange }: Props) => {
  const filteredRows = paginateResult(rows, location);
  const search = queryString.parse(location.search);
  const [titleFilter, setTitleFilter] = useState(search && search.title ? search.title : '');
  const [page, setPage] = useState(search && search.page && Number(search.page) ? Number(search.page) : 0);

  const onChangeFilter = debounce((value: string): void => {
    onFilterByTitle(value);
  }, 800);

  const handleTitleFilter = (value: string): void => {
    onChangeFilter(value);
    setTitleFilter(value);
  };

  const handlePage = (value: number): void => {
    handlePageChange(value);
    setPage(value);
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
              <Input
                placeholder="Filter by title"
                value={titleFilter}
                onChange={e => handleTitleFilter(e.target.value)}
              />
            </TableCell>
            <TableCell>
              <GenreSelectField onChangeFilter={value => onFilterByGenre(value)} location={location} />
            </TableCell>
          </TableRow>
          {filteredRows.map((row, index) => (
            <StyledRow key={index} onClick={() => onRowClick(row.title)}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell>{row.year}</TableCell>
              <TableCell>{formatRuntime(row.runtime)}</TableCell>
              <TableCell>{formatRevenue(row.revenue)}</TableCell>
              <TableCell>{row.rating}</TableCell>
              <TableCell>{`${row.genre.map(value => value.toString())}`}</TableCell>
            </StyledRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[]}
              rowsPerPage={10}
              count={rows.length}
              page={page}
              labelDisplayedRows={() => {}}
              onChangePage={(e, page) => handlePage(page)}
            />
          </TableRow>
        </TableFooter>
      </MaterialTable>
    </Paper>
  );
};

export default withRouter(Table);
