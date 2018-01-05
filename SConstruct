# -*- mode: python -*-
from __future__ import print_function

import os
import subprocess
import sys

def ls(path):
    return os.listdir(path)

join = os.path.join

env = Environment(ENV = {
    # for deployment
    "NETLIFY_KEY": os.environ.get("NETLIFY_KEY", ""),
    # so that we can find people's tools
    "PATH" : os.environ.get("PATH", ""),
    # otherwise latexmk emits a silly warning
    "USER" : os.environ.get("USER", "unknown")})

static_files = []

shared_tex_dir = join("tex", "documents")
for document in ls(shared_tex_dir):
    tex_dir = join(shared_tex_dir, document)
    tex_file = join(tex_dir, document + ".tex")
    pdf_file = join(tex_dir, document + ".pdf")
    deps = [tex_file]
    if "data" in ls(tex_dir):
        data_dir = join(tex_dir, "data")
        # If we just declare a dependency on data_dir, then adding
        # files to it doesn't cause a rebuild. We actually have to
        # depend on all contents of data_dir. This actually works with
        # both insertions and deletions, interestingly.
        deps.extend(join(data_dir, item) for item in ls(data_dir))
    env.Command(pdf_file, deps,
                "latexmk -pdf -interaction=nonstopmode {}"
                .format(document + ".tex"),
                chdir=tex_dir)
    for ext in ["aux", "fdb_latexmk", "fls", "log", "nav", "out",
                "snm", "toc"]:
        path = join(tex_dir, document + "." + ext)
        env.Clean(pdf_file, path)
    env.Clean(pdf_file, join(tex_dir, "auto"))
    moved_pdf_file = join("static", document + ".pdf")
    env.Command(moved_pdf_file, pdf_file,
                Copy(moved_pdf_file, pdf_file))
    static_files.append(moved_pdf_file)

env.Command(join("files", ".htaccess"), [join("files", "_redirects"),
                                         join("files", ".htaccess.suffix")],
            # Not portable:
            ["sed 's#^/#Redirect 301 /#' < files/_redirects > files/.htaccess",
             "cat files/.htaccess.suffix >> files/.htaccess"])

for fname in [".htaccess", "_redirects"]:
    old_path = join("files", fname)
    new_path = join("static", fname)
    env.Command(new_path, old_path,
                Copy(new_path, old_path))
    static_files.append(new_path)

for fname in ls("favicon"):
    if fname.endswith(".png") or fname.endswith(".ico"):
        old_path = join("favicon", fname)
        new_path = join("static", fname)
    env.Command(new_path, old_path,
                Copy(new_path, old_path))
    static_files.append(new_path)

hugo_deps = static_files + ["content", "layouts", "static", "themes"]
env.Command("public", hugo_deps, "hugo")
env.Clean("public", "public")

env.Zip("public.zip", "public")

env.Alias("deploy", "public.zip", "script/deploy.bash")
env.AlwaysBuild("deploy")
