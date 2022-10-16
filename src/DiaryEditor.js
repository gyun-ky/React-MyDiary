import { useState, useRef } from "react";

const DiaryEditor = ({onCreate}) => {

    const authorInput = useRef();
    const contentInput = useRef();

    const [state, setState] = useState({
        author : "",
        content : "",
        emotion : 1,
    })


    const hanleChangeState = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);

        setState({
            ...state,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = () => {
        console.log(state);
        if(state.author.length < 1){
            alert("작성자는 최소 1글자 이상 입력해주세요")
            //focus
            authorInput.current.focus(); // ref 객체는 현재 가리키는 값을 current로 불러와서 사용할 수 있다
            return;
        }

        if(state.content.length < 5){
            alert("일기 본문은 최소 5글자 이상 입력해주세요")
            //focus
            contentInput.current.focus();
            return;
        }

        onCreate(state.author, state.content, state.emotion);
        alert("저장 성공");
        setState({
            author : "",
            content : "",
            emotion : 1,
        })
    }


    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input 
                    ref={authorInput}
                    value={state.author} 
                    name="author" 
                    onChange={hanleChangeState}/>
            </div>
            <div>
                <textarea 
                    ref={contentInput}
                    name="content" 
                    value={state.content} 
                    onChange={hanleChangeState}/>
            </div>
            <div>
                <select name="emotion" 
                    value={state.emotion} 
                    onChange={hanleChangeState}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}>일기 저장하기</button>
            </div>
        </div>
    );
}

export default DiaryEditor;