import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "1knldg5k",
  dataset: "production",
  apiVersion: "2023-10-01",
  token: "skkYApFlMu6q7mNibw2WSx3M3YtdHv2r3WTTJrQm9bddZjF5wcPv2GSaRwFeAr4efNOOTHYGrjuIhxpJacYdW0HyNsdcUTnD0wc2S0FxsEKP6bzfvQXp2sL8BoG9lPaBcHbrr8Bs2XQyefIkDIFq7dahbQfg2KW2uLg57vscJdQHoNWJPu5p",
  useCdn: false
});

export default client