import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [mode, setMode] = useState("light");
  const [btnText, setBtnText] = useState("Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const handleModes = () => {
    if (myStyle.color === "white") {
      return (
        setMyStyle({
          color: "#212529",
          backgroundColor: "white",
        }),
        setMode("light"),
        setBtnText("Dark Mode"),
        showAlert("Light Mode Enabled!", "success")
      );
    } else {
      return (
        setMyStyle({
          color: "white",
          backgroundColor: "#212529",
        }),
        setMode("dark"),
        setBtnText("Light Mode"),
        showAlert("Dark Mode Enabled!", "success")
      );
    }
  };

  return (
    <div className="App">
      <NavBar
        title="TextUtils"
        btnText={btnText}
        mode={mode}
        handleModes={handleModes}
      />
      <Alert alert={alert} />
      <TextForm myStyle={myStyle} mode={mode} showAlert={showAlert} />
    </div>
  );
}

export default App;
