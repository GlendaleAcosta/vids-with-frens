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