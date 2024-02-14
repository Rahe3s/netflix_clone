import React from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {Action,Originals,comedy,horror,romance,documentry} from './Urls'


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost title='Originals'  Url={Originals}  />
     <RowPost title='Action'  Url={Action} isSmall/>
     <RowPost title='Comedy'  Url={comedy} isSmall/>
     <RowPost title='Romance'  Url={romance} isSmall/>
     <RowPost title='Horror'  Url={horror} isSmall/>
     <RowPost title='Documentries'  Url={documentry} isSmall/>
    </div>
  );
}

export default App;
