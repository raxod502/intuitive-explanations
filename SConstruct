#!/usr/bin/env python2

## Preamble
### Imports

from __future__ import print_function

import checksumdir
import os
import shutil
import subprocess

### Utility functions
#### Paths

def swap_ext(fname, old_ext, new_ext):
    if fname.endswith(old_ext):
        fname = fname[:-len(old_ext)]
    fname += new_ext
    return fname

#### Filesystem inspection

def tree(path):
    paths = []
    for dirpath, dirnames, filenames in os.walk(path):
        paths.append(dirpath)
        paths.extend(os.path.join(dirpath, fname) for fname in filenames)
    return paths

#### Filesystem manipulation

def mirror_directory(target_dir, mapping):
    try:
        shutil.rmtree(target_dir)
    except FileNotFoundError:
        pass
    for src_file, dst_file in mapping.items():
        directory = os.path.dirname(dst_file)
        try:
            os.makedirs(directory)
        except OSError:
            if not os.path.isdir(directory):
                raise
        shutil.copyfile(src_file, dst_file)

## Build configuration
### Environment

env = Environment(ENV={
    'NETLIFY_KEY': os.environ.get('NETLIFY_KEY'),
    'PATH': os.environ.get('PATH'),
})

### Constants
#### Directories

ASSETS_DIR = 'assets'
ASSETS_SRC_DIR = os.path.join(ASSETS_DIR, 'src')
ASSETS_OUT_DIR = os.path.join(ASSETS_DIR, 'out')

CONTENT_DIR = 'content'

FAVICON_DIR = 'favicon'

HUGO_CONFIG_FILE = 'config.toml'

LAYOUTS_DIR = 'layouts'

PUBLIC_DIR = 'public'

REDIRECTS_DIR = 'redirects'

SCRIPTS_DIR = 'scripts'

STATIC_DIR = 'static'
STATIC_ASSETS_DIR = os.path.join(STATIC_DIR, 'assets')
STATIC_FAVICON_DIR = STATIC_DIR

TEX_DIR = 'tex'
TEX_CLASSES_DIR = os.path.join(TEX_DIR, 'classes')
TEX_DOCUMENTS_DIR = os.path.join(TEX_DIR, 'documents')

#### Files

CONVERT_XCF_SCRIPT = os.path.join(SCRIPTS_DIR, 'convert-xcf.bash')
DEPLOY_SCRIPT = os.path.join(SCRIPTS_DIR, 'deploy.bash')
NETLIFY_REDIRECTS_FILE = os.path.join(REDIRECTS_DIR, '_redirects')
HTACCESS_FILE = os.path.join(REDIRECTS_DIR, '.htaccess')
HTACCESS_SUFFIX_FILE = os.path.join(REDIRECTS_DIR, '.htaccess.suffix')
PUBLIC_SCONS_TARGET = os.path.join(PUBLIC_DIR, '.scons-target')
PUBLIC_ZIP_FILE = 'public.zip'
STATIC_HTACCESS_FILE = os.path.join(STATIC_DIR, '.htaccess')
STATIC_NETLIFY_REDIRECTS_FILE = os.path.join(STATIC_DIR, '_redirects')
STATIC_SCONS_TARGET = os.path.join(STATIC_DIR, '.scons-target')

#### Commands

HUGO_COMMAND = ['hugo']
LATEXMK_COMMAND = ['latexmk', '-pdf', '-interaction=nonstopmode']

#### Miscellaneous

AUCTEX_DATA_DIR = 'auto'
LATEXMK_DATA_EXTENSIONS = [
    '.aux', '.fdb_latexmk', '.fls', '.log', '.nav', '.out', '.snm', '.toc']

DEPLOY_ALIAS = 'deploy'

### Variables

static_files = {}
hugo_deps = []

### Subdirectories
#### Top-level files

hugo_deps.append(HUGO_CONFIG_FILE)

#### assets/

