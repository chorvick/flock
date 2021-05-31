const User = require("../../models/User")



module.exports = (app) => {

  app.post('/api/account/signup', (req, res, next) => {
    const { body } = req;
    const {
      firstName,
      lastName,
      userName,
      password,
    } = body;
    let {
      email
    } = body;

    if (!firstName) {
      return res.send({
        success: false,
        message: 'Error: first name must not be blank.'
      });
    }

    if (!lastName) {
      return res.send({
        success: false,
        message: 'Error: last name must not be blank.'
      });
    }
    if (!userName) {
      return res.send({
        success: false,
        message: 'Error: username must not be blank.'
      });
    }
    if (!email) {
      return res.send({
        success: false,
        message: 'Error: email must not be blank.'
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: 'Error: password must not be blank.'
      });
    }

    console.log('here');
    email = email.toLowerCase();
    email = email.trim();


    User.find({
      email: email
    }, (err, previousUser) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server Error'
        });
      } else if (previousUser.length > 0) {
        return res.send({
          success: false,
          message: 'Error: Email already exsists'
        });
      }

      const newUser = new User();
      newUser.email = email;
      newUser.firstName = firstName;
      newUser.lastName = lastName;
      newUser.userName = userName;
      newUser.password = newUser.generateHash(password);
      newUser.save((err, user) => {
        if (err) {
          return res.send({
            success: false,
            message: 'Error: Server Error'
          });
        }
        return res.send({
          success: true,
          message: 'Congrats! you are now signed up'
        });
      })

    })
  
  })
}