import React from 'react';

const PostItem = (props) => {
    return (
        <div >{props.text}</div>
    );
}



const MyPosts = (props) => {
    
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.AddPost();
    }


    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    let postsElement = props.posts.map(p => <PostItem text={p.text} />);
    
    return (
        <div>
            <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
            <button onClick={onAddPost} >Add post</button>
            <div>
                {postsElement}
            </div>
        </div>
    );
}
export default MyPosts;
