import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { User } from '../../data/User'

/* PayloadAction Types */
interface UserLoggedPayload {
    profile: User
}

/* Reducer State */
interface UserState {
    profile: User | null
}

export const initialState: UserState = {
    profile: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLogged: (state, { payload }: PayloadAction<UserLoggedPayload>) => {
            state.profile = payload.profile
        },
        resetUser: (state) => {
            state.profile = null
        },
        userGotAPet: (state) => {
            if (state.profile) {
                state.profile.hasPets = true
            }
        },
    },
})

const { actions, reducer } = userSlice

export const { userLogged, resetUser, userGotAPet } = actions

export default reducer
