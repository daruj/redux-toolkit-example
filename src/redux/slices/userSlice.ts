import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from '../rootReducer'
import { User } from '../../data/User'
import { createSelector } from 'reselect'
import { fetchUser } from '../../api/api'

/* PayloadAction Types */
interface UserLoggedPayload {
    profile: User
    token: string
}

/* Reducer State */
interface UserState {
    profile: User | null
    token: string | null
}

export const initialState: UserState = {
    profile: null,
    token: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLogged: (state, { payload }: PayloadAction<UserLoggedPayload>) => {
            state.profile = payload.profile
            state.token = payload.token
        },
        resetUser: (state) => {
            state.profile = null
            state.token = null
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

// Selectors

const getUserSlice = (store: RootState) => store.user
export const getUserProfile = createSelector(getUserSlice, (user) => user.profile)
export const isUserLogged = createSelector(getUserSlice, (user) => !!user.token)

// Thunks
export const login = () => async (dispatch: Dispatch) => {
    try {
        const user = await fetchUser()
        dispatch(userLogged({ profile: user, token: '1234' }))
        dispatch(userGotAPet())
    } catch (err) {
        console.error('There was an error')
    }
}

export const logout = () => (dispatch: Dispatch) => {
    dispatch(resetUser())
}
