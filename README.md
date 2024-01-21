# comandos de inicialização

npm init -y
npm i typescript @types/node @types/express tsx -D
npm i express sqlite3 
npm i prisma -D
npm prisma init --datasource-provider sqlite

# scripts

dev : tsx watch --env-file .env src/server.ts

// --env-file => serve para o typescript ler o .env do projeto. é necessário ter a versão do node acima da 20.6