import { request } from './request'

export function postLogindata() {
    return request({
        url: '/login',
    })
}