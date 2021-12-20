import PropTypes from 'prop-types';

import MeetupItem from './MeetupItem';

import classes from './MeetupList.module.css';

function MeetupList(props) {
  return (
    <ul className={classes.list}>
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
    </ul>
  );
}

MeetupList.propTypes = {
  meetups: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MeetupList;
