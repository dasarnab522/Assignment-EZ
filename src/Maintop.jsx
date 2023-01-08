import React from 'react'
import './Maintop.css'
function Maintop() {
  return (
    <div className='main-header'>
    <div className='main-section'>
        <div className="section1">
            <div className='main-heading'>
                <h2>Lucas Films Private Limited</h2>
            </div>
            <button>Edit</button>
        </div>
        <div className="section2">
            <div className="company">
                <h3>Company Code</h3>
                <p>LUCF</p><br />
                <h3>Company Logo</h3>
                <p>Unavailable</p>
            </div>
            <div className="domains">
                <h3>Domains</h3>
                <p>@lucasfilms.com</p>
                <p>lucasstarwars.com</p>
                <p>starwars.com</p>
                <p>+5 Others</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Maintop