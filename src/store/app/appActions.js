import {HIDE_LOADING, INIT_APP, SHOW_LOADING} from "./actionTypes";

export function showLoading() {
	return {type:SHOW_LOADING,payload:true}
}
export function hideLoading() {
	return {type:HIDE_LOADING,payload:false}
}
export function initApp(data) {
	return {
		type: INIT_APP,
		payload: data
	}
}


