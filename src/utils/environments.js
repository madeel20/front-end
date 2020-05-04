let API_URL;

if(process.env.NODE_ENV === 'development') {
    API_URL = ''
}

if(process.env.NODE_ENV === 'production') {
    API_URL = ''
}

export {
    API_URL
}
