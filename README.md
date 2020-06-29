# arco

Arco is a responsive fixed-sidebar layout with a two column masonry grid which also features a landing page, a 404 page and a simple permalink structure.

See this theme in use at [meebuhs.github.io](https://meebuhs.github.io) and check the [https://github.com/meebuhs/meebuhs.github.io](source code) to get yourself started.

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "arco"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: arco
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install arco

## Github Pages

In your `_config.yml` delete the `theme: ` line and add:

```yaml
remote_theme: meebuhs/arco
```

You also need to make the following changes in your `Gemfile`:

```Gemfile
# Comment the jekyll gem
# gem "jekyll", "~> 4.1.0"
# Uncomment github-pages
gem "github-pages", group: :jekyll_plugins
```

## Usage

### Setup

To get started you need to copy the `pages` folder from this repository to your site.

By default it features a landing page, if you would like to bypass the landing page, delete `index.html` and then rename `projects.html` to `index.html`.

### Site configuration

The following settings can be configured in your site's `_config.yml`

```yaml
title: Site title
description: Site description
image: /assets/image.png
github_url: https://github.com/meebuhs
resume: true | false
```

### Expected post frontmatter

```
---
layout: post
title: Post title
summary: Post summary
category: completed | ongoing
permalink: /projects/post-title
cover-image: /assets/image-for-front-page.png
top-image: /assets/image-for-top-of-post.png 
mathjax: true | false
---
```

### Markdown features

[Check here](https://meebuhs.github.io/projects/arco) for examples of the supported markdown features.

### Resume support

To add a resume to the site, set `resume: true` in your `_config.yml`.
Then create a folder called `_includes` at the root of your site and add your `resume.html` to it.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
