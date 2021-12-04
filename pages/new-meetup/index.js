import Head from 'next/head';
import { useRouter } from 'next/router';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(meetupData) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'content-type': 'application/json',
      },
    });
    const data = await response.json();

    // redirect to index
    router.push('/');
  }

  return (
    <>
      <Head>
        <title>Create a New Meetup</title>
        <meta name='description' content='Create your own NextJS meetup!' />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}

export default NewMeetupPage;
