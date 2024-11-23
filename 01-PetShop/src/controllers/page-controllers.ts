import { Request, Response } from "express";
import { getPet } from "../models/pets-models";

export const home = (req: Request, res: Response) => {
  const list = getPet.getAll();
  res.render("pages/home", {
    banner: {
      title: "Todos os animais",
      url: "/images/allanimals.jpg",
    },
    list,
  });
};
export const dog = (req: Request, res: Response) => {
  res.render("pages/dog", {
    banner: {
      title: "Cachorro",
      url: "/images/banner_dog.jpg",
    },
  });
};
export const cat = (req: Request, res: Response) => {
  res.render("pages/cat", {
    banner: {
      title: "Gatos",
      url: "/images/banner_cat.jpg",
    },
  });
};
export const fish = (req: Request, res: Response) => {
  res.render("pages/fish", {
    banner: {
      title: "Peixes",
      url: "/images/banner_fish.jpg",
    },
  });
};
