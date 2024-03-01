import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ch5Logo from "./assets/crestron-ch5-logo.png";
import "./App.css";
import { useAppSelector } from "./redux/hooks";
import { selectControlSystemOnline } from "./redux/state/controlSystem";

function App() {
    const [count, setCount] = useState(0);
    const controlSystemOnline = useAppSelector(selectControlSystemOnline);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
                <a
                    href="https://sdkcon78221.crestron.com/sdk/Crestron_HTML5UI/Content/Topics/Home.htm"
                    target="_blank"
                >
                    <img
                        src={ch5Logo}
                        className="logo ch5"
                        alt="crestron-ch5-logo"
                    />
                </a>
            </div>
            <h1>Vite + React + CH5</h1>
            <div className="card">
                <button
                    onClick={() => {
                        return setCount((count) => count + 1);
                    }}
                >
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <p>Control System {controlSystemOnline ? "Online" : "Offline"}</p>
        </>
    );
}

export default App;
