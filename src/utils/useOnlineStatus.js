import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
      console.log("gg");
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
      console.log("ff");
    });
  });

  return onlineStatus;
};
export default useOnlineStatus;
