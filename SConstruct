# -*- mode: python -*-
from __future__ import print_function

import os

join = os.path.join
ls = os.listdir

def tree(path, absolute=True):
    paths = []
    for dirpath, dirnames, filenames in os.walk(path):
        paths.append(dirpath)
        paths.extend(join(dirpath, fname) for fname in filenames)
    return paths

def swap_ext(fname, old_ext, new_ext):
    if fname.endswith(old_ext):
        fname = fname[:-len(old_ext)]
    fname += new_ext
    return fname

############################################################################
#### Environment

env = Environment(ENV={
    # for deployment
    "NETLIFY_KEY": os.environ.get("NETLIFY_KEY", ""),
    # so that we can find people's tools
    "PATH": os.environ.get("PATH", ""),
    # otherwise latexmk emits a silly warning
    "USER": os.environ.get("USER", "unknown")})

############################################################################
#### Building .htaccess in redirects/ and moving files to static/

env.Command(join("redirects", ".htaccess"),
            [join("redirects", "_redirects"),
             join("redirects", ".htaccess.suffix")],
            # Not portable:
            [Mkdir("static"),
             "sed 's#^/#Redirect 301 /#' < redirects/_redirects > redirects/.htaccess",
             "cat redirects/.htaccess.suffix >> redirects/.htaccess"])

for fname in [".htaccess", "_redirects"]:
    old_path = join("redirects", fname)
    new_path = join("static", fname)
    env.Command(new_path, old_path,
                Copy(new_path, old_path))

############################################################################
#### Moving files in assets/ to static/

if os.path.isdir("assets"):
    for fname in ls("assets"):
        if fname.endswith(".xcf"):
            old_path = join("assets", fname)
            new_path = join("static", "assets", swap_ext(fname, ".xcf", ".png"))
            env.Command(new_path, [old_path, join("scripts", "convert-xcf.bash")],
                        [[join("scripts", "convert-xcf.bash"), old_path, new_path]])

############################################################################
#### Building PDFs in tex/ and moving to static/

shared_tex_dir = join("tex", "documents")
for document in ls(shared_tex_dir):
    tex_dir = join(shared_tex_dir, document)
    tex_file = join(tex_dir, document + ".tex")
    pdf_file = join(tex_dir, document + ".pdf")
    deps = [tex_file]
    if "data" in ls(tex_dir):
        deps.extend(tree(join(tex_dir, "data")))
    env.Command(pdf_file, deps,
                [["latexmk", "-pdf",
                  "-interaction=nonstopmode",
                  document + ".tex"]],
                chdir=tex_dir)
    for ext in ["aux", "fdb_latexmk", "fls", "log", "nav", "out",
                "snm", "toc"]:
        path = join(tex_dir, document + "." + ext)
        env.Clean(pdf_file, path)
    env.Clean(pdf_file, join(tex_dir, "auto"))
    moved_pdf_file = join("static", document + ".pdf")
    env.Command(moved_pdf_file, pdf_file,
                Copy(moved_pdf_file, pdf_file))

############################################################################
#### Running Hugo

hugo_deps = ["config.toml"]
for dirname in ["content", "layouts", "static", "themes"]:
    hugo_deps.extend(tree(dirname))

env.Command("public", hugo_deps, "hugo")
env.Clean("public", "public")

env.Zip("public.zip", "public")

############################################################################
#### Deployment

env.Alias(
    "deploy", "public.zip",
    env.Action([[join("scripts", "deploy.bash"), "public.zip"]]))
env.AlwaysBuild("deploy")
