import { Component, OnInit, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { Event, EventDetails } from './app.component.constants';
import { MatIconModule } from '@angular/material/icon';

export interface DialogData {
  isCorrect: boolean;
  lives: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MatExpansionModule, CdkDropListGroup, CdkDropList, CdkDrag, MatButtonModule, ScrollingModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isCheckClicked = false;
  isCorrect = false;
  isRevealAnswer = false;
  events = EventDetails;
  lives = 4;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.shuffleEvents();
  }

  newGame() {
    this.isCheckClicked = false;
    this.isCorrect = false;
    this.isRevealAnswer = false;
    this.lives = 4;
    this.shuffleEvents();
  }

  shuffleEvents() {
    const shuffled = EventDetails.sort(() => 0.5 - Math.random())
    this.events = shuffled.slice(0, 4);
    let indexValue = 0;
    this.events.forEach(event => {event.index = indexValue++});
  }

  moveEvent(event: Event, isUp: boolean) {
    let index = this.events.findIndex((x) => x === event);
    if (!isUp && index < 3 || isUp && index > 0) {
      let newIndex;
      if (isUp) {
        newIndex = index - 1;
      } else {
        newIndex = index + 1
      }
      const temp = this.events[index];
      this.events[index] = this.events[newIndex];
      this.events[newIndex] = temp;
    }
  }

  drop(event: CdkDragDrop<Event[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  checkTimeline() {
    this.isCheckClicked = true;
    this.isCorrect = true;
    let date = Number.MIN_SAFE_INTEGER;
    for (let element of this.events) {
      const elementDate = element.dateEnding == 'AD' ? element.date : element.date*-1;
      if (date > elementDate) {
        this.isCorrect = false;
        break;
      }
      date = elementDate;
    }
  }

  giveUp() {
    this.lives = 0;
    this.isCorrect = true;
    this.events.sort(compareDate);
    this.revealAnswer();
  }

  revealAnswer() {
    this.isRevealAnswer = !this.isRevealAnswer;
  }

  submit() {
    this.checkTimeline();
    this.dialog.open(DialogComponent, {
          data: {
            isCorrect: this.isCorrect,
            lives: this.lives - 1
          },
        });
    if (this.isCorrect) {
      this.revealAnswer();
    } else {
      this.lives--;
      if (this.lives == 0) {
        this.giveUp();
      }
    }
  }
}

@Component({
  selector: 'dialog',
  templateUrl: 'dialog.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, CommonModule, MatIconModule],
})
export class DialogComponent {
  isCorrect: boolean;
  lives: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.isCorrect = data.isCorrect;
    this.lives = data.lives;
  }
}

function compareDate(a: Event, b: Event) {
  const aDate = a.dateEnding == 'AD' ? a.date : a.date*-1;
  const bDate = b.dateEnding == 'AD' ? b.date : b.date*-1;
  if (aDate < bDate){
    return -1;
  }
  if (aDate > bDate){
    return 1;
  }
  return 0;
}
