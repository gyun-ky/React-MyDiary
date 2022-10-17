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

  const [data, setData] = useState([]);

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
    setData([newItem, ...data])
  }

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다`)
    const newDiaryList = data.filter((it) => it.id !== targetId);
    console.log(newDiaryList)
    setData(newDiaryList);
  }

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) => 
        it.id === targetId ? {...it, content:newContent} : it
      )
    )
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit}/>
    </div>
  );
}

export default App;
