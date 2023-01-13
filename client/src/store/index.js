import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducer";

//composeWithDevTools nos permite visualizar nuestras acciones desde la pestaña redux
//De las herramientas de desarrolladores de chrome

//redux-thunk es una libreria y thunk es un middleWare que nos permite crear
//Acciones asincronas

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
