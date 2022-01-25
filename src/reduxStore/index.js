import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import userReducer from "./user";
import themeReducer from "./theme";
import isLoginReducer from "./isLogin";

const rootReducer = combineReducers({
  isLogin: isLoginReducer,
  user: userReducer,
  theme: themeReducer
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
export const persistor = persistStore(store);
export default store;
