import { AsyncThunk, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Auth, AuthState, User } from '@/core/interfaces/Auth'
import { AsyncThunkConfig } from '../store'

const DUMMY_DATA: User[] = [
  {email: 'john@xyz.com', password: '123abc' },
  {email: 'mike@xyz.com', password: '123abc' },
]

const initialState: AuthState = {
  usersList: DUMMY_DATA,
  userData: null,
  errorMessage: '',
}

export const loginAction: AsyncThunk<unknown, User, AsyncThunkConfig> = createAsyncThunk('Auth/Login', async (body, thunkAPI): Promise<User | unknown> => {
  const { rejectWithValue } = thunkAPI
  try {
    const user: User = body as unknown as User
    const userRecord: User | null = DUMMY_DATA.find(u => u.email === user.email) || null

    if (!userRecord) {
      return {
        userData: null,
        errorMessage: "User doesn't exists.",
      }
    }

    if (userRecord.password !== user.password) {
      return {
        userData: null,
        errorMessage: 'Incorrect email or password.',
      }
    }

    return { userData: userRecord, errorMessage: '' }
  } catch (error: unknown) {
    return rejectWithValue(error)
  }
})

export const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    logoutAction: (state): AuthState => {
      return { ...state, userData: null, errorMessage: '' }
    },
  },
  extraReducers: builder => {
    builder.addCase(loginAction.fulfilled, (state, action: PayloadAction<unknown>) => {
      const authData = action.payload as Auth
      return {
        ...state,
        ...authData
      }
    })
  },
})
export const { logoutAction } = authSlice.actions
export default authSlice.reducer
