//REDUX ==> LO QUE HACE ES PONERNOS A DISPOSICION UN PAQUETE DE INFO QUE ES EL ESTADO GLOBAL(UN OBJETO), EL CUAL VAN A PODER ACCEDER TODOS LOS DEMAS COMPONENTES (QUE LO NECESITEN ESA INFO), DISPONIBLE PARA CUALQUIER PARTE DE LA APP

//EL REDUCER ES EL UNICO QUE PUEDE CAMBIAR EL ESTADO GLOBAL, PARA ELLO HAY QUE DARLE LA ORDEN DE QUE HAGA X COSA, MEDIANTE UNA ACTION


import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;