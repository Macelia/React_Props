
import './App.css';
import About from './About'
import ParentComponent from "./Component/ParentComponent";
import ParentComponent2 from './Component2/ParentComponent2';

function App() {
  return (
    <div className="App">
      <h1>hello!!</h1>
      

      <About name={"MACELIA"} age={3} message={"Merci d'avoir visiter notre site web"}/>
      <h1>React Props Exercise N°:1</h1>
       <ParentComponent/>
       <h1>React Props Exercise N°:2</h1>
       <ParentComponent2/>
    </div>
  );
}

export default App;
