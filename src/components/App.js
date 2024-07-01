import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Sales from "../pages/Sales";
import displaySalesSection from "../utilis/display-sales-section";

class App extends React.Component {
  componentDidMount = () => {
    // Prevent "ResizeObserver loop limit exceeded" error from trigger. Read issue here: https://github.com/mui/material-ui/issues/36909. Error raised by value-card component
    window.addEventListener("error", (e) => {
      const errorsToIgnore = [
        "ResizeObserver loop completed with undelivered notifications.",
        "ResizeObserver loop limit exceeded",
      ];

      if (errorsToIgnore.includes(e.message)) {
        const resizeObserverErrDiv = document.getElementById(
          "webpack-dev-server-client-overlay-div"
        );
        const resizeObserverErr = document.getElementById(
          "webpack-dev-server-client-overlay"
        );
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute("style", "display: none");
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute("style", "display: none");
        }
      }
    });
  };

  render() {
    return (
      <HashRouter onUpdate={() => window.scrollTo(0, 0)}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="sobre-nosotros" element={<About />} />
            <Route path="servicios" element={<Services />} />
            {displaySalesSection() && (
              <Route path="ofertas" element={<Sales />} />
            )}
            <Route path="contacto" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    );
  }
}

export default App;
