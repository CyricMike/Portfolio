import axios from "axios";

class getRequestor{
    static async Requestor(){
        try {
            const result = await axios.get('api/Requestor')
            return result.data
        } catch (error) {
            console.log(error)
        }
    }
}

export default getRequestor;