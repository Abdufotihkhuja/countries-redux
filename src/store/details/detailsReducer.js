import {
    CLEAR_DETAILS,
    SET_COUNTRY,
    SET_ERROR,
    SET_LOADING,
    SET_NEIGHBORS,
} from "./detailsActions";

const initialState = {
    currentCountry: null,
    status: "idle",
    error: null,
    neighbors: [],
};

export const detailsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                error: null,
                status: "loading",
            };
        case SET_ERROR:
            return {
                ...state,
                error: payload,
                status: "rejected",
            };
        case SET_COUNTRY:
            return {
                currentCountry: payload,
                error: null,
                status: "received",
            };
        case CLEAR_DETAILS:
            return initialState;
        case SET_NEIGHBORS:
            return {
                ...state,
                neighbors: payload,
            };
        default:
            return state;
    }
};
