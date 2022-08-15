import React, { Component } from "react"
import Head from "next/head"

import Header from "../../../components/header.js"

import DeleteJobModal from "../../../components/modals/deleteJob.js"
import Adminnav from "../../../components/adminnav.js"



export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
          titleInputValue:"Johnson Moosehead",
          customerInputValue:"John Johnson",
          descriptionInputValue:"This is a sample description of the page. Will and can be longer.",
          billedInputValue: true,
          tagsInputValue:"Tool1, tool2, extra helper",
          locationInputValue:"test cords",
          notesInputValue:"Examplenote 1, Examplenote 2, example note 3",
    
          loading: false,
          submitError: false,
          errorMsg: "",
        }
      }

  updateTitleInputValue = (event) => {
    this.setState({titleInputValue: event.target.value})
  }
  updateNotesInputValue = (event) => {
    this.setState({notesInputValue: event.target.value})
  }
  updateLocationInputValue = (event) => {
    this.setState({locationInputValue: event.target.value})
  }

  updateBilledInputValue = (event) => {
    this.setState({billedInputValue: event.target.value})
  }

  updateDescriptionInputValue = (event) => {
    this.setState({descriptionInputValue: event.target.value})
  }

  updateCustomerInputValue = (event) => {
    this.setState({customerInputValue: event.target.value})
  }

  updateTagsInputValue = (event) => {
    this.setState({tagsInputValue: event.target.value})
  }

  submitCreateNewJobRequest = () => {
    this.setState({submitError: false, errorMsg: "", loading: true})
  }

  submitcreateJobRequest = () => {
    this.setState({submitLoading: true})
  }

  showDeleteModalRequest = () => {
    this.setState({showDeleteModal: true})
  }

  hideDeleteModalRequest = () => {
    this.setState({deleteError: false, deleteLoading: false, showDeleteModal: false})
  }

  deleteJobRequest = () => {
    this.setState({deleteLoading: true})
  }

  render () {
    return (
      <div className="layout-wrapper">
        <Head>
          <title>Edit Job | Admin</title>
        </Head>
        <Header />
        <Adminnav page="jobs" />
        <div className="layout-content-container">
          <div className="create-job-content">
            <div className="create-job-header">
              <span>Edit Job </span>
            </div>
            <div className="create-job-form-container">
              <div className="create-job-form-section">
                <div className="create-job-form-section-label">
                  <span>Title</span>
                </div>
                <div className="create-job-form-section-input">
                  <input
                    type="text"
                    value={this.state.titleInputValue}
                    onChange={this.updateTitleInputValue}
                  />
                </div>
              </div>
              <div className="create-job-form-section">
                <div className="create-job-form-section-label">
                  <span>Customer</span>
                </div>
                <div className="create-job-form-section-input">
                  <input
                    type="text"
                    value={this.state.customerInputValue}
                    onChange={this.updateCustomerInputValue}
                  />
                </div>
              </div>
              <div className="create-job-form-section">
                <div className="create-job-form-section-label">
                  <span>Billed</span>
                </div>
                <div className="create-job-form-section-input">
                <input
                    type="text"
                    value={this.state.billedInputValue}
                    onChange={this.updateBilledInputValue}
                  />
                </div>
              </div>
              <div className="create-job-form-section">
                <div className="create-job-form-section-label">
                  <span>Location</span>
                </div>
                <div className="create-job-form-section-input">
                  <input
                    type="text"
                    value={this.state.locationInputValue}
                    onChange={this.updateLocationInputValue}
                  />
                </div>
              </div>
              <div className="create-job-form-section">
                <div className="create-job-form-section-label">
                  <span>Tags</span>
                </div>
                <div className="create-job-form-section-input">
                  <input
                    type="text"
                    value={this.state.tagsInputValue}
                    onChange={this.updateTagsInputValue}
                  />
                </div>
              </div>
              <div className="create-job-form-section">
                <div className="create-job-form-section-label">
                  <span>Description</span>
                </div>
                <div className="create-job-form-section-input">
                  <textarea
                    
                    type="text"
                    value={this.state.descriptionInputValue}
                    onChange={this.updateDescriptionInputValue}
                  />
                </div>
              </div>
              <div className="create-job-form-section">
                <div className="create-job-form-section-label">
                  <span>Notes</span>
                </div>
                <div className="create-job-form-section-input">
                  <textarea
                    
                    type="text"
                    value={this.state.notesInputValue}
                    onChange={this.updateNotesInputValue}
                  />
                </div>
              </div>
              
             
              <div className="create-job-form-btns-section">
                <div className="edit-job-form-submit-btn-container">
                  {
                    !this.state.submitLoading ?
                    <div onClick={this.submitcreateRequest} className="edit-job-form-btn">
                      <span>Submit</span>
                    </div> :
                      <div className="edit-job-form-btn loading">
                        <span>Loading</span>
                      </div>
                  }
                </div>
                <div onClick={this.showDeleteModalRequest} className="edit-job-form-delete">
                  <span>Delete</span>
                </div>
              </div>
              {
                this.state.submitError ?
                <div className="edit-job-submit-error-msg">
                  <span>{this.state.errorMsg}</span>
                </div> : null
              }
              {
                this.state.submitSuccess ?
                <div className="edit-job-submit-success-msg">
                  <span>Success!</span>
                </div> : null
              }
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
    )
  }
}