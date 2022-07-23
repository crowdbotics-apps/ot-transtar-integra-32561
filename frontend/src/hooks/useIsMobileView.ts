import { useEffect, useState } from "react";

const isMobile = () =>
  window.innerWidth <= 640 || /Mobi/.test(navigator.userAgent);
export function useIsMobileView() {
  const [isMobileView, setIsMobileView] = useState<boolean>(isMobile());

  function onResize() {
    setIsMobileView(isMobile());
  }
  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isMobileView;
}
export default useIsMobileView;
