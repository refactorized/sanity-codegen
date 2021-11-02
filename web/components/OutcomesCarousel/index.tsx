import StatCard, {
  StatCardProps,
  TestimonialCard,
  TestimonialCardProps,
} from '../Card';
import Carousel from '@components/Carousel';
import React from 'react';

function isStatCard(card: any): card is StatCardProps {
  return (card as StatCardProps).statisticText !== undefined;
}

function isTestimonialCard(card: any): card is TestimonialCardProps {
  return (card as TestimonialCardProps).testimonialText !== undefined;
}

export interface OutcomesCarouselProps {
  title: string;
  cards: any[];
}

export const OutcomesCarousel = ({
  title,
  cards,
}: OutcomesCarouselProps): JSX.Element => {
  const cardElements = cards.map(function (card, index) {
    if (isStatCard(card)) {
      return <StatCard {...card} />;
    } else if (isTestimonialCard(card)) {
      return <TestimonialCard {...card} />;
    }
  });
  return <Carousel title={title} cards={cardElements} />;
};
