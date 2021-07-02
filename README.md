# Developing

1. Install dependencies: ```npm i```
2. Add a DB (postgres) connection string in ```.env```
3. Migrate the DB schema: ```npx prisma migrate dev```
4. Run the API server in dev mode: ```npm run start:dev```

You can now access the API server at [localhost:3001](http://localhost:3001) and the Prisma visual data browser at [localhost:5000](http://localhost:5000).

