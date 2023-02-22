import create from 'zustand'

const userContainer = create( ( set ) => ({
    isAuthorized : {token:""},

    addAuthorization: (key) =>
        set((state) => ({
            isAuthorized: {...state.token, isAuthorized:key.token}
        })),
    removeAuthorization: () =>
        set((state) => ({
            isAuthorized: {...state.token, isAuthorized:""}
        }))

}))

export default userContainer