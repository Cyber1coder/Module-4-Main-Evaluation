import { supabase } from "../config/supabase.config.js";

export const createVehicle = async (req,res)=>{
    const {name,registration_number,allowed_passangers,rate_per_km,owner_id} = req.body;

    const{data,error} = await supabase.from("vehicles").insert([{
        name,registration_number,allowed_passengers,rate_per_km,owner_id,isAvailable : true
    }])

    if(error) return
    res.status(400).json({message:error.message});
    res.status(200).json(data);
}

export const getVehicleById = async (req,res)=>{
    const{driver_id} = req.body;
    const{id}= req.params;

    const{data,error}= await supabase .from(vehicles) .update({driver_id} .eq("id",id))
    if(error) return 
    res.status(400).json({message:"Vehicle not found"});
    res.json(data);    
}

export const assignDriver = async (req,res)=>{
    const {driver_id}=req.body;
    const{id}=req.params;

    const{data,error} = await supabase .from("vehicles" .update({driver_id}) .eq("id,id")
     res.status(400).json({message:error.message});
    res.json({message:"Driver assigned"});   

}