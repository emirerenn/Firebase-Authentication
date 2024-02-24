# Firebase-Authentication
A nodejs project I made with TypeScript to learn Firebase.

- Before doing the following, you need to create a Firebase Database in Google Firebase and a collection called users in it.
- Install typescript, ts-node, nodemon globally on your computer.
```bash
npm i -g typescript ts-node nodemon
```
- Download the dependencies and development dependencies from the package.json file.
```bash
npm install
```

- Enter **Project Overview / Project Settings / Service accounts** and click the **Generate new Private key** **button in the Firebase SDK section.**
  - Then, a special JSON file will be downloaded to you. Change the name of this file to **serviceAccount.json** and **put it in the src folder in the project folder.**
- **In the firebaseInit.ts file**, write your own project id in the section where **your-project-id is written in the database URL section.** You can access this id from the **Project overview / Project settings page.**
- Finally, you can start the project using the commands below.
```bash
npm run dev
```
