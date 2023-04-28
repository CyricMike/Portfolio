import axios from "axios";

class getSystemForRequest{
    static async SystemForRequest(){
        try {
            const result = await axios.get(`api/SystemForRequest`)
                return result.data
        } catch (error) {
            console.log(error)
        }
    }
}

export default getSystemForRequest;
