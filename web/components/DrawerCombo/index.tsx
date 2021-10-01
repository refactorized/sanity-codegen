import styled from 'styled-components';
import {Component, useRef} from 'react';
import React, {useState} from 'react';
import {query} from '../../themes/fn';
import {Button} from '../Button/index';
import {CircleArrow} from '@components/Arrow';

export interface CtaProps {
  url: string;
  label: string;
}
export interface DrawerProps {
  icon?: string;
  title: string;
  details: string;
}

export interface DrawerComboProps {
  title: string;
  copy: string;
  cta: CtaProps;
  drawers: DrawerProps[];
}

const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (${query.atLeast('tablet')}) {
    flex-direction: row;
  }
`;

const ComboText = styled.div``;
const ComboCTA = styled.div`
  margin-bottom: 40px;

  @media screen and (${query.atLeast('tablet')}) {
    margin-left: 40px;
  }
`;

const ComboTextTitle = styled.div`
  /* small-headline-reg */

  font-family: ${(props) => props.theme.fonts.body};
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 119.5%;

  letter-spacing: -0.01em;
  color: #000000;
  margin-bottom: 10px;
`;

const ComboTextCopy = styled.div`
  /* small-bodycopy-reg */

  font-family: ${(props) => props.theme.fonts.headline};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;

  letter-spacing: -0.015em;
  color: rgba(72, 72, 72, 0.8);
  margin-bottom: 20px;
`;

const Drawers = styled.div``;
const DrawerContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 20px;
  margin: 0 0 20px 0;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
`;

const DrawerIcon = styled.div`
  width: 58px;
  min-width: 58px;
  height: 58px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 20px;
`;
const DrawerHint = styled.div`
  font-family: ${(props) => props.theme.fonts.headline};
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  text-align: left;
  margin-right: auto;
`;

const DrawerToggle = styled.div`
  cursor: pointer;
  margin-left: 20px;
  width: 26px;
  height: 26px;
  transform: ${(props) => (props.pointUp ? 'rotate(-90deg)' : 'rotate(90deg)')};
  transition: transform 0.5s;
`;

const DrawerDetail = styled.div`
  max-height: ${(props) => (props.isOpen ? 'auto' : '0')};
  line-height: ${(props) => (props.isOpen ? '134%' : '0%')};
  opacity: ${(props) => (props.isOpen ? '1.0' : '0.0')};
  transition: all 0.5s ease-in-out;
  overflow: hidden;
  font-family: ${(props) => props.theme.fonts.headline};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  letter-spacing: -0.015em;
`;

const DrawerInsert = styled.div`
  padding-top: 20px;
  margin-top: 20px;
  border-top: 0.5px solid rgba(0, 0, 0, 0.1);
`;

const Drawer = ({icon, title, details}: DrawerProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DrawerContainer>
      <TopBar>
        {icon && <DrawerIcon backgroundImage={icon} />}
        <DrawerHint>{title}</DrawerHint>
        <DrawerToggle pointUp={isOpen} onClick={toggleDetails}>
          <CircleArrow />
        </DrawerToggle>
      </TopBar>
      <DrawerDetail isOpen={isOpen}>
        <DrawerInsert>{details}</DrawerInsert>
      </DrawerDetail>
    </DrawerContainer>
  );
};

const DrawerCombo = ({title, copy, cta, drawers}: DrawerComboProps) => {
  return (
    <>
      <DrawerContent>
        <ComboText>
          <ComboTextTitle>{title}</ComboTextTitle>
          <ComboTextCopy>{copy}</ComboTextCopy>
        </ComboText>
        <ComboCTA>
          <Button
            {...cta}
            arrowColor={'white'}
            arrow={true}
            variant={'solid'}
            size={'medium'}
          />
        </ComboCTA>
      </DrawerContent>
      <Drawers>
        {drawers &&
          drawers.map(function (drawer, index) {
            return <Drawer {...drawer} key={'drawer-' + index} />;
          })}
      </Drawers>
    </>
  );
};

export default DrawerCombo;
