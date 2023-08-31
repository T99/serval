/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:47 PM -- August 28th, 2023
 * Project: serval
 */

import http from "node:http";

export class HTTPServer {
	
	protected internalServer: http.Server
	
	public constructor(port: number) {
		
		this.internalServer = http.createServer();
		this.internalServer.listen(port);
		
	}
	
	
	
}
