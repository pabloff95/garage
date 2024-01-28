import React from "react";
import ServiceCard from "../components/service-card";

class Services extends React.Component {
  render() {
    return (
      <div className="mt-[5vh]">
        <section className="my-5 py-3 w-full">
          <h1 className="w-80% mx-[10%] font-bold text-3xl my-3">
            Nuestros servicios
          </h1>
        </section>
        <section className="my-5 w-full">
          <div className="w-80% mx-[10%]">
            <p>
              Descubre nuestros servicios especializados, nuestro equipo
              altamente capacitado se esfuerza por brindar soluciones eficientes
              y cuidados de calidad. Explora las opciones a continuación para
              mantener tu automóvil en las mejores condiciones posibles.
            </p>
          </div>
        </section>
        <section className="my-10 w-full">
          <div className="w-80% mx-[10%] flex flex-col gap-6">
            <ServiceCard
              title="Mecánica"
              text="Ofrecemos servicios de mecánica para mantener tu vehículo en óptimas condiciones. Desde afinaciones hasta reparaciones de motor, nuestro equipo altamente capacitado resuelve cualquier problema con eficiencia y precisión."
              isEven={false}
              img={{
                src: "/images/pages/services/car.png",
                alt: "Imagen de un coche tradicional",
              }}
            >
              <p>
                En nuestra sección de mecánica, nos especializamos en
                proporcionar soluciones eficientes y confiables para el
                mantenimiento de tu vehículo. Contamos con un equipo de
                profesionales altamente capacitados dedicados a realizar
                diagnósticos precisos y resolver cualquier problema que pueda
                afectar el rendimiento de tu automóvil.
              </p>

              <p>
                Desde simples afinaciones hasta reparaciones complejas de motor
                y servicios de transmisión, nuestro taller mecánico ofrece una
                amplia gama de servicios. Utilizamos tecnología de vanguardia y
                herramientas especializadas para garantizar la calidad en cada
                intervención. Además, trabajamos exclusivamente con piezas de
                repuesto originales y seguimos rigurosos estándares de la
                industria para mantener la integridad de tu vehículo.
              </p>

              <p>
                En nuestro taller, nos enorgullece la transparencia y la
                atención personalizada. Nuestro compromiso es brindar un
                servicio de mecánica automotriz excepcional, asegurando que tu
                vehículo reciba el cuidado que merece. Contáctanos hoy para
                programar una cita y confía en nosotros para mantener tu
                automóvil en óptimas condiciones.
              </p>
            </ServiceCard>
            <ServiceCard
              title="Cambio de aceite"
              text="Nuestro servicio de cambio de aceite, rápido y eficiente, utiliza productos de alta calidad. No solo reemplazamos el aceite, sino que también verificamos y, si es necesario, reemplazamos el filtro, asegurando un motor saludable."
              isEven={true}
              img={{
                src: "/images/pages/services/oil.png",
                alt: "Imagen de un bidón de aceite",
              }}
            >
              <p>
                Nuestro servicio de cambio de aceite es esencial para el
                mantenimiento preventivo de tu vehículo, asegurando un
                rendimiento óptimo y una vida útil prolongada del motor. En
                Talleres Motec, entendemos la importancia de un adecuado cambio
                de aceite para preservar la salud de tu motor y garantizar un
                funcionamiento suave.
              </p>
              <p>
                Nuestros profesionales altamente capacitados llevarán a cabo el
                cambio de aceite de manera rápida y eficiente, utilizando
                productos de la más alta calidad. No solo nos encargamos de
                reemplazar el aceite, sino que también verificamos y, si es
                necesario, reemplazamos el filtro de aceite para mantener la
                pureza del lubricante y garantizar una lubricación efectiva de
                las piezas del motor.
              </p>
              <p>
                Nos enorgullece la atención meticulosa a los detalles. Ya sea
                que tu vehículo requiera aceites convencionales o sintéticos,
                puedes confiar en nosotros para realizar el cambio de aceite de
                manera profesional y cuidadosa. Contáctanos hoy para programar
                tu servicio de cambio de aceite y asegúrate de que tu motor
                funcione en las mejores condiciones posibles.
              </p>
            </ServiceCard>
            <ServiceCard
              title="Servicio de neumáticos"
              text="Proporcionamos un servicio integral de neumáticos, desde la elección adecuada hasta instalaciones, rotaciones y reparaciones. Con asesoramiento profesional y opciones para todos los presupuestos, mantenemos tus neumáticos en las mejores condiciones."
              isEven={false}
              img={{
                src: "/images/pages/services/wheel.png",
                alt: "Imagen del neumático de un coche",
              }}
            >
              <p>
                En nuestro taller, ofrecemos un servicio integral de neumáticos
                diseñado para garantizar la seguridad y el rendimiento óptimo de
                tu vehículo. Sabemos que los neumáticos son un componente
                crítico para la conducción segura, por lo que nos dedicamos a
                proporcionar soluciones expertas y eficientes para tus
                necesidades de neumáticos.
              </p>
              <p>
                Nuestros profesionales altamente capacitados pueden asesorarte
                sobre la elección de neumáticos adecuada para tu vehículo y
                estilo de conducción. Ofrecemos servicios que van desde la
                instalación y rotación de neumáticos hasta reparaciones y
                alineación de ruedas. Utilizamos equipos modernos y técnicas
                precisas para asegurar que tus neumáticos estén en las mejores
                condiciones posibles.
              </p>
              <p>
                En Talleres Motec, nos enorgullece la calidad de nuestro
                servicio de neumáticos. Trabajamos con marcas reconocidas y
                ofrecemos opciones para todos los presupuestos. Si necesitas
                nuevos neumáticos, reparaciones o simplemente un chequeo de
                rutina, estamos aquí para ayudarte. Contáctanos hoy y deja que
                nuestros expertos cuiden de tus neumáticos.
              </p>
            </ServiceCard>
            <ServiceCard
              title="Mantenimiento"
              text="Nuestro servicio de mantenimiento preventivo, con inspecciones exhaustivas y ajustes, preserva la confiabilidad a lo largo del tiempo. Utilizamos herramientas avanzadas y seguimos protocolos rigurosos para garantizar la integridad y el rendimiento continuo de tu vehículo."
              isEven={true}
              img={{
                src: "/images/pages/services/gear_tool.png",
                alt: "Imagen de herramientas",
              }}
            >
              <p>
                Nuestro servicio de mantenimiento está diseñado para preservar
                la confiabilidad y eficiencia de tu vehículo a lo largo del
                tiempo. Reconocemos la importancia del mantenimiento preventivo
                para evitar problemas costosos y garantizar un rendimiento
                constante.
              </p>
              <p>
                Nuestros expertos en mantenimiento llevan a cabo inspecciones
                exhaustivas de tu automóvil, abordando aspectos como cambios de
                fluidos, revisión de frenos, sistema de dirección y más.
                Realizamos ajustes y reemplazamos piezas desgastadas para
                prevenir averías y maximizar la vida útil de tu vehículo.
              </p>
              <p>
                En nuestro taller nos destacamos por nuestra atención meticulosa
                a cada detalle durante el servicio de mantenimiento. Utilizamos
                herramientas avanzadas y seguimos los protocolos recomendados
                por los fabricantes para garantizar la integridad de tu
                vehículo. Programa una cita con nosotros y confía en nuestro
                equipo para mantener tu automóvil en excelentes condiciones a lo
                largo del tiempo.
              </p>
            </ServiceCard>
          </div>
        </section>
      </div>
    );
  }
}

export default Services;
