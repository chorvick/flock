var mongoose = require("mongoose");

// const.
var Schema = mongoose.Schema;


var EventSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true,
    },

    date: {
        type: String,
        required: true,
    },

    time: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    /// the organizer is the 'boss' of the event, having some measure of control, can cancel event ect... make changes
    organizer: {
        type: String,
        required: false
    },
    //// to reference
    organizerId: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: false,
    },
    //// those attending the outing
    attendees: [{
        type: Schema.Types.ObjectId,
        ref: "Users",
    }]

});

EventSchema.index({ name: "text", description: "text", address: "text" });



var Events = mongoose.model("Events", EventSchema);

module.exports = Events;