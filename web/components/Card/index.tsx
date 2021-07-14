import styled from 'styled-components';
import {color, space, typography, flexbox, layout, shadow} from 'styled-system';
import {CircleArrow} from '../Arrow/index';
import {SingleQuote, PuzzlePerson} from './CardIcons';

enum CardIconSelect {
    PuzzlePerson
}

export interface StatCardProps {
    backgroundColor: string,
    baselineText: string,
    statisticText: string,
    icon: CardIconSelect,
};

export interface TestimonialCardProps {
    testimonialText: string,
    patientName: string,
    patientPhotoPath: string,
};

const CardContainer = styled.div`
    ${color}
    ${shadow}
    position: relative;
    width: 362px;
    height: 474px;
    border-radius: 4px;
    padding: 46px;
    box-sizing: border-box;
    font-family: Proxima Nova;
    margin-right: 24px;
    flex-shrink: 0;
`;

const BaselineContainer = styled.div`
    position: absolute;
    left: 46px;
    right: 46px;
    bottom: 46px;
`;

const BaselineText = styled.div`
    ${typography}
    font-size: 18px;
    line-height: 28px;
`;

const StatisticText = styled.div`
    ${typography}
    font-size: 80px;
    font-weight: 700;
`;

const TestimonialText = styled.div`
    margin-top: 47px;
    font-style: italic;
    font-size: 18px;
    line-height: 25px;
`;

const PatientLine = styled.div`
    display: flex;
    margin-top: 21px;
    align-items: center;
`;

const PatientPhoto = styled.div`
    ${color}
    width: 45px;
    height: 45px;
    border-radius: 23px;
    background-color: #ddd;
    display: inline-block;
`;

const PatientName = styled.div`
    font-size: 14px;
    line-height: 18px;
    color: rgba(113, 151, 107, 1);
    text-transform: capitalize;
    margin-left: 12px;
`;

const MoreCTA = styled.div`
    position: absolute;
    bottom: 37px;
    left: 49px;
    color: rgba(0, 0, 0, 1);
    font-size: 18px;
    weight: 700;
`;

export const StatCard = ({ backgroundColor, baselineText, statisticText, icon}: StatCardProps): JSX.Element => {
    return <CardContainer bg={backgroundColor} color="#fff">
        <PuzzlePerson />
        <BaselineContainer>
            <StatisticText fontFamily="headline">
                {statisticText}
            </StatisticText>
            <BaselineText fontFamily="headline">
                {baselineText}
            </BaselineText>
        </BaselineContainer>
    </CardContainer>;
};

export const TestimonialCard = ({testimonialText, patientName, patientPhotoPath}: TestimonialCardProps): JSX.Element => {
    return <CardContainer bg="#fff" color="#484848" boxShadow='0px 8px 15px 0px rgba(0, 0, 0, 0.1)'>
        <SingleQuote />
        <SingleQuote style={{marginLeft: '8px'}} />
        <TestimonialText>{testimonialText}</TestimonialText>
        <PatientLine>
            <PatientPhoto background={patientPhotoPath}></PatientPhoto>
            <PatientName>- {patientName}</PatientName>
        </PatientLine>
        <MoreCTA>
            More Patient Outcomes <CircleArrow />
        </MoreCTA>
    </CardContainer>;
};

export default StatCard;