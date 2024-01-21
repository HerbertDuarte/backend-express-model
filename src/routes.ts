import { Router } from "express";
import { CreateUserController } from "./modules/user/controllers/CreateUserController";
import { ListUsersController } from "./modules/user/controllers/ListUsersController";
import { UpdateUserController } from "./modules/user/controllers/UpdateUserController";
import { DeleteUserController } from "./modules/user/controllers/DeleteUserController";
import { FindUserController } from "./modules/user/controllers/FindUserController";
import { UserAuthController } from "./modules/auth/controllers/UserAuthController";
import { verifyToken } from "./middlewares/verifyToken";

const createUserControler = new CreateUserController();
const listUsersController = new ListUsersController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const findUserController = new FindUserController();
const userAuthController = new UserAuthController()

const router = Router();

router.get("/user", verifyToken, listUsersController.handle);
router.get("/user/:id", verifyToken, findUserController.handle);
router.post("/user", createUserControler.handle);
router.put("/user/:id",verifyToken, updateUserController.handle);
router.delete("/user/:id",verifyToken, deleteUserController.handle);
router.post("/user/auth", userAuthController.handle);

export { router };
