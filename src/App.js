import React, { useState } from "react";
import ResourceList from "./components/ResourceList";
import UsersList from "./components/UsersList";

const App = () => {
  const [resource, setResource] = useState("posts");
  return (
    <div>
      <div>
        <h3>Users</h3>
        <UsersList />
        <button onClick={() => setResource("posts")}>posts</button>
        <button onClick={() => setResource("todos")}>todos</button>
        <ResourceList resource={resource} />
      </div>
    </div>
  );
};

export default App;

// ******************************************************

// CLASS BASED STATE IMPLEMENTATION

// import React, { Component } from "react";

// export default class App extends Component {
//   state = { resources: "posts" };
//   render() {
//     return (
//       <div>
//         <div>
//           <button onClick={() => this.setState({ resources: "posts" })}>
//             posts
//           </button>
//           <button onClick={() => this.setState({ resources: "todos" })}>
//             todos
//           </button>
//           {this.state.resources}
//         </div>
//       </div>
//     );
//   }
// }
