import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Language = "fa" | "en";
interface LanguageState {language: Language};

const initialState: LanguageState = {
  language: "fa",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload
    }
  }
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;

