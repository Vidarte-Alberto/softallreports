// pages/about.js
"use client";
import { Button, Link } from "@nextui-org/react";
import React, { useState } from "react";

const Support = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-lg">
        <h1 className="text-3xl font-semibold mb-4">Soporte</h1>
        <p className="text-gray-700 justify-normal">
          Nuestro departamento de Soporte Técnico le brindará el apoyo necesario
          para resolver dudas o problemas que puedan presentarse en los sistemas
          por nosotros implementados. Un grupo de profesionales altamente
          capacitados en nuestros productos, dedicados a brindarle el mejor
          servicio y rápida respuesta a sus problemas. Cada caso o inconveniente
          es tratado a fondo por nuestros especialistas de soporte en primera
          instancia contando siempre con el apoyo de departamento de desarrollo
          década producto. Atención telefónica permanente e inmediata. Solicitud
          de servicios vía email:
        </p>

        <div className="mt-8">
          <div className="flex flex-col sm:flex-row justify-center">
            <Button
              as={Link}
              href="mailto:soporte1@allit.mx"
              className="block bg-blue-500 hover:bg-blue-600 text-white p-2 rounded text-center">
              ¡Da click en el botón para solictar ayuda!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
