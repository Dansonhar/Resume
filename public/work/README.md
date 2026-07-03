# How to add photos of your work

Each job on the resume has its own folder in here. Drop image files into the
matching folder, then list the filenames in `src/App.jsx` under that job's
`photos` array. That's it — no other code changes needed.

## Folder → Job

| Folder                 | Job                                            |
| ---------------------- | ---------------------------------------------- |
| `crave-asia-support/`  | Crave Asia — Creative & Technical Support      |
| `mix-fuse/`            | Mix & Fuse Restaurant — Cashier & Customer Svc |
| `crave-asia-intern/`   | Crave Asia — Intern (3D/Graphic/Multimedia)    |
| `hivetec/`             | HiveTec — Sales Assistant                      |
| `pc-ultimate/`         | PC Ultimate Legacy — Admin Data Entry          |
| `vgmart/`              | VGMart — Cashier                               |
| `tufting-studio/`      | Tufting Studio — Customer Service Assistant    |
| `event-crew/`          | Event Crew                                     |
| `le-quadri/`           | Le Quadri Hotel — Receptionist                 |

## Steps

1. Save your photo into the folder, e.g.
   `public/work/mix-fuse/counter.jpg`
2. Open `src/App.jsx`, find that job, and add the filename:
   ```js
   photos: [
     { file: "counter.jpg", caption: "At the front counter" },
   ],
   ```
3. Save. In dev (`npm run dev`) it appears instantly; on push it deploys.

Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`, `.svg`.
Every job folder is currently empty — no photos show until you add your own.
