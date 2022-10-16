import DiaryItem from "./DiaryItem";

const DiaryList = ({ diaryList }) => {

    return (
    <div className="DairyList">
        <h2>일기 리스트</h2>
        <h4>{diaryList.length}개의 일기가 있습니다.</h4>
        <div>
            {diaryList.map((it, idx) => (  /* 고유한 키가 필요하다 할 때, idx를 사용해서 roop idx를 얻거나, props의 pk값을 key로 넣어준다 */
                <DiaryItem key={it.id} {...it}/>
            ))}
        </div>
    </div>
    );
};

DiaryList.defaultProps={
    diaryList: [],
}

export default DiaryList;