import express from "express";
import cors from "cors";
import dataRoutes from "./routes/dataRoutes.routes.js";

class Server {
  // Use the constructor to create an instance of express and use the class methods.
  constructor() {
    this.app = express();
    this.server();
    this.middlewares();
    this.routes();
  }

  // Create a middlewares method.
  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    // CORS added
    this.app.use(
      cors({
        origin: [
          "http://localhost:3000",
          "http://localhost/",
          /\.localhost\.$/,
        ],
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      })
    );
  }

  // Create a method to use the different routes of the app.
  routes() {
    this.app.use("/", dataRoutes);
  }

  // Create a method to start the server.
  server() {
    this.app.listen(3001, () => {
      console.log("Server listening on port 3001");
    });
  }
}

export default new Server();
