import { DynamicImageSection } from "../components/DynamicImage";
import { FullImageSection } from "../components/FullImageSection";
import { Hero } from "../components/HeroImage";
import { InfoSection } from "../components/InfoSection";
import { SectionTitle } from "../components/SectionTitle";
import { PricingSection } from "../components/PricingSection";
import { FaqSection } from "../components/FaqSection";
import { ContactSection } from "../components/ContactSection";

export const PhotographyBudget = () => {
  return (
    <>
      <Hero
        src="/couple-443600_1280.jpg"
        title="Dario Alvarez"
        subtitle="Fotografía documental de bodas"
        btnText="VER SERVICIOS"
      />
      <InfoSection
        image="https://images.unsplash.com/photo-1522673607200-164d1b6ce486"
        title="El Servicio"
        description={
          <>
            Cada boda es única, y mi trabajo es contarla de forma auténtica.{" "}
            <br />
            <br />
            Me enfoco en capturar los momentos reales: miradas cómplices, risas
            nerviosas, abrazos sinceros y todos esos detalles que muchas veces
            pasan desapercibidos, pero que hacen que el día sea inolvidable.
          </>
        }
        ctaText="RESERVAR FECHA"
      />
      <DynamicImageSection image="/couple-8176869_1280.jpg" />
      <FullImageSection src="/woman-4081760_1280.jpg" />

      <SectionTitle title="SERVICIOS" />

      <PricingSection
        title="“Cobertura Esencial”"
        image="/bride-and-groom-6623379_1280.jpg"
        price="$150.000 ARS"
        description={
          <>
            Ideal para ceremonias íntimas y celebraciones pequeñas. <br />
            <br />
            Registro completo de los momentos más importantes, con una mirada
            natural y espontánea. <br />
            <br />
            Incluye por ejemplo: <br />
            - Cobertura de ceremonia <br />
            - Sesión breve de pareja <br />
            - Entrega de fotos editadas en alta calidad <br />- Galería online
            privada
          </>
        }
        priceLabel="Desde"
        ctaText="RESERVAR FECHA"
      />

      <PricingSection
        title="“Historia Completa”"
        image="/cake-845749_1280.jpg"
        price="$230.000 ARS"
        reverse
        description={
          <>
            Pensado para parejas que quieren revivir su boda una y otra vez.{" "}
            <br />
            <br />
            Desde los preparativos hasta la fiesta, cada instante queda
            documentado con una estética cuidada. <br />
            <br />
            Incluye por ejemplo: <br />
            - Cobertura desde preparativos hasta fiesta <br />
            - Sesión de pareja extendida <br />
            - Fotos editadas en alta calidad <br />
            - Galería online privada <br />- Adelanto de fotos a las 48 hs
          </>
        }
        priceLabel="Desde"
        ctaText="RESERVAR FECHA"
      />

      <FaqSection
        items={[
          {
            question: "¿Con cuánta anticipación debemos reservar?",
            answer:
              "Recomendamos reservar con al menos 3 a 6 meses de anticipación, especialmente en temporada alta de bodas. Las fechas se confirman con una seña.",
          },
          {
            question: "¿Cuántas fotos se entregan?",
            answer:
              "La cantidad varía según la cobertura, pero siempre recibirán una selección completa y cuidada que cuente la historia de su día de principio a fin.",
          },
          {
            question: "¿Cuánto tarda la entrega final?",
            answer:
              "El plazo de entrega suele ser de 3 a 5 semanas. También se envía un adelanto de algunas imágenes pocos días después del evento.",
          },
          {
            question: "¿Las fotos se entregan editadas?",
            answer:
              "Sí, todas las imágenes entregadas pasan por un proceso de edición profesional para asegurar una estética uniforme, natural y atemporal.",
          },
        ]}
      />

      <ContactSection
        title="¿Listos para contar su historia?"
        subtitle="Escriban para consultar disponibilidad, recibir más información o coordinar una reunión."
        links={[
          { label: "WHATSAPP", href: "https://wa.me/549XXXXXXXXXX" },
          { label: "INSTAGRAM", href: "https://instagram.com/usuario" },
          { label: "EMAIL", href: "mailto:mail@fotografo.com" },
        ]}
      />
    </>
  );
};
