const Event = require("../../models/Event")


module.exports = (app) => {
  app.get('/api/events/all', (req, res) => {
    Event.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  app.post('/api/event', (req, res, next) => {
    const { body } = req;
    const {
      name,
      address,
      date,
      time,
      description,
      organizer,
      organizerId,
      attendees
    } = body;

    const newEvent = new Event();
    newEvent.name = name;
    newEvent.address = address;
    newEvent.date = date;
    newEvent.time = time;
    newEvent.description = description;
    newEvent.organizer = organizerId;
    newEvent.attendees = attendees;
    newEvent.save((err, user) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server Error'
        });
      }
      return res.send({
        success: true,
        message: 'Congrats! your event was saved!'
      });
    })

  })
}