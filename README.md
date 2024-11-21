# What is Wovie?

Wovie is a web app for watching movies easily.

The web works by displaying video files from third-party providers inside an intuitive user interface.

## Running locally for development

To run locally, you must first clone the repository. After that run the following commands in the root of the repository:

```bash
pnpm install
pnpm run dev
```

You have to also make an `.env` file to configure your environment. [See guide to setup env](#how-to-get-env-variables).

## How to get env variables

### The Movie Database (TMDB) API Key

To get your TMDB_KEY:

- Go to [TMDB's website](https://www.themoviedb.org/).
- Sign up for an account if you don’t have one already.
- Once logged in, navigate to your account settings by clicking on your profile icon in the top-right corner.
- In the settings menu, select API (or go directly to TMDB API Settings).
- Click Create to generate a new API key. You might need to fill out a form describing your use case.
- Once approved, copy your API Key (v3 auth) into the TMDB_KEY variable.

### Turso Database URL and Auth Token

To get your `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN`:

- Visit [Turso](https://turso.tech/) and create an account if you don’t have one.
- After logging in, create a new database by following the instructions in the dashboard.
- Once the database is created, click on the 3 dots next to the database name and select "Create Token" and follow the instructions to create a new token.
- After token created, you will see the token and database variables.
  ![image](https://github.com/user-attachments/assets/6b603765-2022-4aba-bb40-d1439f433e1a)
- Copy the values and paste them into the `ASTRO_DB_APP_TOKEN` and `ASTRO_DB_REMOTE_URL` variables
  Example .env file

Here’s how your .env file should look:

```bash
ASTRO_DB_REMOTE_URL="libsql://*****************"
ASTRO_DB_APP_TOKEN="**************************"
```

### Better Auth

- `BETTER_AUTH_URL` is the URL of your website.
- `BETTER_AUTH_TRUSTED_ORIGINS` is the URL of your website.
- `BETTER_AUTH_SECRET` is a secret key that you can generate using [this tool](https://generate-random.org/encryption-key-generator).

Here’s how your .env file should look:

```bash
BETTER_AUTH_URL="https://wovie.vercel.app"
BETTER_AUTH_TRUSTED_ORIGINS="https://wovie.vercel.app"
BETTER_AUTH_SECRET="your-secret-key"
```

## Setting Environment Variables on Vercel

- Log in to Vercel: Go to Vercel's website and log in to your account.
- Open Your Project: Select the project you want to configure from the Vercel dashboard.
- Click on your project to open the settings.
- Navigate to Environment Variables
- Click Add to create a new environment variable.
- Enter the variable name (`TMDB_KEY`, `ASTRO_DB_APP_TOKEN`, `ASTRO_DB_REMOTE_URL`, etc.) in the Key field.
- Enter the corresponding value you obtained earlier in the Value field.
- Save Changes: Click Save after adding each variable
