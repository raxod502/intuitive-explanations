import json
from pathlib import Path
from typing import Generator


def walk(root: Path) -> Generator[Path, None, None]:
    yield root
    if root.is_dir():
        for child in root.iterdir():
            yield from walk(child)


redirects = []
rewrites = []

with open("_redirects") as f:
    for line in f.read().splitlines():
        if not line:
            continue
        if line.startswith("#"):
            continue
        src, dst = line.split()
        redirects.append(
            {
                "source": src,
                "destination": dst,
            }
        )


src = Path("src")
for node in walk(src):
    if node.suffix != ".md":
        continue
    path = node.relative_to(src).with_suffix("")
    if path.name == "index":
        if node.parent == src:
            continue
        redirects.append(
            {
                "source": f"/{path.parent}",
                "destination": f"/{path.parent}/",
            }
        )
    else:
        redirects.append(
            {
                "source": f"/{path}/",
                "destination": f"/{path}",
            }
        )
        rewrites.append(
            {
                "source": f"/{path}",
                "destination": f"/{path}.html",
            }
        )

with open("vercel.json", "w") as f:
    json.dump(
        {
            "redirects": redirects,
            "rewrites": rewrites,
        },
        f,
        indent=2,
    )
    f.write("\n")
