const UserSession = require("../../models/UserSession");
const User = require("../../models/User");

module.exports = (app) => {


  app.post('/api/account/signin', (req, res, next) => {
    const { body } = req;
    const {
      userName,
      password
    } = body;

    if (!userName) {
      return res.send({
        success: false,
        message: 'Error: userName cannot be blank.'
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: 'Error: Password cannot be blank.'
      });
    }



    User.find({
      userName: userName
    }, (err, users) => {
      if (err) {
        console.log('err 2:', err);
        return res.send({
          success: false,
          message: 'Error: server error'
        });
      }
      if (users.length != 1) {
        return res.send({
          success: false,
          message: 'Error: Invalid'
        });
      }
      const user = users[0];
      if (!user.validPassword(password)) {
        return res.send({
          success: false,
          message: 'Error: Invalid'
        });
      }
    });
    // Otherwise correct user
    const userSession = new UserSession();
    userSession.UserId = User._id;
    userSession.save((err, doc) => {
      if (err) {
        console.log(err);
        return res.send({
          success: false,
          message: 'Error: server error'
        });
      }
      return res.send({
        success: true,
        message: 'Valid sign in',
        token: doc._id
      });
    });

    app.post('/api/account/signin', (req, res, next) => { })

    app.post('/api/account/verify', (req, res, next) => {
      const { query } = req;
      const { token } = query;

      UserSession.find({
        _id: token,
        isDeleted: false
      }, (err, docs) => {
        if (err) {
          return res.send({
            success: false,
            message: "Error: Invalid"
          })
        }else{
          return res.send({
            success: true,
            message: "Good Token"
          })
        }
      })

    })

  });
}