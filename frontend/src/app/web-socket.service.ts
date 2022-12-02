import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  gameWebSocket!: WebSocket
  gameWebsocketLoading = true

  constructor() {
  }

  public openGameWebSocket(gameId: string, userId: string, closeCallback?: (event: CloseEvent) => void) {
    this.gameWebSocket = new WebSocket('wss://ndli.pixbot.me/ws/game?gameId=' + gameId + '&userId=' + userId)

    this.gameWebSocket.onopen = () => {
      console.log("WebSocket connected.")
      this.gameWebsocketLoading = false
    }

    this.gameWebSocket.onclose = (event) => {
      console.log("WebSocket disconnected: ", event)
      if (closeCallback) {
        closeCallback.call(this, event)
      }
    }
  }

  public closeWebSocket() {
    this.gameWebSocket.close()
  }

}
