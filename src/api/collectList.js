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

export const getIsCollect = (id) => {
  return request({
    url: `/user/favorites/${id}`,
    headers: {
      authorization: store.state.TOKEN.token
    }
    
  })
}

export const delCollect = (id) => {
  return request({
    url: `/user/favorites/${id}`,
    method: 'DELETE',
    headers: {
      authorization: store.state.TOKEN.token
    }
    
  })
}
export const addCollect = (id) => {
  return request({
    url: `/user/favorites/${id}`,
    method: 'POST',
    headers: {
      authorization: store.state.TOKEN.token
    }
    
  })
}
