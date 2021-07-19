import { useReducer, createContext } from "react";

export const DataContext = createContext();

let initialData = {
  personal: {
    fullName: "",
    email: "",
    phone: "",
    address: "",
    linkedinUrl: "",
  },
  education: [
    {
      schoolName: "",
      schoolCity: "",
      degree: "",
      major: "",
      sessionStart: "",
      sessionEnd: "",
    },
  ],
  experience: [
    {
      companyName: "",
      jobTitle: "",
      jobLocation: "",
      startDate: "",
      endDate: "",
      jobResponsibility: "",
    },
  ],
  skill: [
    {
      skillName: "",
    },
  ],
  award: [
    {
      awardName: "",
      awardDescription: "",
      awardIssuer:"",
      awardIssueDate: "",
    },
  ],
  project:[
    {
      projectName:"",
      projectDescription:""

    }
  ]
};

let getLocalData = JSON.parse(window.localStorage.getItem("makeMyResume"));

let finalLocalData = getLocalData !== null ? getLocalData : initialData;

let initialState = {
  details: finalLocalData,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "handlePersonal":
      window.localStorage.setItem(
        "makeMyResume",
        JSON.stringify({ ...state.details, personal: action.payload })
      );
      return {
        details: JSON.parse(window.localStorage.getItem("makeMyResume")),
      };
     
    case "handleEducation":
      window.localStorage.setItem(
        "makeMyResume",
        JSON.stringify({ ...state.details, education: action.payload })
      );
      return {
        details: JSON.parse(window.localStorage.getItem("makeMyResume")),
      };
    case "handleExperience":
      window.localStorage.setItem(
        "makeMyResume",
        JSON.stringify({ ...state.details, experience: action.payload })
      );
      return {
        details: JSON.parse(window.localStorage.getItem("makeMyResume")),
      };
    case "handleSkill":
      window.localStorage.setItem(
        "makeMyResume",
        JSON.stringify({ ...state.details, skill: action.payload })
      );
      return {
        details: JSON.parse(window.localStorage.getItem("makeMyResume")),
      };
    case "handleAward":
      window.localStorage.setItem(
        "makeMyResume",
        JSON.stringify({ ...state.details, award: action.payload })
      );
      return {
        details: JSON.parse(window.localStorage.getItem("makeMyResume")),
      };
      case "handleProject":
      window.localStorage.setItem(
        "makeMyResume",
        JSON.stringify({ ...state.details, project: action.payload })
      );
      return {
        details: JSON.parse(window.localStorage.getItem("makeMyResume")),
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