if os.path.isdir(ASSETS_SRC_DIR):
    for xcf_basename in os.listdir(ASSETS_SRC_DIR):
        png_basename = swap_ext(xcf_basename, '.xcf', '.png')
        xcf_file = os.path.join(ASSETS_SRC_DIR, xcf_basename)
        png_file = os.path.join(ASSETS_OUT_DIR, png_basename)
        static_png_file = os.path.join(STATIC_ASSETS_DIR, png_basename)
        env.Command(png_file, [xcf_file, CONVERT_XCF_SCRIPT],
                    [[CONVERT_XCF_SCRIPT, xcf_file, png_file]])
        static_files[png_file] = static_png_file
    env.Clean(ASSETS_OUT_DIR, ASSETS_OUT_DIR)

#### content/

hugo_deps.extend(tree(CONTENT_DIR))

#### favicon/

for basename in os.listdir(FAVICON_DIR):
    filename = os.path.join(FAVICON_DIR, basename)
    static_filename = os.path.join(STATIC_FAVICON_DIR, basename)
    static_files[filename] = static_filename

#### layouts/

hugo_deps.extend(tree(LAYOUTS_DIR))

#### redirects/

def build_htaccess_file(target, source, env):
    with open(HTACCESS_SUFFIX_FILE, 'r') as f:
        suffix = f.read()
    shutil.copyfile(NETLIFY_REDIRECTS_FILE, HTACCESS_FILE)
    with open(HTACCESS_FILE, 'a') as f:
        f.write(suffix)

env.Command(HTACCESS_FILE, [NETLIFY_REDIRECTS_FILE, HTACCESS_SUFFIX_FILE],
            build_htaccess_file)

static_files[HTACCESS_FILE] = STATIC_HTACCESS_FILE
static_files[NETLIFY_REDIRECTS_FILE] = STATIC_NETLIFY_REDIRECTS_FILE

#### tex/

if os.path.isdir(TEX_DOCUMENTS_DIR):
    for document in os.listdir(TEX_DOCUMENTS_DIR):
        tex_dir = os.path.join(TEX_DOCUMENTS_DIR, document)
        tex_file = os.path.join(tex_dir, document + '.tex')
        pdf_file = os.path.join(tex_dir, document + '.pdf')
        data_dir = os.path.join(tex_dir, 'data')
        deps = [tex_file]
        if os.path.isdir(data_dir):
            deps.extend(tree(data_dir))
        env.Command(pdf_file, deps,
                    [LATEXMK_COMMAND + [document + '.tex']],
                    chdir=tex_dir)
        for ext in LATEXMK_DATA_EXTENSIONS:
            junk_file = os.path.join(tex_dir, document + ext)
            env.Clean(pdf_file, junk_file)
        env.Clean(pdf_file, os.path.join(tex_dir, AUCTEX_DATA_DIR))
        static_pdf_file = os.path.join(STATIC_DIR, document + '.pdf')
        static_files[pdf_file] = static_pdf_file

### static/

def build_static_dir(target, source, env):
    mirror_directory(STATIC_DIR, static_files)
    checksum = checksumdir.dirhash(STATIC_DIR)
    with open(STATIC_SCONS_TARGET, 'w') as f:
        f.write(checksum)
        f.write('\n')

env.Command(STATIC_SCONS_TARGET, static_files.keys(), build_static_dir)
env.Clean(STATIC_SCONS_TARGET, STATIC_DIR)

hugo_deps.append(STATIC_SCONS_TARGET)

### public/

def build_public_dir(target, source, env):
    subprocess.call(HUGO_COMMAND)
    checksum = checksumdir.dirhash(PUBLIC_DIR)
    with open(PUBLIC_SCONS_TARGET, 'w') as f:
        f.write(checksum)
        f.write('\n')

env.Command(PUBLIC_SCONS_TARGET, hugo_deps, build_public_dir)
env.Clean(PUBLIC_SCONS_TARGET, PUBLIC_DIR)

### public.zip

env.Zip(PUBLIC_ZIP_FILE, PUBLIC_DIR)

### Deployment

env.Alias(DEPLOY_ALIAS, PUBLIC_ZIP_FILE,
          env.Action([[DEPLOY_SCRIPT, PUBLIC_ZIP_FILE]]))
env.AlwaysBuild(DEPLOY_ALIAS)
