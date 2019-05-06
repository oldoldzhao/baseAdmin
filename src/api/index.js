import request from'../utils/request'

export function getRequest(params) {
    return request({
        method: "GET",
        url: "/zy-resource-pool/index",
        params
    })
}


export function postRequest(data) {
    return request({
        method: "POST",
        url: "/zy-resource-pool/create",
        headers: { "Content-Type": "application/json" },
        data
    })
}