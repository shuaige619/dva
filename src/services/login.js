import request from '../utils/request';
const reqHeaders = {
    'Accept': 'application/json',
    'Cache-Control': 'no-cache',
    'sysCode': 'market',
    'token': ''
}
const getJSON = (init) => {
    const arr = [];
    for (let i in init) {
        arr.push(`${i}=${init[i]}`);
    }
    return arr.join('&');
};
export const login = (message) => {
    return request ('/api/login',{
        method: 'POST',
        headers: Object.assign({}, reqHeaders, {
            'Content-Type': 'application/x-www-form-urlencoded'
        }),
        body: getJSON(message)
    })
}
