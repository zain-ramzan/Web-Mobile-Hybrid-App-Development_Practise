import './App.css';

function App() {
  let todos = [{name:"Zain"},{name:"Saad"}]
  return (
    <div>
      <h1>React Practise</h1>
    	<h4>-----------------------------------------------------</h4>
    	<h4>Learn Maping</h4>
      <ul>
        {todos.map((item,index)=>{
          return(
            <li key={index}>{item.name}</li>
          )
        })}
      </ul>



    </div>
  );
}

export default App;
