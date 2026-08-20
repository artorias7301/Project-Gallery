import { useAppDispatch, useAppSelectore } from "../../store/hooks";
import { setLanguage } from "../../store/languageSlice";

export function Setting() {
  const language = useAppSelectore((state) => state.language.language);
  const dispatch = useAppDispatch();
  return (
    <>
      <h1>{language}</h1>
      <button onClick={() => dispatch(setLanguage("en"))}>English</button>
      <button onClick={() => dispatch(setLanguage("fa"))}>فارسی</button>
    </>
  );
};