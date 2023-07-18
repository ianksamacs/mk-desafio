import Header from "./components/header";
import GlobalStyle from "./styles/global";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import { I18nextProvider } from "react-i18next";

const App = () => {

  return (
    <div className="App">
        <GlobalStyle />
        <Header />    
        <Sidebar />
        <Main />
    </div>
  );
}

export default App
