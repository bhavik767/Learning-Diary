import {
    CREATE_COLUMN,
    RETRIEVE_COLUMNS,
    UPDATE_COLUMN,
    DELETE_COLUMN,
    DELETE_ALL_COLUMNS
  } from "../actions/types";

  const initialState = [];

  function columnReducer(columns = initialState, action) {
      const {type,payload} = action;
    switch(type){
        case CREATE_COLUMN:
            return[...columns,payload];

        case RETRIEVE_COLUMNS:
        return payload;

        case UPDATE_COLUMN:
            return columns.map((column) => {
                if(column.id === payload.id){
                    return{
                        ...column,
                        ...payload
                    };
                }else{
                    return column;
                }
                });

        case DELETE_COLUMN:
            return columns.filter(({ id }) => id !== payload.id);
            
        case DELETE_ALL_COLUMNS:
            return [];

        default:
            return columns;
            }
    };

export default columnReducer;
  