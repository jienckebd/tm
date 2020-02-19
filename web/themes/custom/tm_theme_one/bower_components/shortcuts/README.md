# Shortcuts

A collection of shortcut elements to make any webapp keyboard navigable using simple configuration.


# Install

```
bower install --save shortcuts

```

#import

```
<link rel="import" href="/bower_components/shortcuts/shortcuts.html">
```

# Types of shortcuts.

Supports sequence of characters (ex: g,h for home ) , single characters (d) and in combination with modifier keys (cmd + d).


# shortcuts.json

Customize your shortcuts using shortcuts.json

Add it to the root directory or provide a global variable `shortcutConfigUrl` with path.

Note : shortcuts.json only supports one level of hierarchy.

```
{
  "common": {
    "home": {
      "shortcut": "g,h",
      "label": "Go to home",
      "description": "Go to home"
    }
    "focusinput": {
      "shortcut": "f",
      "label": "Focus on input",
      "description": "Focus on input"
    }
  },
  "chart": {
    "daily": {
      "shortcut": "d",
      "label": "Show daily",
      "description": "Show daily interval for charts"
    },
    "decision": {
      "shortcut": "i",
      "label": "Show intraday",
      "description": "Show intraday interval for charts"
    }
  },
  "trade": {
    "buy": {
      "shortcut": "b",
      "label": "Buy",
      "description": "Buy the current scrip in chart"
    },
    "sell": {
      "shortcut": "s",
      "label": "Sell",
      "description": "Sell the current scrip"
    }
  }
}

```


# Available Elements

## shortcut-a

### usage

```
<a is="shortcut-a" shortcut-type="common.home" href="/">
```

Here common.home is from a shortcuts.json in the root directory of your app. See more about shortcuts.json above.

## shortcut-button

### usage

```
<button is="shortcut-a" shortcut-type="trade.buy" event-name="buy"></button>
```

if event-name is provided emits this event instead of default event click.


## shortcut-focus-element

<shortcut-focus-element element-type="body /deep/ #myinput" shortcut-type="common.focusinput"></shortcut-focus-element>

Focus an element using keyboard


# shotcut-help

No config require. Just type / and you will see your shortcuts as a popup by default. Also Press f9 to view your shortcuts on screen