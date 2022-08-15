import { Component } from "react";

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (


      <div className="adminnav-wrapper">
        <div className="adminnav-links">
            <a
              className={this.props.page === "jobs" ? "active" : null}
              href="/"
            >
              
              <button class="button-2" role="button">All Jobs</button>
              
            </a>
          
        </div>
      </div>
    );
  }
}
