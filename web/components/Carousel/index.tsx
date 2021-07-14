import styled from 'styled-components';
import {color, space, typography, flexbox, layout, shadow} from 'styled-system';
import {LeftArrow, RightArrow} from '../Arrow/index';
import StatCard, { StatCardProps, TestimonialCard, TestimonialCardProps } from '../Card';

const CarouselContainer = styled.div`

`;

const CarouselHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Title = styled.div`

`;

const CarouselNav = styled.div`

`;

const ListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    overflow-x: hidden;
`;

function isStatCard(card: any): card is StatCardProps {
    return (card as StatCardProps).statisticText !== undefined;
} 

function isTestimonialCard(card: any): card is TestimonialCardProps {
    return (card as TestimonialCardProps).testimonialText !== undefined;
} 

export interface OutcomesCarouselProps {
    title: string,
    cards: (StatCardProps|TestimonialCardProps)[] 
}

export const OutcomesCarousel = ({title, cards}: OutcomesCarouselProps): JSX.Element => {
    return <CarouselContainer>
        <CarouselHeader>
            <Title>{title}</Title>
            <CarouselNav>
                <LeftArrow/>
                <RightArrow/>
            </CarouselNav>
        </CarouselHeader>
        <ListContainer>
            {cards && cards.map(function(card, index){
                if(isStatCard(card)){
                    return <StatCard {...card} />;
                } else if (isTestimonialCard(card)){
                    return <TestimonialCard {...card} />;
                }
            })}
        </ListContainer>
    </CarouselContainer>;
};