import {
    CREATE_COLUMN,
    RETRIEVE_COLUMNS,
    UPDATE_COLUMN,
    DELETE_COLUMN,
    DELETE_ALL_COLUMNS
  } from "./types";

  import ColumnDataService from "../services/column.service";

  export const createColumn = (title, description) => async (dispatch) => {
    try {
      const res = await ColumnDataService.create({ title, description });
  
      dispatch({
        type: CREATE_COLUMN,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const retrieveColumns = () => async (dispatch) => {
    try {
      const res = await ColumnDataService.getAll();
  
      dispatch({
        type: RETRIEVE_COLUMNS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const updateColumn = (id, data) => async (dispatch) => {
    try {
      const res = await ColumnDataService.update(id, data);
  
      dispatch({
        type: UPDATE_COLUMN,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const deleteColumn = (id) => async (dispatch) => {
    try {
      await ColumnDataService.delete(id);
  
      dispatch({
        type: DELETE_COLUMN,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const deleteAllColumns = () => async (dispatch) => {
    try {
      const res = await ColumnDataService.deleteAll();
  
      dispatch({
        type: DELETE_ALL_COLUMNS,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const findColumnsByTitle = (title) => async (dispatch) => {
    try {
      const res = await ColumnDataService.findByTitle(title);
  
      dispatch({
        type: RETRIEVE_COLUMNS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  