import {useState} from 'react';
import styled from 'styled-components';
import {query} from '../../themes/fn';
import theme from '@theme';
import {Dropdown} from '@components/DropDownComponent';

export interface FilterItemProps {
  id: any;
  title: string;
}

export interface FilterProps {
  label: string;
  items: FilterItemProps[];
  selected?: any;
}

export interface GridFilterProps {
  categories: FilterProps[];
  onSelected: (any) => null;
}

const FilterContainer = styled.div`
  display: flex;
  gap: 24px;

  flex-direction: column;

  @media (${query.atLeast('tablet')}) {
    flex-direction: row;
  }
`;
const Filter = styled.div`
  width: 100%%;
  @media (${query.atLeast('tablet')}) {
    width: 50%;
  }
`;
const FilterLabel = styled.div`
  font-family: ${(props) => props.theme.fonts.body};
  padding: 12px 0;
`;
const FilterDropdown = styled.div``;

export const FilterSelect = ({category, onSelected}): JSX.Element => {
  const categorySelected = (selected) => {
    onSelected({label: category.label, selected: selected}, category);
  };

  return (
    <Filter>
      <FilterLabel>{category.label}</FilterLabel>
      <FilterDropdown>
        <Dropdown
          linksList={category.items}
          setCategory={(selected) => {
            categorySelected(selected);
          }}
          preselectedId={category.selected ?? null}
        />
      </FilterDropdown>
    </Filter>
  );
};

export const GridFilter = ({
  categories,
  onSelected,
}: GridFilterProps): JSX.Element => {
  const [selected, setSelected] = useState(
    categories
      .filter((c) => c.selected)
      .map(function (c) {
        return {
          label: c.label,
          selected: c.items.find((item) => item.id == c.selected).title,
        };
      }),
  );
  const gatherSelected = (selection, category) => {
    const selectedIndex = selected.findIndex(
      (item) => item.label == category.label,
    );

    const newArray = [].concat(
      selectedIndex > 0 ? selected.slice(0, selectedIndex) : [],
      selection,
      selectedIndex + 1 < selected.length
        ? selected.slice(selectedIndex + 1, selected.length)
        : [],
    );

    setSelected(newArray);
    onSelected(newArray);
  };
  return (
    <FilterContainer>
      {categories && (
        <>
          {categories.map((category, index) => {
            return (
              <FilterSelect
                category={category}
                onSelected={gatherSelected}
                key={'filter-' + index}
              />
            );
          })}
        </>
      )}
    </FilterContainer>
  );
};

export default GridFilter;
