import { getMarkCards, postMarkCard } from "../services/apiServices";
import MarkCard from "../models/markCardModel";
import { startLoading, stopLoading } from "./loadingActions";

export const GET_MARK_CARD_SUCCESS = "GET_MARK_CARD_SUCCESS";
export const GET_MARK_CARD_FAILURE = "GET_MARK_CARD_FAILURE";

export function getMarkCardSuccess(markCards = []) {
  return {
    type: GET_MARK_CARD_SUCCESS,
    payload: markCards
  };
}

export function getMarkCardFailed(msg = null) {
  return {
    type: GET_MARK_CARD_FAILURE,
    payload: msg
  };
}

export function postMarkCardToApi(messageData) {
  return dispatch => {
    dispatch(startLoading());
    postMarkCard(messageData)
      .then(data => {
        dispatch(
          getMarkCardsFromApi({
            longitude: messageData.longitude,
            latitude: messageData.latitude
          })
        );
      })
      .catch(err => console.log(err));
  };
}

export function getMarkCardsFromApi(locationData) {
  return dispatch => {
    dispatch(startLoading());
    getMarkCards(locationData)
      .then(data => {
        dispatch(stopLoading());
        return data;
      })
      .then(data => {
        const markCards = data.message.map(markCard => MarkCard(markCard));
        dispatch(getMarkCardSuccess(markCards));
        console.log(data);
        console.log(markCards);
      })
      .catch(err => {
        dispatch(stopLoading());
        dispatch(getMarkCardFailed(markCards));
        console.log(err);
      });
  };
}
