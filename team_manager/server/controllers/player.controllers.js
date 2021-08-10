const { Player } = require('../models/player.models');
module.exports.getPlayers = (request, response) => {
    Player.find({})
    .then(res=>{response.json(res)})
    .catch(err=>{
        response.json(err)
    })
}
    // The method below is new
module.exports.createPlayer = (request, response) => {
    const { playerName, preferedPosition } = request.body;
    Player.create({
        playerName,
        preferedPosition,
        Game1:"Undecided",
        Game2:"Undecided",
        Game3:"Undecided",
    })
        .then(player => response.json(player))
        .catch(err => response.status(400).json(err));
}

module.exports.updatePlayer = (request, response) => {
    console.log("asdasd");
    console.log(request.body);
    //     const { Game } = request.body;
    Player.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
            .then(updatedPlayer => response.json(updatedPlayer))
            .catch(err => response.json(err))
    }


module.exports.deletePlayer = (request, response) => {
    Player.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
    }