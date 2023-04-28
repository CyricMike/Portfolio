import axios from "axios";

class postSaveFileAttachment{
    static async SaveFileAttachment(obj){
        try {
            const result = await axios.post('api/SaveFileAttachment' , obj)
            return result.data
        } catch (error) {
            console.log(error)
        }
    }
}

export default postSaveFileAttachment;