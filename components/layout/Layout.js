import PropTypes from 'prop-types';

import MainNavigation from './MainNavigation';

import styled from 'styled-components';

const Main = styled.main`
  margin: 3rem auto;
  width: 90%;
  max-width: 40rem;
`;

function Layout(props) {
  return (
    <>
      <MainNavigation />
      <Main>{props.children}</Main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
