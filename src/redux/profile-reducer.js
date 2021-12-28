const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST',
 SET_USERS_PROFILE='SET_USERS_PROFILE';

let initialState = {
    postsData: [
        { id: 1, text: "Hello guys", likesCount: 3 },
        { id: 2, text: "Now ", likesCount: 3 },
        { id: 3, text: "Post three ", likesCount: 3 },
        { id: 4, text: "How are you", likesCount: 3 },
        { id: 5, text: "What is love", likesCount: 3 },
    ],
    newPostText: "hello",
    profile: null
}

 const profileReducer = (state = initialState, action) => {
    
     switch (action.type){
         case ADD_POST:{
            let newPost = { id: 6, text: state.newPostText, likesCount: 0 };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ""
            };
         }
        case UPDATE_NEW_POST_TEXT :{
            
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USERS_PROFILE:{
            return{
               
                ...state,
                profile: action.profile
            }
        }
        default :
        return state;
        
     }
  
    
}


 export const  addPostActionReator = () =>({type: ADD_POST})

export const  updateNewPostTextActionReator = (text) =>
({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const  setUsersProfile = (profile) =>
({ type: SET_USERS_PROFILE, profile  })

export default profileReducer;