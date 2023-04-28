import axios from "axios";

class getTempReference{
    static async TempReference(){
        try {
            const result = await axios.get('api/TempReference')
            return result.data
        } catch (error) {
            console.log(error)
        }
    }
}

export default getTempReference;