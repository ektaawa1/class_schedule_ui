import './App.css';
import { ClassFooter } from './components/ClassFooter';
import { ClassHeader } from './components/ClassHeader';
import { ClassSchedule } from './components/ClassSchedule';

function App() {

  const isClassSchedule = true;
  const isSpringBreak = false;
  const isSummerBreak = true
  return (
    <div className="App">
      Hello from class-schedule-ui
      <ClassHeader 
      isClassSchedule = {isClassSchedule}
      isSpringBreak = {isSpringBreak}
      isSummerBreak = {isSummerBreak}
      />
      <ClassSchedule 
      isSpringBreak = {isSpringBreak}
      isSummerBreak = {isSummerBreak}
      />
      <ClassFooter 
      isClassSchedule = {isClassSchedule}
      isSpringBreak = {isSpringBreak}
      isSummerBreak = {isSummerBreak}
      />
    </div>
  );
}

export default App;
