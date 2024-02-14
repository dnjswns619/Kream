import { useCallback, useState } from "react";

function ShowMoreBtn({showItem, setShowItem, data}) {
  const showMore = useCallback((e) => {
    console.log(showItem)
    if(showItem % 4 === 0) {
      setShowItem(showItem + 4);
    } else {
      setShowItem(showItem + 5);
    }
    if(showItem + 5 === data.length || showItem + 4 > data.length) {
      e.target.remove();
    }
  })
  return (
    <button onClick={showMore} className="showMore-btn">더보기</button>
  )
}

export default ShowMoreBtn;