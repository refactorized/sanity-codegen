import styled from 'styled-components';
import {Button} from '@components/Button';
import {TestimonialCard} from '@components/Card';
import {query, fontFamily} from '../../themes/fn';
export interface TextTestimonialCardProps {
  header: string;
  description: string;
  cta: string;
  ctaUrl: string;
  testimonialText: string;
  patientName: string;
  patientPhotoPath?: string;
  boxCtaLink: string;
  boxCtaText: string;
  backgroundColor?: string;
}

export const TextTestimonialCard = ({
  header = `People We Treat`,
  description = `At Riggs, we welcome adults (aged 18 and up) from across the country and around the world. People from all walks of life who have stumbled on their walk, and seek a self-directed, behavioral treatment approach to help them return to a more productive, more satisfying life.`,
  cta = `Learn More`,
  ctaUrl = `google.com`,
  testimonialText = `I look at Riggs as the place that broke my fall. In giving me the space to discover my competency, I found my voice. I started by expressing my anger about almost everything. But this expression opened many doors for me. From there, I broke the downward spiral.`,
  patientName = `CJ, former patient`,
  patientPhotoPath,
  boxCtaLink = `https://google.com`,
  boxCtaText = `More Patient Outcomes`,
  backgroundColor,
}: TextTestimonialCardProps): JSX.Element => {
  return (
    <StyledContainer>
      <StyledContentContainer>
        <StyledDescriptionContainer>
          <StyledHeadline>{header}</StyledHeadline>
          <StyledParagraph>{description}</StyledParagraph>

          <Button
            variant="solid"
            label={cta}
            url={ctaUrl}
            size="medium"
            arrow={true}
            arrowColor="white"
          />
        </StyledDescriptionContainer>
        <StyledTestimonial>
          <TestimonialCard
            backgroundColor={backgroundColor}
            patientPhotoPath={patientPhotoPath}
            testimonialText={testimonialText}
            patientName={patientName}
            cardFullWidth={true}
            ctaLink={boxCtaLink}
            ctaText={boxCtaText}
          />
        </StyledTestimonial>
      </StyledContentContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding: 40px 20px;
  @media (${query.atLeast('tablet')}) {
    padding: 44px 50px;
  }
`;

const StyledContentContainer = styled.div`
  display: grid;
  max-width: 1064px;
  margin: auto;
  grid-template-columns: 100%;
  @media (${query.atLeast('tablet')}) {
    justify-content: flex-end;
    grid-template-columns: 50% 50%;
  }
  @media (${query.atLeast('max')}) {
    justify-content: flex-end;
    grid-template-columns: 60% 40%;
  }
`;

const StyledDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  justify-self: center;
  padding-bottom: 25px;

  @media (${query.atLeast('tablet')}) {
    justify-content: center;
    padding-bottom: 0px;
  }
`;

const StyledTestimonial = styled.div`
  display: flex;
  justify-content: center;

  @media (${query.atLeast('tablet')}) {
    justify-content: flex-end;
  }
`;

const StyledHeadline = styled.h2`
  ${fontFamily('headline')};
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.01em;
  padding: 0;
  margin: '15px 0';

  @media (${query.atLeast('tablet')}) {
    margin: '25px 0';
  }

  @media (${query.atLeast('desktop')}) {
    font-size: 44px;
  }
`;

const StyledParagraph = styled.p`
  font-family: Proxima Nova;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.015em;
  text-align: left;
  margin: 0;
  padding-bottom: 15px;

  @media (${query.atLeast('tablet')}) {
    padding-bottom: 25px;
  }
`;
