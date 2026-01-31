
export const signup = async(req,res)=>{
    const {name,email,password,role}= req.body;

    if(!name || !email || !role || !password){
        return res.status(400).json({message:"all fields required"});
    }
    const{data,error}=await supabase .from("users")
    .insert([{name,email,password,role}]);

    if(error){
        return res.status(400).json({message:"User created",data})
    }
}