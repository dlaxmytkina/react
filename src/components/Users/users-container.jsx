import React from "react";
import axios from "axios";

import { connect } from "react-redux";
import {
  follow,
  isLoading,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  unfollow,
} from "../../redux/users-reducer";

import Users from "./Users";
import PreLoader from "../../common/pre-loader/pre-loader";
import { getUsers } from "../../API/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.isLoading(true);
    getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.isLoading(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.isLoading(true);
    this.props.setCurrentPage(pageNumber);
   
      getUsers(pageNumber, this.props.pageSize)
      .then((data) => {
        this.props.isLoading(false);
        this.props.setUsers(data.items);
      });
  };

  render() {
    return (
      <div>
        {this.props.isloading ? (
          <PreLoader />
        ) : (
          <Users
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            totalUserCount={this.props.totalUserCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
          />
        )}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPages.users,
    pageSize: state.usersPages.pageSize,
    totalUserCount: state.usersPages.totalUserCount,
    currentPage: state.usersPages.currentPage,
    isloading: state.usersPages.isLoading,
  };
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {

//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsercAC(users))
//         },
//         setCurrentPage: (currentPage) => {

//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toogleLoading: (isLoading) => {
//             dispatch(isLoadingAC(isLoading))
//         }
//     }

// }

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  isLoading,
})(UsersContainer);
