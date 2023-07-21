

export interface User {
	username: string;
	password: string;
}

/* GlobalState */
export interface GlobalState {
	token: string;
	userInfo: User;
}

export interface AutoState {
	list : Array<string>;
}

