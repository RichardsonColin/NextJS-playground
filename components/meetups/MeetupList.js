import PropTypes from 'prop-types';
// components
import MeetupItem from './MeetupItem';
// style
import styled from 'styled-components';

MeetupList.propTypes = {
  meetups: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function MeetupList(props) {
  return (
    <List>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          dataUrl={meetup.dataUrl}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </List>
  );
}

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
