import { Component, OnInit, Input } from '@angular/core';
import {levelStatus} from "src/app/enums/status"
import { word } from 'src/app/models/word';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-word-practice',
  templateUrl: './word-practice.component.html',
  styleUrls: ['./word-practice.component.css']
})
export class WordPracticeComponent implements OnInit {

  @Input()
  level: levelStatus=levelStatus.Level1;

  wordList: word[] | undefined;
  constructor(private wordService: WordService)
  {
  }

  ngOnInit(): void {
    this.wordService.getWordByLevel(this.level).subscribe({
      next: (wordList)=>
      {
        this.wordList=wordList;
        console.log(this.wordList);
      },
      error: (response)=>
      {
        console.log(response);
      }
    })
  }
}
