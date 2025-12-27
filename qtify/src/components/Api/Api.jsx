
import axios from "axios";


const FetchTopAlbums=async ()=>{
    const url = await axios.get("https://qtify-backend.labs.crio.do/albums/top")
    const data = url.data;
    return data;
}

export default FetchTopAlbums;

