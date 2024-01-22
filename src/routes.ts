import { Router } from "express";
import { CreateUserController } from "./modules/user/controllers/CreateUserController";
import { ListUsersController } from "./modules/user/controllers/ListUsersController";
import { UpdateUserController } from "./modules/user/controllers/UpdateUserController";
import { DeleteUserController } from "./modules/user/controllers/DeleteUserController";
import { FindUserController } from "./modules/user/controllers/FindUserController";
import { UserAuthController } from "./modules/auth/controllers/UserAuthController";
import { authGuard } from "./middlewares/AuthGuard";

const router = Router();

router.get("/user", authGuard, new ListUsersController().handle);
router.get("/user/:id", authGuard, new FindUserController().handle);
router.put("/user/:id", authGuard, new UpdateUserController().handle);
router.delete("/user/:id", authGuard, new DeleteUserController().handle);
router.post("/user", new CreateUserController().handle);
router.post("/user/auth", new UserAuthController().handle);

export { router };
