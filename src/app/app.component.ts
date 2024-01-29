import { Component } from '@angular/core';
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
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { Event, EventDetails } from './app.component.constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MatExpansionModule, CdkDropListGroup, CdkDropList, CdkDrag],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isCheckClicked = false;
  isCorrect = false;
  isRevealAnswer = false;
  events = EventDetails;

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

  clear() {
    this.isCheckClicked = false;
  }

  revealAnswer() {
    this.isRevealAnswer = !this.isRevealAnswer;
  }
}
