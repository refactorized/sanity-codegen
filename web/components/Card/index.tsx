import styled, {css} from 'styled-components';
import {
  color,
  space,
  typography,
  flexbox,
  layout,
  shadow,
  border,
  system,
  position,
} from 'styled-system';
import {CircleArrow} from '../Arrow/index';
import {SingleQuote} from './CardIcons';
import {query} from '../../themes/fn';

export interface StatCardProps {
  backgroundColor: string;
  baselineText: string;
  statisticText: string;
  iconPath: string;
}

export interface TestimonialCardProps {
  testimonialText: string;
  patientName: string;
  patientPhotoPath: string;
  cardFullWidth: boolean;
  ctaLink: string;
  ctaText: string;
}

export interface ArticleCardProps {
  image: string;
  category: string;
  headline: string;
  date?: string;
  description: string | JSX.Element;
  cardFullWidth: boolean;
}

const QuoteDiv = styled.div`
  width: 10px;
  display: inline-block;

  @media screen and (${query.atLeast('desktop')}) {
    width: 14px;
  }
`;

const RightQuoteDiv = styled.div`
  width: 10px;
  margin-left: 8px;
  display: inline-block;

  @media screen and (${query.atLeast('desktop')}) {
    width: 14px;
  }
`;

const CardContainer = styled.div`
  position: relative;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: ${(props) => props.theme.fonts.body};
  width: ${(props) => (props.fullWidth ? '100%' : '254px')};
  height: 333px;
  padding: 26px 32px;

  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  box-shadow: ${(props) => props.boxShadow};

  @media screen and (${query.atLeast('tablet')}) {
    width: 280px;
    height: 332px;
  }

  @media screen and (${query.atLeast('desktop')}) {
    width: 362px;
    height: 474px;
    padding: 38px 42px;
  }
`;

const IconContainer = styled.div`
  width: 87px;
  height: 87px;
  top: 32px;
  left: 32px;
  position: absolute;
  background-size: cover;

  background-image: ${(props) =>
    'url({0})'.replace('{0}', props.backgroundImage)};

  @media screen and (${query.atLeast('tablet')}) {
    width: 56px;
    height: 56px;
  }

  @media screen and (${query.atLeast('desktop')}) {
    width: 108px;
    height: 108px;
    top: 46px;
    left: 46px;
  }
`;

const BaselineContainer = styled.div`
  position: absolute;
  left: 32px;
  right: 32px;
  bottom: 25px;

  @media screen and (${query.atLeast('desktop')}) {
    left: 46px;
    right: 46px;
    bottom: 46px;
  }
`;

const BaselineText = styled.div`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 14px;
  line-height: 20px;

  @media screen and (${query.atLeast('desktop')}) {
    font-size: 18px;
    line-height: 28px;
  }
`;

const StatisticText = styled.div`
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: 700;
  font-size: 56px;

  @media screen and (${query.atLeast('desktop')}) {
    font-size: 80px;
  }
`;

const TestimonialText = styled.div`
  font-style: italic;
  letter-spacing: -0.015em;
  font-size: 14px;
  margin-top: 10px;

  @media screen and (${query.atLeast('desktop')}) {
    font-size: 18px;
    margin-top: 27px;
  }
`;

const PatientLine = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  @media screen and (${query.atLeast('desktop')}) {
    margin-top: 16px;
  }
`;

const PatientPhoto = styled.div`
  border-radius: 23px;
  background-color: #ddd;
  width: 40px;
  height: 40px;
  display: none;
  background-size: cover;

  background-image: ${(props) =>
    'url({0})'.replace('{0}', props.backgroundImage)};

  @media screen and (${query.atLeast('desktop')}) {
    width: 45px;
    height: 45px;
    display: inline-block;
  }
`;

const PatientName = styled.div`
  line-height: 18px;
  color: rgba(113, 151, 107, 1);
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 1.4px;
  font-size: 10px;
  margin-left: 0;

  @media screen and (${query.atLeast('desktop')}) {
    font-size: 14px;
    margin-left: 12px;
  }
`;

const MoreCTA = styled.div`
  display: flex;
  position: absolute;
  color: rgba(0, 0, 0, 1);
  font-weight: 700;
  font-size: 14px;
  bottom: 18px;
  left: 32px;

  @media screen and (${query.atLeast('desktop')}) {
    font-size: 18px;
    bottom: 37px;
    left: 49px;
  }
`;

const MoreCTALink = styled.a`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  position: absolute;
  color: rgba(0, 0, 0, 1);
  font-weight: 700;
  font-size: 14px;
  bottom: 18px;
  left: 32px;

  @media screen and (${query.atLeast('desktop')}) {
    font-size: 18px;
    bottom: 37px;
    left: 49px;
  }
