import axios from "axios";

class postSaveUpdateTask{
    static async SaveUpdateTask(obj){
        try {
            const result = await axios.post('api/SaveUpdateTask' , obj)
        } catch (error) {
            console.log(error)
        }
    }
}

export default postSaveUpdateTask;