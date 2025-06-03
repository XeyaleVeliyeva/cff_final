import './App.css';
import { Routes, Route } from 'react-router-dom';

import Login from './Login';
import StudentPage from './login_pages/StudentPage';
import TeacherPage from './login_pages/TeacherPage';
import StudentBoard from './main_board/StudentBoard';
import TeacherBoard from './main_board/TeacherBoard';

import Subject from './Subject';
import Math from './subjects/Math';
import Physics from './subjects/Physics';
import Chemistry from './subjects/Chemistry';
import Azerbaijani from './subjects/Azerbaijani';

import AttendanceMath from "./attendance/AttendanceMath";
import AttendancePhysics from "./attendance/AttendancePhysics";
import AttendanceChemistry from "./attendance/AttendanceChemistry";
import AttendanceAzerbaijani from "./attendance/AttendanceAzerbaijani";

import KsqMath from "./ksq/KsqMath";
import KsqPhysics from "./ksq/KsqPhysics";
import KsqChemistry from "./ksq/KsqChemistry";
import KsqAzerbaijani from "./ksq/KsqAzerbaijani";

import Classes from './classes/Classes';


import Attendance from './teacher_sections/Attendance';
import Ksq from './teacher_sections/Ksq';
import Exam from './components/Exam';
import Clubs from './components/Clubs';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/StudentPage' element={<StudentPage />} />
      <Route path='/TeacherPage' element={<TeacherPage />} />
      <Route path='/StudentBoard' element={<StudentBoard />} />
      <Route path='/TeacherBoard' element={<TeacherBoard />} />
      <Route path='/Subject' element={<Subject />} />

      <Route path='/Math' element={<Math />} />
      <Route path='/Physics' element={<Physics />} />
      <Route path='/Chemistry' element={<Chemistry />} />
      <Route path='/Azerbaijani' element={<Azerbaijani />} />

      <Route path='/AttendanceMath' element={<AttendanceMath />} />
      <Route path='/AttendancePhysics' element={<AttendancePhysics />} />
      <Route path='/AttendanceChemistry' element={<AttendanceChemistry />} />
      <Route path='/AttendanceAzerbaijani' element={<AttendanceAzerbaijani />} />

      <Route path='/KsqMath' element={<KsqMath />} />
      <Route path='/KsqPhysics' element={<KsqPhysics />} />
      <Route path='/KsqChemistry' element={<KsqChemistry />} />
      <Route path='/KsqAzerbaijani' element={<KsqAzerbaijani />} />


      <Route path='/Classes' element={<Classes />} />


      <Route path='/Attendance' element={<Attendance />} />
      <Route path='/Ksq' element={<Ksq />} />
      <Route path='/Exam' element={<Exam />} />
      <Route path='/Clubs' element={<Clubs />} />
      
    </Routes>
  );
}

export default App;
