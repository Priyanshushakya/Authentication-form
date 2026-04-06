import axios from "axios";


export const GET = (url) => axios.get(url);
export const POST = (url, data) => axios.post(url, data);
export const PUT = (url, data) => axios.put(url, data);
export const DELETE = (url) => axios.delete(url);