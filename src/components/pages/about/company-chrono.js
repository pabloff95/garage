import React from "react";
import { Chrono } from "react-chrono";

class CompanyChrono extends React.Component {
  items = [
    {
      title: "Enero 2000",
      customCard: {
        title: "Fundación",
        subtitle: "Apertura de nuestro taller en Guarnizo",
        text: "Con pasión y dedicación, el 16 de enero del 2000, inauguramos nuestro taller, marcando el inicio de una trayectoria dedicada a la excelencia en el servicio y la satisfacción del cliente.",
      },
    },
    {
      title: "Mayo 2003",
      customCard: {
        title: "Expansión",
        subtitle: "Mejora de nuestras instalaciones",
        text: "En el 2003, dimos un gran paso hacia adelante al expandir nuestras instalaciones y adoptar tecnologías de vanguardia. La inversión en equipos de última generación nos permitió ofrecer servicios más eficientes y precisos, estableciendo un estándar elevado en la industria.",
      },
    },
    {
      title: "Febrero 2013",
      customCard: {
        title: "Reconocimiento",
        subtitle: "Premio al mejor taller de Cantabria",
        text: "En el 2010, nos sentimos honrados al recibir el reconocimiento de la comunidad por nuestro compromiso con la calidad y el servicio. Este logro nos motivó a redoblar nuestros esfuerzos, consolidando nuestra reputación como un taller confiable y orientado al cliente.",
      },
    },
    {
      title: "Enero 2020",
      customCard: {
        title: "Futuro",
        subtitle: "Transición hacia la sostenibilidad",
        text: "En el 2022, dimos un paso audaz hacia la sostenibilidad, implementando prácticas ecológicas en nuestro taller. Desde la gestión responsable de residuos hasta la adopción de tecnologías ecoamigables, estamos comprometidos con un futuro más limpio y responsable con el medio ambiente.",
      },
    },
  ];

  render() {
    return (
      <div className="h-fit w-100 chrono-main-container">
        <Chrono
          items={this.items.map(({ title }) => ({ title }))}
          mode="VERTICAL_ALTERNATING"
          disableClickOnCircle={true}
          disableInteraction={true}
          disableTimelinePoint={false}
          cardHeight={50}
          theme={{
            primary: "var(--primary-element)",
            secondary: "var(--primary-element)",
            titleColor: "var(--neutral-color-primary)",
            cardBgColor: "var(--page-bg-color)",
          }}
        >
          {this.items.map((item, index) => {
            const { title, subtitle, text } = item.customCard;

            return (
              <div
                className="chrono-custom-card"
                key={`chrono-custom-card-${index}`}
              >
                <p className="chrono-card-title">{title}</p>
                <p className="chrono-card-subtitle">{subtitle}</p>
                <p className="chrono-card-text">{text}</p>
              </div>
            );
          })}
        </Chrono>
      </div>
    );
  }
}

export default CompanyChrono;
