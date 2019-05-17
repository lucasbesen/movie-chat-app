import React from 'react';
import MaterialTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Table = ({ rows, onRowClick }) => (
  <MaterialTable>
    <TableHead>
      <TableRow>
        <TableCell>Title</TableCell>
        <TableCell align="right">Year</TableCell>
        <TableCell align="right">Runtime</TableCell>
        <TableCell align="right">Revenue</TableCell>
        <TableCell align="right">Rating</TableCell>
        <TableCell align="right">Genres</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map(row => (
        <TableRow key={row.id} onClick={onRowClick}>
          <TableCell component="th" scope="row">
            {row.title}
          </TableCell>
          <TableCell align="right">{row.year}</TableCell>
          <TableCell align="right">{row.runtime}</TableCell>
          <TableCell align="right">{row.revenue}</TableCell>
          <TableCell align="right">{row.rating}</TableCell>
          <TableCell align="right">{`${row.genre.map(value => value)}`}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </MaterialTable>
);

export default Table;
