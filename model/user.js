////set up database and encryption specifics ---------------------------------MORE MAGIC 
var mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var UsersSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },

    firstname: {
        type: String,
        required: true,
    },

    lastname: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true
    },

    events: [{
        type: Schema.Types.ObjectId,
        ref: "Events"
    }]


});

//bcrypt makes certain no actual user password only hash is stored in the db

// UsersSchema.methods = {
//     checkPassword: function (inputPassword) {
//         return bcrypt.compareSync(inputPassword, this.password)
//     },
//     hashPassword: plainTextPassword => {
//         return bcrypt.hashSync(plainTextPassword, 12)
//     }
// }

// UsersSchema.pre('save', function (next) {
//     if (!this.password) {
//         console.log('models/user.js no password ?')
//         next()
//     } else {
//         console.log('models/user.js hashPassword in pre save');
//         this.password = this.hashPassword(this.password)
//         next()
//     }
// })


// This creates our model using mongoose to store as Users
var Users = mongoose.model("Users", UsersSchema);

module.exports = Users;