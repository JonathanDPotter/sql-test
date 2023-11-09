import { Request, Response, Router } from "express";
import path from "path";

const router = Router();

router.get("/", (_req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, "../static/index.html"))
);

router.get("/home", (_req: Request, res: Response) => {
  res.redirect("/");
});

router.get("/about", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../static/about.html"));
});

router.get("/healthcheck", (_req: Request, res: Response) =>
  res.sendStatus(200)
);

router.all("*", (_req: Request, res: Response) => {
  res.status(404).sendFile(path.join(__dirname, "../static/404.html"));
});

export default router;
