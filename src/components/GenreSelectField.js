// @flow
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

import type { RouteComponentProps } from 'react-router-dom';

import { getGenres } from '../utils';

type Props = {
  onChangeFilter: (string) => void,
} & RouteComponentProps;

const GenreSelectField = ({ onChangeFilter, location }: Props) => {
  const search = queryString.parse(location.search);
  const [genreFilter, setGenreFilter] = useState(search && search.genre ? search.genre : '');

  const handleGenreFilter = (value: string): void => {
    onChangeFilter(value);
    setGenreFilter(value);
  };

  return (
    <FormControl style={{ minWidth: 150 }}>
      <Select displayEmpty value={genreFilter} onChange={e => handleGenreFilter(e.target.value)}>
        <MenuItem value="">
          <em>All</em>
        </MenuItem>
        {getGenres().map(genre => (
          <MenuItem key={genre} value={genre}>
            {genre}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default withRouter(GenreSelectField);
