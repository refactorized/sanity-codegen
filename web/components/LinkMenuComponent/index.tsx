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

interface MenuLink {
  title: string;
  slug: {current: string};
  _key: string;
}
interface LinkConfig {
  links: MenuLink[];
}
export interface LinkMenuComponentProps {
  imgUrl?: string;
  header: string;
  description: string;
  btnText?: string;
  btnUrl?: string;
  linkConfig: LinkConfig;
}

export const LinkMenuComponent = ({
  imgUrl,
  header,
  description,
  btnText,
  btnUrl,
  linkConfig,
}: LinkMenuComponentProps): JSX.Element => {
  return (
    <Block>
      <StyledBox
        color="text"
        display="grid"
        gridTemplateColumns={['100%', null, null, '35% 1fr']}
        p={['20px', '50px', null, '80px']}
        gridGap={['25px', '35px', null, '81px']}
      >
        <StyledImageContainer
          backgroundColor="navy"
          gridColumn={1}
          display="block"
          width="100%"
        >
          <Image
            src={imgUrl}
            width={450}
            height="responsive"
            objectFit="cover"
          />
        </StyledImageContainer>
        <StyledBox>
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
              {linkConfig.links.map((x) => (
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
                  href={x.slug.current}
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
                    maxWidth={['240px', '265px', null, null]}
                  >
                    {x.title}
                  </StyledHeadline>
                  <CircleArrow />
                </StyledLink>
              ))}
            </StyledBoxEdit>
          </StyledBox>
          <Button
            arrowColor="white"
            arrow={true}
            size="medium"
            variant="solid"
            url={btnUrl}
            label={btnText}
          />
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
    height: 757px;
    @media (max-width: 1024px) {
      height: 355px;
    }
    @media (max-width: 768px) {
      height: 300px;
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

  //Styled Systems Don't Support These Stylings
  /* Column Count Bug Resolution w/ Shadow */
  -webkit-column-break-inside: avoid; /* Chrome, Safari, Opera */
  page-break-inside: avoid; /* Firefox */
  break-inside: avoid; /* IE 10+ */
  break-inside: avoid;
  transform: translateZ(0);
  text-decoration: none;
  cursor: pointer;

  svg {
    position: absolute;
    right: 20px;
  }
`;
