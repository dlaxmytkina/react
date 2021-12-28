
import MyPostsContainer from "./MyPosts/post-container";
import c from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/profileInfo";



const Profile = (props) => {
    
    return (
        <div className={c.profile}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer  />
            
        </div>


    )
}
export default Profile;