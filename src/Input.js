// import React, { Component } from "react";

// class Input extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <p>This is a third component called 'Input' that gets it's value passed down as props from App.js. The changeHandler function is even defined in App.js and passed down as props.</p>
        
//         <p>Changing the text here changes the state back up in App.js which triggers all of the other components to re-render</p>
        
//         <label htmlFor="textInput">Go ahead and change me! </label>
        
//         <input name='textInput' type="text" value={this.props.data} onChange={this.props.changeHandler} />
       
//         <p>So, I think we should be able to keep track of everything in the state up in App.js.  It could store an array of quotes, or an array of images, or a count of which quote/image we are currently using.</p>

//       </div>
//     );
//   }
// }

// export default Input;
import React from "react";

const Input = props => {
  return (
     <div>
        <p>This is a third component called 'Input' that gets it's value passed down as props from App.js. The changeHandler function is even defined in App.js and passed down as props.</p>
        
        <p>Changing the text here changes the state back up in App.js which triggers all of the other components to re-render</p>
        
        <label htmlFor="textInput">Go ahead and change me! </label>
        
        <input name='textInput' type="text" value={props.data} onChange={props.changeHandler} />
       
        <p>So, I think we should be able to keep track of everything in the state up in App.js.  It could store an array of quotes, or an array of images, or a count of which quote/image we are currently using.</p>

        <p>Only the App.js component has state.  Everything else gets changes passed down as props from App.js.  That is why I was able to write them as functional components not class components</p>

      </div>
  );
};

export default Input;
