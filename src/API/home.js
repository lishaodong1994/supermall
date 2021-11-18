import http from '@/common/util/http'

export function getHomeMultidata(){
    return http({
        url:'/home/multidata'
    })
}
export function getContentData(type,page){
    return http({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}