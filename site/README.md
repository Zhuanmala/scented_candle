# Scene Candle Munich Waitlist Page

Static waitlist page for the Munich tester sprint.

## Local Preview

Open `site/index.html` directly in a browser, or run a simple static server:

```powershell
python -m http.server 8080 -d site
```

Then open `http://127.0.0.1:8080`.

## Form Handling

The form posts to FormSubmit and forwards submissions to the project owner's iCloud email.

Important:
- The first real submission may trigger a FormSubmit activation email.
- The recipient must confirm that activation email before submissions reliably forward.
- Do not use this form for payments, deposits, health claims, or final sales.

## Deployment Options

Any static host works:
- GitHub Pages from `main` branch `/site` if enabled manually.
- Netlify drag-and-drop deploy.
- Cloudflare Pages connected to the GitHub repository.

## Copy Rules

Do not add claims such as natural, non-toxic, therapeutic, sustainable, handmade, EU-compliant, or ready for sale until supplier documents and sample tests prove them.
