import styled from 'styled-components';
import {space, border} from 'styled-system';
import {LeftArrow, RightArrow} from '../Arrow/index';
import Block from '@components/Layout/Block';
import Slider from 'react-slick';
import {Component, useRef} from 'react';
import React from 'react';

const Noop = () => null;

const CarouselContainer = styled.div`
  width: 100%;
`;

const CarouselHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: center;
`;

const Title = styled.div`
  font-family: mrs-eaves-xl-serif;
  font-size: 43px;
  font-style: normal;
  font-weight: 400;
  line-height: 51px;
  letter-spacing: -0.01em;
  text-align: left;
`;

const CarouselNav = styled.div`
  display: flex;
`;

const CarouselArrow = styled.div`
  ${border}
  ${space}
  cursor: pointer;
  height: 24px;
`;

export const ListContainer = styled.div`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  padding-bottom: 16px;

  /* mobile single slide carousel */
  padding-right: 40px;

  /* larger sizes */

  .slick-list {
    overflow: visible;
  }

  .slick-track {
    display: flex;
    flex-wrap: nowrap;
    z-index: 4;

    div {
      outline: none;
    }
  }

  .slick-slide {
    display: flex;
    margin-left: 12px;
    margin-right: 12px;
  }

  .slick-slide > div {
    display: flex;
    flex: 0 0 100%;
  }
`;

export interface CarouselProps {
  title: string;
  cards: JSX.Element[];
}

export const Carousel = ({title, cards}: CarouselProps): JSX.Element => {
  const ref = useRef({
    slickNext: () => {},
    slickPrev: () => {},
  });

  const onPrev = () => {
    ref.current.slickPrev();
  };

  const onNext = () => {
    ref.current.slickNext();
  };

  const SliderConfig = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    prevArrow: <Noop />,
    nextArrow: <Noop />,
    easing: 'ease-in-out',
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <Block>
      <CarouselContainer>
        <CarouselHeader>
          <Title>{title}</Title>
          <CarouselNav>
            <CarouselArrow onClick={onPrev} paddingRight={'23px'}>
              <LeftArrow />
            </CarouselArrow>
            <CarouselArrow
              onClick={onNext}
              paddingLeft={'23px'}
              borderLeft={'solid 1px #000'}
            >
              <RightArrow />
            </CarouselArrow>
          </CarouselNav>
        </CarouselHeader>
        <ListContainer ref={ref} as={Slider} {...SliderConfig}>
          {cards &&
            cards.map(function (card, index) {
              return <span key={index}>{card}</span>;
            })}
        </ListContainer>
      </CarouselContainer>
    </Block>
  );
};

export default Carousel;
