# arco

Arco is a responsive fixed-sidebar layout with a responsive masonry grid which also features a landing page, a 404 page, smooth page transitions and a simple permalink structure.

<p align="center">
  <img src="assets/images/demo.gif" width="60%">
</p>

This theme also utilises [jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag) and [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap) to ensure your work will be seen.

See this theme in use at [meebuhs.github.io](https://meebuhs.github.io) and check the [source code](https://github.com/meebuhs/meebuhs.github.io) to get yourself started.

Also check the the usage examples in [this post](https://meebuhs.github.io/projects/arco).

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
title: site-title
tagline: site-tagline
description: site-description
image: /assets/images/image.png
url: https://github.com/meebuhs/arco
github_url: https://github.com/meebuhs
resume: true | false
author: Alex Sharpe
lang: en-AU
```

There are additional parameters which can be set for use with `jekyll-seo-tag`. [See here for a complete list](https://github.com/jekyll/jekyll-seo-tag/blob/master/docs/usage.md)

### Expected post frontmatter

```
---
layout: post
title: Post title
description: Post description
permalink: /projects/post-title
urls:
    source: https://project.source/link/
    download: https://project.download/link/
images: 
    cover: /assets/image-for-front-page.png
    top: /assets/image-for-top-of-post.png 
tags: [tags, which, relate, to, post]
mathjax: true | false
---
```

### Favicon

Simply add your favicon `favicon.png` to the root of your site.

### Lazy loading

In order to enable lazy loading on an image you must add a `data-echo` attribute like so:

```html
<img src="/assets/placeholder-for-image.png" alt="alt-text" data-echo="/assets/actual-image.png" />
```

### Image lightbox

In order to open an image in a fullscreen lightbox on click, you must wrap the image in a link tag with the class `clickable-image` like so: 

```html
<a class="clickable-image" href="/assets/actual-image.png">
    <img src="/assets/placeholder-for-image.png" alt="alt-text" data-echo="/assets/actual-image.png" />
</a>
```

### Resume support

To add a resume to the site, set `resume: true` in your `_config.yml`.
Then create a folder called `_includes` at the root of your site and add your `resume.html` to it.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
