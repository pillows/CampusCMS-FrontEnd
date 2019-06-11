/**
 * Action types
 */

const GET_STUDENTS = "GET_STUDENTS";
const SET_STUDENTS = "SET_STUDENTS";
const GET_CAMPUSES = "GET_CAMPUSES";
const SET_CAMPUSES = "SET_CAMPUSES";


const initialStudents = {
  "students" : ["Marjan", "Bob", "Barry"],
  "campuses": ["Hunter", "Baruch", "Queens" ]
};

// export const students = ["Marjan", "Bob", "Barry"];

const axios = require("axios");
const Cookies = require("js-cookie");

/**
 * Action Creators
 */
export const getStudents = students => ({ type: GET_STUDENTS, students });
export const setStudents = students => ({ type: SET_STUDENTS, students });
export const getCampuses = campuses => ({ type: GET_CAMPUSES, campuses });
export const setCampuses = campuses => ({ type: SET_CAMPUSES, campuses });

/**
 * Reducer
 */
export default function(state = initialStudents, action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;
    case SET_STUDENTS:
      return Object.assign({}, state, {
        students: action.students
      });
      case GET_CAMPUSES:
        return action.campuses;
      case SET_STUDENTS:
        return Object.assign({}, state, {
          students: action.campuses
        });
    default:
      return state;
  }
}
