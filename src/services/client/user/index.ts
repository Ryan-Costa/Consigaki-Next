import _axios from '..'

export const UserService = {
  getUser: async(): Promise<any> => (await _axios.get('api/user')).data,
}