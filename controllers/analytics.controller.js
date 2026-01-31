export const getAnalytics = async (req,res)=>{
    const users = await supabase.from("users").select("role",{count:"exact"})
}