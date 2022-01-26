import{c as n}from"./app.377252df.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u516C\u7528\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u516C\u7528\u6837\u5F0F" aria-hidden="true">#</a> \u516C\u7528\u6837\u5F0F</h1><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>$<span class="token property">color-primary</span><span class="token punctuation">:</span> #E02727<span class="token punctuation">;</span>
$<span class="token property">color-font-main</span><span class="token punctuation">:</span> #0f0f0f<span class="token punctuation">;</span>
$<span class="token property">color-font-sub</span><span class="token punctuation">:</span> #424242<span class="token punctuation">;</span>
$<span class="token property">color-font-info</span><span class="token punctuation">:</span> #7f7f7f<span class="token punctuation">;</span>
$<span class="token property">color-white</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
$<span class="token property">color-info</span><span class="token punctuation">:</span> #fcfcfc<span class="token punctuation">;</span>
$<span class="token property">color-border</span><span class="token punctuation">:</span> #d1d1d1<span class="token punctuation">;</span>
$<span class="token property">color-shadow</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>15<span class="token punctuation">,</span> 15<span class="token punctuation">,</span> 15<span class="token punctuation">,</span> 0.15<span class="token punctuation">)</span><span class="token punctuation">;</span>

$<span class="token property">font-size-large</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
$<span class="token property">font-size-medium</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
$<span class="token property">font-size-small</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
$<span class="token property">font-weight-main</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
$<span class="token property">font-weight-sub</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>
$<span class="token property">padding</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
$<span class="token property">margin</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>

