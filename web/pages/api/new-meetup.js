import meetupModel from '../../models/meetup';

/*
  Path:
    /api/new-meetup

  Methods:
    POST
*/

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      // handle request
      const data = req.body;
      // create new meetup
      const result = await meetupModel.createOne(data);
      // send response
      if (result) {
        res.status(201).json({ status: 'success', message: 'Meetup created' });
      } else {
        res.status(500).json({ status: 'error', message: 'Please try again' });
      }
    }
  } catch (error) {
    // temp error handling
    console.error(`HTTP Method: ${req.method} --- ${error}`);
    // send response
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
}
