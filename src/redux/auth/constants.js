export const initialStateConstant = {
    user: {
        email: null,
        name: null,
        gender: null,
        avatar: null,
        weight: null,
        sportsActivity: null,
        waterRate: null,
    },
    token: null,
    refreshToken: null,
    isLoggedIn: false,
    isRefreshing: false,
}

export const initialValuesSignIn = {
    email: '',
    password: '',
}
export const initialValuesSignUp = {
    name: '',
    email: '',
    password: '',
}