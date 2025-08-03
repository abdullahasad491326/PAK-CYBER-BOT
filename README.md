<div align="center">

<h1 align="center">
  ⚡ WHATSAPP BOT BY ADMIN ABDULLAH ASAD<br>
  🔥 THE MOST POWERFUL WHATSAPP BOT<br>
  💻 DEVELOPED BY ADMIN ABDULLAH ASAD<br>
  🚀 ADMIN ABDULLAH ASAD SOLUTIONS<br>
  🌈 FAST ⚡ SECURE 🔒 RELIABLE ✅
</h1>

---------

<p align="center">
<a href="https://github.com/MRSHABAN45/SHABAN-MD"><img title="PUBLIC-BOT" src="https://img.shields.io/static/v1?label=Language&message=English&style=square&color=darkpink"></a> &nbsp;
  <img src="https://komarev.com/ghpvc/?username=SHABAN-MD&label=VIEWS&style=square&color=blue" />
</p> 

<p align="center">
  <a href="https://github.com/MRSHABAN40/SHABAN-MD"><img title="Release" src="https://img.shields.io/badge/Release-beta%20v5-cyan.svg?style=for-the-badge&logo=aqua" /></a>
</p>

**BOT FEATURE ⤵️**

| Menu ⁠➜ | Status Save + Send | Group | ChatBot | Downloading | Antidelete | Ai | Viewonce | Fun | Status Reply | Status Reacts | HeartReacts | Autoreacts | Call Rejecter |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Work ➜ |✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|✅|

<a href="https://github.com/MRSHABAN45/SHABAN-MD/graphs/commit-activity"><img height="20" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg"></a>

[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=monospace-ExtraBold&color=blue&lines=𝗙𝗢𝗥𝗞+𝗔𝗡𝗗+𝗦𝗧𝗔𝗥+⭐+𝗥𝗘𝗣𝗢)](https://git.io/typing-svg)

<p align="lift">
<a href="https://github.com/MRSHABAN45/SHABAN-MD/fork"><img title="SHABAN-MD" src="https://img.shields.io/badge/FORK-BY%20ADMIN%20ABDULLAH%20ASAD-008000?style=for-the-badge&logo=github"></a>

**⛓️‍💥 NEW SESSION WEB ADDED 27-July**

<a href='https://pair-tmv2.onrender.com' target="_blank">
  <img src='https://img.shields.io/badge/PAIR_CODE-FF0000?style=for-the-badge&logo=matrix&logoColor=white&labelColor=000000'/>
</a></br>

## _📡 DEPLOYMENT_

<div align="center">
  <table>
    <tr>
      <td><a href="https://dashboard.heroku.com/new-app?template=https://github.com/MRSHABAN45/SHABAN-MD" target="_blank"><img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white&labelColor=000000&color=0000FF"/></a></td>
      <td><a href="https://host.talkdrove.com/share-bot/47" target="_blank"><img src="https://img.shields.io/badge/TalkDrove-A52A2A?style=for-the-badge&logo=github&logoColor=white&labelColor=000000"/></a></td>
    </tr>
    <tr>
      <td><a href="https://app.koyeb.com/services/deploy?type=git&repository=MRSHABAN45/SHABAN-MD" target="_blank"><img src="https://img.shields.io/badge/Koyeb-FF009D?style=for-the-badge&logo=koyeb&logoColor=white&labelColor=000000"/></a></td>
      <td><a href="https://railway.app/new" target="_blank"><img src="https://img.shields.io/badge/Railway-FF8700?style=for-the-badge&logo=railway&logoColor=white&labelColor=000000"/></a></td>
    </tr>
    <tr>
      <td><a href="https://dashboard.render.com/web/new" target="_blank"><img src="https://img.shields.io/badge/Render-000000?style=for-the-badge&logo=render&logoColor=white&labelColor=000000&color=00ffaa"/></a></td>
      <td><a href="https://shaban-free-host.zone.id/" target="_blank"><img src="https://img.shields.io/badge/Free%20VPS-CC00FF?style=for-the-badge&logo=huggingface&logoColor=white&labelColor=000000"/></a></td>
    </tr>
  </table>
</div>

-------------

**NOTE:-** ***✠ YOU CAN ALSO COPY THIS CODE IF CHANNEL CODE EXPIRED FOR FREE DEPLOYMENT ✠***

```yaml
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Start application
      run: npm start
