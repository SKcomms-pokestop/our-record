import { produce } from 'immer'

type InitialState = {
    user: {
        email: string | null
    }
}

export const initialState: InitialState = {
    user: {
        email: '{email}'
    }
}

export const USERINFO_REQUEST = 'USERINFO_REQUEST' as const
export const USERINFO_SUCCESS = 'USERINFO_SUCCESS' as const
export const USERINFO_FAILURE = 'USERINFO_FAILURE' as const

type Action = typeof USERINFO_REQUEST | typeof USERINFO_SUCCESS | typeof USERINFO_FAILURE

export default (state = initialState, action: { type: Action, payload?: any }) => {
    return produce(state, (draft => {
        switch (action.type) {
            case USERINFO_REQUEST: {
                break
            }
            case USERINFO_SUCCESS: {
                draft.user.email = action.payload.email
                break
            }
            case USERINFO_FAILURE: {
                break
            }
        }
    }))
}