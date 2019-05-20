import React, {useState} from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { withRouter } from 'react-router-dom';
import queryString from "query-string";

import { getGenres } from '../utils';

const GenreSelectField = ({ onChangeFilter, location }) => {
  const search = queryString.parse(location.search);
  const [genreFilter, setGenreFilter] = useState(search && search.genre ? search.genre : '');
  return (
    <FormControl style={{ minWidth: 150 }}>
      <Select
        displayEmpty
        value={genreFilter}
        onChange={e => onChangeFilter(e.target.value) && setGenreFilter(e.target.value)}
      >
        <MenuItem value="">
          <em>All</em>
        </MenuItem>
        {getGenres().map(genre => <MenuItem key={genre} value={genre}>{genre}</MenuItem>)}
      </Select>
    </FormControl>
  );
};

export default withRouter(GenreSelectField);
