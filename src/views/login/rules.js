export const numberRules = [
  { required: true, message: '账号不能为空' },
  { pattern: /^1[1-9]\d{9}$/, message: '格式不合法' }
]
export const wordRules = [
  { required: true, message: '密码不能为空' },
  { pattern: /^[0-9]{6}$/, message: '格式不合法' }
]
