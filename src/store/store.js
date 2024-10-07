import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer.js";
import hospitalReducer from "./reducers/hospitalReducer.js";
import authReducer from "./reducers/authReducer.js";
import friendsReducer from "./reducers/friendsReducer.js";
import chatReducer from "./reducers/chatReducer.js";
import roomReducer from "./reducers/roomReducer.js";

const rootReducer = combineReducers({
  user:userReducer,
  hospital:hospitalReducer,
  auth: authReducer,
  friends:friendsReducer,
  chat: chatReducer,
  room: roomReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
