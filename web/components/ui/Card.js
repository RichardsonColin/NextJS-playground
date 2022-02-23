import PropTypes from 'prop-types';
// style
import styled from 'styled-components';

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Card(props) {
  return <Wrapper>{props.children}</Wrapper>;
}

const Wrapper = styled.div`
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;
