import { Router } from "express";
import { CreateUserController } from "./modules/user/controllers/CreateUserController";
import { ListUsersController } from "./modules/user/controllers/ListUsersController";
import { UpdateUserController } from "./modules/user/controllers/UpdateUserController";
import { DeleteUserController } from "./modules/user/controllers/DeleteUserController";
import { FindUserController } from "./modules/user/controllers/FindUserController";
import { UserAuthController } from "./modules/auth/controllers/UserAuthController";
import { authGuard } from "./middlewares/AuthGuard";

const createUserControler = new CreateUserController();
const listUsersController = new ListUsersController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const findUserController = new FindUserController();
const userAuthController = new UserAuthController()

const router = Router();

router.post("/user", createUserControler.handle);
router.get("/user", authGuard, listUsersController.handle);
router.get("/user/:id", authGuard, findUserController.handle);
router.put("/user/:id",authGuard, updateUserController.handle);
router.delete("/user/:id",authGuard, deleteUserController.handle);
router.post("/user/auth", userAuthController.handle);

export { router };
