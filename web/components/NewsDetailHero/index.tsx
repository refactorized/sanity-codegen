import styled from 'styled-components';
import {Facebook, Twitter, LinkedIn} from '../SocialComponents';
import Block from '@components/Layout/Block';
import {
  color,
  space,
  query,
  fontWeight,
  fontFamily,
  fontSize,
  lineHeight,
} from '../../themes/fn';
import {Dates} from '@components/Dates';

export interface NewsDetailHeroProps {
  category: string;
  header: string;
  date?: string;
  publishedDate?: string;
  authors?: string[];
  urlFacebook?: string;
  urlTwitter?: string;
  urlLinkedin?: string;
  squish?: true;
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

const DateText = styled.p`
  ${fontFamily('body')};
  ${fontSize('sm')};
  margin-top: 0;
  margin-bottom: ${space('sm')};

  @media (${query.atLeast('tablet')}) {
    margin-bottom: ${space('md')};
  }
`;

const InfoText = styled.p`
  ${fontFamily('body')};
  ${fontSize('sm')};
  ${fontWeight('bold')};

  span {
    ${fontWeight('regular')};
  }

  .bold-span {
    ${fontWeight('bold')};
  }

  span.author-name {
    &::after {
      display: block;
      content: ' ';
    }

    &:last-child {
      &::after {
        display: none;
      }
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

export const NewsDetailHero = ({
  category,
  header,
  date,
  authors,
  publishedDate,
  urlFacebook,
  urlTwitter,
  urlLinkedin,
  squish,
}: NewsDetailHeroProps): JSX.Element => {
  const hasSocialLink = urlFacebook || urlTwitter || urlLinkedin;
  return (
    <Block squish={squish}>
      <Wrapper>
        <Eyebrow>{category}</Eyebrow>
        <Header>{header}</Header>
        {publishedDate ? (
          <InfoText>
            <span className="bold-span">Published on:</span>{' '}
            <Dates startDate={date} />
          </InfoText>
        ) : (
          <InfoText>
            <Dates startDate={date} />
          </InfoText>
        )}
        {authors && (
          <InfoText>
            {authors.map((a) => (
              <span key={a} className="bold-span author-name">
                {a}
              </span>
            ))}
          </InfoText>
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
      </Wrapper>
    </Block>
  );
};
