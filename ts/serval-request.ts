/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:54 PM -- August 28th, 2023
 * Project: serval
 */

export class ServalRequest<T> {
	
	protected rawRequest: T;
	
	protected path: string[];
	
	public constructor(request: T) {
		
		this.rawRequest = request;
		this.path = [];
		
	}
	
}
