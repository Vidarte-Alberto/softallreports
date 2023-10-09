"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-lg">
        <div className="grid grid-cols-2">
          <h1>SoftAllReports</h1>
          <span className="row-[3/4]">
            El mejor sistema de Reporteria de SoftRestaurant
          </span>
        </div>
      </div>
    </main>
  );
}
