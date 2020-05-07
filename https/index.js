import https from './https.js'
import url from './url.js'

export const getSubList = (data) => {
    return https.request({
        url: url.get_sub_list,
        method: 'POST',
        data,
    })
}
export const test = (param) => {
    return https.request({
        url: url.test,
        method: 'GET',
        param,
    })
}