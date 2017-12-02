import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

const initialState = {
  general: [
    {
      name: "brynn",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      key: 1
    },
    {
      name: "brddfynn",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      key: 2
    },
    {
      name: "brydfdfnn",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      key: 3
    },
    {
      name: "brynn",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      key: 4
    },
    {
      name: "brddfynn",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      key: 5
    },
    {
      name: "brydfdfnn",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      key: 6
    },
    {
      name: "brynn",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      key: 7
    },
    {
      name: "brddfynn",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      key: 8
    },
    {
      name: "brydfdfnn",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      key: 9
    }
  ]
};

export default function getStore() {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

  return store;
}
