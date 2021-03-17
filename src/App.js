import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardForms from './components/CardForms/CardForms';
import FormsNav from "./components/FormsNav/FormsNav";
import InfoForms from './components/InfoForms/InfoForms';
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Route} from "react-router-dom";
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
      <Layout>
       <FormsNav/>
       <Route
                exact
                path="/"
                render={() => <InfoForms />}
                activeStyle={{
                  color: "#101D94",
              }}
            />
            <Route
                path="/payment"
                render={() => <CardForms />}
                activeStyle={{
                  color: "#101D94",
              }}
            />
      </Layout>
    </div>
    </BrowserRouter>
  );
}

export default App;
