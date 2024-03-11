import React from 'react'
import "./transactionmiddle.css"

export const Transactionmiddle = () => {
  return (
    <div>
         <div className="container mt-6 mb-7">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-xl-7">
          <div className="card">
            <div className="card-body p-5">
              <h2>Sat, 16 September</h2>
              <p className="fs-sm">
                Your booking will be confirmed instantly
              </p>

              <div className="border-top border-gray-200 pt-4 mt-4">
                <div className="row">
                  <div className="col-md-6">
                  <strong>Akshay Kumar</strong>
                    <div className="text-muted mb-2">4.2 / 5 Rating</div>
                    
                  </div>
                  <div className="col-md-6 text-md-end">
                    <div className="text-muted mb-2"></div>
                    <strong></strong>
                  </div>
                </div>
              </div>

              <div className="border-top border-gray-200 mt-4 py-4">
                <div className="row">
                  <div className="col-md-6">
                    <div className="text-muted mb-2">From</div>
                    <strong>Bandra
                      <br /></strong>
                    <p className="fs-sm">
                      
                      <a href="#!" className="text-purple"></a>
                    </p>
                  </div>
                  <div className="col-md-6 text-md-end">
                    <div className="text-muted mb-2">Destination</div>
                    <strong>Pune</strong>
                    <p className="fs-sm">
                      
                      <br />
                      
                      <a href="#!" className="text-purple"></a>
                    </p>
                  </div>
                </div>
              </div>
              <strong>Maruti Ertiga</strong>
              <table className="table border-bottom border-gray-200 mt-3">
                <thead>
                  <tr>
                    <th scope="col" className="fs-sm text-dark text-uppercase-bold-sm px-0">Co-Travellers</th>
                    <th scope="col" className="fs-sm text-dark text-uppercase-bold-sm text-end px-0"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-0">Shravan More</td>
                    <td className="text-end px-0">Bandra - Vashi </td>
                  </tr>
                  <tr>
                    <td className="px-0">Aatharva Khewle</td>
                    <td className="text-end px-0">Bandra - Govandi</td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-5">
                <div className="d-flex justify-content-end">
                  <p className="text-muted me-3">Verified Profile</p>
                  <span></span>
                </div>
                <div className="d-flex justify-content-end">
                  <p className="text-muted me-3">Never cancels rides</p>
                  <span></span>
                </div>
                <div className="d-flex justify-content-end mt-3">
                  <h5 className="me-3">Total price for 1 passenger :</h5>
                  <h5 className="text-success">Rs. 500</h5>
                </div>
                <button type="primary" class="btn btn-primary" ><a className='hhhh text-white' href="/transaction"style={{textDecoration:"none"}}>Pay Now</a></button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
