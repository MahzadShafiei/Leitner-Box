import React, {Fragment,useEffect, useState} from 'react';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import { Word } from '../models/word';

function App() {
const [words, setWords]= useState<Word[]>([]);

useEffect(()=>{
axios.get<Word[]>('http://localhost:5188/Word').then(response =>{
  setWords(response.data);
})
},[])

  return (
    <Fragment>
     <Header as='h2' icon='th list' content='Leitner Box'/>
           <List>
            {
              words.map(word =>(
                <List.Item key={word.id}>
                  {word.name}
                </List.Item>
              ))
            }
           </List>
    </Fragment>
  );
}

export default App;
