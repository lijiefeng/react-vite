import { User } from "@/redux/interface/index";

// * setToken
export const setToken = (token: string) => ({
	type: "SET_TOKEN",
	token : token
});

export const setUser = (userInfo: User) => ({
	type: "SET_USER",
	userInfo : userInfo
});
