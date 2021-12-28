import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/user_no_photo.png";
import s from "./Users.module.css";

let Users = (props) => {
  let pagesCount = props.totalUserCount / props.pageSize;
  let pages = [];
  for (let i = 1; i <= Math.ceil(pagesCount) && i < 21; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={s.pages}>
        {pages.map((p) => {
          return (
            <span
              onClick={(e) => {
                props.onPageChanged(p);
              }}
              className={props.currentPage === p ? s.selectedPage : ""}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <NavLink to={"/profile/" + u.id}>
              <img
                className={s.img}
                src={u.photos.small != null ? u.photos.small : userPhoto}
              />
            </NavLink>
            {u.followed ? (
              <button
                onClick={() => {
                  axios
                  .delete(
                    `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,  {withCredentials:true, headers: {'API-KEY':'2e1ce755-62d5-4f95-b502-99ddcd3e3d28'}}
                  )
                  .then((response) => {
                    if(response.data.resultCode === 0){
                      props.unfollow(u.id);
                    }
                    
                  });

                  
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {

                  axios
                  .post(
                    `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, null, {withCredentials:true, headers: {'API-KEY':'2e1ce755-62d5-4f95-b502-99ddcd3e3d28'}}
                  )
                  .then((response) => {
                    if(response.data.resultCode === 0){
                      props.follow(u.id);
                    }
                    
                  });
                  
                }}
              >
                Follow
              </button>
            )}
          </span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
