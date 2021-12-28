import React from 'react';
import { connect } from 'react-redux';
import { addPostActionReator, updateNewPostTextActionReator } from '../../../redux/profile-reducer';

import MyPosts from './post';




let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.postsData
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        updateNewPostText: (text) =>{
            dispatch(updateNewPostTextActionReator(text));
    },
    AddPost: ()=>{
    
        dispatch(addPostActionReator());
    }
    }
    

}


const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default PostsContainer;