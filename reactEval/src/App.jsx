
import './App.css';
import {FormData} from "./components/Form";
import {Information} from "./components/RecipeInformation";
import {Lists} from "./components/RecipeLists";

function App() {
  return (
    <div className="App">
      <h2>Recipe Tracking Application</h2>
        <FormData />
        <Lists />
        <Information />
    </div>
  );
}

export default App;
