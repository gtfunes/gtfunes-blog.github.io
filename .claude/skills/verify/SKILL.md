---
name: verify
description: Build, serve, and check this Jekyll blog locally after dependency or content changes
---

# Verify this blog

Ruby comes from rbenv (`.rbenv/version`, currently 3.4.x). All Jekyll deps are pinned by the `github-pages` metagem — upgrade with `bundle update github-pages`. Do not re-add a `gem "jekyll"` line to the Gemfile; its version constraint blocks github-pages upgrades.

```sh
bundle exec jekyll build --trace          # must finish with "done in N seconds"
bundle exec jekyll serve --port 4923 --no-watch --detach
curl -s http://127.0.0.1:4923/            # index lists all posts from _posts/
curl -s http://127.0.0.1:4923/feed.xml    # jekyll-feed output
lsof -ti :4923 | xargs kill               # cleanup
```

Checks worth doing on posts: `class="language-` (rouge highlighting present), heading `id=` anchors (kramdown GFM). Diffing article markup against the live site (https://blog.gtfunes.com) is a strong parity check — expected diffs only: `<time datetime>` timezone offset (local TZ vs UTC builders) and the Disqus block, which minima injects only when `JEKYLL_ENV=production`.

Gotcha: the live site is built by GitHub's classic Pages pipeline with *their* github-pages gem version — the repo's Gemfile.lock only affects local builds and Dependabot alerts, so lockfile bumps can't break production.
