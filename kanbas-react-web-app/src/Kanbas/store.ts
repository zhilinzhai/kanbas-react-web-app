import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import assignmentsReducer from "./Courses/Assignment/reducer";
import accountReducer from "./Account/reducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
    accountReducer
    
  },
});
export default store;