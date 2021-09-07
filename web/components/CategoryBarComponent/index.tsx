import React from 'react';
import styled, {css} from 'styled-components';
import {query} from '@theme/fn';
import {useState} from 'react';

export interface CategoryLink {
  id: number;
  title: string;
  link: string;
}

interface CategoryBarProps {
  links: CategoryLink[];
  setCategory: any;
}
export const CategoryBar = ({
  setCategory,
  links,
}: CategoryBarProps): JSX.Element => {
  const [active, setActive] = useState(0);

  const handleOnClick = (id) => {
    links.map((link) => (link.id == id ? setCategory(link.title) : null));
    setActive(id);
  };

  return (
    <>
      <ButtonListContainer>
        {links.map((link, index) => (
          <Button
            id={link.id}
            key={index}
            onClick={(e) => handleOnClick(e.target.id)}
            active={active == index ? true : false}
          >
            {link.title}
          </Button>
        ))}
      </ButtonListContainer>
    </>
  );
};

const Button = styled.button`
  padding: 16px 24px;
  border: solid 2px black;
  background-color: transparent;
  font-family: Proxima Nova;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.03em;
  text-align: center;

  ${(props) =>
    props.active &&
    css`
      color: white;
      background-color: #1b76b0;
      border: #1b76b0;
    `}
`;

const ButtonListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (${query.atLeast('tablet')}) {
    flex-direction: row;
    flex-wrap: wrap;
  } ;
`;
