import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

const initialState = {
  general: [
    {
      name: "brynn",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      MessageId: 1
    },
    {
      name: "brddfynn",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      MessageId: 2
    },
    {
      name: "brydfdfnn",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      MessageId: 3
    },
    {
      name: "brynn",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      MessageId: 4
    },
    {
      name: "brddfynn",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      MessageId: 5
    },
    {
      name: "brydfdfnn",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      MessageId: 6
    },
    {
      name: "brynn",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      MessageId: 7
    },
    {
      name: "brddfynn",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      MessageId: 8
    },
    {
      name: "brydfdfnn",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      MessageId: 9
    }
  ]
};

export default function getStore() {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

  return store;
}
