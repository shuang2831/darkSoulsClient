import { combineReducers } from "redux";

import GeneralReducer from "./generalReducer";
import LoadingReducer from "./loadingReducer";

export default combineReducers({
  general: GeneralReducer,
  loading: LoadingReducer
});
