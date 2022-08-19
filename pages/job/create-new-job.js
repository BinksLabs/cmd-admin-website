import React, { Component } from "react"
import Head from "next/head"


import Header from "../../components/header.js"
import Adminnav from "../../components/adminnav.js"
import authUser from "../../api/admin-user/auth.js"
import createNewJob from "../../api/jobs/createNewJob.js"


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
      loading: false,
      submitError: false,
      errorMsg: "",
      titleInputValue:"",
      customerInputValue:"",
      descriptionInputValue:"",
      billedInputValue: "",
      tagsInputValue:"",
      locationInputValue:"",
      notesInputValue:"",
      jobtypeInputValue:""
      
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

  updateJobTypeInputValue = (event) => {
    this.setState({jobtypeInputValue: event.target.value})
  }

//         customer: customer,
//         description: description,
//         billed: billed,
//         tags: arrayOfTags,
//         location: location,
//         notes: notes,
//         images: images

  submitCreateNewJobRequest = () => {
  if (!this.state.titleInputValue) {
    this.setState({submitError: true, errorMsg: "Title field is required."})
  } else if (!this.state.descriptionInputValue) {
    this.setState({submitError: true, errorMsg: "Description field is required."})
  } else if (!this.state.billedInputValue) {
    this.setState({submitError: true, errorMsg: "Billed field is required."})
  } else if (!this.state.tagsInputValue) {
    this.setState({submitError: true, errorMsg: "Tags field is required."})
  } else if (!this.state.locationInputValue) {
    this.setState({submitError: true, errorMsg: "Location field is required."})
  } else if (!this.state.customerInputValue) {
    this.setState({submitError: true, errorMsg: "Customer field is required."})
  }else {
    this.setState({submitError: false, errorMsg: "", loading: true})

    const self = this

    createNewJob(
      this.state.titleInputValue,
      this.state.descriptionInputValue,
      this.state.tagsInputValue,
      this.state.billedInputValue,
      this.state.customerInputValue,
      this.state.locationInputValue,
      function(apiResponse) {
        if (!apiResponse.authSuccess) {
          window.location.href = "/login"
        } else if (apiResponse.alreadyExistsError) {
          self.setState({submitError: true, errorMsg: "Job with that title already exists.", loading: false})
        } else if (apiResponse.submitError || !apiResponse.success) {
          self.setState({submitError: true, errorMsg: "An error occurred.", loading: false})
        } else {
          window.location.href = "/"
        }
      }
    )
  }
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
                    placeholder="Customer lastname and location "
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
                    placeholder="Customer first and last name"
                  />
                </div>
              </div>
              <div className="create-job-form-section">
                <div className="create-job-form-section-label">
                  <span>Job Type</span>
                </div>
                <div className="create-job-form-section-input">
                  <input
                    type="text"
                    value={this.state.jobtypeInputValue}
                    onChange={this.updateJobTypeInputValue}
                    placeholder="Install, Removal, Both"
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
                    placeholder="Manually add billing status"
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
                    placeholder="Google maps location pin"
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
                    placeholder="people 3, boat needed, deep water"
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
                    placeholder="The jobs description or instalation instructions"
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
                    placeholder="Any notes you want to add while creating the job"
                  />
                </div>
              </div>
              <div className="create-job-form-btn-container">
                {
                  !this.state.loading ?
                  <div onClick={this.submitCreateNewJobRequest} className="create-job-form-btn">
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