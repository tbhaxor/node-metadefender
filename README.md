<center>

# node-metadefender

![npm bundle size](https://img.shields.io/bundlephobia/min/metadefender.svg?style=flat-square)&nbsp;&nbsp;&nbsp;![GitHub package.json version](https://img.shields.io/github/package-json/v/tbhaxor/node-metadefender.svg?style=flat-square)&nbsp;&nbsp;&nbsp;![](https://img.shields.io/npm/dw/metadefender.svg?style=flat-square)&nbsp;&nbsp;&nbsp;![](https://img.shields.io/npm/l/metadefender.svg?style=flat-square")
<br>

[![](https://nodei.co/npm/metadefender.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/dnstools/)
<br>
<hr>
</center>

> Metadefender wrapper for node js

[Metadefender](https://metadefender.opswat.com/) is a cloud-based data sanitization (Content Disarm &amp; Reconstruction), vulnerability detection and multi-scanning with options for free and commercial users.

It is a product of [opswat](https://opswat.com/)

## Requirements

- Nodejs > 8
- npm (bundled with nodejs)

## Dependencies

```json
"request": "^2.88.0"
```

## How to setup

## For developers

```sh
npm i --save metadefender
```

### For contributors

1. Clone the repo https://github.com/tbhaxor/node-metadefender.git

   ```sh
   git clone https://github.com/tbhaxor/node-metadefender.git
   ```

2. Change the directory

   ```sh
   git clone https://github.com/tbhaxor/node-metadefender.git
   ```

3. Install the development dependencies

   ```sh
   npm i -g grunt-cli
   ```

4. Install the project dependencies

   ```sh
   npm install
   ```

## Implementation

After you got the [api key](https://metadefender.opswat.com/account#!) look the following example

Demonstrating _hash lookup example_

```js
let { HashLookup } = require('metadefender');

let scanner = new HashLookup('YOUR API KEY');

scanner
    .hashLookup('HASH TO SCAN')
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    });
```

**Note:** Every method returns a `Promise` like object

## Documentation

The documentation is already provided on the [metadefender help site](https://onlinehelp.opswat.com/mdcloud/5._Endpoints.html)

The following are the endpoints current supported by `node-metadefender`

1. [Apikey](https://onlinehelp.opswat.com/mdcloud/1._Apikey.html)
2. [File Scanning](https://onlinehelp.opswat.com/mdcloud/2._File_Scanning.html)
3. [Hash Lookups](https://onlinehelp.opswat.com/mdcloud/3._Hash_Lookups.html)
4. [Reputation Service](https://onlinehelp.opswat.com/mdcloud/4._Reputation_Service.html)
5. [Application Information](https://onlinehelp.opswat.com/mdcloud/5._Application_Information.html)
6. [Malware sample sharing](https://onlinehelp.opswat.com/mdcloud/7._Malware_sample_sharing.html)
7. [Threat Intelligence Feed](https://onlinehelp.opswat.com/mdcloud/8._Threat_Intelligence_Feed.html)
8. [Status endpoints](https://onlinehelp.opswat.com/mdcloud/9._Status_endpoints.html)
9. [Dynamic analysis](https://onlinehelp.opswat.com/mdcloud/10._Dynamic_analysis.html)

## Contribution

Feel free to open new pull requests for the repository
**Note:** Before contributing to the repo, make sure you have gone through [Contributing.md](https://github.com/tbhaxor/node-metadefender/blob/master/CONTRIBUTING.md)

## License

**node-metadefender** is licensed under [GPL-3.0](https://github.com/tbhaxor/node-metadefender/blob/master/LICENSE)