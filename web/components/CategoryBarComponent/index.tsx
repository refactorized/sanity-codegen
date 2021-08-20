import React from 'react';
import styled from 'styled-components';
import {Button} from '@components/Button';
import {query} from '@theme/fn';
import {Dropdown} from '@components/DropDownComponent';

interface CategoryLink {
  title: string;
  link: string;
}

interface CategoryBarProps {
  links: CategoryLink[];
}
export const CategoryBar = ({links}: CategoryBarProps): JSX.Element => {
  return (
    <>
      {/* Mobile Version Using Dropdown Component */}
      <DropdownContainer>
        <Dropdown linksList={links} />
      </DropdownContainer>
      {/* Greater than Mobile Version Styling */}
      <ButtonListContainer>
        {links.map((link, index) => (
          <Button
            key={index}
            arrow={false}
            variant="category"
            url={link.link}
            label={link.title}
            size="medium"
          />
        ))}
      </ButtonListContainer>
    </>
  );
};

const DropdownContainer = styled.div`
  @media (${query.atLeast('max')}) {
    display: none;
  } ;
`;

const ButtonListContainer = styled.div`
  display: none;
  @media (${query.atLeast('max')}) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  } ;
`;
