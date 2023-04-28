import axios from "axios";

class postSaveEditedUpdates{
    static async SaveEditedUpdates(obj){
        try {
            const result = await axios.post('api/SaveEditedUpdates' , obj)
            return result.data
        } catch (error) {
            console.log(error)
        }
    }
}

export default postSaveEditedUpdates;