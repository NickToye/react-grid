import { useRef, useLayoutEffect, useState } from "react";

export default function useDimensions() {
  const ref = useRef();

  const [dimensions, setDimensions] = useState({});

  useLayoutEffect(() => {
    setDimensions(targetRef.current.getClientBoundingRect());
  }, []);

  return { ref, ...dimensions };
}
