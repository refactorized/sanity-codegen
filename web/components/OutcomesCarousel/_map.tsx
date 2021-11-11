import {OutcomesCarousel, OutcomesCarouselProps} from '.';
import OutcomesCarouselBlockData from '@data/blocks/OutcomesCarouselBlockData';
import {StatCardProps, TestimonialCardProps} from '@components/Card';
import getImageUrl from '@util/images';

const _map = (block: OutcomesCarouselBlockData) => {
  const props: OutcomesCarouselProps = {
    title: block.title,
    cards: block.cards.map(function (card) {
      if (card._type == 'testimonialCard')
        return {
          testimonialText: card.testimonial_text,
          patientName: card.patient_name,
          patientPhotoPath: getImageUrl(
            card.patient_photo_path,
            'crop',
            40,
            40,
          ),
        } as TestimonialCardProps;
      else if (card._type == 'statCard') {
        return {
          backgroundColor: card.background_color,
          baselineText: card.baseline_text,
          statisticText: card.statistic_text,
          iconPath: getImageUrl(card.icon, 'crop', 87, 87),
        } as StatCardProps;
      }
    }),
  };
  return <OutcomesCarousel key={block._key} {...props} />;
};

export default _map;
