import * as uiConstants from './../constants/ui';

const initialState = {
    showLoading : false,
    showSiderBar : true,
    showLoadingLogin : false,
    showLoadingSignup : false
};

const reducer = (state = initialState , action) => {
    switch(action.type){

        case uiConstants.SHOW_LOADING :{
            return {
                ...state,
                showLoading : true
            }
        }

        case uiConstants.HIDE_LOADING :{
            return {
                ...state,
                showLoading : false
            }
        }

        case uiConstants.SHOW_SIDERBAR :{
            return {
                ...state,
                showSiderBar : !state.showSiderBar
            }
        }

        case uiConstants.SHOW_LOADING_LOGIN :{
            return {
                ...state,
                showLoadingLogin : true
            }
        }

        case uiConstants.HIDE_LOADING_LOGIN :{
            return {
                ...state,
                showLoadingLogin : false
            }
        }

        
        case uiConstants.SHOW_LOADING_SIGNUP :{
            return {
                ...state,
                showLoadingSignup : true
            }
        }

        case uiConstants.HIDE_LOADING_SIGNUP:{
            return {
                ...state,
                showLoadingSignup : false
            }
        }


        default : {
            return {
                ...state
            }
        }
    };
};

export default reducer;