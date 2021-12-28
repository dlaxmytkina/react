
import { connect } from "react-redux";
import { setUsersProfile } from "../../redux/profile-reducer";
import Profile from "./profile";
import c from "./Profile.module.css"
import React from "react";
import axios from "axios";
import { withRouter } from "react-router";



class ProfileContainer extends React.Component{
    
    componentDidMount() {
        
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        axios
          .get(
            `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
          )

          .then((response) => {
           
            this.props.setUsersProfile(response.data);;
          });
    }
    


    render(){
        
         return (
        <div className={c.profile}>
            <Profile {...this.props} profile={this.props.profile}/>
            
        </div>


    )
    }
   
}


let mapStateToProps = (state) => ({
profile: state.profilePage.profile
})

let WithURLDataComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,{ 
    setUsersProfile
}) (WithURLDataComponent);