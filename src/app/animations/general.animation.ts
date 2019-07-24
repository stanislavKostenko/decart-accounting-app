import {animate, style, transition, trigger} from '@angular/animations';

export const enterLeaveOpacity = trigger('EnterLeave', [
  transition(':enter', [
    style({opacity: 0}),
    animate(250)
  ]),
  transition(':leave', [
    animate(250, style({opacity: 1}))
  ])
]);

export const enterLeaveLeft = trigger('EnterLeaveLeft', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(-100%)'
    }),
    animate('300ms ease-in', style({
      transform: 'translateX(0)',
      opacity: 1
    }))
  ]),
  transition(':leave', [
    animate('200ms ease-in', style({
      transform: 'translateX(-100%)',
      opacity: 0
    }))
  ])
]);

export const enterLeaveRight = trigger('EnterLeaveRight', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(100%)'
    }),
    animate('300ms ease-in', style({
      transform: 'translateX(0)',
      opacity: 1
    }))
  ]),
  transition(':leave', [
    animate('200ms ease-in', style({
      transform: 'translateX(100%)',
      opacity: 0
    }))
  ])
]);
