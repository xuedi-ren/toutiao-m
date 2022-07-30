import request from '@/utils/request'
// 轮播图api
export const rollImg = () => {
  return request({
    url: '/home/swiper'
  })
}

export const rentHouse = () => {
  return request({
    url: '/home/groups'
  })
}
