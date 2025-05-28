import { useEffect } from "react";

// 페이지 타이틀 변경
const usePageTitle = (title) => {
  useEffect(() => {
    const $title = document.getElementById('title');
    $title.innerText = title;
  }, [title]);
};

export default usePageTitle;