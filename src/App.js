import React from "react";
require("./App.css");

//Needed
const { tableau } = window;

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dashboardName: "" };
  }

  componentDidMount() {
    tableau.extensions.initializeAsync().then(() => {
      const dashboardName = tableau.extensions.dashboardContent.dashboard.name;

      this.setState({
        dashboardName
      });
    });
  }

  render() {
    return <h1> Hello {this.state.dashboardName}</h1>;
  }
}

export default AppComponent;
