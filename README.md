# Job Portal

A full-stack job portal project built while learning web development — phase by phase.

---

## Tech Stack

- HTML, CSS
- JavaScript (Vanilla)
- React (with Vite)

---

## Progress

### Phase 1 — HTML & CSS
- Built job portal structure with semantic HTML
- Styled with CSS

### Phase 2 — JavaScript
- DOM manipulation
- Events and handlers
- Async JavaScript — fetch, Promises, async/await

### Phase 3 — React Fundamentals (Weeks 6–7)

#### Week 6
- Set up React with Vite
- Built functional components
- Passed data via props
- Rendered job list from array using `.map()`

#### Week 7 — State & Effects
- `useState` — added search input to JobList
- Controlled inputs — search bar filters jobs live
- Conditional rendering — shows "No jobs found" when filter is empty
- `useEffect` — fetches jobs from Remotive API on mount
- Loading & error state — shows spinner while fetching, error message on failure

---

## API

Jobs are fetched from the [Remotive Remote Jobs API](https://remotive.com/api/remote-jobs).

---

## Run Locally

```bash
npm install
npm run dev
```