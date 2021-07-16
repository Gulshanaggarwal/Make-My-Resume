import { useReducer, createContext } from "react";

export const DataContext = createContext();




let initialState = {
  details:{
    personal: {
      fullname: "",
      email: "",
      phone: "",
      address: "",
      personal_website: "",
      linkedin_url: "",
    },
    education: [
      {
        school_name: "",
        school_city: "",
        degree: "",
        major: "",
        gpa: "",
        session_start: "",
        session_end: "",
      },
    ],
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "handleChange":
      return {
        details: {
          personal: action.payload,
          education: state.details.education,
        },
      };
    case "handlleEducation":
      return {
        details: {
          personal: state.details.personal,
          education: action.payload,
        },
      };
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
