import React from "react";
import { GITHUB_USERURL } from "../Utils/Constants";
import GitHubUserData from "./User";
import GitHubUser from "./AboutUsers";

class AboutClass extends React.Component {
    constructor(props){
        super(props);
    };
    render(){
        return (
            <>
            <GitHubUser userid ="Ajan-Kumar181"/>
            </>
        );
    }

}

export default AboutClass;