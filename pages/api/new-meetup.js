import meetupModel from '../../models/meetup';
import imgur from '../../lib/imgur/api';
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
      // upload to imgur for imgur link and update data
      data.image = (await imgur.upload(data.image)).link;
      // create new meetup
      await meetupModel.createOne(data);
      // send response
      res.status(201).json({ message: 'Meetup created' });
    }
  } catch (error) {
    // temp error handling
    console.log('Method: ', req.method, error);
    // send response
    res.status(500).json({ message: 'Internal server error' });
  }
}

export default handler;
