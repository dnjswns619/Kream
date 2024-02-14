import { useCallback, useState } from "react";

function ShowMoreBtn({showItem, setShowItem, data}) {
  const showMore = useCallback((e) => {
    setShowItem(showItem + 5);
    if(showItem + 5 === data.length) {
      e.target.remove();
    }
  })
  return (
    <button onClick={showMore} className="showMore-btn">더보기</button>
  )
}

export default ShowMoreBtn;