import { useState, useEffect } from "react";

export default function useDelay(delay = 500) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer1 = setTimeout(() => setShow(true), delay);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return show ? true : false;
}
