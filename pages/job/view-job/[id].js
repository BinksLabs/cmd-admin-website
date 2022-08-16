import React, { Component } from "react";
import Head from "next/head";

import Header from "../../../components/header.js";

import DeleteJobModal from "../../../components/modals/deleteJob.js";
import Adminnav from "../../../components/adminnav.js";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleInputValue: "Johnson Moosehead",
      customerInputValue: "John Johnson",
      descriptionInputValue:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus tellus, elementum id odio tincidunt, rutrum congue nulla. Donec id ligula lacus. Fusce varius metus eget mollis tempus. Fusce et eros et ante suscipit egestas sed dictum arcu. Suspendisse ut laoreet ante, id finibus arcu. Nam id erat semper, laoreet sem id, eleifend sapien. Nulla eu elementum sapien, in pretium est. Nullam feugiat quam sed fringilla malesuada.",
      billedInputValue: true,
      tagsInputValue: "Tool1, tool2, extra helper",
      locationInputValue: "test cords",
      notesInputValue: "Examplenote 1, Examplenote 2, example note 3",
      imagesInputValue: "test link",

      loading: false,
      submitError: false,
      errorMsg: "",
    };
  }

  render() {
    return (
      <div className="layout-wrapper">
        <Head>
          <title>View Job | Admin</title>
        </Head>
        <Header />
        <Adminnav page="jobs" />
        <div className="layout-content-container">
          <div className="create-job-content">
            <div className="create-job-header">
              <span type="text"> {this.state.titleInputValue}</span>
            </div>
            <div className="create-job-form-section">
              <span type=
              "text" className="under-title-text">Images: {this.state.imagesInputValue}</span>
              </div>
            <div className="create-job-form-section">
              <span type="text" className="under-title-text">
                Customer: {this.state.customerInputValue}
              </span>
            </div>
            <div className="create-job-form-section">
              <span type="text" className="under-title-text">
                Location: {this.state.locationInputValue} |{" "}
              </span>
              <a>MAPS LINK</a>
            </div>
            <div className="create-job-form-section">
              <span type="text" className="under-title-text">
                Tags: {this.state.tagsInputValue}
              </span>
            </div>
            <div className="create-job-form-section">
              <span type="text" className="under-title-text">
                Billed: {this.state.billedInputValue.toString()}
              </span>
            </div>
            <div className="create-job-form-section">
              <span type="text" className="under-title-text">
                Notes: {this.state.notesInputValue}
              </span>
            </div>
            <div className="create-job-form-section">
              <span type="text" className="under-title-text">
                Description:
                <br></br>
                {this.state.descriptionInputValue}
              </span>
            </div>
          </div>
        </div>
        <DeleteJobModal
          error={this.state.deleteError}
          loading={this.state.deleteLoading}
          show={this.state.showDeleteModal}
          hideRequest={this.hideDeleteModalRequest}
          deleteJobRequest={this.deleteJobRequest}
        />
      </div>
    );
  }
}
