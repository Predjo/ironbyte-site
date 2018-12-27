import * as express from "express";
import * as next from "next";

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const PORT = 3000;

const server = express();

nextApp.prepare().then(() => {
  // bodyParser is needed just for POST.

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, err => {
    if (err) {
      throw err;
    }
    /* tslint:disable no-console */
    console.log(`Ready on http://localhost:${PORT}`);
  });
});
