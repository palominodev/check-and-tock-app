import React from "react"

export const LayoutGestionProducto = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <section className="w-full h-full" >
      {children}
    </section>
  )
}