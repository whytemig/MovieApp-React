import { useEffect } from "react";

const useKey = (func, key) => {
  useEffect(() => {
    const callBack = (e) => {
      if (e.code === key) func();
    };

    document.addEventListener("keydown", callBack);

    return () => {
      document.removeEventListener("keydown", callBack);
    };
  }, [func, key]);
};

export default useKey;
