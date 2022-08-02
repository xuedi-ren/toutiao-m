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
