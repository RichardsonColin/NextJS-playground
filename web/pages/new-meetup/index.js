import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
// components
import ToastNotification from '../../components/ui/ToastNotification';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

export default function NewMeetupPage() {
  const router = useRouter();
  const [responseData, setResponseData] = useState({});

  async function addMeetupHandler(meetupData) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'content-type': 'application/json',
      },
    });
    const { status, message } = await response.json();
    setResponseData({ status, message });
  }

  useEffect(() => {
    if (responseData.status === 'success') {
      setTimeout(() => {
        router.push('/');
      }, 2000);
    }
  });

  return (
    <>
      <Head>
        <title>Create a New Meetup</title>
        <meta name='description' content='Create your own NextJS meetup!' />
      </Head>
      {'status' in responseData && (
        <ToastNotification
          status={responseData.status}
          title={responseData.status.toUpperCase()}
          message={responseData.message}
          selector='#toast'
        />
      )}
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}
