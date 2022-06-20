import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useFetch } from "../../hooks/usefetch";

const { get, post } = useFetch;

// export const getUser = createAsyncThunk(
//   "Dashboard/getUser",
//   async (id) => {
//     let data = await get(`getUserById/${id}`);
//     return data
//   }
// );

export const AddEpisode = createAsyncThunk(
    "addPage/AddEpisode",
    async (body) => {
        let res = await post("yo", body);
        return await res.json();
    }
);

const initialState = {
    Episode: { name: "", img: {} },
};

export const AddPageSlice = createSlice({
    name: "AddPage",
    initialState,
    reducers: {
        setEpisode: (state, { payload }) => {
            if (payload?.name) {
                state.Episode.name = payload?.name
            }
            if (payload?.img) {
                console.log(payload?.img);
                state.Episode.img = payload?.img
            }
        }
    },
    extraReducers: {
        // [getUser.fulfilled]: (state, { payload }) => {
        //   state.user = payload;
        // },
        // [Add.fulfilled]: (state, { payload }) => {
        //     // state.category.push(payload);
        // },
    },
});

export const { setEpisode } = AddPageSlice.actions;
export default AddPageSlice;