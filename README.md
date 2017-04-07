# fony

fony is a **simple** command line tool that generates dummy JSON data from
a provided template.

The application utilizes [Chance.js](http://chancejs.com/) under the hood
so any data type supported by Chance.js is supported by fony.

fony is intended to provide a simple solution to the most common data
generation needs. You can use the command line to pipe output from
fony to other tools and integrate it into your workflow.

## Installation

```
npm install --global fony
```

## Usage

```
  Usage: fony [options]

  Options:

    -h, --help                 output usage information
    -V, --version              output the version number
    -t, --template <template>  JSON template for data to be generated
    -c, --count [count]        The number of elements to create, defaults to 1

```

## Example

Mac and Linux folks can use single quotes around a double-quoted string of JSON like this:

```
fony -t '{"name": "name", "age": "age", "address": "address"}' -c 2
```

But Windows handles quotes on the command line differently, so be sure to escape your strings and only use double quotes:

```
fony -t "{\"name\": \"name\", \"age\": \"age\", \"address\": \"address\"}" -c 2
```

![fony](https://cloud.githubusercontent.com/assets/1857993/24695518/c4ab67e8-19ab-11e7-98e3-330fa48a14d3.gif)
