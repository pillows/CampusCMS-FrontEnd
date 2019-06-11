/**
 * Action types
 */

const GET_CAMPUSES = "GET_CAMPUSES";
const SET_CAMPUSES = "SET_CAMPUSES";

const campusList = ["Hunter", "Baruch", "Queens"];
//students: ["Marjan", "Bob", "Barry"],
//campuses: ["Hunter", "Baruch", "Queens"]

// const axios = require("axios");
// const Cookies = require("js-cookie");

/**
 * Action Creators
 */

export const getCampuses = campuses => ({ type: GET_CAMPUSES, campuses });
export const setCampuses = campuses => ({ type: SET_CAMPUSES, campuses });

/**
 * Reducer
 */
export default function(state = campusList, action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;
    case SET_CAMPUSES:
      return Object.assign({}, state, {
        campuses: action.campuses
      });
    default:
      return state;
  }
}
