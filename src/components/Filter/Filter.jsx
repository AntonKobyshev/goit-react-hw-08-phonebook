import { useDispatch, useSelector } from 'react-redux';
import { getContactFilter } from 'redux/filter/selectors';
import { setContactFilter } from 'redux/filter/slice';
import { Wrapper, Label, Input} from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getContactFilter);

  const handleFilterChange = (e) => {
    dispatch(setContactFilter(e.currentTarget.value));
  };

  return (
    <Wrapper>
      <Label htmlFor="filter">
          
      </Label>
      <Input
        name="filter"
        type="text"
        id="filter"
        value={filterValue}
        onChange={handleFilterChange}
        placeholder="Find contacts by name"
      />
    </Wrapper>
  );
};