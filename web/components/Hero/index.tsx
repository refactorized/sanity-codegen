import styled from 'styled-components';
import {query, color, space, fontSize, lineHeight} from '../../themes/fn';
import Block from '@components/Layout/Block';
import {HeroCardData} from '@data/blocks/HomepageHeroData';

export interface HomepageHeroProps {
  imageUrl: string;
  title: string;
  heroCards: HeroCardData[];
  alt_text?: string;
  videoSrc?: string;
}

const Chevron = () => {
  return (
    <svg
      width="100%"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 13L7 7L1 1"
        stroke="#1B76B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ChevronDiv = styled.div`
  height: 12px;
  width: 7px;
  margin-left: 5px;

  @media screen and (${query.atLeast('desktop')}) {
    width: 9px;
  }
`;

const DesktopChevronDiv = styled(ChevronDiv)`
  display: none;
  @media screen and (${query.atLeast('desktop')}) {
    display: inline-block;
  }
`;

const MobileChevronDiv = styled(ChevronDiv)`
  display: flex;
  @media screen and (${query.atLeast('desktop')}) {
    display: none;
  }
`;

const HeroContainer = styled.div`
  width: 100%;
  background: #000;
  position: relative;
  box-sizing: border-box;
  padding-top: 140px;
  padding-bottom: 72px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (${query.atLeast('tablet')}) {
    height: 420px;
    justify-content: flex-end;
  }

  @media screen and (${query.atLeast('desktop')}) {
    height: 682px;
    flex-direction: row;
    align-items: flex-end;
    padding: 140px 84px 72px 82px;
  }
`;

const ImageContainer = styled.div`
  background-size: cover;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 0;
  min-height: 295px;

  background-image: ${(props) =>
    'url({0})'.replace('{0}', props.backgroundImage)};

  @media screen and (${query.atLeast('tablet')}) {
    height: 420px;
  }

  @media screen and (${query.atLeast('desktop')}) {
    height: 682px;
  }
`;

const ImageGradient = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);

  @media screen and (${query.atLeast('desktop')}) {
    background: linear-gradient(
      44.64deg,
      rgba(0, 0, 0, 0.8) 6.68%,
      rgba(0, 0, 0, 0) 54.37%
    );
  }
`;

const Title = styled.div`
  color: #fff;
  font-family: ${(props) => props.theme.fonts.headline};
  margin: 22px;
  z-index: 0;
  font-size: 35px;
  max-width: 1043px;

  @media screen and (${query.atLeast('tablet')}) {
    margin: 22px 48px;
  }

  @media screen and (${query.atLeast('desktop')}) {
    font-size: 71px;
    margin: 0;
  }
`;

const HeroCardList = styled.div`
  display: flex;
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: 700;
  z-index: 0;
  flex-direction: column;

  @media screen and (${query.atLeast('tablet')}) {
    flex-direction: row;
    margin: 0 48px;
  }

  @media screen and (${query.atLeast('desktop')}) {
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 361px;
  }
`;
const SingleHeroCard = styled.div`
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  color: #fff;
  margin: 12px 22px;
  box-sizing: border-box;

  @media screen and (${query.atLeast('tablet')}) {
    margin: 0 12px 0 0;
  }

  @media screen and (${query.atLeast('desktop')}) {
    background: #f7f3e8;
    color: #282828;
    padding: 20px 24px;
    margin: 0 0 22px 0;
  }

  &:last-child {
    margin-bottom: 0px;
  }
`;

const Eyebrow = styled.a`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  margin-bottom: ${space('sm')};

  @media screen and (${query.atLeast('tablet')}) {
    font-size: 12px;
  }

  @media screen and (${query.atLeast('desktop')}) {
    color: ${color(
      'navy',
    )}; // I know this isn't ideal but for some reason styled-components isn't giving the eyebrows the same styles.
    font-size: 14px;
  }

  :visited {
    color: inherit;
  }
`;

const Copy = styled.a`
  display: block;
  text-decoration: none;
  color: #fff;
  ${fontSize('xl')};
  ${lineHeight('heading')};

  @media screen and (${query.atLeast('desktop')}) {
    color: #282828;
  }

  :visited {
    color: inherit;
  }
`;

const Video = styled.video`
  height: 100%;
  min-height: 100%;

  @media screen and (${query.atLeast('desktop')}) {
    height: auto;
    min-height: auto;
    width: 100%;
    min-width: 100%;
  }
`;

export const HomepageHero = ({
  imageUrl,
  title,
  heroCards,
  alt_text,
  videoSrc,
}: HomepageHeroProps): JSX.Element => {
  return (
    <Block full={true}>
      <HeroContainer>
        <ImageContainer
          alt={alt_text}
          backgroundImage={videoSrc ? '' : imageUrl}
        >
          <ImageGradient />
          {videoSrc && (
            <Video
              {...{
                muted: true,
                src: videoSrc,
                autoPlay: true,
                loop: true,
              }}
            />
          )}
        </ImageContainer>
        <Title>{title}</Title>
        <HeroCardList>
          {heroCards &&
            heroCards.map((card) => (
              <SingleHeroCard key={card._key}>
                <Eyebrow href={card.card_link.slug.current}>
                  {card.card_eyebrow}{' '}
                  <MobileChevronDiv>
                    <Chevron />
                  </MobileChevronDiv>
                </Eyebrow>
                <Copy href={card.card_link.slug.current}>
                  {card.card_copy}{' '}
                  <DesktopChevronDiv>
                    <Chevron />
                  </DesktopChevronDiv>
                </Copy>
              </SingleHeroCard>
            ))}
        </HeroCardList>
      </HeroContainer>
    </Block>
  );
};
