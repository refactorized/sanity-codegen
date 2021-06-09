import React from 'react';
import styled, {css} from 'styled-components';

export interface NavSvgComponentsProps {
  color: string;
  hoverColor: string;
  link: string;
  size: string;
}

export const HamburgerMenu = ({
  color = 'black',
  hoverColor = 'grey',
  link = 'https://www.google.com',
  size = '36',
}: NavSvgComponentsProps): JSX.Element => {
  return (
    <>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <span>
            <StyledPATH
              hoverColor={hoverColor}
              color={color}
              width={size}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 14"
            >
              <path
                d="M1 1.5h18M1 7h18M1 12.5h18"
                stroke={color}
                stroke-width="2"
                stroke-miterlimit="16"
                stroke-linecap="round"
              />
            </StyledPATH>
          </span>
        </a>
      ) : (
        <span>
          <svg
            width={size}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 14"
          >
            <path
              d="M1 1.5h18M1 7h18M1 12.5h18"
              stroke={color}
              stroke-width="2"
              stroke-miterlimit="16"
              stroke-linecap="round"
            />
          </svg>
        </span>
      )}
    </>
  );
};

export const Close = ({
  color = 'black',
  hoverColor = 'grey',
  link = 'https://www.google.com',
  size = '36',
}: NavSvgComponentsProps): JSX.Element => {
  return (
    <>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <span>
            <StyledPATH
              hoverColor={hoverColor}
              color={color}
              width={size}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M16.95 7.05l-9.9 9.9M7.05 7.05l9.9 9.9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </StyledPATH>
          </span>
        </a>
      ) : (
        <span>
          <svg
            width={size}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M16.95 7.05l-9.9 9.9M7.05 7.05l9.9 9.9"
              stroke={color}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      )}
    </>
  );
};

const StyledPATH = styled.svg`
  ${(props: {color: string; hoverColor: string}) =>
    css`
      path {
        stroke: ${props.color};
        transition: ease-in 0.2s;
      }
      &:hover {
        path {
          stroke: ${props.hoverColor};
        }
      }
    `}
`;
