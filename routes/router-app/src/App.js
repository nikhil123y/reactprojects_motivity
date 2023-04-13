import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes ,Outlet ,useParams 
  ,NavLink,useNavigate,useLocation
} from 'react-router-dom';






function App() {
  return (
   <>

   <div className='App'>
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Homes/>}/>
      <Route  path='/myapps' element={<Navigate  to='/learn'/>}/>
      <Route path='learn' element={<Learn/>}>

        <Route path='courses'  element={<Courses/>}>

          <Route path=':coursesId'  element={<CoursesId/>}/>

        </Route>

        <Route path='bundles' element={<Bundles/>}/>
      
      </Route>

      <Route path="/dashboard"  element={<Dashborad/>}/>
    </Routes>
   
    </BrowserRouter>


   </div>

   </>
  );
}

function Homes(){

  return(

  <h1>Homes</h1>
  );
}


function Learn(){

  return(
 <>
    <h1>Learn</h1>
    <h4>All courses are listed here</h4>

    <Link  className='btn btn-success'  to='/learn/courses'>courses</Link>

    {"  "}
    <Link className='btn btn-primary'  to='/learn/bundles'>bundles</Link>


<Outlet/>

 </>

)
}

const Courses=()=>{

  const courseList=["React","Angular","Vue","NodeJs"];

  const randomCousrseName=courseList[Math.floor(Math.random()*courseList.length)]
  return(
    <>
       <h1>Courses List</h1> 
       <h3>Cousrse Data</h3>

       <p>More Test</p>
       <NavLink  to={`/learn/courses/${randomCousrseName}`}>{randomCousrseName}</NavLink>

       <NavLink  className='btn btn-primary'
         to={`/learn/courses/tests`}>Tests</NavLink>
       <Outlet/>
    </>
  )
}

const Bundles=()=>{

  return(
    <>
    <h1>Bundles List</h1> 
       <h3>Bundles Card</h3>
    </>
  )
}


const CoursesId=()=>{

  const navigate=useNavigate();


  const {coursesId}=useParams();

  console.log(coursesId);

  return(
    <>

    <div>
      <h1>Url Params is :{coursesId}</h1>

      <button
      
      onClick={()=>{
        navigate('/dashboard', {state:coursesId})
      }}
      className='btn btn-warning'>price</button>

      <Link to='/dashboard' state={"DJANGO"}>Test Link</Link>
    </div>
    </>
  )
}

const Dashborad=()=>{

  const location=useLocation()

  return(
    <>
    <div>
        <h1>INfo that i got here is  {location.state}</h1>
    </div>
    </>
  )
}

export default App;
