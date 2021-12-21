import meetupModel from '../../models/meetup';

/*
  Path:
    /api/new-meetup

  Methods:
    POST
*/

async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      // handle req
      const data = req.body;
      // create new meetup
      console.log(data);
      await meetupModel.createOne(data);
      // send response
      res.status(201).json({ message: 'Meetup created' });
    }
  } catch (error) {
    // temp error handling
    console.error(`HTTP Method: ${req.method} --- ${error}`);
    // send response
    res.status(500).json({ message: 'Internal server error' });
  }
}

export default handler;
