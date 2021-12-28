import PreLoader from "../../../common/pre-loader/pre-loader";


const ProfileInfo = (props) =>{
    
    if(!props.profile){
        return <PreLoader/>
    }
   return(
   <div>
       <img src="https://ideanomics.ru/wp-content/uploads/2019/03/8468788107_bb6c21b0e4_k-1024x511.jpg"></img>
       <div>
          <span>{props.profile.fullName}</span>
           <img src={props.profile.photos.large}/>
       </div>
   </div>
   ); 
}
export default ProfileInfo;