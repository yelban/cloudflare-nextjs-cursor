# Cloudflare Next.js Worker - AI-Driven Scaffolding for Next.js on Cloudflare Workers

![Next.js](https://img.shields.io/badge/Next.js-16+-black) ![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-orange) ![AI Enhanced](https://img.shields.io/badge/AI-Enhanced-blue) ![MIT License](https://img.shields.io/badge/License-MIT-green)

Welcome to **cloudflare-nextjs-node**—a powerful Next.js starter project designed for Cloudflare Workers, supercharged with an AI-driven development environment. Seamlessly integrated with [devin.cursorrules](https://github.com/grapeot/devin.cursorrules), this scaffold empowers you with an intelligent Cursor editor that connects to the web, self-evolves, and helps you craft cutting-edge Cloudflare applications effortlessly.`

---

## Why This Project?

- **Serverless Next.js, Redefined**: Bring Next.js to Cloudflare Workers with unmatched speed and scalability—powered by OpenNext.js, ready out of the box.  
- **Smarter Coding with AI**: Supercharge your workflow with [devin.cursorrules](https://github.com/grapeot/devin.cursorrules), turning Cursor into an AI-driven powerhouse with cutting-edge tools, no setup hassle.  
- **Built for Speed**: Streamlined and lightweight, this scaffold delivers an out-of-the-box solution to go from zero to production in record time—perfect for pros and innovators alike.

Whether you’re a seasoned developer or an AI enthusiast, this project fuses cutting-edge tech with intelligent automation to redefine what’s possible.

---

## Features

- **Next.js Framework**: Craft dynamic, server-rendered apps effortlessly with out-of-the-box Next.js power.  
- **Cloudflare Workers Deployment**: Launch with OpenNext.js for a Node.js-ready Workers runtime, pre-configured and ready to go.  
- **AI-Enhanced Cursor Development**: With [devin.cursorrules](https://github.com/grapeot/devin.cursorrules) integration, this project supercharges your Cursor editor out of the box, extending it with real-time task planning, self-evolution, and a powerful Python 3 toolset—featuring LLM queries, web scraping, search engine integration, and more.

---

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Cloudflare account with Workers access
- [Cursor](https://cursor.sh/) with a Pro plan ($20/month) for AI features
- Git and a terminal

### Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yelban/cloudflare-nextjs-worker
   ```

2. **Setup devin.cursorrules Environment**
   ```bash
   pip install cookiecutter
   cookiecutter gh:grapeot/devin.cursorrules -f --checkout template \
   project_name="cloudflare-nextjs-cursor"
   # Press Enter to use default values for all prompts
   ```

3. **Enter Project Directory and Activate Python Environment**
   ```bash
   cd cloudflare-nextjs-cursor
   source venv/bin/activate
   ```

4. **Install Dependencies**
   ```bash
   pnpm install
   ```

5. **Start the Development Server**
   ```bash
   pnpm dev
   ```

6. **Preview the Application**
   ```bash
   pnpm preview
   ```

7. **Deploy to Cloudflare Workers**
   ```bash
   pnpm deploy
   ```

### Enabling AI Features

1. Open the project in Cursor (Pro plan required).
2. The **.cursorrules** file auto-configures the AI editor with tools and behaviors.
3. (Optional) Add API keys in **.env** and remove the **[NOTE TO CURSOR]** lines in **.cursorrules** to enable LLM and screenshot verification.

---

## How the AI Editor Works

The **.cursorrules** file transforms Cursor into a self-evolving assistant:

* ​**Task Planning**​: Breaks down tasks with a Scratchpad (e.g., **[X] Task 1, [ ] Task 2**).
* ​**Lessons Learned**​: Records reusable insights (e.g., library versions, fixes) to avoid repeating mistakes.
* ​**Big Picture**​: Tracks progress and reflects on milestones for deeper task mastery.

Example Scratchpad usage:

```text
# Scratchpad
Task: Deploy Next.js to Cloudflare
[X] Clone repo
[X] Install dependencies
[ ] Configure env vars
[ ] Run build & deploy
```

---

## Debugging Tips

* ​**Build Fails**​: Ensure Node.js version compatibility and check dependency installation.
* ​**Deployment Errors**​: Verify **wrangler.toml** and Cloudflare credentials.
* ​**AI Not Working**​: Confirm Cursor Pro subscription and **.cursorrules** syntax.

For detailed logs, tools output debug info to **stderr** while keeping **stdout** clean.

---

## Contributing

We welcome contributions! Fork the repo, submit issues, or send pull requests. When committing with Cursor, use:

```bash
echo "[Cursor] Your message" > msg.txt
git commit -F msg.txt
rm msg.txt
```

---

## License

MIT License—free to use, modify, and distribute.

---

## Credits

* Inspired by [devin.cursorrules](https://github.com/grapeot/devin.cursorrules)
* Powered by [OpenNext.js](https://opennext.js.org/cloudflare)
* Created by [yelban](https://github.com/yelban)

Start building smarter with ​**cloudflare-nextjs-worker**​—where Next.js and AI converge on Cloudflare Workers!
