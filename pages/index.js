import { Component } from "react"
import Head from "next/head"

import Header from "../components/header.js"
import Adminnav from "../components/adminnav.js"
import getAllJobs from "../api/jobs/getAllJobs.js"

export default class extends Component {
  static async getInitialProps ({req, res}) {
    const apiResult = await getAllJobs(req)
  
    if (!apiResult.authSuccess) {
      res.writeHead(302, { Location: "/login" })
      res.end()
    }
  
    return {
      overdueJobs: apiResult.overdueJobs ? apiResult.overdueJobs : [],
      paidupJobs: apiResult.paidupJobs ? apiResult.paidupJobs : [],
      getDataError: apiResult && apiResult.getDataError
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      showOverdueJobs: true,
      showPaidupJobs: false
    }
  }

  handleOverdueBtnClick = () => {
    this.setState({
      showOverdueJobs: true,
      showPaidupJobs: false
    })
  }

  handlePaidupBtnClick = () => {
    this.setState({
      showOverdueJobs: false,
      showPaidupJobs: true
    })
  }


  render () {
    return (
      <div className="layout-wrapper">
        <Head>
          <title>Jobs Tracker App | Admin</title>
        </Head>
        <Header />
        <Adminnav page="jobs" />
        <div className="layout-content-container">
          <div className="jobs-content">
            <div className="jobs-top-header">
              <div className="jobs-page-label">
                <span>All Jobs</span>
              </div>
              <div className="jobs-add-new-btn-container">
                <a href="/job/create-new-job">
                  <div className="jobs-add-new-btn">
                    <span>+ Add New Job</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="jobs-list-container">
              <div className="jobs-list-tab-btns">
                <div className="jobs-list-tab-btn-container">
                  <div
                    className={this.state.showOverdueJobs ? "jobs-list-tab-btn active" : "jobs-list-tab-btn"}
                    onClick={() => this.handleOverdueBtnClick()}
                  >
                    <span>Overdue</span>
                  </div>
                </div>
                <div className="jobs-list-tab-btn-container">
                  <div
                    className={this.state.showPaidupJobs ? "jobs-list-tab-btn active" : "jobs-list-tab-btn"}
                    onClick={() => this.handlePaidupBtnClick()}
                  >
                    <span>paidup</span>
                  </div>
                </div>
              </div>
              </div>
            <div className="jobs-list-container">
              <div className="jobs-list-items-table">
                <div className="jobs-list-items-table-header">
                  <div className="jobs-list-items-table-header-item title">
                    <span>Title</span>
                  </div>
                  <div className="jobs-list-items-table-header-item customer hidden">
                    <span>Customer</span>
                  </div>
                  <div className="jobs-list-items-table-header-item pastdue">
                    <span>Past Due</span>
                  </div>
                  <div className="jobs-list-items-table-header-item location hidden">
                    <span>Location</span>
                  </div>
                  <div className="jobs-list-items-table-header-item settings">
                    <span>Settings</span>
                  </div>
                </div>
               
                {
                  this.state.showOverdueJobs ?
                  <div className="jobs-list-items-table-item">
                    
                    <div className="jobs-list-items-table-item-data title">
                      <span>Johnson Moosehead</span>
                    </div>
                    <div className="jobs-list-items-table-item-data customer">
                      <span>John Johnson</span>
                    </div>
                    <div className="jobs-list-items-table-item-data pastdue">
                      <span>TRUE</span>
                    </div>
                    <div className="jobs-list-items-table-item-data location">
                      <span>Moosehead Lake Greenville Maine</span>
                    </div>
                    <div className="jobs-list-items-table-item-data edit">
                      <a href={`/job/edit-job/job-ID`}>
                        <span>Edit</span>
                      </a>
                      <span> </span>
                    </div>
                  </div> : null
                }
                {
                  this.state.showPaidupJobs ?
                  <div className="jobs-list-items-table-item">
                    <div className="jobs-list-items-table-item-data title">
                      <span>job Title 2</span>
                    </div>
                    <div className="jobs-list-items-table-item-data date">
                      <span>12/20/2025</span>
                    </div>
                    <div className="jobs-list-items-table-item-data edit">
                      <a href={`/job/edit-job/job-ID`}>
                        <span>Edit</span>
                      </a>
                      <span> </span>
                    </div>
                  </div> : null
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}