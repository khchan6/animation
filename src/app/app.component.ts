import { Component, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition, AnimationEvent } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0})),
      transition('void => *', [animate("2s 0.5s ease-in")]),
      transition('* => void', [animate("2s 0.5s ease-in")]),
    ]),

    trigger('rotated', [
      state('void', style({ transform: 'rotate(-180deg)' })),
      // state('rotated', style({ transform: 'rotate(-180deg)' })),
      transition('void => *', [animate('2.5s ease-in')])]),

    trigger('flyout', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
         style({ transform: 'translateX(-10%)' }),
          animate('2s')
        ]),
        transition('* => void', [
          animate('2s', style({ transform: 'translateX(60%)' }))
        ])
      ]),

      trigger('banner', [
        state('in', style({ left: '0%' })),
        transition('void => *', [
           style({ left: '100%' }),
            animate('1s ease-in')
          ]),
          transition('* => void', [
            animate('1s ease-in', style({ left: '-100%' }))
          ])
        ])   
  ]
})
export class AppComponent {
  title = 'animation';
  // var pic=["http://52.229.126.133/horse2.PNG"];
  pic = new Array (
    "http://52.229.126.133/cat2.PNG",
    "http://52.229.126.133/cat2.PNG",
    "http://52.229.126.133/dog2.PNG",
    "http://52.229.126.133/dog2.PNG",
    "http://52.229.126.133/bunny2.PNG",
    "http://52.229.126.133/bunny2.PNG",
    "http://52.229.126.133/horse2.PNG",
    "http://52.229.126.133/horse2.PNG",
    );

  completed = false;
  showheader=false;
  x=-1;  

  toggle() {
     this.completed = !this.completed;
  }

  clicked(){
    if (this.x==0 || this.x == 1){
      window.open("https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
    }  else if (this.x==2 || this.x == 3){
      console.warn("This is a dog");
      window.open("https://images.unsplash.com/photo-1581279009918-dfd17a075aae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
    }  else if (this.x==4 || this.x == 5){
      window.open("https://images.unsplash.com/photo-1558645144-277783017492?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=932&q=80");
    }  else if (this.x==6 || this.x == 6){
      window.open("https://images.unsplash.com/photo-1450052590821-8bf91254a353?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80");
    }  
  }


  

  onAnimationEvent ( event: AnimationEvent ) {

    // openClose is trigger name in this example
    // console.warn(`Animation Trigger: ${event.triggerName}`);

    // phaseName is start or done
    // console.warn(`Phase: ${event.phaseName}`);
    if (event.phaseName == "done") {
      this.showheader=true;
      this.toggle();
      if (this.x<7){
        this.x++;
      } else {
        this.x=0;
      }
      console.warn(this.completed);
      console.warn(this.x);
      
    }

    // in our example, totalTime is 1000 or 1 second
    // console.warn(`Total time: ${event.totalTime}`);

    // in our example, fromState is either open or closed
    // console.warn(`From: ${event.fromState}`);

    // in our example, toState either open or closed
    // console.warn(`To: ${event.toState}`);

    // the HTML element itself, the button in this case
    // console.warn(`Element: ${event.element}`);
  }

}
