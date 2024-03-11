import React from 'react'

export const Poolerform = () => {
  return (
    <div><div className="container">
    <h1>Welcome to EcoDrive, Publish your account here</h1>
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Poolers Name</label>
      <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Source</label>
      <input type="text" class="form-control" id="exampleInputPassword1" />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Destination</label>
      <input type="text" class="form-control" id="exampleInputPassword1" />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Time</label>
      <input type="time" class="form-control" id="exampleInputPassword1" />
    </div>
    <div class="mb-3 form-check">
    <label for="seats">Seats Available: {'   '}</label>
    <input type="number" id="quantity" name="quantity" min="0" max="3" step="1"/>
    {'        '}
    <input type="submit" value="Submit"/>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Price</label>
      <input type="price" class="form-control" id="exampleInputPassword1" />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    <div className="extra inline-block " style={{height:"120px"}}></div>
  </form>
  </div></div>
  )
}
