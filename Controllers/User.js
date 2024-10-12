const { User } = require('../Models/User');



const saveUserData = async (req, res) => {
    const { username, social_media_handle, images } = req.body;
    // console.log(req.body)
    if (!username || !social_media_handle || !images) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }
    try {
        const userInfo = new User({ username, social_media_handle, images });
        await userInfo.save();
        // console.log(userInfo)
        res.status(201).json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
const showAllUSer = async (req, res) => {
    
   
    try {
        const allUsers =  await User.find({});
        // console.log(allUsers)
        res.status(200).json({ users:allUsers, success: true });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

//..................................................................................

module.exports = { saveUserData , showAllUSer};
