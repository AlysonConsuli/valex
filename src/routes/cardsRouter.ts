import { Router } from "express";

import { activateCard, createCard } from "../controllers/cardsController.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import { activateCardsSchema, cardsSchema } from "../schemas/cardsSchema.js";

const cardsRouter = Router();
cardsRouter.post("/cards/create/:id", validateSchema(cardsSchema), createCard);
cardsRouter.post(
  "/cards/activate/:id",
  validateSchema(activateCardsSchema),
  activateCard
);

export default cardsRouter;