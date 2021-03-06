var mongoose = require("mongoose");

// const.
var Schema = mongoose.Schema;


var EventSchema = new Schema({

    name: {
        type: String,
        required: false
    },

    address: {
        type: String,
        required: false,
    },

    date: {
        type: String,
        required: false,
    },

    time: {
        type: String,
        required: false,
    },

    description: {
        type: String,
        required: false,
    },

    /// the organizer is the 'boss' of the event, having some measure of control, can cancel event ect... make changes
    organizer: {
        type: String,
        required: false,
    },
    //// to reference
    organizerId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: false,
    },
    //// those attending the outing
    attendees: [{
        type: Schema.Types.ObjectId,
        ref: "users",
    }]

});

EventSchema.index({ name: "text", description: "text", address: "text" });


module.exports = mongoose.model('events', EventSchema);
