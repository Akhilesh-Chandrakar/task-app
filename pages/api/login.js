import User from '../../models/User'
import DbConnect from '../../middleware/mongoose'

const handler= async (req, res)=>{
if (req.method=="POST"){
    console.log(req.body)
    let user=await User.findOne({"email": req.body.email})
    if(user){
        if(req.body.email=user.email && req.body.password==user.password){
            res.status(200).json({success:true, email:user.email, name:user.name});
        }
        else {
            res.status(200).json({success:false, error:"invalid Credentials"})
        }
    }
    else{
        res.status(200).json({success:false, error:"user not found"})
    }
  
   
}
else{
    res.status(400).json({error:"This method is not allowed"})
}
}
export default DbConnect(handler);