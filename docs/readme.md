# Heading 1

This is some content without the dice roller plugin

## This header works

But when we use the Dice Roller plugin with the closing fence inline like so;

::: rolls 4d6 :::

## This header doesn't show in the menu

But if we move the closing fence to the next line:

::: rolls 2d10
:::

## This header works again

It looks like there's [an issue](https://github.com/markdown-it/markdown-it-container/issues/21) with the Markdown It
Container plugin, which causes the container not to be correctly closed when eth closing fence is inline.

It seems that it's _not_ a bug, although it does appear contradictory
to [the spec](https://spec.commonmark.org/0.18/#example-95).

