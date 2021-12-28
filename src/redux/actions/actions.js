import { message } from "antd";
import { toast } from "react-toastify";
import {
  addStudent,
  deleteStudentByIdApi,
  getStydentsApi,
} from "../../services/api";
import {
  GET_CHART_DATA,
  GET_STUDENTS,
  GET_STUDENTS_TABLE_LOADER,
} from "../types";

// export const getChart = () => async (dispatch, getState) => {
//   getCharInfo()
//     .then((result) => {
//       dispatch({ type: "GET_CHART_DATA", payload: result.data });
//       localStorage.setItem(
//         "chart",
//         JSON.stringify(getState().chartReducer.chart)
//       );
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

export const AddStudentAction = (payload) => async (dispatch) => {
  addStudent(payload)
    .then((success) => {
      console.log(success);
      toast.success(success.message);
    })
    .catch((err) => {
      toast.error(err.message);
    });
};

export const getstudentsAction = (payload) => async (dispatch, getState) => {
  dispatch({ type: GET_STUDENTS_TABLE_LOADER, payload: { loader: true } });

  getStydentsApi(payload)
    .then((result) => {
      dispatch({ type: GET_STUDENTS, payload: result.result });
      dispatch({ type: GET_STUDENTS_TABLE_LOADER, payload: { loader: false } });

      localStorage.setItem(
        "students",
        JSON.stringify(getState().studentReducer.students)
      );
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: GET_STUDENTS_TABLE_LOADER, payload: { loader: false } });
    });
};

export const deleteStudentByIdAction = (payload) => async (dispatch) => {
  deleteStudentByIdApi(payload)
    .then((success) => {
      console.log(success);
      dispatch(getstudentsAction());
      toast.success(success.message);
    })
    .catch((err) => {
      toast.error(err.message);
    });
};
