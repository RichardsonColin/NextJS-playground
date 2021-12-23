import PropTypes from 'prop-types';
// DB model
import meetupModel from '../models/meetup';
// components
import MeetupList from '../components/meetups/MeetupList';

HomePage.propTypes = {
  meetups: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch all meetups
  const meetups = await meetupModel.fetchAll({});

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        dataUrl: meetup.dataUrl,
      })),
    },
    revalidate: 60,
  };
}
