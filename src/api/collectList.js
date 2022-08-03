import request from '@/utils/request'
import store from '@/store'
export const getcollectList = () => {
  return request({
    url: '/user/favorites',
    headers: {
      authorization: store.state.TOKEN.token
    }
  })
}
export const getdetailList = (id) => {
  return request({
    url: `/houses/${id}`
  })
}
