import { useRouteError } from "react-router-dom";
import BackButton from "../components/ui/BackButton";

const ErrorPage = () => {
  const error = useRouteError();
  // console.log(error);
  return (
    <div className="grid space-y-4 place-items-center">
      <h1 className="text-8xl">{error?.status || "Oops!"}</h1>
      <p className="text-red-600">
        {error?.message || "Something went wrong"}!
      </p>
      <BackButton />
    </div>
  );
};

export default ErrorPage;
