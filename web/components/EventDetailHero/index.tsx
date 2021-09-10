import styled from 'styled-components';
import {Facebook, Twitter, LinkedIn} from '../SocialComponents';
import Block from '@components/Layout/Block';
import {Button} from '@components/Button';
import {Dates} from 'components/Dates';
import {
  color,
  space,
  query,
  fontWeight,
  fontFamily,
  fontSize,
  lineHeight,
} from '../../themes/fn';

export interface EventDetailHeroProps {
  category: string;
  header: string;
  startDate: string;
  endDate: string;
  price: number;
  caption: string;
  urlFacebook?: string;
  urlTwitter?: string;
  urlLinkedin?: string;
  btnText?: string;
  btnUrl?: string;
}

/*** STYLING ***/

const Wrapper = styled.div`
  max-width: 687px;
  line-height: 1.5;
`;

const Header = styled.h1`
  ${fontWeight('regular')};
  ${fontFamily('headline')};
  ${fontSize('x5')};
  ${lineHeight('heading')};
  margin-top: 0;
  line-height: 1.25;

  margin-bottom: ${space('sm')};

  @media (${query.atLeast('tablet')}) {
    margin-bottom: ${space('md')};
    ${fontSize('x6')};
  }
`;

const Eyebrow = styled.p`
  ${fontWeight('bold')};
  ${fontFamily('body')};
  ${fontSize('sm')};
  text-transform: uppercase;
  color: ${color('blue')};
  margin-top: 0;
  margin-bottom: ${space('sm')};

  @media (${query.atLeast('tablet')}) {
    margin-bottom: ${space('md')};
  }
`;

const Price = styled.p`
  ${fontFamily('body')};
  ${fontSize('sm')};
  span {
    ${fontWeight('bold')};
  }
`;

const Caption = styled.p`
  ${fontFamily('body')};
  ${fontSize('md')};
  margin-bottom: ${space('sm')};

  @media (${query.atLeast('tablet')}) {
    margin-bottom: ${space('md')};
    ${fontSize('xl')};
  }
`;

const ButtonSocialRow = styled.div`
  display: flex;
  flex-direction: column;

  div:first-child {
    margin-bottom: ${space('x5')};
  }

  @media (${query.atLeast('tablet')}) {
    flex-direction: row;
    align-items: center;

    div:first-child {
      margin-bottom: 0;
      margin-right: ${space('x5')};
    }
  }
`;

const SocialWrapper = styled.div`
  ${fontWeight('bold')};
  ${fontFamily('body')};
  ${fontSize('sm')};
  display: flex;

  > span {
    margin-right: ${space('sm')};
  }

  a {
    margin-right: ${space('sm')};

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const EventDetailHero = ({
  category,
  header,
  startDate,
  endDate,
  price,
  caption,
  urlFacebook,
  urlTwitter,
  urlLinkedin,
  btnText,
  btnUrl,
}: EventDetailHeroProps): JSX.Element => {
  const hasSocialLink = urlFacebook || urlTwitter || urlLinkedin;

  const renderPrice = (p: number): string => {
    const renderedPrice = p % 1 != 0 ? p.toFixed(2) : p.toFixed();
    return `$${renderedPrice}`;
  };
  return (
    <Block>
      <Wrapper>
        <Eyebrow>{category}</Eyebrow>
        <Header>{header}</Header>

        {/* TODO */}
        <Dates
          startDate={startDate}
          endDate={endDate}
          showTime={true}
          showTimeZone={true}
        />
        {price && (
          <Price>
            <span>{renderPrice(price)}</span> (with or without CE/CME)
          </Price>
        )}
        <Caption>{caption}</Caption>
        <ButtonSocialRow>
          {btnText && btnUrl && (
            <Button
              variant="solid"
              label={btnText}
              url={btnUrl}
              size="medium"
              arrow={true}
              arrowColor="white"
            />
          )}

          {hasSocialLink && (
            <SocialWrapper>
              <span>Share:</span>
              {urlFacebook && (
                <Facebook
                  color="#204568"
                  hoverColor="#204568"
                  link={urlFacebook}
                  size="23"
                />
              )}
              {urlTwitter && (
                <Twitter
                  color="#204568"
                  hoverColor="#204568"
                  link={urlTwitter}
                  size="23"
                />
              )}
              {urlLinkedin && (
                <LinkedIn
                  color="#204568"
                  hoverColor="#204568"
                  link={urlLinkedin}
                  size="23"
                />
              )}
            </SocialWrapper>
          )}
        </ButtonSocialRow>
      </Wrapper>
    </Block>
  );
};
