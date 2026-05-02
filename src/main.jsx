import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter} from "react-router-dom"
import { Home } from './Home.jsx'
import { RouterProvider } from 'react-router-dom'
import { Login } from './Login.jsx'
import { FacultyDashboard } from './FacultyDashboard.jsx'
import { AddStudent } from './AddStudent.jsx'
import { AllStudent } from './AllStudent.jsx'
import { TakeAttendance } from './TakeAttendance.jsx'
import { ViewAttendance } from './ViewAttendance.jsx'
import { AdminDashboard } from './AdminDashboard.jsx'
import { AddUser } from './AddUser.jsx'
import { AllUsers } from './AllUsers.jsx'
import { UpdateUser } from './UpdateUser.jsx'
import { UpdateStudent } from './UpdateStudent.jsx'
import { AddSubject } from './AddSubject.jsx'
import { AllSubjects } from './AllSubjecs.jsx'
import { UpdateSubject } from './UpdateSubject.jsx'
import { ProtectedRoute } from './ProtectedRoute.jsx'
import { Error } from './components/Error.jsx'




const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>

  },
  {
    path:"login",
    element:<Login/>
  },
  {
    path:"faculty-dashboard",
    element:<ProtectedRoute>
      <FacultyDashboard/>
    </ProtectedRoute>,
    children:[
  
      {
        path:"add-student",
        element:<AddStudent/>
      },
      {
        path:"all-students",
        element:<AllStudent/>
      },
      {
        path:"take-attendance",
        element:<TakeAttendance/>
      },
      {
        path:"view-attendance",
        element:<ViewAttendance/>
      },
      {
        path:"all-students/:id",
        element:<UpdateStudent/>
      }
    ]
  },
  {
    path:"admin-dashboard",
    element:<AdminDashboard/>,
    children:[
     {
      path:"add-user",
      element:<AddUser/>
     },
     {
      path:"all-users",
      element:<AllUsers/>
      
     },
     {
      path:"all-users/:username",
      element:<UpdateUser/>
     },
     {
      path:"add-subject",
      element:<AddSubject/>
     },
     {
      path:"all-subject",
      element:<AllSubjects/>
     },
     {
      path:"all-subject/:id",
      element:<UpdateSubject/>
     }
     

    ]
  },
  {
    path:"*",
    element:<Error/>
  }

])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>

  </RouterProvider>
)
