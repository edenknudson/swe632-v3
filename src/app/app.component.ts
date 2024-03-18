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

export interface DialogData {
  isCorrect: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MatExpansionModule, CdkDropListGroup, CdkDropList, CdkDrag, MatButtonModule, ScrollingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isCheckClicked = false;
  isCorrect = false;
  isRevealAnswer = false;
  events = EventDetails;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.shuffleEvents();
  }

  newGame() {
    this.isCheckClicked = false;
    this.isCorrect = false;
    this.isRevealAnswer = false;
    this.shuffleEvents();
  }

  shuffleEvents() {
    const shuffled = EventDetails.sort(() => 0.5 - Math.random())
    this.events = shuffled.slice(0, 4);
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

  revealAnswer() {
    this.isRevealAnswer = !this.isRevealAnswer;
  }

  submit() {
    this.checkTimeline();
    this.dialog.open(DialogComponent, {
          data: {
            isCorrect: this.isCorrect,
          },
        });
    if (this.isCorrect) {
      this.revealAnswer();
    }
  }
}

@Component({
  selector: 'dialog',
  templateUrl: 'dialog.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, CommonModule],
})
export class DialogComponent {
  isCorrect: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.isCorrect = data.isCorrect;
  }
}
