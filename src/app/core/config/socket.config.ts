import { environment } from "environments/environment";
import { SocketIoConfig } from "ngx-socket-io";



export const socketConfig: SocketIoConfig = {
	url: environment.socketUrl,
	options: {
		transports: ['websocket']
	}
}