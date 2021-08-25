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

export interface NewsDetailHeroProps {
  category: string;
  header: string;
  date: string;
  urlFacebook?: string;
  urlTwitter?: string;
  urlLinkedin?: string;
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
  urlFacebook,
  urlTwitter,
  urlLinkedin,
}: NewsDetailHeroProps): JSX.Element => {
  const hasSocialLink = urlFacebook || urlTwitter || urlLinkedin;
  return (
    <Block>
      <Wrapper>
        <Eyebrow>{category}</Eyebrow>
        <Header>{header}</Header>
        <DateText hasSocialLink={hasSocialLink}>{date}</DateText>
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
