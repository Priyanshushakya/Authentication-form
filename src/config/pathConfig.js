
const url = import.meta.env.VITE_REACT_BASE_URL

const pathConfig = {

    //// auth
    REGISTER : `${url}/api/auth/register`,
    LOGIN : `${url}/api/auth/login`,

}

export default pathConfig;