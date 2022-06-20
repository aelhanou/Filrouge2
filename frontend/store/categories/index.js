import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useFetch } from "../../hooks/usefetch";

const { get, post } = useFetch;

export const categories = createAsyncThunk(
    "Home/categories",
    async () => {
        let data = await get("categories");
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
    categories: [],
};

export const CategoriesSlice = createSlice({
    name: "categoriesPage",
    initialState,
    reducers: {
    },
    extraReducers: {
        [categories.fulfilled]: (state, { payload }) => {
            state.categories = payload
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
export default CategoriesSlice;