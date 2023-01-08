import React from "react";
import './Mainbody.css'
function Mainbody() {
  return (
    <div className="content-division">
      <nav>
        <ul>
          <li className='activeNav.entities'>
            ENTITIES
          </li>
          <li className='activeNav.invoice'>
            INVOICE CODES
          </li>
          <li
            className='activeNav.users'>
            USERS
          </li>
        </ul>
      </nav>
      <div className="main-content">
          <div className="client_entities">
            <div className="content_heading">
              <h2>4 Entities</h2>
            </div>
            <table>
              <thead className="table_heading">
                <th>Billing Location</th>
                <th>Entity Name</th>
                <th>Entity Code</th>
                <th>MSLA valid through</th>
                <th>File Sharing</th>
              </thead>
              <tbody>
                    <tr className="table_collection">
                      <td>Riyadh, Kingdom of Saudi Arabia</td>
                      <td>Lucas Films Private Limited</td>
                      <td>LUCFOI</td>
                      <td>3 June 2022-5 June 2030</td>
                      <td>External</td>
                    </tr>
                      <td className="table_details" colSpan="6">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <h2>Address</h2>
                                  <p>Line 1</p>
                                  <p>Line 2</p>
                                  <p>City, Country</p>
                                  <p>ZIP Code</p>
                              </td>
                              <td>
                                <h2>Company Registration Number</h2>
                                <p>UICE87F2T79WEY</p>
                                <br />
                                <h2>Company Registration Validity</h2>
                                <p>5 June 2025</p>
                              </td>
                              <td>
                                <h2>TAX Registration Number</h2>
                                <p>AHR37T983Q7TRG8FG</p>
                                <br />
                                <h2>TRN Validity</h2>
                                <p>5 June 2025</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2>Charge Code / PO Number</h2>
                                <p>Reequired</p>
                              </td>
                              <td>
                                <h2>Duration of File Storage</h2>
                                <p>90 Days</p>
                              </td>
                              <td>
                                <h2>Currency</h2>
                                <p>US Dollar ($)</p>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan="2">
                                <h2>MSLA</h2>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <p>20200916 EZ_LucasFlims MOU_signed George.pdf</p>
                                  <span
                                    style={{
                                      marginLeft: "10px",
                                      fontSize: "1rem",
                                      fontWeight: "bolder",
                                      marginBottom: "1rem",
                                    }}
                                  >                                  
                                  </span>
                                  <span className="download_icon">
                                  </span>
                                </div>
                              </td>
                              <td>
                                <h2>VAT+WHT</h2>
                                <p>5% + 5%</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <h2>Corporte price as per MSLA</h2>
                        <table className="corporate_details">
                          <thead className="table_heading">
                            <th>Service</th>
                            <th>Units</th>
                            <th>List Price</th>
                            <th>Offered Price</th>
                            <th>Discount</th>
                          </thead>
                          <tbody>
                                  <tr className="table_collection corporate_collection_details">
                                    <td>ArabicLanguage Traslation: EZ Assured</td>
                                    <td>Words</td>
                                    <td>0.1 AED</td>
                                    <td>0.09 AED</td>
                                    <td>10%( 19%)</td>
                                  </tr>
                                  <tr className="table_collection corporate_collection_details">
                                    <td>ArabicLanguage Traslation: EZ Assured</td>
                                    <td>Words</td>
                                    <td>0.1 AED</td>
                                    <td>0.09 AED</td>
                                    <td>10%( 19%)</td>
                                  </tr>
                                  <tr className="table_collection corporate_collection_details">
                                    <td>ArabicLanguage Traslation: EZ Assured</td>
                                    <td>Words</td>
                                    <td>0.1 AED</td>
                                    <td>0.09 AED</td>
                                    <td>10%( 19%)</td>
                                  </tr>
                                  <tr className="table_collection corporate_collection_details">
                                    <td>ArabicLanguage Traslation: EZ Assured</td>
                                    <td>Words</td>
                                    <td>0.1 AED</td>
                                    <td>0.09 AED</td>
                                    <td>10%( 19%)</td>
                                  </tr>
                          </tbody>
                        </table>
                      </td>
              </tbody>
            </table>
          </div>
      </div>
    </div>
  );
}

export default Mainbody;
