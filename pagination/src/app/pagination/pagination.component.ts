import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  currentPage: number = 1;
  totalPages: number = 11;
  pageSize: number = 10;
  totalCount: number = 108;

  firstSquareList: number[] = [];
  middleSquareList: number[] = [];
  lastSquareList: number[] = [];

  leftDots = true;
  rightDots = false;

  // how many squares on start and end before it starts to include middle squares
  startEndCount = 4;

  constructor() { }


  ngOnInit(): void {
    this.onSquareClick(1);
  }

  onSquareClick(squareNumber: number) {
    this.currentPage = squareNumber;
    this.firstSquareList = [];
    this.middleSquareList = [];
    this.lastSquareList = [];

    const isAtStart = squareNumber < this.startEndCount;
    const isAtEnd = squareNumber > this.totalCount-(this.startEndCount-1);
    const isInMiddle = !isAtStart && !isAtEnd;

    // if current page is less than startCount show first squares
    if (isAtStart) {
      this.leftDots = true;
      this.rightDots = false;
      let i = 1;
      while (i < this.startEndCount+1) {
        this.firstSquareList.push(i);
        i++;
      } 
    } else {
        this.firstSquareList = [1];
    }

    // if current page is at the end show last squares
    if(isAtEnd) {
      this.leftDots = true;
      this.rightDots = false;
      let i = this.totalCount-(this.startEndCount-1);
      while (i <= this.totalCount) {
        this.lastSquareList.push(i);
        i++;
      } 
    } else {
      this.lastSquareList = [this.totalCount];
    }

    // if current page is in the middle: show first, last and 3 of middle squares
    if (isInMiddle) {
      this.leftDots = true;
      this.rightDots = true;
      this.middleSquareList = [squareNumber-1, squareNumber, squareNumber+1];
    }

  }




}
