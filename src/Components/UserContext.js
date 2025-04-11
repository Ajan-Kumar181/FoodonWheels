import { createContext } from "react";

const loggedInUser = createContext({
    username : 'Ajan Kumar',
    email : 'ajan123@gmail.com'
});

export default loggedInUser;