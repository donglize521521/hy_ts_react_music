import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners, getHotRecommend, getNewAlbum } from '../service/recommend'

export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (arg, { dispatch }) => {
    const res = await getBanners()
    dispatch(changeBannersAction(res.banners))
    // console.log(res)
    // return res.banners
  }
)

export const fetchHotRecommendAction = createAsyncThunk(
  'hotRecommend',
  async (arg, { dispatch }) => {
    const res = await getHotRecommend(8)
    dispatch(changeRecommendsAction(res.result))
    // console.log(res)
    // return res.banners
  }
)

export const fetchNewAlbumAction = createAsyncThunk(
  'newAlbums',
  async (arg, { dispatch }) => {
    const res = await getNewAlbum()
    dispatch(changeNewAlbumsAction(res))
    console.log(res)
    // return res.banners
  }
)

interface IRecommendState {
  banners: any[]
  hotRecommends: any[]
  newAlbums: any[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeRecommendsAction(state, { payload }) {
      state.hotRecommends = payload
    },
    changeNewAlbumsAction(state, { payload }) {
      console.log(payload)
      state.newAlbums = payload
    }
  }
  // 方式一：
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchBannerDataAction.pending, () => {
  //       console.log('pending')
  //     })
  //     .addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
  //       state.banners = payload
  //       console.log('pending')
  //     })
  //     .addCase(fetchBannerDataAction.rejected, () => {
  //       console.log('rejected')
  //     })
  // }
})

export const {
  changeBannersAction,
  changeRecommendsAction,
  changeNewAlbumsAction
} = recommendSlice.actions
export default recommendSlice.reducer
