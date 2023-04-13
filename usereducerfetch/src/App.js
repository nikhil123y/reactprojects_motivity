import logo from './logo.svg';
import './App.css';
import DataFetching from './component/DataFetching';
import DataFetchingTwo from './component/DataFetchingTwo';
import Records from './record.json'

function App() {
  return (
    <div className="App">
     
     <DataFetching/>

     <DataFetchingTwo/>

     <div className='inner'>
      {
        Records && Records.map( record =>{

          return(
            <div className='box' key={record.id}>
              <img src={record.image}/>
              <br/>
              {
                record.caption
              }

            </div>
          )
        })
      }

     </div>

    </div>
  );
}

export default App;
