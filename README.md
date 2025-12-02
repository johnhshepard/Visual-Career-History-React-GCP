# Interactive Career Timeline
A responsive, data-driven React application designed to visualize professional experience. This project goes beyond a standard resume by allowing users to interactively explore career highlights and providing context for employment gaps or sabbaticals.

(Note: Replace this line with screenshot of app)

# 🚀 Project Overview
The goal of this project was to build a modern, interactive replacement for the static PDF resume. It solves a specific UX problem: How to display employment gaps positively. Instead of hiding gaps, this application treats them as "Context Cards" that users can expand to read about upskilling, travel, or personal growth, reframing them as active parts of the career journey.

## Key Features
- **Zig-Zag Timeline Layout**: A visually engaging layout that alternates left and right on desktop but collapses into a clean vertical stack on mobile.
- **Interactive "Gap" Context**: "Gap" entries are visually distinct and expandable, allowing for detailed storytelling without cluttering the main view.
- **Global State Management**: Features a "Explain All Gaps" toggle that controls the state of multiple child components simultaneously.
- **Responsive Design**: Fully fluid layout using Tailwind CSS breakpoints.
- **Data-Driven**: All content is rendered from a structured JSON array, making updates as simple as editing a single file.

# 🛠️ Tech Stack
- **Frontend**: React (Vite)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Google Cloud Platform (via Firebase Hosting)

# 💡 Technical Highlights & Learnings
This project served as a practical implementation of several advanced frontend concepts:
1. Advanced CSS Grid & display: contents
One of the main challenges was creating a timeline where the Date, Center Node, and Content Card were separate DOM elements but needed to align perfectly on the same row.
Challenge: Using display: contents allowed me to flatten the component structure into the main grid, but it initially broke the visual ordering (putting all dates on the left and all cards on the right).
Solution: I implemented explicit grid-row indexing passed down via props. This forces the Date, Node, and Card to lock into their specific chronological row regardless of their DOM order, ensuring a perfect zig-zag layout.
2. Component Reusability
The TimelineItem component is polymorphic—it changes its visual language (colors, borders, icons) and layout logic (left vs. right alignment) based on the data type ('work', 'education', or 'gap') passed to it.
3. Tailwind Configuration
Set up a custom Tailwind configuration within a Vite environment, utilizing @apply directives and custom utility classes for consistent theming across the timeline.

# 📦 Installation & Setup
1. Clone the repositorygit clone [https://github.com/yourusername/career-timeline.git](https://github.com/yourusername/career-timeline.git)
```bash
cd career-timeline
```
2. Install dependencies
```bash
npm install
```
3. Run the development server
```bash
npm run dev
```
## 🚢 Deployment
This project is configured for deployment on Firebase Hosting.
1. Build the project:
```bash
npm run build
```
2. Deploy (requires Firebase CLI):
```bash
firebase deploy
```
<!--
## 📄 License
This project is open source and available under the MIT License.
-->