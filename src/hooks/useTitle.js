import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = "Smart Resume -  " + title;
  });
};

export default useTitle;
