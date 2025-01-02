# Recipe Generator with Different Implementation Approaches

This is a Next.js project that demonstrates different approaches to implementing an AI-powered recipe generator using OpenAI. The project showcases various implementation methods for handling AI responses and streaming data.

## Features

- Multiple implementation approaches:
  - **Vercel AI**: Using Vercel AI SDK for structured output
  - **Vercel AI Streamed**: Streaming implementation with Vercel AI SDK
  - **Custom Streaming**: Manual streaming implementation with structured output
  - **Synchronous**: Traditional synchronous API calls

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up your environment variables:
   Create a `.env.local` file with:
```env
OPENAI_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to explore the different implementations.

## Implementation Details

### Vercel AI
Uses the Vercel AI SDK with structured output for a clean, type-safe implementation.
- Path: `/vercel-ai`
- Features: Type-safe responses, structured output

### Vercel AI Streamed
Similar to Vercel AI but with streaming capabilities for real-time updates.
- Path: `/vercel-ai-streamed`
- Features: Real-time streaming, structured output

### Custom Streaming
A manual implementation of streaming responses with custom handling.
- Path: `/streaming`
- Features: Custom stream handling, partial JSON parsing

### Synchronous
Traditional synchronous API implementation for comparison.
- Path: `/synchronous`
- Features: Simple implementation, full response handling

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Vercel AI SDK](https://sdk.vercel.ai/docs) - AI response handling
- [OpenAI](https://openai.com/) - AI provider
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Zod](https://zod.dev/) - Schema validation

## Project Structure

```
app/
├── vercel-ai/          # Vercel AI implementation
├── vercel-ai-streamed/ # Streamed Vercel AI implementation
├── streaming/          # Custom streaming implementation
├── synchronous/        # Synchronous implementation
└── components/         # Shared components
```

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel AI SDK Documentation](https://sdk.vercel.ai/docs)
- [OpenAI API Documentation](https://platform.openai.com/docs)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
