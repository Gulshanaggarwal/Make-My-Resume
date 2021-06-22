
import { useReducer,createContext } from "react";

export const DataContext = createContext();
const initialState = {
  details: {
    personal:[],
    education:[],
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "type_personal":
      return {
        details:[],
      };
      case "type_education":
        return{
          details
        }
      default:
          throw new Error();
  }
};

function ProviderComp(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DataContext.Provider value={[state, dispatch]}>
      {props.children}
    </DataContext.Provider>
  );
}
export default ProviderComp;
