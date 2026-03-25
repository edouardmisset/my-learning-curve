/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    starlightRoute: import('@astrojs/starlight/route-data').StarlightRouteData
  }
}
