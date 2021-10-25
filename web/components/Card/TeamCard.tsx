import styled from 'styled-components';
import {
  space,
  fontSize,
  fontFamily,
  fontWeight,
  color,
  query,
  lineHeight,
} from '../../themes/fn';
import Image from 'next/image';
import Link from 'next/link';
import {Department, DepartmentTeam} from '@schema/types';

export interface TeamCardProps {
  image?: string;
  name: string;
  title?: string;
  phone?: string;
  email?: string;
  url?: string;
  categories: Department[];
  subcategories: DepartmentTeam[];
}

const Wrapper = styled.div`
  ${fontFamily('body')};
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Name = styled.h3`
color: ${color('blue')};
${fontSize('lg')};
  ${fontWeight('bold')};
  ${lineHeight('heading')};

  @media screen and (${query.atLeast('tablet')}) {
    ${fontSize('xl')};
  }
  
  a {
    text-decoration: none;
    
    color: ${color('blue')};
    margin: ${space('md')} 0 0;
    border-bottom: 4px solid transparent;
    cursor: pointer;
    align-self: flex-start;
    position: relative;

    @media screen and (${query.atLeast('tablet')}) {
   
      &:hover {
        border-color: ${color('blue')};
      }
    }
  }
}`;

const Title = styled.p`
  ${fontSize('md')};
  margin-top: 0;
  margin-bottom: ${space('sm')};
`;

const ContactInfo = styled.div`
  ${fontWeight('bold')};
  ${fontSize('md')};

  a {
    ${fontWeight('regular')};
    color: ${color('blue')};
    text-decoration: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    align-self: flex-start;

    @media screen and (${query.atLeast('tablet')}) {
      &:hover {
        border-color: ${color('blue')};
      }
    }
  }
`;

// For use in Story
export const StoryWrapper = styled.div`
  display: flex;
`;

const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/[^+\d]+/g, '');
};

export const TeamCard = ({
  image,
  name,
  title,
  phone,
  email,
  url,
}: TeamCardProps): JSX.Element => {
  return (
    <Wrapper>
      {url ? (
        <Link href={url}>
          <a>
            {image ? (
              <Image src={image} layout="responsive" height={333} width={326} />
            ) : (
              <Image
                src={'/team-placeholder.jpg'}
                layout="responsive"
                height={333}
                width={326}
              />
            )}
          </a>
        </Link>
      ) : image ? (
        <Image src={image} layout="responsive" height={333} width={326} />
      ) : (
        <Image
          src={'/team-placeholder.jpg'}
          layout="responsive"
          height={333}
          width={326}
        />
      )}
      <Name>
        {url ? (
          <Link href={url}>
            <a>{name}</a>
          </Link>
        ) : (
          name
        )}
      </Name>
      <Title>{title}</Title>
      {phone && (
        <ContactInfo>
          p: <a href={`tel:+1${formatPhoneNumber(phone)}`}>{phone}</a>
        </ContactInfo>
      )}
      {email && (
        <ContactInfo>
          e: <a href={`mailto:${email}`}>{email}</a>
        </ContactInfo>
      )}
    </Wrapper>
  );
};
