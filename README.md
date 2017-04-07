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

Note that when using fony on Windows, you need to make sure to escape the quotes in the template string like so.

```
> fony -t "{\"name\": \"name\", \"age\": \"age\", \"address\": \"address\"}" -c 2
```

```
  Usage: fony [options]

  Options:

    -h, --help                 output usage information
    -V, --version              output the version number
    -t, --template <template>  JSON template for data to be generated
    -c, --count [count]        The number of elements to create, defaults to 1

```

![fony](https://cloud.githubusercontent.com/assets/1857993/24695518/c4ab67e8-19ab-11e7-98e3-330fa48a14d3.gif)
