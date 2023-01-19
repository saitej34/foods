import './App.css';
import Products from './Products';
import React,{useState} from 'react'
function App() {
  const [rec,setrec]=useState('')
  const [datas,setdata] = useState([]);
  const lis = "https://api.edamam.com/search?q="+rec+"&app_id=367a804f&app_key=3eeab0c34443dc07025218242c47d96b&from=0&to=20&calories=591-722&health=alcohol-free"
  const sub = (e)=>{
    e.preventDefault();
    console.log(rec);
    fetch(lis).then(
      response => response.json()
    )
    .then(
      response=>setdata(response.hits)
    )
  }
  return (
    <div className="App">
        <h1>Food Receipe</h1>
        <hr/><br/>
        <center> 
          <form onSubmit={sub}>
            <input type="text" placeholder="Enter the Receipe" onChange={(e)=>{setrec(e.target.value)}}/><br/><br/>
            <input type="submit" value="Fetch" className="btn btn-primary"/> 
          </form>
          <br/><br />
          {datas.length>=1 ? <Products data={datas}/> : null}
        </center>
    </div>
  );
}

export default App;
