import Image from 'next/image';
import PropTypes from 'prop-types';
// style
import styled from 'styled-components';

MeetupDetail.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  dataUrl: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default function MeetupDetail(props) {
  const { title, image, dataUrl, address, description } = props;
  return (
    <Section>
      <Wrapper>
        <StyledImage
          src={image}
          alt={title}
          quality={90}
          layout='fill'
          objectFit='cover'
          placeholder='blur'
          blurDataURL={dataUrl}
        />
      </Wrapper>
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </Section>
  );
}

const Section = styled.section`
  text-align: center;
`;
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
  overflow: hidden;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
`;
const StyledImage = styled(Image)`
  width: 100%;
`;
