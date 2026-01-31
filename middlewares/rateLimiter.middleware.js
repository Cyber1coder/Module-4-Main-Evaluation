const requests = {};

export const rateLimiter = (req,res,next)=>{
    const ip = req.ip;
    const now = Date.now();

    if(!requests[ip]){
        requests[ip]= [];
    }

    requests[ip] = requests[ip].filter(time => now - time <60000)
    
}