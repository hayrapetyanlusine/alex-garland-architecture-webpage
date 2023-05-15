import { useReducer } from "react";
import { initialState } from "./state/state";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/homepage/Homepage";
import { Workpage } from "./pages/workpage/Workpage";
import { Layout } from "./components/Layout";
import { Studiopage } from "./pages/studiopage/Studiopage";
import { Teampage } from "./pages/teampage/Teampage";
import { Careerspage } from "./pages/careerspage/Careerspage";
import { Contactpage } from "./pages/contactpage/Contactpage";

const reducer = (todos, action) => {
  // if (action.type === "ADD") {
  // } 
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage homeState={state["home"]} />} />
          <Route path="studio" element={<Studiopage studioState={state["studio"]} />} />
          <Route path="work" element={<Workpage workState={state["work"]} />} />
          <Route path="team" element={<Teampage teamState={state["team"]} />} />
          <Route path="careers" element={<Careerspage careersState={state["careers"]} />} />
          <Route path="contact" element={<Contactpage contactState={state["contact"]} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
