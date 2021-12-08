import {ResolvedImageWithHotSpot} from '@data/types';
import NextImage, {ImageProps} from 'next/image';
import {publicClient as client} from '@data/sanityClient'; // TODO: preview?
import {useNextSanityImage} from 'next-sanity-image';
import {mq} from '@theme/query';
import styled from 'styled-components';

const DesktopImage = styled(NextImage)`
  ${mq({
    display: ['none !important', null, 'block !important'],
  })}
` as typeof NextImage & Record<string, any>;

const MobileImage = styled(NextImage)`
  ${mq({
    display: ['block !important', null, 'none !important'],
  })}
` as React.FC<ImageProps>;

const Wrapper = styled.div`
  position: relative;
  & > div {
    /* position: absolute !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0; */
  }
`;

const LinkMenuAccentImage = ({
  desktop,
  mobile,
}: {
  desktop?: ResolvedImageWithHotSpot;
  mobile?: ResolvedImageWithHotSpot;
}) => {
  if (!desktop && !mobile) {
    return null;
  }

  const desktopProps = useNextSanityImage(client, desktop || mobile);
  const mobileProps = useNextSanityImage(client, mobile || desktop);

  return (
    <Wrapper>
      <DesktopImage
        src={desktopProps.src}
        loader={desktopProps.loader}
        layout="fill"
        objectFit="cover"
        sizes="50vw"
      />
      <MobileImage
        src={mobileProps.src}
        loader={mobileProps.loader}
        layout="fill"
        objectFit="cover"
      />
    </Wrapper>
  );
};

export default LinkMenuAccentImage;
