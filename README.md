## Next.js Accessibility PoC

The purpose of this proof of concept is to create a project starter template for anyone who wants to enforce accessibility inside their application. It implements accessibility on different levels, starting from simple linting rules, component testing to CI/CD pipelines.

However, it is important to mention, that by using only this setup you will not prevent every accessibility issue and there is still much more to do to ensure compliance with WCAG. Nevertheless, having some rules in place is already a good start and, it can keep teams aligned on what their goal is.

### Built With

- Next.js
- Storybook

## Getting Started

Before running the project and diving into detail, make sure you have the project ready.

### Prerequisites

1. Clone the repo

```bash
git clone https://github.com/BibiSebi/nextjs-a11y-poc.git
```

2. Install dependencies by using:

```bash
npm install
# or
yarn install
```

## Usage

### Local Development

1. Run the project

```bash
npm run dev
# or
yarn dev
```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Deployment

1. Build the project

```bash
npm run build
# or
yarn build
```

## Roadmap

- [x] Add Storybook
- [x] Add Accessibility Storybook Addon
- [ ] Add Accessibility Linter
- [ ] Create CI/CD pipeline
- [ ] Create Axe tests
