import request from '@/utils/request'
import store from '@/store'
// !查看已发布房源列表
export const myRentList = () => {
  return request({
    url: '/user/houses',
    headers: {
      authorization: store.state.TOKEN.token
    }
  })
}

// !使用关键词查询小区信息
export const getcommunityName = (name, id) => {
  return request({
    url: '/area/community',
    params: {
      name,
      id
    }
  })
}
