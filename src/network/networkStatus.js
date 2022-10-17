import { showStatus } from "./showStatus";

export const networkStatus = () => {
 return window.addEventListener("load", () => {
    //set internet status when page will load
    navigator.onLine
      ? showStatus(true, "You Are Online")
      : showStatus(false, "You Are Offline");

      window.addEventListener('online',()=>{
       showStatus(true, "You Are Online Back");
      })

      window.addEventListener('offline',()=>{
        showStatus(false, "Connection Lost");
      });
  });
};
