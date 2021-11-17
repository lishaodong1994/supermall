import http from '@/common/util/http'

export function getHomeMultidata(){
    return http({
        url:'/home/multidata'
    })
}