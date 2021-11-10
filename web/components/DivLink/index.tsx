import {Download, ExternalLink} from '@styled-icons/evaicons-solid/';
import {ReactNode} from 'react';
import styled from 'styled-components';
import {color, fontDef} from '@theme/fn';

const icons = {
  Download,
  ExternalLink,
};

export type propsDivLink = {
  icon?: keyof typeof icons;
  href?: string;
  text?: string;
  children?: ReactNode;
  center?: true;
};

const DivLinkContainer = styled.div<{center?: true}>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.center ? 'center' : 'flex-start')};
  color: ${color('blue')};
  a {
    text-decoration: none;
    color: currentColor;
    &:hover,
    &:active,
    &:visited {
      color: currentColor;
    }
    &:hover {
      text-decoration: underline;
    }
  }
  ${fontDef('sm-subhead-bold')}
  svg {
    width: 22px;
    height: 22px;
    fill: ${color('blue')};
    margin-top: -2px;
    margin-right: 3px;
  }
`;

const DivLink = ({icon, href, text, children, center}: propsDivLink) => {
  const content = children || text || 'link';
  const Icon = icons[icon];

  return (
    <DivLinkContainer center={center}>
      <Icon />
      <a href={href}>{content}</a>
    </DivLinkContainer>
  );
};

export default DivLink;
