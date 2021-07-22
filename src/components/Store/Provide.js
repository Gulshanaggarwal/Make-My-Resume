import { useReducer, createContext } from "react";

export const DataContext = createContext();

 export const initialData = {
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
      awardIssuer: "",
      awardIssueDate: "",
    },
  ],
  project: [
    {
      projectName: "",
      projectDescription: "",
    },
  ],
};

function reusableReturnfunction() {
  return {
    details: JSON.parse(window.localStorage.getItem("makeMyResume")),
  };
}

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
      return reusableReturnfunction();

    case "handleEducation":
      window.localStorage.setItem(
        "makeMyResume",
        JSON.stringify({ ...state.details, education: action.payload })
      );
      return reusableReturnfunction();
    case "handleExperience":
      window.localStorage.setItem(
        "makeMyResume",
        JSON.stringify({ ...state.details, experience: action.payload })
      );
      return reusableReturnfunction();
    case "handleSkill":
      window.localStorage.setItem(
        "makeMyResume",
        JSON.stringify({ ...state.details, skill: action.payload })
      );
      return reusableReturnfunction();
    case "handleAward":
      window.localStorage.setItem(
        "makeMyResume",
        JSON.stringify({ ...state.details, award: action.payload })
      );
      return reusableReturnfunction();
    case "handleProject":
      window.localStorage.setItem(
        "makeMyResume",
        JSON.stringify({ ...state.details, project: action.payload })
      );
      return reusableReturnfunction();

    case "handleCreate":
      window.localStorage.setItem("makeMyResume", JSON.stringify(action.payload));
      return reusableReturnfunction();
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
