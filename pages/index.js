import { Component } from "react";
import Head from "next/head";

import Header from "../components/header.js";
import Adminnav from "../components/adminnav.js";
import getAllJobs from "../api/jobs/getAllJobs.js";

export default class extends Component {
  static async getInitialProps({ req, res }) {
    const apiResult = await getAllJobs(req);

    if (!apiResult.authSuccess) {
      res.writeHead(302, { Location: "/login" });
      res.end();
    }

    return {
      allJobs: apiResult.allJobs ? apiResult.allJobs : [],
      getDataError: apiResult && apiResult.getDataError,
    };
  }

  render() {
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
              <div className="jobs-list-items-table">
                <div className="jobs-list-items-table-header">
                  <div className="jobs-list-items-table-header-item title">
                    <span>Title</span>
                  </div>
                  <div className="jobs-list-items-table-header-item customer hidden">
                    <span>Customer</span>
                  </div>
                  <div className="jobs-list-items-table-header-item billed">
                    <span>Billed</span>
                  </div>
                  <div className="jobs-list-items-table-header-item location hidden">
                    <span>Location</span>
                  </div>
                  <div className="jobs-list-items-table-header-item settings">
                    <span>View</span>
                  </div>
                </div>
                <div className="homepage-latest-blog-posts-list">
                  {this.props.allJobs.length
                    ? this.props.allJobs.map((job, index) => {
                        return (
                          <div key={index} className="jobs-list-items-table-item">
                            <div className="jobs-list-items-table-item-data title">
                              <span>{job.title}</span>
                            </div>
                            <div className="jobs-list-items-table-item-data customer">
                              <span>{job.customer}</span>
                            </div>
                            <div className="jobs-list-items-table-item-data billed">
                              <span>{String(job.billed)}</span>
                            </div>
                            <div className="jobs-list-items-table-item-data location">
                              <span>{job.location}</span>
                            </div>
                            <div className="jobs-list-items-table-item-data edit">
                              <a href={`/job/${job.title}`}>
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                        );
                      })
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
