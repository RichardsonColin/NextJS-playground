import PropTypes from 'prop-types';

import Head from 'next/head';

import { ObjectId } from 'mongodb';
import meetupModel from '../../models/meetup';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetailsPage(props) {
  const { title, image, dataUrl, address, description } = props.meetupData;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <MeetupDetail
        title={title}
        image={image}
        dataUrl={dataUrl}
        address={address}
        description={description}
      />
    </>
  );
}

export async function getStaticPaths() {
  // fetch all meetup ids
  const meetups = await meetupModel.fetchAll({}, { _id: 1 });

  return {
    fallback: process.env['fallback'],
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const meetupData =
    ObjectId.isValid(meetupId) &&
    (await meetupModel.fetchOne({ _id: ObjectId(meetupId) }));

  // return 404 on invalid ID param or empty db query
  if (!meetupData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      meetupData: {
        id: meetupData._id.toString(),
        title: meetupData.title,
        address: meetupData.address,
        image: meetupData.image,
        dataUrl: meetupData.dataUrl,
        description: meetupData.description,
      },
    },
  };
}

MeetupDetailsPage.propTypes = {
  meetupData: PropTypes.object.isRequired,
};

export default MeetupDetailsPage;
