import axios from 'axios';
const KEY = 'AIzaSyClltJvfO9jRohNaog1chCkYLJjhAiNe9I';

export default axios.create({

    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part :'snippet',
        type:'video',
        maxResult:'6',
        key:KEY
    }
});