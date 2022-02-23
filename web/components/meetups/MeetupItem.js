import { useRouter } from 'next/router';
import Image from 'next/image';
import PropTypes from 'prop-types';
// components
import Card from '../ui/Card';
// style
import styled from 'styled-components';

MeetupItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  dataUrl: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default function MeetupItem(props) {
  const { id, title, image, dataUrl, address } = props;
  const router = useRouter();

  function showDetailsHandler() {
    router.push(`/${id}`);
  }

  return (
    <ListItem>
      <Card>
        <ImageWrapper>
          <StyledImage
            src={image}
            alt={title}
            quality={90}
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            blurDataURL={dataUrl}
          />
        </ImageWrapper>
        <Content>
          <Heading>{title}</Heading>
          <address>{address}</address>
        </Content>
        <ButtonWrapper>
          <Button onClick={showDetailsHandler}>Show Details</Button>
        </ButtonWrapper>
      </Card>
    </ListItem>
  );
}

const ListItem = styled.li`
  margin: 1rem 0;
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
  overflow: hidden;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
`;
const StyledImage = styled(Image)`
  width: 100%;
  object-fit: cover;
`;
const Content = styled.div`
  text-align: center;
  padding: 1rem;
`;
const Heading = styled.h3`
  font-size: 1.25rem;
  color: #2c292b;
`;
const ButtonWrapper = styled.div`
  padding: 1.5rem;
  text-align: center;
`;
const Button = styled.button`
  font: inherit;
  cursor: pointer;
  color: #77002e;
  border: 1px solid #77002e;
  background-color: transparent;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;

  &:hover,
  &:active {
    background-color: #ffe2ed;
  }
`;
