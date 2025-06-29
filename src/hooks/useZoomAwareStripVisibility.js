import { useEffect, useState } from "react";

export function useZoomAwareStripVisibility(maxZoomPercent = 125) {
  const [isAllowed, setIsAllowed] = useState(true);

  useEffect(() => {
    const checkZoom = () => {
      const zoomLevel = Math.round(window.devicePixelRatio * 100);
      setIsAllowed(zoomLevel <= maxZoomPercent);
    };

    checkZoom();
    window.addEventListener("resize", checkZoom);
    return () => window.removeEventListener("resize", checkZoom);
  }, [maxZoomPercent]);

  return isAllowed;
}
