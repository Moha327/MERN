const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    playerName: { type: String,required: [
        true,
        "playerName is required"
    ],
    minlength:[4,"it must be greater than 4"]
},
    preferedPosition: { type: String },
    Game1: { type: String },// playeing, notplaying, undic
    Game2: { type: String },
    Game3: { type: String }
}, { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);
