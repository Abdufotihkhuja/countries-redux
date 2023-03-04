import { themeReducer } from "./theme/themeReducer";
import { countryReducer } from "./countries/countriesReducer";
import { controlsReducer } from "./controls/controlsReducer";
import { detailsReducer } from "./details/detailsReducer";

const { combineReducers } = require("redux");

export const rootReducer = combineReducers({
    theme: themeReducer,
    countries: countryReducer,
    controls: controlsReducer,
    details: detailsReducer,
});
