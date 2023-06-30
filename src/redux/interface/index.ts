

export interface User {
	user: string;
	password: string;
}

/* GlobalState */
export interface GlobalState {
	token: string;
	userInfo: User;
}