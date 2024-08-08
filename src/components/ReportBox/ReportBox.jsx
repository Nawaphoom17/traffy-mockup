import React from 'react'
import './ReportBoxStyle.css'

function ReportBox() {
  return (
    <div className='report-page'>
      <div className='banner'>
        banner
      </div>
      <div className='report-box'>
        <p className='report-label'>Detail Issue</p>
        <div className='report-detail'>
          <textarea></textarea>
          <p>Please attach the issue photo here.</p>
        </div>
        
        <p className='report-label'>Organization</p>
        <select name="org">
          <option value="">Select organization</option>
          <option value="1">กขค</option>
          <option value="2">ABC</option>
          <option value="3">123</option>
        </select>
        <div className='consent-text'>
          <p className='consent-text-title'>The book provides consent for the collection, use, and disclosure of information.</p>
          <p>Traffy Fondue and NSTDA prioritize privacy and therefore request your consent for the collection, use, and/or disclosure of information that you provide or have received from other sources, such as text, images, and location coordinates, for the following purposes
            <br/>1. To collect and transmit data to relevant agencies for consideration and resolution of issues within their authority and responsibilities.
            <br/>2. To be used for the development of service systems and for research analysis by the laboratory.
            <br/>3. To display data without disclosing the identity of the reporter on a publicly accessible website that can be accessed by the general public. Users have the right to withdraw their consent at any time via Line@ Traffy Fondue Help.
          </p>
        </div>
        <a href="" className='report-submit-btn'>submit</a>
      </div>
    </div>
  )
}

export default ReportBox