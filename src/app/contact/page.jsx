"use client";

import { Button, Link } from "@nextui-org/react";
import Facebook_logo from "../components/LogosSVG/Facebook_logo";
import WhatsApp_Logo from "../components/LogosSVG/WhatsApp_Logo";

function Contact() {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 text-center rounded-md mx-14">
          <div className="relative bg-gray-200 shadow-lg p-8 rounded-lg">
            <p className="text-xl font-bold">
              ¡Hola! ¿Tienes alguna duda? ¡Contáctanos!
            </p>
          </div>
        </div>

        <Button
          as={Link}
          href="https://api.whatsapp.com/send?phone=525551029624&text=Hola%20Me%20gustaria%20tener%20mas%20informacion%20acerca%20de%20sus%20servicios%20"
          color="success"
          className="col-span-2 shadow-lg">
          <WhatsApp_Logo />
          Contactanos por WhatsApp
        </Button>

        <Button
          as={Link}
          href="https://www.facebook.com/allit.mx"
          color="primary"
          className="col-span-2 shadow-lg">
          <Facebook_logo /> Contactanos por Facebook
        </Button>
      </div>
    </div>
  );
}

export default Contact;
