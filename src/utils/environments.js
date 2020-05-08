let API_URL;

if(process.env.NODE_ENV === 'development') {
    API_URL = ['http://18.222.122.101:4041/api', 'http://localhost:4040/api', 'http://192.168.0.7:4040/api']
}

if(process.env.NODE_ENV === 'production') {
    API_URL = ''
}

export {
    API_URL
}
