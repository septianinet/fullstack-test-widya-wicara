import "core-js/stable";
import "regenerator-runtime/runtime";
import express from "express";
import methodOverride from 'method-override';
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import usersRouter from "./modules/users/users.route";
import authRouter from "./modules/auth/auth.route";
import productRouter from "./modules/products/product.route";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));
app.use(methodOverride('_method'))
app.get('/', (req,res,next) => {
  res.send('Welcome to Flowery API')
})
app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use('/products', productRouter);

export default app;
