import React from "react";
import { json } from "react-router-dom";

class UserClass extends React.Component{
     constructor(props){
        super(props);
        // console.log(props);
        this.state = {
            // count: 0,
            userInfo: {
                name: "dummy",
                login: "default",
                 avatar_url: "http://dumuyphog"
            },
    
        }
         console.log(this.props.name + "child construtor")
     }

     async  componentDidMount(){   // for fetching async is used before cdm 
         console.log(this.props.name + "child component did mount");  // it is called after render
        const deta = await fetch("https://api.github.com/users/Hritik408")
        const json = await deta.json();
        // console.log(json);

        this.setState({
            userInfo: json,
        });
     }

     componentDidUpdate(){
        console.log("component did update is called");
     }

     componentWillUnmount(){  // called just before the component is unmount , that means when we go to another page then it called because we leave the present page 
        console.log("component will Unmount")
     }

    //  const{name} = this.state.userInfo.name  here u can not use

    render(){   
        console.log( this.props.name + "child render")  // it is called after contructor
          const{name, login, avatar_url} = this.state.userInfo;
        //  debugger;
        // const{location} = this.props; // destructure this
        return(
            <div className="user-card">
                {/* <h2>Count: {this.state.count}</h2>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>
                    CountInc
                </button> */}

                {/* <h1>Name: {this.props.name}</h1> */}
                <h2>Name: {name}</h2>
                <h2>Login: {login}</h2>
                <img src={avatar_url} className="avatar" />

                {/* <img src={avatar_url} /> */}
            </div>
        )
    }
}

export default UserClass;


// parent constructor
// parent render
// child construtor
// child render
// child component did mount
// parent component did mount