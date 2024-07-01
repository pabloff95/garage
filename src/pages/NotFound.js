import React from "react";
import FaIcon from "../components/basic-elements/fa-icon";

class NotFound extends React.Component {
  render() {
    const location = window?.location;
    const urlsToRedirect = ["/garage/", "/garage"];
    if (urlsToRedirect.includes(location?.pathname)) {
      window.location = `${location?.origin}`;
    }

    return (
      <div className="h-[90vh]">
        <div className="h-full flex flex-col justify-center items-center gap-4">
          <div className="h-[30vh] w-[30vh] bg-primary-element rounded-full z-0 flex justify-center items-center">
            <FaIcon icon="xmark" className="h-[23vh] z-10 !opacity-100" />
          </div>
          <h1 className="font-bold text-3xl">Página no encontrada</h1>
        </div>
      </div>
    );
  }
}

export default NotFound;
