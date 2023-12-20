import{_ as n,o as s,c as a,e as p}from"./app-NDKZubBW.js";const t={},e=p(`<h1 id="公用样式" tabindex="-1"><a class="header-anchor" href="#公用样式" aria-hidden="true">#</a> 公用样式</h1><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>$<span class="token property">color-primary</span><span class="token punctuation">:</span> #E02727<span class="token punctuation">;</span>
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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[e];function c(l,o){return s(),a("div",null,i)}const r=n(t,[["render",c],["__file","style.html.vue"]]);export{r as default};
