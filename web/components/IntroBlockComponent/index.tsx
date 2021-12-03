import styled from 'styled-components';
import {color, space, typography, flexbox, layout} from 'styled-system';
import {Button} from '@components/Button';
import Block from '@components/Layout/Block';

export interface IntroBlockProps {
  description: string;
  btnText?: string;
  btnUrl?: string;
}

export const IntroBlock = ({
  description = `Nestled in the Berkshires, the Austen Riggs Center is unlike most mental health treatment centers. Here in our open setting in western Massachusetts, you’ll find the space and support you need to understand your problems, find your voice, and make your way forward.
  `,
  btnText = `Learn About Us`,
  btnUrl = `#`,
}: IntroBlockProps): JSX.Element => {
  return (
    <Block background="cream" narrow>
      <StyledContentContainer
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        mb={['28px', '0', null, null]}
      >
        <Text
          fontFamily="headline"
          fontSize={['20px', '24px', '43px']}
          fontWeight="regular"
          lineHeight={['25px', '28px', '51px']}
          letterSpacing="-0.01em"
          textAlign="center"
        >
          {description}
        </Text>
        <Button
          variant="solid"
          label={btnText}
          url={btnUrl}
          size="medium"
          arrow={true}
          arrowColor="white"
        />
      </StyledContentContainer>
    </Block>
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
  ${flexbox}
`;

const Text = styled.p`
  ${color}
  ${space}
  ${typography}
  ${layout}
`;
