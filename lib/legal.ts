import type { Lang } from "./i18n";

type Section = { h: string; p: string[] };
type Doc = { title: string; updated: string; intro: string; sections: Section[] };

export const LEGAL: Record<"terms" | "privacy", Record<Lang, Doc>> = {
  terms: {
    en: {
      title: "Terms of Use",
      updated: "Last updated: June 2026",
      intro:
        "These Terms of Use govern your access to and use of the website of Flip Dynasty Holdings LLC, an Iowa-registered limited liability company. By accessing this website you agree to these terms.",
      sections: [
        {
          h: "About this website",
          p: [
            "This website provides general information about Flip Dynasty Holdings LLC and the consumer-goods and business-supply categories the company works with. It is an informational and business-contact website. No products are sold, priced, or ordered through this website.",
          ],
        },
        {
          h: "Business inquiries",
          p: [
            "Inquiries submitted through the contact form or by phone or email are received for the purpose of responding to product, supply, and commercial-account conversations. Submitting an inquiry does not create a binding order, supply agreement, or commercial relationship. Any commercial relationship is established separately through direct communication.",
          ],
        },
        {
          h: "Accuracy of information",
          p: [
            "Information on this website is provided for general reference and may change without notice. While we aim to keep content accurate and current, we make no warranty that the information is complete, error-free, or suitable for any particular purpose.",
          ],
        },
        {
          h: "Intellectual property",
          p: [
            "The content, design, text, and branding on this website are the property of Flip Dynasty Holdings LLC and may not be copied or reused without permission, except as allowed by applicable law.",
          ],
        },
        {
          h: "Limitation of liability",
          p: [
            "To the extent permitted by law, Flip Dynasty Holdings LLC is not liable for any damages arising from the use of, or inability to use, this website. Your use of the website is at your own risk.",
          ],
        },
        {
          h: "Contact",
          p: [
            "Questions about these terms can be directed to Flip Dynasty Holdings LLC at info@flipdynastyusa.com or +1 (641) 799-3953.",
          ],
        },
      ],
    },
    es: {
      title: "Términos de Uso",
      updated: "Última actualización: junio de 2026",
      intro:
        "Estos Términos de Uso rigen su acceso y uso del sitio web de Flip Dynasty Holdings LLC, una compañía de responsabilidad limitada registrada en Iowa. Al acceder a este sitio web usted acepta estos términos.",
      sections: [
        {
          h: "Sobre este sitio web",
          p: [
            "Este sitio web ofrece información general sobre Flip Dynasty Holdings LLC y las categorías de bienes de consumo y suministro comercial con las que trabaja la empresa. Es un sitio informativo y de contacto comercial. No se venden, cotizan ni ordenan productos a través de este sitio web.",
          ],
        },
        {
          h: "Consultas comerciales",
          p: [
            "Las consultas enviadas a través del formulario de contacto, por teléfono o por correo electrónico se reciben con el fin de responder a conversaciones sobre productos, suministro y cuentas comerciales. Enviar una consulta no crea un pedido vinculante, un acuerdo de suministro ni una relación comercial. Toda relación comercial se establece por separado mediante comunicación directa.",
          ],
        },
        {
          h: "Exactitud de la información",
          p: [
            "La información de este sitio web se proporciona como referencia general y puede cambiar sin previo aviso. Si bien procuramos mantener el contenido preciso y actualizado, no garantizamos que la información sea completa, esté libre de errores o sea adecuada para un fin particular.",
          ],
        },
        {
          h: "Propiedad intelectual",
          p: [
            "El contenido, diseño, texto y marca de este sitio web son propiedad de Flip Dynasty Holdings LLC y no pueden copiarse ni reutilizarse sin autorización, salvo lo permitido por la ley aplicable.",
          ],
        },
        {
          h: "Limitación de responsabilidad",
          p: [
            "En la medida permitida por la ley, Flip Dynasty Holdings LLC no es responsable por daños derivados del uso o la imposibilidad de uso de este sitio web. El uso del sitio es bajo su propio riesgo.",
          ],
        },
        {
          h: "Contacto",
          p: [
            "Las preguntas sobre estos términos pueden dirigirse a Flip Dynasty Holdings LLC en info@flipdynastyusa.com o al +1 (641) 799-3953.",
          ],
        },
      ],
    },
  },
  privacy: {
    en: {
      title: "Privacy Policy",
      updated: "Last updated: June 2026",
      intro:
        "This Privacy Policy explains how Flip Dynasty Holdings LLC handles information collected through this website.",
      sections: [
        {
          h: "Information we collect",
          p: [
            "We collect only the information you choose to provide through the contact form or by contacting us directly — typically your name, company, email address, inquiry type, and message. We do not sell personal information.",
          ],
        },
        {
          h: "How we use information",
          p: [
            "Information you submit is used solely to respond to your inquiry and to coordinate product, supply, and commercial-account conversations. We retain inquiry records only as long as needed for these purposes or as required by law.",
          ],
        },
        {
          h: "Sharing of information",
          p: [
            "We do not share your information with third parties except service providers that help us operate this website or respond to inquiries, or where required by law.",
          ],
        },
        {
          h: "Cookies and analytics",
          p: [
            "This website may use basic, privacy-respecting analytics to understand general usage. It does not require personal sign-in and does not build advertising profiles.",
          ],
        },
        {
          h: "Your choices",
          p: [
            "You may request that we update or delete the inquiry information you provided by contacting us at info@flipdynastyusa.com.",
          ],
        },
        {
          h: "Contact",
          p: [
            "Questions about this policy can be directed to Flip Dynasty Holdings LLC at info@flipdynastyusa.com or +1 (641) 799-3953.",
          ],
        },
      ],
    },
    es: {
      title: "Política de Privacidad",
      updated: "Última actualización: junio de 2026",
      intro:
        "Esta Política de Privacidad explica cómo Flip Dynasty Holdings LLC maneja la información recopilada a través de este sitio web.",
      sections: [
        {
          h: "Información que recopilamos",
          p: [
            "Solo recopilamos la información que usted decide proporcionar a través del formulario de contacto o al comunicarse con nosotros directamente — normalmente su nombre, empresa, correo electrónico, tipo de consulta y mensaje. No vendemos información personal.",
          ],
        },
        {
          h: "Cómo usamos la información",
          p: [
            "La información que envía se utiliza únicamente para responder a su consulta y coordinar conversaciones sobre productos, suministro y cuentas comerciales. Conservamos los registros de consultas solo durante el tiempo necesario para estos fines o según lo exija la ley.",
          ],
        },
        {
          h: "Compartir información",
          p: [
            "No compartimos su información con terceros, salvo con proveedores de servicios que nos ayudan a operar este sitio web o a responder consultas, o cuando la ley lo exija.",
          ],
        },
        {
          h: "Cookies y analítica",
          p: [
            "Este sitio web puede usar analítica básica y respetuosa de la privacidad para entender el uso general. No requiere inicio de sesión personal ni crea perfiles publicitarios.",
          ],
        },
        {
          h: "Sus opciones",
          p: [
            "Puede solicitar que actualicemos o eliminemos la información de consulta que proporcionó comunicándose con nosotros en info@flipdynastyusa.com.",
          ],
        },
        {
          h: "Contacto",
          p: [
            "Las preguntas sobre esta política pueden dirigirse a Flip Dynasty Holdings LLC en info@flipdynastyusa.com o al +1 (641) 799-3953.",
          ],
        },
      ],
    },
  },
};
