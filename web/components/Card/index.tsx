import styled from 'styled-components';
import {color, space, typography, flexbox, layout, shadow} from 'styled-system';
import {SingleQuote, PuzzlePerson} from './CardIcons';

export interface StatCardProps {
    backgroundColor: string,
    baselineText: string,
    statisticText: string,
};

export interface TestimonialCardProps {
    testimonialText: string,
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
    font-family: Proxima Nova;
    font-style: italic;
    font-size: 18px;
    line-height: 25px;
`;

export const StatCard = ({ backgroundColor, baselineText, statisticText }: StatCardProps): JSX.Element => {
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

export const TestimonialCard = ({testimonialText}: TestimonialCardProps): JSX.Element => {
    return <CardContainer bg="#fff" color="#484848" boxShadow='0px 8px 15px 0px rgba(0, 0, 0, 0.1)'>
        <SingleQuote />
        <SingleQuote />
        <TestimonialText>{testimonialText}</TestimonialText>
    </CardContainer>;
};

export default StatCard;