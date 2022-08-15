// Layout
import "../styles/layout.css"
import "../styles/components/header.css"
import "../styles/components/adminnav.css"

// Pages
import "../styles/login.css"
import "../styles/jobs/index.css"
import "../styles/jobs/create-new-job.css"
import "../styles/jobs/edit.css"
import "../styles/_error.css"

// modals
import "../styles/components/modals/delete-job.css"

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }