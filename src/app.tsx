import {createRoot} from "react-dom/client";
import FrontEnd from "./FrontEnd";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<FrontEnd />);