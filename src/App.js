import './App.css';
import { useState, useRef } from "react";
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  // {
  //   id:1,
  //   author:"김기윤",
  //   content:"hello",
  //   emotion:5,
  //   created_date: new Date().getTime()
  // },
  // {
  //   id:2,
  //   author:"임현종",
  //   content:"hello3",
  //   emotion:5,
  //   created_date: new Date().getTime()
  // },
  // {
  //   id:3,
  //   author:"이동준",
  //   content:"hello3",
  //   emotion:5,
  //   created_date: new Date().getTime()
  // },
  // {
  //   id:4,
  //   author:"노영석",
  //   content:"hello4",
  //   emotion:5,
  //   created_date: new Date().getTime()
  // },
]

function App() {

  const [data, setDate] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    }
    dataId.current += 1;
    setDate([newItem, ...data])
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList diaryList={data}/>
    </div>
  );
}

export default App;
