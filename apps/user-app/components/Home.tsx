import React from "react";
import Link from "next/link";
import { TextEffect } from "../lib/TextEffect";
import { InView } from "../lib/Inview";

export const Home = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <img
              src="/ecommerce_market.jpg"
              width="800"
              height="600"
              alt="Hero Product"
              className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  <TextEffect>
                    Elevate Your Style with Our Premium Collection
                  </TextEffect>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Discover the perfect blend of quality, design, and
                  craftsmanship in our carefully curated ecommerce collection.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </section>
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="flex flex-row-reverse justify-evenly items-center">
              <div className="group grid gap-2">
                <img
                  src="/stylishShirt.jpg"
                  width="300"
                  height="300"
                  alt="Featured Product 1"
                  className="aspect-square overflow-hidden rounded-xl object-cover object-center transition-all group-hover:scale-105"
                />
                <h3 className="text-lg font-medium">Stylish Shirt</h3>
              </div>
              <div className="group grid gap-2">
                <img
                  src="/elegantDress.jpg"
                  width="300"
                  height="300"
                  alt="Featured Product 2"
                  className="aspect-square overflow-hidden rounded-xl object-cover object-center transition-all group-hover:scale-105"
                />
                <h3 className="text-lg font-medium">Elegant Dress</h3>
              </div>
              <div className="group grid gap-2">
                <img
                  src="/comfortablePants.jpg"
                  width="300"
                  height="300"
                  alt="Featured Product 3"
                  className="aspect-square overflow-hidden rounded-xl object-cover object-center transition-all group-hover:scale-105"
                />
                <h3 className="text-lg font-medium">Comfortable Pants</h3>
              </div>
            </div>
          </section>
        </InView>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Acme Ecommerce. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
};
