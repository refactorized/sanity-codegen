import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import {fontSize, fontFamily, lineHeight, query, fontWeight} from '@theme/fn';

interface TeamDetailPageProps {
  image?: string;
  phone?: string;
  email?: string;
  firstName: string;
  lastName: string;
  credentials?: string;
  title: string;
  title2: string;
  department: string;
  bio: string;
  alt_text?: string;
  //   prose editor
}

export const TeamDetailPage = ({
  image,
  phone,
  email,
  firstName,
  lastName,
  credentials,
  title,
  title2,
  department,
  bio,
  alt_text,
}: TeamDetailPageProps): JSX.Element => {
  return (
    <Container>
      <MediaHeader>
        {firstName} <span>{lastName}</span>
        {credentials ? <span>{', ' + credentials}</span> : null}
      </MediaHeader>
      <MediaInformationDetail>
        {title + ' | ' + department + ' | ' + title2}
      </MediaInformationDetail>

      <ContactContainer>
        {image ? (
          <Image
            alt={alt_text}
            src={image}
            width={333}
            height={326}
            objectFit="cover"
          />
        ) : (
          <Image
            alt="default image"
            src="/avatar.jpg"
            width={333}
            height={326}
            objectFit="cover"
          />
        )}
        {phone ? (
          <Link href={'tel:' + phone}>
            <Bold>{'p: '}</Bold>
            {phone}
          </Link>
        ) : null}
        {email ? (
          <Link href={'mailto:' + email}>
            <Bold>{'e: '}</Bold>
            {email}
          </Link>
        ) : null}
      </ContactContainer>
      <div>
        <Header>
          {firstName} <span>{lastName}</span>
          {credentials ? <span>{', ' + credentials}</span> : null}
        </Header>
        <InformationContainer>
          <span>
            <InformationDetail>
              {title + ' | ' + department + ' | ' + title2}
            </InformationDetail>
          </span>
        </InformationContainer>
        <BioContainer>
          <InformationDetail>{bio}</InformationDetail>
          <MediaInformationDetail>{bio}</MediaInformationDetail>
        </BioContainer>
      </div>
    </Container>
  );
};

const Container = styled.div`
  @media (${query.atLeast('tablet')}) {
    display: flex;
    justify-content: center;
    gap: 25px;
  }
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 8px;
`;

const Link = styled.a`
  ${fontFamily('body')};
  ${fontSize('md')};
  ${lineHeight('headingSecondary')};
  ${fontWeight('regular')};
  text-decoration: none;
  color: #1b76b0;
`;

const Header = styled.h1`
  display: none;
  @media (${query.atLeast('tablet')}) {
    display: block;
    ${fontFamily('headline')};
    ${fontSize('x6')};
    ${fontWeight('regular')};
    margin: 0;
    letter-spacing: -0.01em;
  }
`;

const Bold = styled.span`
  ${fontWeight('bold')};
  color: black;
`;

const MediaHeader = styled.h1`
  ${fontFamily('headline')};
  ${fontWeight('regular')};
  font-size: 35px;
  line-height: 39px;
  letter-spacing: -0.01em;
  margin: 10px 0;

  @media (${query.atLeast('tablet')}) {
    display: none;
  }
`;

const InformationDetail = styled.p`
  display: none;
  @media (${query.atLeast('tablet')}) {
    display: block;
    ${fontFamily('body')};
    ${fontSize('md')};
    ${fontWeight('regular')};
    line-height: 21px;
    letter-spacing: -0.015em;
    margin: 0;
    padding: 0 3px;
  }
`;

const MediaInformationDetail = styled.p`
  ${fontFamily('body')};
  ${fontSize('md')};
  ${fontWeight('regular')};
  line-height: 21px;
  letter-spacing: -0.015em;
  margin: 0;
  padding-bottom: 10px;

  @media (${query.atLeast('tablet')}) {
    display: none;
  }
`;

const BioContainer = styled.div`
  max-width: 650px;
  padding-top: 33px;
`;

const InformationContainer = styled.div`
  display: flex;
`;
