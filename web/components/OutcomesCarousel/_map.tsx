import {OutcomesCarousel, OutcomesCarouselProps} from '.';
import OutcomesCarouselBlockData from '@data/blocks/OutcomesCarouselBlockData';
import {getStaticProps} from 'pages';
import {StatCardProps, TestimonialCardProps} from '@components/Card';

const _map = (block: OutcomesCarouselBlockData) => {
  const props: OutcomesCarouselProps = {
    title: block.title,
    cards: block.cards.map(function (card) {
      if (card._type == 'testimonialCard')
        return {
          testimonialText: card.testimonial_text,
          patientName: card.patient_name,
          patientPhotoPath: card.patient_photo_path
            ? card.patient_photo_path.asset.url
            : '',
        } as TestimonialCardProps;
      else if (card._type == 'statCard') {
        return {
          backgroundColor: card.background_color,
          baselineText: card.baseline_text,
          statisticText: card.statistic_text,
          iconPath: card.icon ? card.icon.asset.url : '',
        } as StatCardProps;
      }
    }),
  };
  return <OutcomesCarousel key={block._key} {...props} />;
};

export default _map;
