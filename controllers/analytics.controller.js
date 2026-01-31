export const getAnalytics = async (req,res)=>{
    const users = await supabase.from("users").select("role",{count:"exact"});
    const vehicles = await supabase.from("vehicles").select("*",{count:"exact"});
    

    res.json({
        total_users:users.count,
        total_vehicles:vehicles.count
    })
}