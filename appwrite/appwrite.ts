import { Client, Account, ID } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("65785148c06cfa77618c"); // Your project ID

export const account = new Account(client);



