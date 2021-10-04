import React from 'react';
import styled from 'styled-components';
import {DownArrow, UpArrow} from '@components/Arrow';
const {useState} = React;

export const Dropdown = ({linksList, setCategory, preselectedId = null}) => {
  const [menu, openMenu] = useState(false);
  const [items, setItems] = useState(linksList);
  const [selectedItem, setSelectedItem] = useState(preselectedId);
  let arr = [...items];
  let newArr = [];
  arr.filter((item) => (item.id != selectedItem ? newArr.push(item) : null));

  const showMenu = () => {
    openMenu(!menu);
  };

  const closeMenu = () => {
    openMenu(false);
  };

  const handleItemClickClose = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    setCategory(items.find((item) => item.id == id).title);
    document.addEventListener('click', closeMenu);
  };

  const handleItemClickOpen = () => {
    document.addEventListener('click', showMenu);
  };

  return (
    <Container>
      <DropdownDefault onClick={() => handleItemClickOpen()}>
        {/* This Shows The Chosen Category */}
        {selectedItem ? (
          <>{items.find((item) => item.id == selectedItem).title}</>
        ) : (
          items[0].title
        )}
        <ArrowContainer>{menu ? <UpArrow /> : <DownArrow />}</ArrowContainer>
      </DropdownDefault>
      {menu ? (
        <>
          {newArr.length === items.length
            ? newArr.splice(1).map((item, index) => (
                <DropdownItem
                  key={index}
                  onClick={(e) => handleItemClickClose(e.target.id)}
                  id={item.id}
                >
                  {item.title}
                </DropdownItem>
              ))
            : newArr.map((item, index) => (
                <DropdownItem
                  key={index}
                  onClick={(e) => handleItemClickClose(e.target.id)}
                  id={item.id}
                >
                  {item.title}
                </DropdownItem>
              ))}
        </>
      ) : (
        <>{null}</>
      )}
    </Container>
  );
};

const Container = styled.div`
  border: 2px solid #000000;
`;

const DropdownItem = styled.a`
  display: flex;
  border-top: 1px grey solid;
  padding: 19px 0;
  margin: 0 17px;

  font-family: ${(props) => props.theme.fonts.body};
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
`;

const DropdownDefault = styled(DropdownItem)`
  border-top: none;
  position: relative;
`;

const ArrowContainer = styled.span`
  position: absolute;
  right: 0;
`;
