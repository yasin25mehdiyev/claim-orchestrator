# Claim Orchestrator — AI-Powered Claim Tracking Dashboard

A high-performance, fully responsive dashboard built for an insurance company to transform their traditional claim tracking process into a proactive, self-service digital experience.

---

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## Tech Stack

| Category           | Technology                     |
| ------------------ | ------------------------------ |
| Framework          | Next.js 14 (App Router)        |
| Language           | TypeScript (strict)            |
| Styling            | Tailwind CSS v4 + shadcn/ui    |
| State Management   | Zustand (slice pattern)        |
| Data Fetching      | TanStack React Query           |
| Validation         | Zod (API response + form)      |
| Animations         | Framer Motion                  |
| Component Variants | Class Variance Authority (CVA) |
| Theme              | next-themes (dark/light mode)  |

---

## Architecture & Design Decisions

### Registry Pattern + Discriminated Union

The core architectural challenge was rendering heterogeneous `processDetails` nodes — each with a different data shape — without `if/else` clusters. The solution combines two patterns:

- **Discriminated Union** (Zod + TypeScript) — each node is typed by its `title` field, enabling full type safety and exhaustive checks
- **Registry Pattern** (Component Map) — a `nodeRegistry` maps each node title to its corresponding React component. Adding a new node type requires only registering it in the map — no existing code changes

```ts
type NodeRegistry = {
  [K in NodeTitle]: React.FC<{ data: Extract<ClaimNode, { title: K }> }>;
};
```

### Token System

All design tokens live in `globals.css` as CSS variables — primitives, semantic tokens (shadcn), and status tokens (claim-specific). Tailwind's `@theme` directive maps them to utility classes. Every color, spacing, and radius value flows from a single source of truth.

### Slice Pattern (Zustand)

Store is split into independent slices (`claimSlice`, `aiSlice`, `dynamicNodesSlice`) composed at the root. Each slice owns its state and actions — making the store modular, testable, and scalable.

### Component Architecture

```
components/
├── ui/          — shadcn primitives (Button, Typography, Skeleton)
├── shared/      — reusable domain components (StatusBadge, FieldItem, AiAssistant)
│   ├── field/
│   ├── status/
│   ├── ai-assistant/
│   ├── dynamic-node/
│   └── ui-states/
├── nodes/       — Registry Pattern node components
└── claim/       — claim dashboard layout components
    ├── claim-node-card/
    └── claim-stepper/
```

### AI Features

- **Explain with AI** — each node has a contextual AI explanation with a typing animation effect. Zustand tracks which nodes have been animated — re-opening an accordion does not re-trigger the animation
- **AI state management** — loading, response, error, and animated states are all managed in `aiSlice`

---

## What I Would Improve With More Time

- **Real AI integration** — replace mock explanations with actual Anthropic/OpenAI API calls, streaming responses token by token
- **AI Document Analyzer** — complete the Occupational Certificate upload flow with real file validation and AI-powered document analysis
- **Optimistic updates** — dynamic node additions would update the UI instantly before server confirmation
- **E2E testing** — Playwright tests for critical user flows (node expansion, AI explanation, dynamic node management)
- **Accessibility** — full keyboard navigation, ARIA labels, and screen reader support for the stepper and accordion components
- **Real API integration** — replace mock data with actual insurance API, implement proper error boundaries and retry logic
- **Localization** — multi-language support (EN/TR) using next-intl

---

## AI Tools Used

AI tools were used as a development accelerator — for bouncing architectural ideas, validating TypeScript patterns, and speeding up boilerplate. All design decisions, component structure, and implementation logic were reasoned through and owned by the developer.

- **Claude (Anthropic)** — architectural discussions, TypeScript type system validation, and code review
- **Cursor** — AI-augmented editor for faster implementation cycles

---

## Project Structure

```
claim-orchestrator/
├── app/                    # Next.js App Router
│   ├── globals.css         # Token system (primitives → semantic → status)
│   ├── layout.tsx          # Root layout with providers
│   ├── providers.tsx       # QueryClient + ThemeProvider
│   └── page.tsx            # Main dashboard page
├── components/
│   ├── ui/                 # shadcn primitives
│   ├── shared/             # Reusable components
│   ├── nodes/              # Registry Pattern
│   └── claim/              # Dashboard layout
├── services/               # API layer (claim-service, query-config)
├── store/                  # Zustand slices
├── hooks/                  # React Query hooks
├── types/                  # TypeScript types (from Zod schemas)
├── lib/                    # Utilities and helpers
└── data/                   # Mock data
```
