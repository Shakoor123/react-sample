import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Posts from '../components/Posts/Posts'
import Profile from '../components/profile/Profile'
import Users from '../components/Users/Users'

function Home() {
  return (
    <div>
      <Navbar/>
      <div class="container">
  <div class="row">
    <div class="col-sm">
      <Users/>
    </div>
    <div class="col-sm">
      <Posts/>
    </div>
    <div class="col-sm">
      <Profile/>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home