import React, { Component } from "react"
import Head from "next/head"


import Header from "../../components/header.js"
import Adminnav from "../../components/adminnav.js"
import authUser from "../../api/admin-user/auth.js"


export default class extends Component {
    static async getInitialProps ({req, res}) {
        const authResult = await authUser(req)
      
        if (!authResult.success) {
          res.writeHead(302, { Location: "/login" })
          res.end()
        }
      
        return {}
      }
  constructor(props) {
    super(props)
    this.state = {
      titleInputValue:"",
      customerInputValue:"",
      descriptionInputValue:"",
      pastdueInputValue: null,
      tagsInputValue:"",
      locationInputValue:"",
      notesInputValue:"",

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

  updatePastDueInputValue = (event) => {
    this.setState({pastdueInputValue: event.target.value})
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

  render () {
    return (
      <div className="layout-wrapper">
        <Head>
          <title>Create New Job | Admin</title>
        </Head>
        <Header />
        <Adminnav page="jobs" />
        <div className="layout-content-container">
          <div className="create-job-content">
            <div className="create-job-header">
              <span>Create New Job</span>
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
                  <span>Pastdue</span>
                </div>
                <div className="create-job-form-section-input">
                  <input
                    type="text"
                    value={this.state.pastdueInputValue}
                    onChange={this.updatePastDueInputValue}
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
              <div className="create-job-form-btn-container">
                {
                  !this.state.loading ?
                  <div onClick={this.submitCreateNewPostRequest} className="create-job-form-btn">
                    <span>Submit</span>
                  </div> :
                  <div className="create-job-form-btn loading">
                    <span>Loading</span>
                  </div>
                }
              </div>
              {
                this.state.submitError ?
                <div className="create-job-submit-error-msg">
                  <span>{this.state.errorMsg}</span>
                </div> : null
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}