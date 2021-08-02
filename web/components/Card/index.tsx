import styled from 'styled-components';
import {
  color,
  space,
  typography,
  flexbox,
  layout,
  shadow,
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

const QuoteDiv = styled.div`
  ${space}
  ${layout({
    width: ['10px', '10px', '14px'],
  })}
  display: inline-block;
`;

const CardContainer = styled.div`
  ${color}
  ${shadow}
  ${layout({
    width: [254, 280, 362],
    height: [333, 332, 474],
  })}
  ${space({
    padding: ['26px 32px', '26px 32px', '38px 42px'],
  })}
  position: relative;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: proxima-nova;
`;

const IconContainer = styled.div`
  ${layout({
    width: [87, 56, 108],
  })}
  ${position({
    position: 'absolute',
    top: [32, 32, 46],
    left: [32, 32, 46],
  })}
`;

const BaselineContainer = styled.div`
  ${position({
    left: ['32px', '32px', '46px'],
    right: ['32px', '32px', '46px'],
    bottom: ['25px', '25px', '46px'],
  })}
  position: absolute;
`;

const BaselineText = styled.div`
  ${typography({
    fontSize: ['14px', '14px', '18px'],
    lineHeight: ['20px', '20px', '28px'],
  })}
`;

const StatisticText = styled.div`
  ${typography({
    fontSize: ['56px', '56px', '80px'],
    fontWeight: 700,
  })}
`;

const TestimonialText = styled.div`
  ${typography({
    fontSize: ['14px', '14px', '18px'],
  })}
  ${space({
    marginTop: ['10px', '10px', '27px'],
  })}
  font-style: italic;
  letter-spacing: -0.015em;
`;

const PatientLine = styled.div`
  ${space({
    marginTop: ['10px', '10px', '16px'],
  })}
  display: flex;
  align-items: center;
`;

const PatientPhoto = styled.div`
  ${color}
  ${layout({
    width: ['40px', '40px', '45px'],
    height: ['40px', '40px', '45px'],
    display: ['none', 'inline-block'],
  })}
  border-radius: 23px;
  background-color: #ddd;
`;

const PatientName = styled.div`
  ${typography({
    fontSize: ['10px', '10px', '14px'],
  })}
  ${space({
    marginLeft: [0, '12px'],
  })}
  line-height: 18px;
  color: rgba(113, 151, 107, 1);
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 1.4px;
`;

const MoreCTA = styled.div`
  ${typography({
    fontSize: ['14px', '14px', '18px'],
  })}
  ${position({
    bottom: ['18px', '18px', '37px'],
    left: ['32px', '32px', '49px'],
  })}
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
    <CardContainer bg={backgroundColor} color="#fff">
      <IconContainer>
        <PuzzlePerson />
      </IconContainer>
      <BaselineContainer>
        <StatisticText fontFamily="headline">{statisticText}</StatisticText>
        <BaselineText fontFamily="headline">{baselineText}</BaselineText>
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
      bg="#fff"
      color="#484848"
      boxShadow="0px 8px 15px 0px rgba(0, 0, 0, 0.1)"
    >
      <QuoteDiv>
        <SingleQuote />
      </QuoteDiv>
      <QuoteDiv marginLeft="8px">
        <SingleQuote />
      </QuoteDiv>
      <TestimonialText>{testimonialText + '"'}</TestimonialText>
      <PatientLine>
        <PatientPhoto background={patientPhotoPath}></PatientPhoto>
        <PatientName>- {patientName}</PatientName>
      </PatientLine>
      <MoreCTA>
        <CTAText>More Patient Outcomes</CTAText>
        <CircleArrow />
      </MoreCTA>
    </CardContainer>
  );
};

export default StatCard;
