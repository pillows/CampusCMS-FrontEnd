/**
 * Action types
 */

const GET_STUDENTS = "GET_STUDENTS";
const SET_STUDENTS = "SET_STUDENTS";

const studentList = [];

//students: ["Marjan", "Bob", "Barry"],
//campuses: ["Hunter", "Baruch", "Queens"]

// const axios = require("axios");
// const Cookies = require("js-cookie");

/**
 * Action Creators
 */
export const getStudents = students => ({ type: GET_STUDENTS, students });
export const setStudents = students => ({ type: SET_STUDENTS, students });

/**
 * Reducer
 */
export default function(state = studentList, action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;
    case SET_STUDENTS:
      return Object.assign({}, state, {
        students: action.students
      });
    default:
      return state;
  }
}
