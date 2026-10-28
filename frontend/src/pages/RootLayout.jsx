import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      {/* navbar */}
      <Outlet />
      {/* footer */}
    </>
  );
};

export default RootLayout;
