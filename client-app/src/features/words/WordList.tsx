import React, { useEffect, useState } from "react";
import { List } from "semantic-ui-react";
import axios from 'axios';
import { Word } from "../../app/models/word";


export default function WordList() {
  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    axios.get<Word[]>('http://localhost:5188/Word').then(response => {
      setWords(response.data);
    })
  }, [])

  return (
    <List>
      {
        words.map(word => (
          <List.Item key={word.id}>
            {word.name}
          </List.Item>
        ))
      }
    </List>
  )
}