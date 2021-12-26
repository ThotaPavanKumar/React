// import logo from './logo.svg';
import './App.css';

function App() {
  const os = ["Android","Blackberry","iPhone","Windows Phone"];
  const style = {textAlign : "left"};
    return (
      <div className="App">
          <h1 style={style}>Mobile Operating System</h1>       
          {
            os.map((ele) => ( 
              <li style={style}>{ele}</li>           

            ))
          }
           <h1 style={style}>Mobile Manufacturers</h1> 
           <ToDo/>
      </div>
    );
  }

  function ToDo() {
    const manufacturers = ["Samsung","HTC","Micromax","Apple"];
    return (
      manufacturers.map((ele) => ( 
        <li style= {{textAlign : "left"}}>{ele} </li>    
      ))   
      )
  }

export default App;
