import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
// import App from './App'
// import Greet from "./Components/Greet";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import MainContent from "./Components/MainContent";
// import JSXRules from "./Components/JSXRules";
// import WelcomeMessage from "./Components/WelcomeMessage";
import { useState } from "react";
// import FormHandling from "./hooks/FormHandling";
// import ConditionalRendering from "./Components/ConditionalRendering";
// import ToggleTheme from "./hooks/ToggleTheme";
// import FetchData from "./hooks/FetchData";
// import ToggleVisibility from "./hooks/ToggleVisibility";
// import Addition from "./Components/Addition";
// import GreetUser from "./Components/GreetUser";

// useState Hooks
// import IncreaseCounter from "./hooks/IncreaseCounter";
// import StateManagement from "./hooks/StateManagement";
// import DomElement from "./hooks/Ref/DomElement";
// import IncrementCounter from "./hooks/Ref/IncrementCounter";
// import Parent from "./PropsDrilling/Parent";
// import ShoppingCart from "./Components/ShoppingCart";
// import ClickEvents from "./Events/ClickEvents";
// import ExpensiveUnit from "./hooks/useState/ExpensiveUnit";

// Fetch API's
// import FetchJoke from "./CallbackFunctions/FetchJoke";
// import FetchOnMount from "./CallbackFunctions/FetchOnMount";
// import FetchUser from "./CallbackFunctions/FetchUser";
// import FetchCatFacts from "./Fetch/FetchCatFacts";
// import FetchPublicPost from "./Fetch/FetchPublicPost";
// import BreakingBad from "./Fetch/BreakingBad";
// import FetchPokemon from "./Fetch/FetchPokemon";
// import FetchRandomDogImage from "./Fetch/FetchRandomDogImage";

// Callback functions
// import FetchApiData from "./CallbackFunctions/FetchApiData";
// import FetchData from "./hooks/useState/FetchData";
// import Parent from "./CallbackFunctions/Parent";
// import PassingData from "./CallbackFunctions/PassingData";
// import SetTimeout from "./CallbackFunctions/SetTimeout";

// Event Handling
// import FormSubmit from "./Events/FormSubmit";
// import InputChange from "./Events/InputChange";

// useContext Hook
// import ContextHook from "./hooks/Context/ContextHook";
import {
  ThemeContext,
  CounterContext,
  TextContext,
  NameContext,
  ThemeContext1,
  themeConfig,
  ValueContext,
} from "./hooks/Context/CreateContext";
// import LoginPage from "./hooks/Context/LoginPage";
// import PrivatePage from "./hooks/Context/PrivatePage";
// import { AuthContext1 } from "./hooks/Context/AuthContext1";
// import StateManagement1 from "./hooks/useState/StateManagement1";

// useEffect Hook
// import EffectHook from "./hooks/useEffect/EffectHook";
// import EffectHook1 from "./hooks/useEffect/EffectHook1";
// import EffectHook2 from "./hooks/useEffect/EffectHook2";

// Expressions in React
// import BasicExpressions from "./expressions/BasicExpressions";
// import ConditionalRendering from "./expressions/ConditionalRendering";
import Parent from "./expressions/Parent";
import Child from "./expressions/Child";

// const Card = (props) => {
//   const { title } = props;
//   return <div className="card-container">{title}</div>;
// };

const App = () => {
  // const [hasLiked, setHasLiked] = useState(false);
  // const user = { name: "Jithu", role: "Developer" };

  const child = { name: "Jithu", age: 23, role: "Software Engineer" };

  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);
  const [text, setText] = useState("null");
  const [name, setName] = useState("Jithu");
  const num = 6;

  // const { isAuthenticated } = useContext(AuthContext1);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <CounterContext.Provider value={{ count, setCount }}>
        <TextContext.Provider value={{ text, setText }}>
          <NameContext.Provider value={{ name, setName }}>
            <ThemeContext1.Provider value={themeConfig}>
              <ValueContext.Provider value={num}>
                <div className="container">
                  {/* <section>Hello, World</section> */}
                  {/* <Greet /> */}
                  {/* <Header /> */}
                  {/* <WelcomeMessage />
      <JSXRules /> */}
                  {/* <MainContent /> */}
                  {/* <Footer /> */}
                  {/* <input type="text" /> */}
                  {/* <h2>Functional Component</h2> */}
                  {/* <Card title="RRR" />
      <Card title="Acharya" />
      <Card title="Devara" /> */}
                  {/* 27/08/2025 */}
                  {/* <Addition /> */}
                  {/* 28/08/2025 */}
                  {/* <GreetUser name="Jithu" /> */}
                  {/* <IncreaseCounter /> */}
                  {/* <StateManagement /> */}
                  {/* <DomElement /> */}
                  {/* <IncrementCounter /> */}
                  {/* <ToggleVisibility /> */}
                  {/* <FetchData /> */}
                  {/* <FormHandling /> */}
                  {/* <ToggleTheme /> */}
                  {/* 29/08/2025 */}
                  {/* <ConditionalRendering /> */}
                  {/* <Parent user={user} /> */}
                  {/* <ShoppingCart /> */}
                  {/* <ClickEvents /> */}
                  {/* <InputChange /> */}
                  {/* <FormSubmit /> */}
                  {/* <Parent /> */}
                  {/* <PassingData /> */}
                  {/* <SetTimeout /> */}
                  {/* <FetchData /> */}
                  {/* <FetchApiData /> */}
                  {/* <FetchJoke /> */}
                  {/* <FetchOnMount /> */}
                  {/* <FetchUser /> */}
                  {/* <FetchRandomDogImage /> */}
                  {/* <FetchPokemon /> */}
                  {/* <BreakingBad /> */}
                  {/* <FetchPublicPost /> */}
                  {/* <FetchCatFacts /> */}
                  {/* 01/09/2025 */}
                  {/* <ContextHook /> */}
                  {/* <p onClick={() => setCount(count + 1)}>count is {count}</p> */}
                  {/* 02/09/2025 */}
                  {/* <h1>Hello</h1> */}
                  {/* 03/09/2025 */}
                  {/* {isAuthenticated() ? <PrivatePage /> : <LoginPage />} */}
                  {/* <PrivatePage /> */}
                  {/* 04/09/2025 */}
                  {/* <StateManagement1 /> */}
                  {/* <ExpensiveUnit /> */}
                  {/* <EffectHook /> */}
                  {/* 06/09/2025 */}
                  {/* <EffectHook1 /> */}
                  {/* <EffectHook2 /> */}

                  {/* COnditional Rendering */}

                  {/* <BasicExpressions /> */}
                  {/* <ConditionalRendering isLoggedIn={true} /> */}
                  {/* <Parent name="Jithu" /> */}
                  <Parent {...child} />
                  <Child child={child} />
                </div>
              </ValueContext.Provider>
            </ThemeContext1.Provider>
          </NameContext.Provider>
        </TextContext.Provider>
      </CounterContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
