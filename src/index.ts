import express,{Request, Response, json} from "express"
import cors from "cors"
import userRoute from "./routes/user.route"
  
  
  const app= express()
  app.use(cors())
  app.use(json())
  app.use(userRoute)

 const port = process.env.PORT || 4000

 app.listen(port, ()=>{
    console.log(`server are running on port ${port}`)
 })