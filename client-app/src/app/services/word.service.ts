import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { word } from "src/app/models/word"
import { HttpClient, HttpParams } from '@angular/common/http';
import { levelStatus } from '../enums/status';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(private http:HttpClient) { }

  getWordByLevel(level: levelStatus): Observable<word[]>
  {
  return this.http.get<word[]>('http://localhost:5188/Word/GetWordsByLevel/'+level);
  }
}
