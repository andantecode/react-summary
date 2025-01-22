import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div className="grow py-[70px]">
            <Outlet />
        </div>
    );
}

export default Main;