import styled from 'styled-components';
import {
  color,
  space,
  typography,
  flexbox,
  layout,
  grid,
  position,
  border,
} from 'styled-system';
import Link from 'next/link';

export interface StickyCtaProps {
  /*** Displays if CTA is visible or not.
   * Implementing this will always
   */
  visible?: boolean;
  /*** Text on CTA */
  label: string;
  /*** Destination url */
  url: string;
  /*** Used for preselection of form
   * subject to change given how we implement form.
   */
  source?: string;
}

/*** STYLING ***/
const Container = styled.div`
  ${color}
  ${typography}
  ${flexbox}
  ${space}
  ${layout}
  ${grid}
  ${position}
  
  pointer-events: none;
`;

const Cta = styled.a`
  ${color}
  ${typography}
  ${flexbox}
  ${space}
  ${layout}
  ${grid}
  ${position}
  ${border}
  pointer-events: auto;
  box-sizing: border-box;
  text-decoration: none;
  border-radius: 5px;

  transform: rotate(90deg) translateX(50%) translateY(100%);
  transform-origin: right bottom;
  top: 50%;
  right: 0;

  @media screen and (max-width: 768px) {
    transform-origin: center;
    transform: translateX(50%);
    width: 100%;
    top: unset;
    bottom: 0;
    right: 50%;
    border-radius: 0;
  }
`;

/*** FOR STORY */
export const StoryContainer = styled.div`
  width: 100vw;
  height: 100vh;
  border: 2px solid #000;
`;

export const StickyCta = ({
  visible = true,
  label = 'Sticky CTA',
  url = '#',
  source,
}: StickyCtaProps): JSX.Element => {
  return (
    <Container
      position="fixed"
      top={0}
      bottom={0}
      left={0}
      right={0}
      width="100%"
      height="100%"
    >
      {visible && (
        <Link href={url} passHref={true}>
          <Cta
            fontFamily="headline"
            color="background"
            position="absolute"
            p={2}
            backgroundColor="orange"
            textAlign="center"
            fontSize={2}
          >
            {label}
          </Cta>
        </Link>
      )}
    </Container>
  );
};
