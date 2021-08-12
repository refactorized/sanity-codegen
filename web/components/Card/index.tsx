import styled from 'styled-components';
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
import {SingleQuote, PuzzlePerson} from './CardIcons';

enum CardIconSelect {
  PuzzlePerson,
}

export interface StatCardProps {
  backgroundColor: string;
  baselineText: string;
  statisticText: string;
  icon: CardIconSelect;
}

export interface TestimonialCardProps {
  testimonialText: string;
  patientName: string;
  patientPhotoPath: string;
}

export interface ArticleCardProps {
  image: string;
  category: string;
  headline: string;
  date?: string;
  description: string;
}
const QuoteDiv = styled.div`
  ${space}
  ${layout}
  display: inline-block;
`;

const CardContainer = styled.div`
  ${color}
  ${shadow}
  ${layout}
  ${space}
  position: relative;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: proxima-nova;
`;

const IconContainer = styled.div`
  ${layout}
  ${position}
  position: absolute;
`;

const BaselineContainer = styled.div`
  ${position}
  position: absolute;
`;

const BaselineText = styled.div`
  ${typography}
`;

const StatisticText = styled.div`
  ${typography}
  font-weight: 700;
`;

const TestimonialText = styled.div`
  ${typography}
  ${space}
  font-style: italic;
  letter-spacing: -0.015em;
`;

const PatientLine = styled.div`
  ${space}
  display: flex;
  align-items: center;
`;

const PatientPhoto = styled.div`
  ${color}
  ${layout}
  border-radius: 23px;
  background-color: #ddd;
`;

const PatientName = styled.div`
  ${typography}
  ${space}
  line-height: 18px;
  color: rgba(113, 151, 107, 1);
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 1.4px;
`;

const MoreCTA = styled.div`
  ${typography}
  ${position}
  display: flex;
  position: absolute;
  color: rgba(0, 0, 0, 1);
  font-weight: 700;
`;

const CTAText = styled.div`
  margin-right: 8px;
`;

export const StatCard = ({
  backgroundColor,
  baselineText,
  statisticText,
  icon,
}: StatCardProps): JSX.Element => {
  return (
    <CardContainer
      width={[254, 280, 362]}
      height={[333, 332, 474]}
      padding={['26px 32px', '26px 32px', '38px 42px']}
      bg={backgroundColor}
      color="#fff"
    >
      <IconContainer
        width={[87, 56, 108]}
        top={[32, 32, 46]}
        left={[32, 32, 46]}
      >
        <PuzzlePerson />
      </IconContainer>
      <BaselineContainer
        left={['32px', '32px', '46px']}
        right={['32px', '32px', '46px']}
        bottom={['25px', '25px', '46px']}
      >
        <StatisticText
          fontSize={['56px', '56px', '80px']}
          fontFamily="headline"
        >
          {statisticText}
        </StatisticText>
        <BaselineText
          fontSize={['14px', '14px', '18px']}
          lineHeight={['20px', '20px', '28px']}
          fontFamily="headline"
        >
          {baselineText}
        </BaselineText>
      </BaselineContainer>
    </CardContainer>
  );
};

export const TestimonialCard = ({
  testimonialText,
  patientName,
  patientPhotoPath,
}: TestimonialCardProps): JSX.Element => {
  return (
    <CardContainer
      width={[254, 280, 362]}
      height={[333, 332, 474]}
      padding={['26px 32px', '26px 32px', '38px 42px']}
      bg="#fff"
      color="#484848"
      boxShadow="0px 8px 15px 0px rgba(0, 0, 0, 0.1)"
    >
      <QuoteDiv width={['10px', '10px', '14px']}>
        <SingleQuote />
      </QuoteDiv>
      <QuoteDiv width={['10px', '10px', '14px']} marginLeft="8px">
        <SingleQuote />
      </QuoteDiv>
      <TestimonialText
        fontSize={['14px', '14px', '18px']}
        marginTop={['10px', '10px', '27px']}
      >
        {testimonialText + '"'}
      </TestimonialText>
      <PatientLine marginTop={['10px', '10px', '16px']}>
        <PatientPhoto
          background={patientPhotoPath}
          width={['40px', '40px', '45px']}
          height={['40px', '40px', '45px']}
          display={['none', 'inline-block']}
        ></PatientPhoto>
        <PatientName
          fontSize={['10px', '10px', '14px']}
          marginLeft={[0, '12px']}
        >
          - {patientName}
        </PatientName>
      </PatientLine>
      <MoreCTA
        fontSize={['14px', '14px', '18px']}
        bottom={['18px', '18px', '37px']}
        left={['32px', '32px', '49px']}
      >
        <CTAText>More Patient Outcomes</CTAText>
        <CircleArrow />
      </MoreCTA>
    </CardContainer>
  );
};

export const ArticleCard = ({
  image,
  category,
  headline,
  date,
  description,
}: ArticleCardProps): JSX.Element => {
  return (
    <StyledBox
      display="flex"
      flexDirection="column"
      pr="5px"
      m={['20px 0', null, null, null]}
      width={['256px', '288px', null, '362px']}
    >
      <Image
        src={image}
        width={['256px', '288px', null, '362px']}
        height={['180px', '176px', null, '221px']}
        pb="13px"
        borderRadius="4px"
      />
      <StyledBox>
        <StyledParagraph
          fontSize={['12px', '10px', null, '12px']}
          fontWeight="bold"
          fontFamily="headline"
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
            fontFamily="headline"
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
          fontFamily="headline"
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
          fontFamily="headline"
          letterSpacing={['-0.015em', null, null, '-0.015em']}
          lineHeight={['26px', '16px', null, '26px']}
          p={['5px 0', null, null, '7px 0']}
          m="0"
        >
          {description}
        </StyledHeader>
      </StyledBox>
    </StyledBox>
  );
};

export default StatCard;

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
