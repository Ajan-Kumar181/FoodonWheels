import Axios from "axios";
import { GITHUB_USERURL } from "../Utils/Constants";
import React from "react";
class GitHubUser extends React.Component {
    constructor(props){
        super(props);
        this.state={
            userData : {
            },
            time : 0
        }
    }
async componentDidMount(){
    let userData = (await Axios.get(GITHUB_USERURL + this.props.userid)).data;
    this.setState({
        userData
    })
    this.interval = setInterval(()=>{
        this.setState({
            time : this.state.time+1
        })
    },1000)
}
 componentDidUpdate(){
     console.log("got he data and updates the ui");
     
 }
componentWillUnmount(){
    clearInterval(this.interval);
} // componentWillUnmount is equivalant to function that is returned from useEffect
componentDidCatch(){
    console.log('this component catched');
}
    render(){
        let {userData , time} = this.state
        return( <div>
            <h3>you are here for {time} seconds</h3>
            <h1>{userData.name}</h1>
            <img src={userData.avatar_url} alt="User Avatar" width="100" />
            <p>Username: {userData.login}</p>
            <p>Followers: {userData.followers}</p>
            <p>Repositories: {userData.public_repos}</p>
            <p>Bio: {userData.bio}</p>
          </div>)
    }
}

export default GitHubUser;