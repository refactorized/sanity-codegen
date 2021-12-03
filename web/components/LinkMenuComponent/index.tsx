import styled from 'styled-components';
import {
  color,
  space,
  typography,
  flexbox,
  layout,
  grid,
  border,
  shadow,
} from 'styled-system';
import Image from 'next/image';
import {Button} from '@components/Button/index';
import {CircleArrow} from '@components/Arrow/index';
import Block from '@components/Layout/Block';
import {query} from '@theme/fn';

interface linkMenuLink {
  title: string;
  url: string;
  _key: string;
}

export interface LinkMenuComponentProps {
  imgUrl?: string;
  header: string;
  description: string;
  btnText?: string;
  btnUrl?: string;
  alt_text?: string;
  links: linkMenuLink[];
}

export const LinkMenuComponent = ({
  imgUrl,
  header,
  description,
  btnText,
  btnUrl,
  alt_text,
  links,
}: LinkMenuComponentProps): JSX.Element => {
  return (
    <Block>
      <StyledBox
        color="text"
        display="grid"
        gridTemplateColumns={['100%', null, null, '35% 1fr']}
        gridGap={['25px', '35px', null, '81px']}
        overflow="visible"
        mt={['20px', '0', null, null]}
      >
        <StyledImageContainer
          backgroundColor="navy"
          gridColumn={1}
          display="block"
          width="100%"
        >
          <Image
            alt={alt_text}
            src={imgUrl}
            width={450}
            height={'auto'}
            objectFit="cover"
          />
        </StyledImageContainer>
        <StyledBox
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
        >
          <StyledBox maxWidth={['inherit', null, null, '660px']}>
            <StyledHeadline
              fontFamily="headline"
              fontSize={['30px', null, null, '43px']}
              fontWeight="regular"
              lineHeight={['36px', null, null, '51px']}
              letterSpacing="-0.01em"
              m="0 0 10px"
            >
              {header}
            </StyledHeadline>
            <StyledParagraph
              fontFamily="body"
              fontSize="16px"
              fontWeight="regular"
              lineHeight="26px"
              letterSpacing="-0.015em"
            >
              {description}
            </StyledParagraph>
            <StyledBoxEdit
              display={['block', null, null, 'inline-block']}
              m="20px 0px 40px"
            >
              {links.map((x) => (
                <StyledLink
                  width={['inherit', null, null, '332px']}
                  max-width={['390px', null, null, 'inherit']}
                  height="60px"
                  background="white"
                  display="flex"
                  alignContent="center"
                  alignItems="center"
                  color="text"
                  boxShadow="0px 8px 11px rgba(0, 0, 0, 0.1)"
                  borderRadius="4px"
                  mb="20px"
                  href={x.url}
                  key={x._key}
                >
                  <StyledHeadline
                    fontFamily="body"
                    fontSize={['16px', '14px', null, '18px']}
                    fontWeight="bold"
                    lineHeight={['26px', null, null, '22px']}
                    letterSpacing="-0.015em"
                    p="0 20px"
                    m="0"
                    maxWidth={['240px', '265px', '273px', null]}
                  >
                    {x.title}
                  </StyledHeadline>
                  <CircleArrow />
                </StyledLink>
              ))}
            </StyledBoxEdit>
          </StyledBox>
          {btnUrl && btnText && (
            <Button
              arrowColor="white"
              arrow={true}
              size="medium"
              variant="solid"
              url={btnUrl}
              label={btnText}
            />
          )}
        </StyledBox>
      </StyledBox>
    </Block>
  );
};

const StyledBox = styled.div`
  ${color}
  ${typography}
  ${flexbox}
  ${space}
  ${layout}
  ${grid}
`;

const StyledBoxEdit = styled.div`
  ${space}
  ${layout}

  //Styled Systems Don't Support These Stylings
  -webkit-column-count: 2; /* Chrome, Safari, Opera */
  -moz-column-count: 2; /* Firefox */
  column-count: 2;
  column-gap: 28.5px;
  break-inside: avoid;

  @media (max-width: 760px) {
    column-count: inherit;
  }
`;

const StyledImageContainer = styled.div`
  ${typography}
  ${space}
  ${layout}
  ${grid}
  div {
    height: 300px;
    display: block !important;

    @media screen and (${query.atLeast('desktop')}) {
      height: 355px;
    }

    @media screen and (${query.atLeast('max')}) {
      height: 757px;
      display: inline-block;
    }
  }
`;

const StyledHeadline = styled.h1`
  ${typography}
  ${space}
  ${layout}
`;

const StyledParagraph = styled.p`
  ${typography}
  ${space}
`;

const StyledLink = styled.a`
  ${color}
  ${typography}
  ${flexbox}
  ${space}
  ${layout}
  ${grid}
  ${border}
  ${shadow}

  //This code at the bottom gets rid of weird CSS Column Box Shadow bug
  display: inline-flex;
  width: 100%;
  //Styled Systems Don't Support These Stylings
  /* Column Count Bug Resolution w/ Shadow */
  -webkit-column-break-inside: avoid; /* Chrome, Safari, Opera */
  page-break-inside: avoid; /* Firefox */
  break-inside: avoid; /* IE 10+ */
  break-inside: avoid;
  transform: translateX(0);
  text-decoration: none;
  cursor: pointer;

  svg {
    position: absolute;
    right: 20px;
  }

  div {
    display: contents;
  }
`;
