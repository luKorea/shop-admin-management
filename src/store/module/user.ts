import { TOKEN, USER_INFO } from '@/config/constant'
import { localCache } from '@/utils'
import { createSlice } from '@reduxjs/toolkit'

interface IDataType {
  token: string | null
  userInfo: any
}
const userReducer = createSlice({
  name: 'user',
  initialState(): IDataType {
    return {
      token: null,
      userInfo: {}
    }
  },
  reducers: {
    setLocalDataAction(state: IDataType) {
      const token = localCache.getCache(TOKEN)
      const userInfo = localCache.getCache(USER_INFO)
      if (token && userInfo) {
        state.token = token
        state.userInfo = userInfo
      }
    }
  }
})

export const { setLocalDataAction } = userReducer.actions

export default userReducer.reducer
