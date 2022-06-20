import { configureStore } from '@reduxjs/toolkit'
import { AddPageSlice } from "./addPage"
import { CourseSlice } from "./courses"
import { CategoriesSlice } from "./categories"

export const store = configureStore({
    reducer: {
        addstate: AddPageSlice.reducer,
        course: CourseSlice.reducer,
        category: CategoriesSlice.reducer,
    }
})
