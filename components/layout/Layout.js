import PropTypes from 'prop-types';
// components
import Navigation from './Navigation';
// style
import styled from 'styled-components';

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Layout(props) {
  return (
    <>
      <Navigation />
      <Main>{props.children}</Main>
    </>
  );
}

const Main = styled.main`
  margin: 3rem auto;
  width: 90%;
  max-width: 40rem;
`;
