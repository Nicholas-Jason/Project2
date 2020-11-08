import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  CorrectAns: string[];
  GivenAns: string[];
  score: number = 0;
  message:string;
  constructor() { 
    this.GivenAns.length = 5;
    this.CorrectAns.push("yes");
    this.CorrectAns.push("False");
    this.CorrectAns.push("final");
    this.CorrectAns.push("yes");
    this.CorrectAns.push("True");
  }

  ngOnInit(): void {
  }

  tallyScore(userObj): string
  {
    this.GivenAns.push(userObj.Ans1);
    this.GivenAns.push(userObj.Ans2);
    this.GivenAns.push(userObj.Ans3);
    this.GivenAns.push(userObj.Ans4);
    this.GivenAns.push(userObj.Ans5);


    for(let ga of this.GivenAns)
    {
      let i = 0;
      if(ga == this.CorrectAns[i])
      {
        this.score = this.score + 1;
      }
      i++;
    }
    this.message = `The total score is ${this.score}`
    return this.message;
  }

  

  

}


