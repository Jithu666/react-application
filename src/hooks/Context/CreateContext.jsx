import React, { createContext } from "react";

export const ThemeContext = createContext("dark");

export const CounterContext = createContext(0);

export const TextContext = createContext("null");

export const NameContext = createContext(null);

// 02/09/2025

export const ValueContext = createContext();

export const ThemeContext1 = createContext();

export const themeConfig = {
  primaryColor: "bg-blue-800",
  secondaryColor: "bg-amber-500",
  fontSize: "80px",
};
