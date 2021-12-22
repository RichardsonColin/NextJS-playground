import Link from 'next/link';

// import classes from './MainNavigation.module.css';
import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #77002e;
  padding: 0 10%;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: baseline;
`;

const ListItem = styled.li`
  margin-left: 3rem;
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  color: #fcb8d2;

  &:hover,
  &:active,
  &.active {
    cursor: pointer;
    color: white;
  }
`;

const Logo = styled.div`
  font-size: 2rem;
  color: white;
  font-weight: bold;
`;

function MainNavigation() {
  return (
    <Header>
      <Link href='/' passHref>
        <StyledLink>
          <Logo>NextJS Meetups</Logo>
        </StyledLink>
      </Link>
      <nav>
        <List>
          <ListItem>
            <Link href='/' passHref>
              <StyledLink>All Meetups</StyledLink>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='/new-meetup' passHref>
              <StyledLink>Add New Meetup</StyledLink>
            </Link>
          </ListItem>
        </List>
      </nav>
    </Header>
  );
}

export default MainNavigation;
