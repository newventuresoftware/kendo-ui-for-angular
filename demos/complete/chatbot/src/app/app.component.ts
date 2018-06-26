import { Component } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { switchMap } from 'rxjs/operators/switchMap';
import { map } from 'rxjs/operators/map';
import { windowCount } from 'rxjs/operators/windowCount';
import { scan } from 'rxjs/operators/scan';
import { take } from 'rxjs/operators/take';
import { tap } from 'rxjs/operators/tap';
import { from } from 'rxjs/observable/from';
import { merge } from 'rxjs/observable/merge';

import { ChatModule, Message, User, Action, ExecuteActionEvent, SendMessageEvent } from '@progress/kendo-angular-conversational-ui';
import { Observable } from 'rxjs/Observable';
import { ChatService } from './chat.service';

@Component({
  providers: [ ChatService ],
  selector: 'my-app',
  template: `
      <kendo-chat
        [messages]="feed | async"
        [user]="user"
        (sendMessage)="sendMessage($event)">
      </kendo-chat>
    `
})
export class AppComponent {
  public feed: Observable<Message[]>;

  public readonly user: User = {
    id: 1
  };

  public readonly bot: User = {
    id: 0
  };

  private local: Subject<Message> = new Subject<Message>();

  constructor(private chatService: ChatService) {

    const hello: Message = {
      author: this.bot,
      suggestedActions: [{
        type: 'reply',
        value: 'Great!'
      }, {
        type: 'reply',
        value: 'Thanks, but this is boring.'
      }],
      timestamp: new Date(),
      text: 'Hello, this is a demo bot. I don\t do much, but I can count symbols!'
    };

    // Merge local and remote messages into a single stream
    this.feed = merge(
      from([ hello ]),
      this.local,
      this.chatService.responses.pipe(
        map((response): Message => ({
          author: this.bot,
          text: response
        })
      ))
    ).pipe(
      // ... and emit an array of all messages
      scan((acc, x) => [...acc, x], [])
    );
  }

  public sendMessage(e: SendMessageEvent): void {
    this.local.next(e.message);

    this.local.next({
      author: this.bot,
      typing: true
    });

    this.chatService.submit(e.message.text);
  }
}
