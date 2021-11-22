import styled from 'styled-components';
import {Facebook, Twitter, LinkedIn, Email} from '../SocialComponents';
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
import {BasicText} from '@data/types';
import {RenderBasicText} from '@components/PortableText';
import {Button} from '@components/Button';

export interface NewsDetailHeroProps {
  category: string;
  header: string;
  date?: string;
  publishedDate?: string;
  price?: BasicText;
  description?: BasicText;
  authors?: string[];
  registrationLink?: string;
  urlFacebook?: string;
  urlTwitter?: string;
  urlLinkedin?: string;
  email?: string;
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
    ${fontSize('x6')};
    margin-bottom: ${space('md')};
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

const InfoText = styled.div`
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
    margin-right: 2px;
  }
`;

const DescriptionText = styled.div`
  ${fontWeight('regular')};
  ${fontFamily('body')};
  ${fontSize('lg')};

  @media (${query.atLeast('tablet')}) {
    ${fontSize('xl')};
  }
`;
const ButtonSocialWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (${query.atLeast('tablet')}) {
    flex-direction: row;
    align-items: center;
  }
`;

const ButtonWrapper = styled.div`
  margin-bottom: ${space('lg')};

  @media (${query.atLeast('tablet')}) {
    margin-right: ${space('x6')};
    margin-bottom: 0;
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

    &::last-child {
      margin-right: 0;
    }
  }
`;

export const NewsDetailHero = ({
  category,
  header,
  date,
  price,
  registrationLink,
  description,
  authors,
  publishedDate,
  urlFacebook,
  urlTwitter,
  urlLinkedin,
  email,
  squish,
}: NewsDetailHeroProps): JSX.Element => {
  const hasSocialLink = urlFacebook || urlTwitter || urlLinkedin;
  return (
    <Block squish={squish}>
      <Wrapper>
        <Eyebrow>{category}</Eyebrow>
        <Header>{header}</Header>
        {(publishedDate || date) &&
          (publishedDate ? (
            <InfoText>
              <span className="bold-span">Published on:</span>{' '}
              <Dates startDate={date} />
            </InfoText>
          ) : (
            <InfoText>
              <Dates startDate={date} />
            </InfoText>
          ))}
        {price && (
          <InfoText>
            <RenderBasicText content={price} />
          </InfoText>
        )}
        {description && (
          <DescriptionText>
            <RenderBasicText content={description} />
          </DescriptionText>
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
        <ButtonSocialWrapper>
          {registrationLink && (
            <ButtonWrapper>
              <Button
                variant="solid"
                label="Register Now"
                arrow={true}
                size="medium"
                arrowColor="#fff"
              />
            </ButtonWrapper>
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
              {email && (
                <Email
                  color="#204568"
                  hoverColor="#204568"
                  link={email}
                  size="23"
                />
              )}
            </SocialWrapper>
          )}
        </ButtonSocialWrapper>
      </Wrapper>
    </Block>
  );
};
