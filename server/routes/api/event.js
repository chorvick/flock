const Event = require("../../models/Event")



module.exports = (app) => {

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
    }  = body;
   

    // if (!name) {
    //   return res.send({
    //     success: false,
    //     message: 'Error: name must not be blank.'
    //   });
    // }
    // if (!address) {
    //   return res.send({
    //     success: false,
    //     message: 'Error: address must not be blank.'
    //   });
    // }

    // if (!date) {
    //   return res.send({
    //     success: false,
    //     message: 'Error: date must not be blank.'
    //   });
    // }
    // if (!time) {
    //   return res.send({
    //     success: false,
    //     message: 'Error: time must not be blank.'
    //   });
    // }
    // if (!description) {
    //   return res.send({
    //     success: false,
    //     message: 'Error: description must not be blank.'
    //   });
    // }
    // if (!organizer) {
    //   return res.send({
    //     success: false,
    //     message: 'Error: organizer must not be blank.'
    //   });
    // }



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