import axios from "axios";
import fileDownload from "js-file-download";

import {
  TEMPLATE_DOWNLOADED,
  TEMPLATE_ERROR,
  ORG_DATA_FETCHED,
} from "./actionTypes";

export const getTemplate = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/v1/csv");
    fileDownload(res.data, "template.csv");
    dispatch({
      type: TEMPLATE_DOWNLOADED,
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const uploadTemplate = (file) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const formData = new FormData();
  formData.append("csv", file);
  try {
    const res = await axios.post("/api/v1/csv", formData, config);
    dispatch({
      type: ORG_DATA_FETCHED,
      payload: res.data.data,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};