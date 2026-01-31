import { log } from "node:console";

dotenv.config();

const app = express();

app.use(express.json());
app.use(logger)

app.use("/users",userRoutes)
app.use("/vehicles",vehiclesRoutes)
app.use("/trip",tripRoutes)
app.use("/analytics",analyticsRoutes)


app.use(not found);
app.listen(3000,()=>{
    console.log("Server running on port 3000");
    
})