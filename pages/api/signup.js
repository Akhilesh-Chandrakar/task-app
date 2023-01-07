import User from '../../models/User'
import DbConnect from '../../middleware/mongoose'

const handler= async (req, res)=>{
if (req.method=="POST"){
    console.log(req.body)
    res.status(200).json({success:"success"})
    let u=new User(req.body);
   await u.save();
}
else{
    res.status(400).json({error:"This method is not allowed"})
}
}
export default DbConnect(handler);