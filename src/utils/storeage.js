// 封装本地存储
class Store {
  set(key, value) {
    if (typeof value === 'object' && value !== null) {
      value = JSON.stringify(value)
    }
    localStorage.setItem(key, value)
  }
  
  get(key) { 
    const value = localStorage.getItem(key)
    try {
      return JSON.parse(value)
    } catch {
      return value
    }
  }
  
  remove(key) {
    localStorage.removeItem(key)
  }
}
export default new Store()
