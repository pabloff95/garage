import React from "react";
import ServiceCard from "../components/service-card";
import Title from "../components/basic-elements/title";

class Services extends React.Component {
  render() {
    return (
      <div className="mt-[5vh]">
        <section className="py-3 sm:py-5 w-full">
          <Title text="Nuestros servicios"></Title>
        </section>
        <section className="py-1 sm:py-3 w-full">
          <div className="w-80% mx-[10%]">
            <p className="paragraph">
              Descubre nuestros servicios especializados, nuestro equipo
              altamente capacitado se esfuerza por brindar soluciones eficientes
              y cuidados de calidad. Explora las opciones a continuación para
              mantener tu automóvil en las mejores condiciones posibles.
            </p>
          </div>
        </section>
        <section className="py-3 w-full">
          <div className="w-80% mx-[10%] flex flex-col gap-6 sm:gap-12">
            <ServiceCard
              title="Servicio de inspección"
              text="Ofrecemos un servicio completo de revisión del estado del vehículo, tanto si estás considerando comprarlo como venderlo. Realizamos una inspección detallada y te proporcionamos un asesoramiento exhaustivo sobre el estado del coche, ayudándote a tomar decisiones informadas y seguras. Confía en nosotros para garantizar que tu transacción sea transparente y sin sorpresas."
              img={{
                src: "images/pages/services/car.png",
                alt: "Imagen del servicio de inspección",
              }}
            ></ServiceCard>
            <ServiceCard
              title="Revision del vehículo"
              text="Realizamos revisiones completas de cambio de aceite y demás filtros, asegurando el óptimo rendimiento de tu vehículo. Utilizamos el lubricante Castrol, que consideramos uno de los mejores del mercado, junto con las mejores marcas de recambio para garantizar la máxima calidad. Confía en nosotros para mantener tu coche en perfecto estado y prolongar su vida útil."
              img={{
                src: "images/pages/services/car.png",
                alt: "Imagen de revisión del vehículo",
              }}
            ></ServiceCard>
            <ServiceCard
              title="Servicio ITV"
              text="Realizamos todos los pasos necesarios para que pases la ITV sin problemas, revisando a fondo frenos, suspensiones, dirección, neumáticos, luces, emisiones de gases de escape, dirección, posibles holguras de componentes que afecten la seguridad del vehículo, y pérdidas de fluidos por los bajos de la carrocería. Nos aseguramos de que tu vehículo cumpla con todas las normativas vigentes. Además, ofrecemos el servicio de pasar la ITV por ti con un coste adicional."
              img={{
                src: "images/pages/services/oil.png",
                alt: "Imagen de servicios de ITV",
              }}
            ></ServiceCard>
            <ServiceCard
              title="Servicio de neumáticos"
              text="Ofrecemos un servicio completo de cambio de neumáticos de todas las medidas, adaptándonos a tus necesidades específicas. Además, equilibramos cada neumático para garantizar una conducción segura y cómoda, y te asesoramos sobre la mejor rueda según tu uso diario. Trabajamos siempre con las principales marcas, asegurando la máxima calidad y rendimiento. Confía en nosotros para mantener tu vehículo en óptimas condiciones."
              img={{
                src: "images/pages/services/wheel.png",
                alt: "Imagen del neumático de un coche",
              }}
            ></ServiceCard>
            <ServiceCard
              title="Aire acondicionado"
              text="Llevamos a cabo el proceso completo de extracción,comprobación de estanqueidad, y sustitución de gas en sistemas de aire acondicionado. Nuestro equipo altamente capacitado garantiza un servicio de calidad utilizando los gases R134a y R1234yf, con la maquinaria necesaria para un trabajo eficiente y respetuoso con el medio ambiente."
              img={{
                src: "images/pages/services/gear_tool.png",
                alt: "Imagen de servicio de aire acondicionado",
              }}
            ></ServiceCard>
            <ServiceCard
              title="Servicio de distribución"
              text="Es fundamental informarse sobre el intervalo de sustitución de la correa de distribución y periféricos como la bomba de agua, rodillos y tensores. Estos componentes son esenciales para el funcionamiento del motor, y su desgaste puede provocar una avería grave, incluyendo la rotura del motor. Mantén tu vehículo en óptimas condiciones y evita costosos problemas realizando un mantenimiento adecuado y a tiempo."
              img={{
                src: "images/pages/services/gear_tool.png",
                alt: "Imagen de servicio de distribución",
              }}
            ></ServiceCard>
          </div>
        </section>
      </div>
    );
  }
}

export default Services;
