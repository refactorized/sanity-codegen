import next from 'next';
import {useState} from 'react';
import styled from 'styled-components';
import {query} from '../../themes/fn';
import Block, {BlockComponentProps} from '../Layout/Block';
import theme from '@theme';

export interface CTA {
  text: string;
  link: string;
}

export interface ImageCarouselSlide {
  backgroundImage: string;
  headline: string;
  description: string;
  cta: CTA;
}

export interface ImageCarouselProps {
  slides: ImageCarouselSlide[];
}

const Chevron = () => {
  return (
    <svg
      width="100%"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 13L7 7L1 1"
        stroke="#ffff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const CarouselContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
`;

const LeftMobileArrow = styled.div`
  position: absolute;
  top: 100px;
  left: 16px;
  width: 9px;
  transform: rotate(180deg);
  cursor: pointer;

  @media screen and (${query.atLeast('tablet')}) {
    display: none;
  }
`;

const RightMobileArrow = styled.div`
  position: absolute;
  top: 100px;
  right: 16px;
  width: 9px;
  cursor: pointer;

  @media screen and (${query.atLeast('tablet')}) {
    display: none;
  }
`;

const CoverImage = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: #eee;
  height: 238px;
  background-image: ${(props) =>
    'url({0})'.replace('{0}', props.backgroundImage)};
  transition: background-image 0.5s ease-in-out;
  background-size: cover;

  @media screen and (${query.atLeast('tablet')}) {
    height: 420px;
  }

  @media screen and (${query.atLeast('desktop')}) {
    height: 720px;
  }
`;

const CardBlock = styled(Block)`
  padding-top: 0;
`;

const CaptionCard = styled.div`
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 20px;

  @media screen and (${query.atLeast('tablet')}) {
    position: absolute;
    bottom: 40px;
    left: 48px;
    background: #fff;
    width: 388px;
    padding: 36px;
  }

  @media screen and (${query.atLeast('desktop')}) {
    width: 550px;
    bottom: 89px;
    left: 85px;
    padding: 50px;
  }
`;

const Headline = styled.div`
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: bold;
  font-size: 18px;
  color: #204568;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  margin-bottom: 10px;
`;

const Description = styled.div`
  font-family: ${(props) => props.theme.fonts.body};
  margin: 10px 0;
`;

const CTAContainer = styled.a`
  display: flex;
`;

const CTAText = styled.div`
  font-family: ${(props) => props.theme.fonts.body};
  margin-bottom: 16px;
  color: #000;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
`;

const CTACircle = styled.div`
  width: 24px;
  height: 24px;
  background-color: #71976b;
  border-radius: 20px;
  position: relative;
  margin-left: 10px;
`;

const CTAChevron = styled.div`
  position: absolute;
  width: 5px;
  top: 2px;
  left: 10px;
`;

const Dots = styled.div`
  display: flex;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background: ${(props) => (props.fill ? '#000' : 'none')};
  border: solid 1px #000;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
`;

export const ImageCarousel = ({slides}: ImageCarouselProps): JSX.Element => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = slides[currentSlideIndex];

  const changeSlide = function (e, index) {
    setCurrentSlideIndex(index);
  };

  const slideForward = function (e) {
    const nextIndex =
      currentSlideIndex + 1 > slides.length - 1 ? 0 : currentSlideIndex + 1;
    setCurrentSlideIndex(nextIndex);
  };

  const slideBackward = function (e) {
    const nextIndex =
      currentSlideIndex - 1 < 0 ? slides.length - 1 : currentSlideIndex - 1;
    setCurrentSlideIndex(nextIndex);
  };

  return (
    <CarouselContainer>
      <CoverImage backgroundImage={currentSlide.backgroundImage} />
      <LeftMobileArrow onClick={(e) => slideBackward(e)}>
        <Chevron />
      </LeftMobileArrow>
      <RightMobileArrow onClick={(e) => slideForward(e)}>
        <Chevron />
      </RightMobileArrow>
      <CardBlock theme={theme}>
        <CaptionCard>
          <Headline>{currentSlide.headline}</Headline>
          <Description>{currentSlide.description}</Description>
          <CTAContainer href={currentSlide.cta.link}>
            <CTAText>{currentSlide.cta.text}</CTAText>
            <CTACircle>
              <CTAChevron>
                <Chevron />
              </CTAChevron>
            </CTACircle>
          </CTAContainer>
          <Dots>
            {slides &&
              slides.map(function (slide, index) {
                return (
                  <Dot
                    fill={index === currentSlideIndex}
                    onClick={(e) => changeSlide(e, index)}
                    key={'dot-' + index}
                  ></Dot>
                );
              })}
          </Dots>
        </CaptionCard>
      </CardBlock>
    </CarouselContainer>
  );
};

export default ImageCarousel;
