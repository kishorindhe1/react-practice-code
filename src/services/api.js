import axios from "axios";
export const addStudent = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post("http://127.0.0.1:4000/admin/addstudent", payload)
      .then((result) => {
        return resolve(result.data);
      })
      .catch((err) => {
        return reject(err);
      });
  });
};

export const getStydentsApi = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://127.0.0.1:4000/admin/getstudents?" + payload)
      .then((success) => {
        return resolve(success.data);
      })
      .catch((err) => {
        return reject(err);
      });
  });
};

export const deleteStudentByIdApi = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(process.env.REACT_API_ADDRESS + "deletestudentid", payload)
      .then((result) => {
        return resolve(result.data);
      })
      .catch((err) => {
        return reject(err);
      });
  });
};
