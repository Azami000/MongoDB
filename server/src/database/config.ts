import {connect}from "mongoose"


const URL: string =
 "mongodb+srv://chaka770:5xcDxfMs8VthI3RL@test.8h8vi.mongodb.net/"

export const connectDatabse = async ()=>{
    try {
        await connect(URL);
    } catch (error) {
        console.log("Database holbohod aldaa garlaa");
        
    }
}