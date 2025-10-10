"use client";

import React from "react";
import ProductCard from "./ProductCard";
import styles from "../styles/ProductList.module.css";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  slug: string;
};

const products: Product[] = [
  { id: 1, image: "/eNoris.jpg", name: "Intelligent Electric Geyser", price: 49.99, slug: "enoris-intelligent-electric-geyser" },
  { id: 2, image: "/Noris.png", name: "Intelligent Hybrid Geyser", price: 49.99, slug: "noris-intelligent-hybrid-geyser" },
  { id: 3, image: "/AirPurifier.jpg", name: "Intelligent Air Purifier", price: 79.99, slug: "intelligent-air-purifier" },
];

export default function ProductList() {
  return (
    <section id="products" className={styles.wrapper}>
      <h2 className={styles.heading}>Products</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <Link href={`/products/${product.slug}`} key={product.id}>
              <ProductCard
                name={product.name}
                price={product.price}
                image={product.image}
              />
          </Link>
        ))}
      </div>
    </section>
  );
}
