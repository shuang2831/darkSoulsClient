import {
  GET_MARK_CARD_SUCCESS,
  GET_MARK_CARD_FAILURE
} from "../actions/generalActions";

const initialState = [
  {
    markCards: [
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
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MARK_CARD_SUCCESS:
      return action.payload;
    case GET_MARK_CARD_FAILURE:
      return [];
    default:
      return state;
  }
};
