import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  steps: any;
  title = 'Altran-Assignment';

  ngOnInit() {
    const hurdleOrder = [ 'R','Y', 'R','Y', 'R', 'Y', 'R','Y', 'R'];
    this.steps =  this.minJumps(hurdleOrder.length, hurdleOrder);
  }

  /**
 * This method returns the minimum jumps required to reach
 * @param noOfHurdles: (integer) number of noOfHurdles
 * @param hurdleOrder: (Array<integers>) color order of hurdles, * subsequent hurdles cannot be of same color, 
 * so alternate R(red) and Y(yellow)
 * @returns stepsTaken: (integer) minimum number of jumps 
 */
  minJumps(noOfHurdles, hurdleOrder) {
    var stepsTaken = 0;
  // if noOfHurdles is 0 or -ve, return 0
      if(noOfHurdles<=0)
        return stepsTaken;
      //if starting index hurdle is Y, then no jumps else one jump 
    var currentStepIndex = (hurdleOrder[0] === 'Y') ? 0:1;
    stepsTaken = currentStepIndex;
    // iterating over hurdles, and incrementing currentStepIndex
    while(currentStepIndex < noOfHurdles) {
      currentStepIndex++;
      // if hurdle is Y, then step will be taken, since two 
      // subsequent hurdles cannot be of same color
      if(hurdleOrder[currentStepIndex] === 'Y')
        stepsTaken++;
      // if last hurdle is R, then one jump is required to reach 
      // Red hurdle(last one, end point)
      if(currentStepIndex === noOfHurdles-1 && hurdleOrder[currentStepIndex] === 'R')
        stepsTaken++;
    }
    return stepsTaken;
  }
}

