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
    providers: [ChatService],
    selector: 'my-app',
    template: `<h1>Conversational UI Demo</h1>`
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

        // TODO: Create message

        // Merge local and remote messages into a single stream
        this.feed = merge(
            from([ /* Add message */]),
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
