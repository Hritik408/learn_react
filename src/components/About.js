import { Component } from "react"
import UserClass from "./UserClass"

// const About = () => {
//     return (  // it returs some peice of jsx
//         <div>
//             <h1>
//                 Welcome to our About page 
//             </h1>
//             <User res = {"Hritik (function)"}/>
//             <UserClass res = {"Hritik (class)"} location = {"Modinagar"}/>
//         </div>
//     )
// }

class About extends Component {
    constructor(props){
        super(props);
        // console.log("parent constructor")
    }

    componentDidMount(){ 
        // console.log("parent component did mount")
    }

    render(){
        // console.log("parent render")
      return (  // it returs some peice of jsx
             <div>
                 <h1>
                 Welcome to our AboutClass page 
                 </h1>
          <UserClass name = {"Hritik (class)"} location = {"Modinagar"}/>
          {/* <UserClass name = {"Elon (class)"} location = {"US"}/> */}
             </div>
             )
    }
}

export default About

// componentdidmount is called when the component mounted succesfully