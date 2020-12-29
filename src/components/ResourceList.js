//USEREDUCERS===LIFECYCLE METHODS{componentDidMount+componentDidUpdate}

import React from "react";
import useResource from "./useResource";

const ResourceList = ({ resource }) => {
  const resources = useResource(resource);
  return (
    <div>
      <ul>
        {resources.map((record) => (
          <li key={record.id}>{record.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;

// ***************CLASS BASED APPROACH USING LYFECYLE METHODS**********************

// import React, { Component } from "react";
// import Jsonplaceholder from "../apis/Jsonplaceholder";

// export default class ResourceList extends Component {
//   state = { resources: [] };
//   async componentDidMount() {
//     const response = await Jsonplaceholder.get(`${this.props.resource}`);
//     this.setState({ resources: response.data });
//   }

//   //   to get updated when our prevous value get changed
//   async componentDidUpdate(prevValue) {
//     if (prevValue.resource !== this.props.resource) {
//       const response = await Jsonplaceholder.get(`${this.props.resource}`);
//       this.setState({ resources: response.data });
//     }
//     // console.log(prevValue);
//   }
//   render() {
//     return <div>{this.state.resources.length}</div>;
//   }
// }
