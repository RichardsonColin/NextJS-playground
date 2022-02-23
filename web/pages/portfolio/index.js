import Image from 'next/image';
import sanityClient from '../../client';
import { useNextSanityImage } from 'next-sanity-image';
import PropTypes from 'prop-types';
// style
import styled from 'styled-components';

CustomImage.propTypes = {
  image: PropTypes.object.isRequired,
  layout: PropTypes.string.isRequired,
  objectFit: PropTypes.string.isRequired,
  quality: PropTypes.number.isRequired,
  blur: PropTypes.string.isRequired,
};

Portfolio.propTypes = {
  images: PropTypes.array.isRequired,
};

function CustomImage({ image, layout, objectFit, quality, blur }) {
  const customImageBuilder = (imageUrlBuilder, options) => {
    return imageUrlBuilder
      .width(
        options.width || Math.min(options.originalImageDimensions.width, 800)
      )
      .blur(blur)
      .quality(quality);
  };
  const imageProps = useNextSanityImage(sanityClient, image, {
    imageBuilder: customImageBuilder,
  });

  // unrequired props if image layout is set to 'fill'
  if (layout === 'fill') {
    delete imageProps['width'];
    delete imageProps['height'];
  }

  return (
    <Image {...imageProps} layout={layout} objectFit={objectFit} quality={90} />
  );
}

export default function Portfolio({ images }) {
  return (
    <Container>
      {images.map(({ _id, image }) => {
        return (
          <ImageWrapper key={_id}>
            <CustomImage
              image={image}
              layout='fill'
              objectFit='cover'
              quality={90}
              blur={20}
            />
          </ImageWrapper>
        );
      })}
    </Container>
  );
}

export async function getStaticProps() {
  // fetch all portfolio images
  const images = await sanityClient.fetch(`
    *[_type == "portfolio"] | order(_createdAt desc)
  `);
  return {
    props: {
      images,
    },
    revalidate: 60,
  };
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 300px;
  min-height: 200px;
  margin: 0.2rem;
`;
