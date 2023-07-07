import { observable, action } from 'mobx';
import axios from 'axios';

import {userUrl, postUrl, commentUrl} from '../constants';
import {IUser, IPost, IComment} from '../models';

class ApiStore {
    @observable private users: IUser[] = [];
    @observable private posts: IPost[] = [];
    @observable private comments: IComment[] = [];
  
    @action setUsers() {
        return axios.get(userUrl)
        .then(users => this.users = users.data)
        .then();
    };

    @action setPosts() {
        return axios.get(postUrl)
        .then(posts => this.posts = posts.data)
        .then();
    };

    @action setComments() {
        return axios.get(commentUrl)
        .then(comments => this.comments = comments.data)
        .then();
    };
  

    get getUsers(): IUser[] {
        return this.users;
    };

    get getPosts(): IPost[] {
        return this.posts;
    };

    get getComments(): IComment[] {
        return this.comments;
    };
};
  
const usersStore = new ApiStore();
export default usersStore;

