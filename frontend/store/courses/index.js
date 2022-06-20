import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useFetch } from "../../hooks/usefetch";

const { get, post } = useFetch;

export const courses = createAsyncThunk(
    "Home/courses",
    async () => {
        let data = await get("courses");
        return data
    }
);

// export const AddEpisode = createAsyncThunk(
//     "courses/Addcourse",
//     async (body) => {
//         let res = await post("yo", body);
//         return await res.json();
//     }
// );

const initialState = {
    courses: [],
};

export const CourseSlice = createSlice({
    name: "coursesPage",
    initialState,
    reducers: {
    },
    extraReducers: {
        [courses.fulfilled]: (state, { payload }) => {
            state.courses = payload;
        }
        // [getUser.fulfilled]: (state, { payload }) => {
        //   state.user = payload;
        // },
        // [Add.fulfilled]: (state, { payload }) => {
        //     // state.category.push(payload);
        // },
    },
});

// export const { setEpisode } = AddPageSlice.actions;
export default CourseSlice;