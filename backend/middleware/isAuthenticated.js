import jwt from "jsonwebtoken"
const isAunthenticated = async(req,res,next)=>{
    try{

        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({msg: "User not authenticated"});
        };
        const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY);
        // console.log(decode);
        if(!decode){
            return res.status(401).json({msg: "Invalid Token"});
        };
        req.id = decode.userId;

        next();

    }
    catch (error){

        console.log(error);

    }
};
export default isAunthenticated;

const req ={
    id:" ",
}
req.id="bksbckbckbs"