`;

const CTAText = styled.div`
  margin-right: 8px;
`;

export const StatCard = ({
  backgroundColor,
  baselineText,
  statisticText,
  iconPath,
}: StatCardProps): JSX.Element => {
  return (
    <CardContainer backgroundColor={backgroundColor} color={'#fff'}>
      <IconContainer backgroundImage={iconPath}></IconContainer>
      <BaselineContainer>
        <StatisticText>{statisticText}</StatisticText>
        <BaselineText>{baselineText}</BaselineText>
      </BaselineContainer>
    </CardContainer>
  );
};

export const TestimonialCard = ({
  testimonialText,
  patientName,
  patientPhotoPath,
  cardFullWidth,
  ctaLink,
  ctaText,
}: TestimonialCardProps): JSX.Element => {
  return (
    <CardContainer
      backgroundColor={'#fff'}
      color={'#484848'}
      boxShadow={'0px 8px 15px 0px rgba(0, 0, 0, 0.1)'}
      fullWidth={cardFullWidth}
    >
      <QuoteDiv>
        <SingleQuote />
      </QuoteDiv>
      <RightQuoteDiv>
        <SingleQuote />
      </RightQuoteDiv>
      <TestimonialText>{testimonialText + '"'}</TestimonialText>
      <PatientLine>
        <PatientPhoto backgroundImage={patientPhotoPath}></PatientPhoto>
        <PatientName>- {patientName}</PatientName>
      </PatientLine>
      <MoreCTALink href={ctaLink}>
        <CTAText>{ctaText}</CTAText>
        <CircleArrow />
      </MoreCTALink>
    </CardContainer>
  );
};

export const ArticleCard = ({
  image,
  category,
  headline,
  date,
  description,
  cardFullWidth,
}: ArticleCardProps): JSX.Element => {
  return (
    <StyledContainer fullWidth={cardFullWidth}>
      <Image
        src={image}
        maxWidth="100%"
        height="auto"
        pb="13px"
        borderRadius="4px"
      />
      <StyledBox>
        <StyledParagraph
          fontSize={['12px', '10px', null, '12px']}
          fontWeight="bold"
          fontFamily="body"
          letterSpacing="0.185em"
          p={['5px 0', null, null, '7px 0']}
          m="0"
        >
          {category}
        </StyledParagraph>
        <StyledLink textDecoration="none" p="0" m="0">
          <StyledHeader
            fontSize={['19px', '14px', null, '22px']}
            fontWeight="bold"
            fontFamily="body"
            letterSpacing={['-0.01em', null, null, '-0.01em']}
            lineHeight={['25px', '16px', null, '25px']}
            color="navy"
            p={['5px 0', null, null, '7px 0']}
            m="0"
          >
            {headline}
          </StyledHeader>
        </StyledLink>
        <StyledHeader
          display={['none', null, null, 'inherit']}
          fontSize={['14px', '10px', null, '14px']}
          fontWeight="normal"
          fontFamily="body"
          letterSpacing={['-0.015em', null, null, '-0.015em']}
          lineHeight={['26px', '16px', null, '26px']}
          p={['5px 0', null, null, '7px 0']}
          m="0"
        >
          {date}
        </StyledHeader>
        <StyledHeader
          fontSize={['14px', null, null, '16px']}
          fontWeight="normal"
          fontFamily="body"
          letterSpacing={['-0.015em', null, null, '-0.015em']}
          lineHeight={['26px', '16px', null, '26px']}
          p={['5px 0', null, null, '7px 0']}
          m="0"
        >
          {description}
        </StyledHeader>
      </StyledBox>
    </StyledContainer>
  );
};

export default StatCard;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.fullWidth
      ? css`
          width: 100%;
        `
      : css`
          width: 256px;
          @media (${query.atLeast('tablet')}) {
            width: 288px;
          }
          @media (${query.atLeast('max')}) {
            width: 362px;
          } ;
        `}
`;

const StyledBox = styled.div`
  ${layout}
  ${flexbox}
  ${color}
  ${typography}
  ${space}
`;

const Image = styled.img`
  ${typography}
  ${space}
  ${layout}
  ${border}
`;

const StyledLink = styled.a`
  ${typography}
  ${space}
  ${color}
  cursor: pointer;
`;

const StyledHeader = styled.h1`
  ${typography}
  ${space}
  ${color}
  ${layout}
`;

const StyledParagraph = styled.p`
  ${typography}
  ${space}
  text-transform: uppercase;
`;
