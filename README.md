# BitePath
AI-powered bite-sized goal game: one goal, one illuminated action at a time.

## Local setup
1. Install Node.js 18.17+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and add your OpenAI API key.
4. Run `npm run dev` and open http://localhost:3000.

## Deploy
Designed for GitHub + Vercel. Add `OPENAI_API_KEY` (and optionally `OPENAI_MODEL`) as Vercel environment variables. Never commit `.env.local`.
