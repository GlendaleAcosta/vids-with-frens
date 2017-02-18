var Room = require('../models/Room');

exports.postRoom = (req,res,next) => {

    var room = new Room ({
        creator: req.body.username
    })

    room.save((err)=>{
        if(err) {console.log(err)};
        return res.json({ 
                roomId: room.id,
                msg: "Room has been created!",
                success: true
        });
    })
}

exports.validateRoom = (req, res, next) => {
    Room.findOne({_id: req.body.roomId}, (err, existingRoom) => {
        if(err){console.log(err)};
        if(existingRoom){
            return res.json({
                success: true
            })
        } else {
            return res.json({
                success: false
            })
        }
    })
}