<span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body,
html</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> Avenir<span class="token punctuation">,</span> Helvetica<span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
  <span class="token property">-webkit-font-smoothing</span><span class="token punctuation">:</span> antialiased<span class="token punctuation">;</span>
  <span class="token property">-moz-osx-font-smoothing</span><span class="token punctuation">:</span> grayscale<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>225<span class="token punctuation">,</span> 226<span class="token punctuation">,</span> 229<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #424242<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.color</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp;-primary</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> $color-primary<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-font</span> <span class="token punctuation">{</span>
    <span class="token selector">&amp;-main</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> $color-font-main<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp;-sub</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> $color-font-sub<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp;-info</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> $color-font-info<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.bg</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp;-white</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> $color-white<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-info</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> $color-info<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token selector">.border</span> <span class="token punctuation">{</span>

  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid $color-border<span class="token punctuation">;</span>

  <span class="token selector">&amp;-dashed</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px dashed $color-border<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-bottom</span> <span class="token punctuation">{</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid $color-border<span class="token punctuation">;</span>

    <span class="token selector">&amp;-dashed</span> <span class="token punctuation">{</span>
      <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px dashed $color-border<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp;-unset</span> <span class="token punctuation">{</span>
      <span class="token property">border-bottom</span><span class="token punctuation">:</span> unset <span class="token important">!important</span><span class="token punctuation">;</span>
      <span class="token property">border-bottom</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-top</span> <span class="token punctuation">{</span>
    <span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid $color-border<span class="token punctuation">;</span>

    <span class="token selector">&amp;-dashed</span> <span class="token punctuation">{</span>
      <span class="token property">border-top</span><span class="token punctuation">:</span> 1px dashed $color-border<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp;-unset</span> <span class="token punctuation">{</span>
      <span class="token property">border-top</span><span class="token punctuation">:</span> unset <span class="token important">!important</span><span class="token punctuation">;</span>
      <span class="token property">border-top</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-right</span> <span class="token punctuation">{</span>
    <span class="token property">border-right</span><span class="token punctuation">:</span> 1px solid $color-border<span class="token punctuation">;</span>

    <span class="token selector">&amp;-dashed</span> <span class="token punctuation">{</span>
      <span class="token property">border-right</span><span class="token punctuation">:</span> 1px dashed $color-border<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp;-unset</span> <span class="token punctuation">{</span>
      <span class="token property">border-right</span><span class="token punctuation">:</span> unset <span class="token important">!important</span><span class="token punctuation">;</span>
      <span class="token property">border-right</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-left</span> <span class="token punctuation">{</span>
    <span class="token property">border-left</span><span class="token punctuation">:</span> 1px solid $color-border<span class="token punctuation">;</span>

    <span class="token selector">&amp;-dashed</span> <span class="token punctuation">{</span>
      <span class="token property">border-left</span><span class="token punctuation">:</span> 1px dashed $color-border<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp;-unset</span> <span class="token punctuation">{</span>
      <span class="token property">border-left</span><span class="token punctuation">:</span> unset <span class="token important">!important</span><span class="token punctuation">;</span>
      <span class="token property">border-left</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token selector">.title</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp;-main</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> $font-size-large<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> $font-weight-main<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> $color-font-main<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-sub</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> $font-size-medium<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> $font-weight-main<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> $color-font-main<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-tip</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> $font-size-small<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> $font-weight-sub<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> $color-font-info<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.flex</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>

  <span class="token selector">&amp;-nowrap</span> <span class="token punctuation">{</span>
    <span class="token property">flex-wrap</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-direction</span> <span class="token punctuation">{</span>
    <span class="token selector">&amp;-row</span> <span class="token punctuation">{</span>
      <span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>

      <span class="token selector">&amp;-reverse</span> <span class="token punctuation">{</span>
        <span class="token property">flex-direction</span><span class="token punctuation">:</span> row-reverse<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp;-column</span> <span class="token punctuation">{</span>
      <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>

      <span class="token selector">&amp;-reverse</span> <span class="token punctuation">{</span>
        <span class="token property">flex-direction</span><span class="token punctuation">:</span> column-reverse<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-content</span> <span class="token punctuation">{</span>
    <span class="token selector">&amp;-start</span> <span class="token punctuation">{</span>
      <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp;-end</span> <span class="token punctuation">{</span>
      <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp;-center</span> <span class="token punctuation">{</span>
      <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp;-between</span> <span class="token punctuation">{</span>
      <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp;-around</span> <span class="token punctuation">{</span>
      <span class="token property">justify-content</span><span class="token punctuation">:</span> space-around<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp;-evenly</span> <span class="token punctuation">{</span>
      <span class="token property">justify-content</span><span class="token punctuation">:</span> space-evenly<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-align</span> <span class="token punctuation">{</span>
    <span class="token selector">&amp;-start</span> <span class="token punctuation">{</span>
      <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp;-center</span> <span class="token punctuation">{</span>
      <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp;-end</span> <span class="token punctuation">{</span>
      <span class="token property">align-items</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-fill</span> <span class="token punctuation">{</span>
    <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.visibility</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp;-visible</span> <span class="token punctuation">{</span>
    <span class="token property">visibility</span><span class="token punctuation">:</span> visible<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-hidden</span> <span class="token punctuation">{</span>
    <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.ov</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp;-hidden</span> <span class="token punctuation">{</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-auto</span> <span class="token punctuation">{</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp;-sizing</span> <span class="token punctuation">{</span>
    <span class="token selector">&amp;-border</span> <span class="token punctuation">{</span>
      <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp;-content</span> <span class="token punctuation">{</span>
      <span class="token property">box-sizing</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-shadow</span> <span class="token punctuation">{</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0px 4px 13px 0px $color-shadow<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.text</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp;-nowrap</span> <span class="token punctuation">{</span>
    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-align</span> <span class="token punctuation">{</span>
    <span class="token selector">&amp;-right</span> <span class="token punctuation">{</span>
      <span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp;-center</span> <span class="token punctuation">{</span>
      <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-overflow</span> <span class="token punctuation">{</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.padding</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> $padding<span class="token punctuation">;</span>

  <span class="token selector">&amp;-horizontal</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0 $padding<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-vertical</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> $padding 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-top</span> <span class="token punctuation">{</span>
    <span class="token property">padding-top</span><span class="token punctuation">:</span> $padding<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-bottom</span> <span class="token punctuation">{</span>
    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> $padding<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-left</span> <span class="token punctuation">{</span>
    <span class="token property">padding-left</span><span class="token punctuation">:</span> $padding<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-right</span> <span class="token punctuation">{</span>
    <span class="token property">padding-right</span><span class="token punctuation">:</span> $padding<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-unset</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>

    <span class="token selector">&amp;-horizontal</span> <span class="token punctuation">{</span>
      <span class="token property">padding-left</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>
      <span class="token property">padding-right</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp;-vertical</span> <span class="token punctuation">{</span>
      <span class="token property">padding-top</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>
      <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.margin</span> <span class="token punctuation">{</span>

  <span class="token property">margin</span><span class="token punctuation">:</span> $margin<span class="token punctuation">;</span>

  <span class="token selector">&amp;-horizontal</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 $margin<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-vertical</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> $margin 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-top</span> <span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> $margin<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-bottom</span> <span class="token punctuation">{</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> $margin<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-left</span> <span class="token punctuation">{</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> $margin<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-right</span> <span class="token punctuation">{</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> $margin<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.position</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp;-relative</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-fixed</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> fixed <span class="token important">!important</span><span class="token punctuation">;</span>

    <span class="token selector">&amp;-fill</span> <span class="token punctuation">{</span>
      <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-absolute</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute <span class="token important">!important</span><span class="token punctuation">;</span>

    <span class="token selector">&amp;-fill</span> <span class="token punctuation">{</span>
      <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.cursor</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp;-pointer</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-move</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> move<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.canClick</span> <span class="token punctuation">{</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> $color-font-sub <span class="token important">!important</span><span class="token punctuation">;</span>

  <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> $color-primary <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.heart</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br><span class="line-number">313</span><br><span class="line-number">314</span><br><span class="line-number">315</span><br><span class="line-number">316</span><br><span class="line-number">317</span><br><span class="line-number">318</span><br><span class="line-number">319</span><br><span class="line-number">320</span><br><span class="line-number">321</span><br><span class="line-number">322</span><br><span class="line-number">323</span><br><span class="line-number">324</span><br><span class="line-number">325</span><br><span class="line-number">326</span><br><span class="line-number">327</span><br><span class="line-number">328</span><br><span class="line-number">329</span><br><span class="line-number">330</span><br><span class="line-number">331</span><br><span class="line-number">332</span><br><span class="line-number">333</span><br><span class="line-number">334</span><br><span class="line-number">335</span><br><span class="line-number">336</span><br><span class="line-number">337</span><br><span class="line-number">338</span><br><span class="line-number">339</span><br><span class="line-number">340</span><br><span class="line-number">341</span><br><span class="line-number">342</span><br><span class="line-number">343</span><br><span class="line-number">344</span><br><span class="line-number">345</span><br><span class="line-number">346</span><br><span class="line-number">347</span><br><span class="line-number">348</span><br><span class="line-number">349</span><br><span class="line-number">350</span><br><span class="line-number">351</span><br><span class="line-number">352</span><br><span class="line-number">353</span><br><span class="line-number">354</span><br><span class="line-number">355</span><br><span class="line-number">356</span><br><span class="line-number">357</span><br><span class="line-number">358</span><br><span class="line-number">359</span><br><span class="line-number">360</span><br><span class="line-number">361</span><br><span class="line-number">362</span><br><span class="line-number">363</span><br><span class="line-number">364</span><br><span class="line-number">365</span><br><span class="line-number">366</span><br><span class="line-number">367</span><br><span class="line-number">368</span><br><span class="line-number">369</span><br><span class="line-number">370</span><br><span class="line-number">371</span><br><span class="line-number">372</span><br><span class="line-number">373</span><br><span class="line-number">374</span><br><span class="line-number">375</span><br><span class="line-number">376</span><br><span class="line-number">377</span><br><span class="line-number">378</span><br><span class="line-number">379</span><br><span class="line-number">380</span><br><span class="line-number">381</span><br><span class="line-number">382</span><br><span class="line-number">383</span><br><span class="line-number">384</span><br><span class="line-number">385</span><br><span class="line-number">386</span><br><span class="line-number">387</span><br><span class="line-number">388</span><br><span class="line-number">389</span><br><span class="line-number">390</span><br><span class="line-number">391</span><br><span class="line-number">392</span><br><span class="line-number">393</span><br><span class="line-number">394</span><br><span class="line-number">395</span><br><span class="line-number">396</span><br><span class="line-number">397</span><br><span class="line-number">398</span><br><span class="line-number">399</span><br><span class="line-number">400</span><br><span class="line-number">401</span><br><span class="line-number">402</span><br><span class="line-number">403</span><br><span class="line-number">404</span><br></div></div>`,2);function t(e,c){return p}var r=s(a,[["render",t]]);export{r as default};
