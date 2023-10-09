"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function NavBar({ currentPath }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Inicio", "Soporte", "Contacto"];
  const menuLinks = ["/", "/support", "/contact"];

  // Estilos para el enlace activo
  const activeLinkStyle = {
    color: "#007bff", // Cambia el color según tus preferencias
    fontWeight: "bold", // Cambia el estilo de fuente según tus preferencias
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">
            Soft<span className="text-blue-500">All</span>Reports
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              color={
                currentPath === menuLinks[index] ? "primary" : "foreground"
              }
              href={menuLinks[index]}>
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link className="text-gray-500" href="/register">
            Registrate
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/login" variant="flat">
            Iniciar Sesión
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                currentPath === menuLinks[index] ? "primary" : "foreground"
              }
              className="w-full"
              href={menuLinks[index]}
              size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
