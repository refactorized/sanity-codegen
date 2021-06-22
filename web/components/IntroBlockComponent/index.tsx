import styled from 'styled-components';
import {color, space, typography} from 'styled-system';
import {Button} from '../Button';

export interface IntroBlockProps {
  description: string;
  btnText?: string;
  btnUrl?: string;
}

export const IntroBlock = ({
  description = `Nestled in the Berkshires, the Austen Riggs Center is unlike most mental health treatment centers. Here in our open setting in western Massachusetts, you’ll find the space and support you need to understand your problems, find your voice, and make your way forward.
  `,
  btnText = `Button Text`,
  btnUrl = `#`,
}: IntroBlockProps): JSX.Element => {
  return (
    <StyledContainer
      color="text"
      bg="cream"
      p={['45px 21px', '89px 202px']}
      fontFamily="body"
    >
      <StyledContentContainer textAlign="center">
        <div>
          <Text
            fontFamily="header"
            fontSize={['20px', '43px']}
            fontWeight="regular"
            lineHeight={['25px', '51px']}
            letterSpacing="-0.01em"
            textAlign="center"
            mb={['35px', '45px']}
          >
            {description}
          </Text>
          <Button variant="solid" label={btnText} url={btnUrl} size="medium" />
        </div>
      </StyledContentContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  ${color}
  ${typography}
  ${space}
`;

const StyledContentContainer = styled.div`
  display: flex;
  ${space}
  ${typography}
`;

const Text = styled.p`
  ${color}
  ${space}
  ${typography}
`;
