import axios from "axios";

class postfetchRequestData{
    static async fetchRequestData(obj){
        try {
            const result = await axios.post('api/fetchRequestData' , obj)
            return result.data
        } catch (error) {
            console.log(error)
        }
    }
}

export default postfetchRequestData;