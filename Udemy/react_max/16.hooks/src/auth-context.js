import React from 'react';

const authContext = React.createContext({status: false, login: () => {}}) // unauthenticated

export default authContext;