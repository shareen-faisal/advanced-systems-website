"use client";

import React from "react";
import styles from "../styles/ProductCard.module.css";

type ProductCardProps = {
  image: string;
  name: string;
  price: number;
};

export default function ProductCard({ image, name, price }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h4 className={styles.name}>{name}</h4>
      {/* <p className={styles.price}>PKR {price.toFixed(2)}</p> */}
    </div>
  );
}
