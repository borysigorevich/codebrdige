import { configureStore } from '@reduxjs/toolkit'
import { articleApi } from './articleService'

export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(articleApi.middleware),
})

export type RootType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
