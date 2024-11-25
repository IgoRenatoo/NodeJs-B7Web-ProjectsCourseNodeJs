import { Request, Response } from "express";
import { getPet } from "../models/pets-models";

export const search = (req: Request, res: Response) => {
  const query = req.query.q?.toString() as string;
  const results = getPet.searchByName(query);
  res.render("pages/search", {
    banner: {
      title: `Animais da pesquisa`,
      url: "/images/search.jpg",
    },
    results,
    query
  });
};
