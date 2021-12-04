import meetupModel from '../../models/meetup';
/*
  Path:
    /api/new-meetup

  Methods:
    POST
*/

async function handler(req, res) {
  if (req.method === 'POST') {
    // handle req
    const data = req.body;
    // create entry
    await meetupModel.createOne(data);
    // send response
    res.status(201).json({ message: 'Meetup created' });
  }
}

export default handler;
