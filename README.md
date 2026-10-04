# Student Task Management System (Web Application)

## Project Description
**Student Task Manager** is a simple web application that helps students keep track of their assignments and study tasks. Users can add tasks, view them in a list, mark them as completed, delete them, and search through them. Tasks are saved in the browser, so they are still there after the page is refreshed.

This project was built as a pair assignment to practise a real collaborative **Git and GitHub** workflow: branches, Issues, Pull Requests, code reviews, merge conflicts, recovery commands, tags and releases.

## Team Members
| Role | Name | GitHub |
|---|---|---|
| Student 1 | Khizar | [@Khizar-V10](https://github.com/Khizar-V10) |
| Student 2 | Rameesha Asad | [@syedarameesha1004](https://github.com/syedarameesha1004) |

## Features
- **Add tasks** with a title and an optional description
- **Display tasks** as cards in a list
- **Mark tasks as completed** (crossed out, with an Undo option)
- **Delete tasks**
- **Search tasks** by title or description as you type
- **Saves tasks** in the browser (localStorage), so they survive a refresh
- **Responsive design** that works on desktop and mobile screens

## Technologies
- **HTML5** – page structure
- **CSS3** – styling, CSS variables, flexbox/grid, media queries
- **JavaScript (ES6)** – task logic and DOM updates
- **localStorage** – saving tasks in the browser
- **Git & GitHub** – version control and collaboration

## Git Workflow
1. Student 1 created the project, initialised Git, made the first commit and pushed `main` to GitHub.
2. Student 2 was added as a collaborator and cloned the repository.
3. Every feature was built on its own **feature branch**.
4. Branches were pushed to GitHub and a **Pull Request** was opened for each one.
5. The other student **reviewed** the Pull Request (comments + approval) before it was **merged** into `main`.
6. GitHub **Issues** were used to plan work; Pull Requests closed them using `Closes #<number>`.
7. A **merge conflict** was created on purpose in `README.md` and resolved together.
8. Recovery commands (`stash`, `restore`, `reset`, `revert`) were practised.
9. The stable version was tagged as **v1.0.0** and published as a GitHub Release.

## Branches
| Branch | Purpose | Author |
|---|---|---|
| `main` | Stable, reviewed code | Both |
| `feature/task-form` | Task input form, add/display/delete tasks | Khizar |
| `fix/save-tasks` | Save tasks in localStorage | Khizar |
| `feature/task-style` | Styling, task cards and responsive layout | Rameesha |
| `readme-title-s1` | README title edit (merge-conflict demo) | Khizar |
| `readme-title-s2` | README title edit (merge-conflict demo) | Rameesha |
| `feature/task-complete` | Mark tasks as completed | Rameesha |
| `feature/task-search` | Search tasks | Khizar |
| `docs/readme` | Full project documentation | Rameesha |

## Git Commands Demonstrated
| Command | Purpose |
|---|---|
| `git init` | Initialise a local repository |
| `git status` | Show working-tree and staging status |
| `git add` | Stage changes for the next commit |
| `git commit` | Save a snapshot in local history |
| `git log --oneline --graph --all` | Inspect commit history |
| `git branch` / `git switch` | List, create and change branches |
| `git diff` / `git diff --staged` | Show unstaged / staged changes |
| `git clone` | Copy a remote repository |
| `git remote -v` | Show remote URLs |
| `git push` / `git pull` / `git fetch` | Sync with GitHub |
| `git merge` | Integrate one branch into another |
| `git stash` / `git stash pop` | Temporarily store unfinished work |
| `git restore` | Discard uncommitted changes |
| `git reset --soft` | Undo a commit but keep its changes staged |
| `git revert` | Undo a commit safely with a new commit |
| `git show` | Inspect a commit |
| `git blame` | Show who changed each line |
| `git tag` | Mark a version (v1.0.0) |

## GitHub Features Demonstrated
- Public repository with a collaborator
- **Issues** with description, expected behaviour and acceptance criteria
- **Pull Requests** with titles, descriptions and testing notes
- **Code reviews** with line comments and approvals
- **Merging** Pull Requests into `main`
- **Linking PRs to Issues** with `Closes #<number>` (auto-closing issues)
- **Tags** and a **Release** (v1.0.0)
- **Insights → Contributors** showing both students' work

## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/Khizar-V10/student-task-manager.git
   cd student-task-manager
   ```
2. Open `index.html` in any modern web browser (double-click it).
3. No installation, server or build step is needed.

## Screenshots
Screenshots of the application and of every Git/GitHub step are included in the submitted Word document (*Git-GitHub-Assignment*). The final application shows the task form, the search box, and task cards with **Complete** and **Delete** buttons.

## Version History
| Version | Date | Changes |
|---|---|---|
| v1.0.0 | October 2026 | Add, display, complete, delete and search tasks; localStorage saving; responsive styling |

## Contributors
- **Khizar** ([@Khizar-V10](https://github.com/Khizar-V10)): project setup, task form, saving tasks, task search, conflict resolution, reset/revert demos
- **Rameesha Asad** ([@syedarameesha1004](https://github.com/syedarameesha1004)): styling and responsive design, task completion, documentation, stash/restore demos, v1.0.0 release
