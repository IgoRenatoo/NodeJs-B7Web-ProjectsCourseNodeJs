import { Request, Response } from "express";
import { getPet } from "../models/pets-models";

export const home = (req: Request, res: Response) => {
  const listAll = getPet.getAll();
  res.render("pages/home", {
    banner: {
      title: "Todos os animais",
      url: "/images/allanimals.jpg",
    },
    listAll
  });
};

export const dog = (req: Request, res: Response) => {
  const listDog = getPet.getDog()
  res.render("pages/dog", {
    banner: {
      title: "Cachorro",
      url: "/images/banner_dog.jpg",
    },
    listDog
  });
};

export const cat = (req: Request, res: Response) => {
  const listCat = getPet.getCat()
  res.render("pages/cat", {
    banner: {
      title: "Gatos",
      url: "/images/banner_cat.jpg",
    },
    listCat
  });
};

export const fish = (req: Request, res: Response) => {
  const listFish = getPet.getFish()
  res.render("pages/fish", {
    banner: {
      title: "Peixes",
      url: "/images/banner_fish.jpg",
    },
  });
};
