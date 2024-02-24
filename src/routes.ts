import express, { Request, Response } from "express";
const router = express.Router();
router.use(express.json());
import { addUser, deleteUser, findUserByEmail, getUser, loginUser } from "./functions";

router.post('/findUser', async (req: Request, res: Response) => {
    const { email } = req.body;
    await findUserByEmail(email)
        .then(userId => {
            if (userId) {
                console.log("User id: " + userId);
            }
        })
});
router.post('/addUser', async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    await addUser({ username, email, password });
});
router.post('/loginUser', async (req: Request, res: Response) => {
    const { email, password } = req.body;
    await loginUser(email, password)
        .then(async user => {
            if (user) {
                console.log("Login successful user id: " + user);
            }
        })
});
router.post('/getUser', async (req: Request, res: Response) => {
    const { email } = req.body;
    await findUserByEmail(email)
        .then(async userId => {
            if (userId) {
                await getUser(userId)
                    .then(user => {
                        if (user) {
                            console.log(user);
                        }
                    })
            }
        })
});
router.post('/deleteUser', async (req: Request, res: Response) => {
    const { email } = req.body;
    await findUserByEmail(email)
        .then(async userId => {
            if (userId) {
                await deleteUser(userId);
            }
        })
});

export default router;