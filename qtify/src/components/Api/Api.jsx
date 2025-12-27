
import axios from "axios";


export const FetchTopAlbums=async ()=>{
    const url = await axios.get("https://qtify-backend.labs.crio.do/albums/top")
    const data = url.data;
    return data;
}

export const FetchNewAlbums =async()=>{
    const url = await axios.get("https://qtify-backend.labs.crio.do/albums/new")
    const data = url.data;
    return data;
}



