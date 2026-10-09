// ==UserScript==
// @name        Web Search Navigator
// @version     0.5.2
// @description Keyboard shortcuts for Google search, YouTube, Startpage, Brave Search, Google Scholar, Github, Gitlab, and Amazon.
// @author      Web Search Navigator
// @iconURL     data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0T///////8JWPfcAAAAB3RJTUUH4goDFzU3zLh1KgAABfpJREFUSMe1lWtQVecZhZ/32/scDgdB4HiFgKihgjbiddC2RKI1GkOisbYkRpPaasOUJJ2AbVqNQ7zGCxoTpY4TMwaimEQNNYmoVWtHra2tiUxVIt7QAt4KgnDg3PbeX3/UzFhn+jPPv3dmrZn1412zhAc49PThxMPnwF/mX9W5CDLJzMycAa4JrslmHmBgYAAa/T9GQQCIJVbiwC9+f8cNqNxYOaryPPSY7ivosRDmN8yfUXzsftsDaK211rjvneHzc+pyL6S5lnk2eyo8n5hBGmmkka/RD0SQ/0aQbLIZQ8adta0LWgusycNfGLYq67NIzj2VKSIigvWNzXwwQPuFjnP+GsJ2ib3Qfj19U8qvU0pTPnkrSnbJUanr+QtChAhpxf9jF2HqeC9xtq/Cd+LOntrA1/r8j97w+Tb7dvmO1LY8KDdHuZb0bG0C3aLPsBuMrUbIXALaq706Or3GWG28bZQ9U8IHVMiHKoIfv+4EIkSIABYOgEyVLBSoIlkiw0B9Kn9jCTlGvmpU+7b39Q72XvROqm0Z+fvFz98pAhkn70k/UJ5cb1vseBh6MK0mZhrUjGz6WH4Oxg4p4qSTKRMlWo7Z09RClU0DKFG71TNgrDUGq7+A0WzMUcfB8joT1Xo4MeBKMgKnZzes1nH29M7doUa72PnhX+fV/1RiYWhT2ve69QTPeG8wdiqYkfGWsgeWbrh85vZYfT4qo3jF7hjJc9qnZQ+db1zqH/tq9/GGzjKelRFMcSJgtpgVZhaYe43exhsg63meFvD3Dd3SJfDFxDNJdibYUZZhj1Gjne3hlQmD57lPjrtRZubl7nCfNb7rXFS+SK4d0b1D7TJ50zsfB7tr/eKvRq8JzIZrG1s9xvuQubb3IKcNJszIrHe1A8d1NYdx6CMPkY6iNz3wAeNIR8BqszfyL6hva5muM9D4nSN2EKlrun44sA6uprev834O/RYlBO1JUP72P34b/Qcw9Sy2E0+5VencYBYvyl226cUQHGwVql6ghqovzcmgKlSq7EXpL3SjvnvfF1k4aDBzzIdJgSFDkmfKKMR5yVlvL4bLhbeqg1+B2ij5eg9YW5wSOkHPopI/809l9leH9V7sxOXeKXoiZO1JMqyzcHbm9X2SAV2XQqkRQJ6gSl8GeVMK5CnAg4EDxN6r7Bzmyqugd7Bb/xGuj7rzSPhl6LbB/Utb4NH4Ad0jFZBwKrpB/xjMNHVIV2ObkWX2EnkZmk7ePaBKIfKsfULyobM4fJR3YNftU/GhQ5Ce1uuVsA9GlqStiqoGz2NR/cwI4OcWFyBgBbqCxXCqo35/MBv2J9UmymJIvpyYEj0JkssjzcyBttOBJimFyDJ7qRSC6S4zkvQCGOjzTba3wqWC5jHGu/D4dwZFhYfD9eXtHmMpdL0Qmms9BKeX1//dPxdi5nluKgOcsfZOOxE6hgQuWp+BP8/qcH8I5uaoKZ6BkBuX/v1gC8gUdvIUNH/QWaXOgXuT0VcvADMkVop8BOdib8aYLrh5qmOnaobO6+EOaYC2wkCs6gH/XufvUGlglKlSvRzo1Id0CrCIz81yoEnKo2eBle8Mk/UQeC28QsbCyaRrta4MCL1lbZAQSJF8RQuElPW6fARmVKk5Qufxs6Fm0mprJnjTmvsZClLjE35nm3DzaPtKtRXi90e/q9+EAat8T9qPghPWB5kBPEwM1aCUTOA1uHKsJWyMgqRtcbkyFfqkxvZxjsO1La0pRiukp/bE3gwHV9cNd+9luOTcXFMV7LqaP6ip16f2Slecvyv0tKRywmu51+oECNZGfiPHwFVgiC6Bbk+6H9d3QT/HNuLvm4JKZtEGnX8KH5E4CK+0u2QpeIa5SvUPoCsQfkXaoFvfqAP6KmPqkm/nG4sjKTLi0vKc0GP9CttvB0fKHLPK9ZIqokyft/KcuzwHhkdVsQ8cRzcwDKwaZxfzgBwGEL6vjse4ghvMR9R0toCKkv6cBjvgTOMJMA+oBHZAZIOzhkLJiOvl+VK/b/1ERusVdjAMYopXEr+ZRL5dBLSlu3QL/AeVQYYk5qYwaQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0xMC0wM1QyMDo1Mzo1NSswMzowMPz2q7oAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTAtMDNUMjA6NTM6NTUrMDM6MDCNqxMGAAAAAElFTkSuQmCC
// @match       *://www.google.com/search*
// @match       *://www.google.ad/search*
// @match       *://www.google.ae/search*
// @match       *://www.google.com.af/search*
// @match       *://www.google.com.ag/search*
// @match       *://www.google.com.ai/search*
// @match       *://www.google.al/search*
// @match       *://www.google.am/search*
// @match       *://www.google.co.ao/search*
// @match       *://www.google.com.ar/search*
// @match       *://www.google.as/search*
// @match       *://www.google.at/search*
// @match       *://www.google.com.au/search*
// @match       *://www.google.az/search*
// @match       *://www.google.ba/search*
// @match       *://www.google.com.bd/search*
// @match       *://www.google.be/search*
// @match       *://www.google.bf/search*
// @match       *://www.google.bg/search*
// @match       *://www.google.com.bh/search*
// @match       *://www.google.bi/search*
// @match       *://www.google.bj/search*
// @match       *://www.google.com.bn/search*
// @match       *://www.google.com.bo/search*
// @match       *://www.google.com.br/search*
// @match       *://www.google.bs/search*
// @match       *://www.google.bt/search*
// @match       *://www.google.co.bw/search*
// @match       *://www.google.by/search*
// @match       *://www.google.com.bz/search*
// @match       *://www.google.ca/search*
// @match       *://www.google.cd/search*
// @match       *://www.google.cf/search*
// @match       *://www.google.cg/search*
// @match       *://www.google.ch/search*
// @match       *://www.google.ci/search*
// @match       *://www.google.co.ck/search*
// @match       *://www.google.cl/search*
// @match       *://www.google.cm/search*
// @match       *://www.google.cn/search*
// @match       *://www.google.com.co/search*
// @match       *://www.google.co.cr/search*
// @match       *://www.google.com.cu/search*
// @match       *://www.google.cv/search*
// @match       *://www.google.com.cy/search*
// @match       *://www.google.cz/search*
// @match       *://www.google.de/search*
// @match       *://www.google.dj/search*
// @match       *://www.google.dk/search*
// @match       *://www.google.dm/search*
// @match       *://www.google.com.do/search*
// @match       *://www.google.dz/search*
// @match       *://www.google.com.ec/search*
// @match       *://www.google.ee/search*
// @match       *://www.google.com.eg/search*
// @match       *://www.google.es/search*
// @match       *://www.google.com.et/search*
// @match       *://www.google.fi/search*
// @match       *://www.google.com.fj/search*
// @match       *://www.google.fm/search*
// @match       *://www.google.fr/search*
// @match       *://www.google.ga/search*
// @match       *://www.google.ge/search*
// @match       *://www.google.gg/search*
// @match       *://www.google.com.gh/search*
// @match       *://www.google.com.gi/search*
// @match       *://www.google.gl/search*
// @match       *://www.google.gm/search*
// @match       *://www.google.gp/search*
// @match       *://www.google.gr/search*
// @match       *://www.google.com.gt/search*
// @match       *://www.google.gy/search*
// @match       *://www.google.com.hk/search*
// @match       *://www.google.hn/search*
// @match       *://www.google.hr/search*
// @match       *://www.google.ht/search*
// @match       *://www.google.hu/search*
// @match       *://www.google.co.id/search*
// @match       *://www.google.ie/search*
// @match       *://www.google.co.il/search*
// @match       *://www.google.im/search*
// @match       *://www.google.co.in/search*
// @match       *://www.google.iq/search*
// @match       *://www.google.is/search*
// @match       *://www.google.it/search*
// @match       *://www.google.je/search*
// @match       *://www.google.com.jm/search*
// @match       *://www.google.jo/search*
// @match       *://www.google.co.jp/search*
// @match       *://www.google.co.ke/search*
// @match       *://www.google.com.kh/search*
// @match       *://www.google.ki/search*
// @match       *://www.google.kg/search*
// @match       *://www.google.co.kr/search*
// @match       *://www.google.com.kw/search*
// @match       *://www.google.kz/search*
// @match       *://www.google.la/search*
// @match       *://www.google.com.lb/search*
// @match       *://www.google.li/search*
// @match       *://www.google.lk/search*
// @match       *://www.google.co.ls/search*
// @match       *://www.google.lt/search*
// @match       *://www.google.lu/search*
// @match       *://www.google.lv/search*
// @match       *://www.google.com.ly/search*
// @match       *://www.google.co.ma/search*
// @match       *://www.google.md/search*
// @match       *://www.google.me/search*
// @match       *://www.google.mg/search*
// @match       *://www.google.mk/search*
// @match       *://www.google.ml/search*
// @match       *://www.google.com.mm/search*
// @match       *://www.google.mn/search*
// @match       *://www.google.ms/search*
// @match       *://www.google.com.mt/search*
// @match       *://www.google.mu/search*
// @match       *://www.google.mv/search*
// @match       *://www.google.mw/search*
// @match       *://www.google.com.mx/search*
// @match       *://www.google.com.my/search*
// @match       *://www.google.co.mz/search*
// @match       *://www.google.com.na/search*
// @match       *://www.google.com.nf/search*
// @match       *://www.google.com.ng/search*
// @match       *://www.google.com.ni/search*
// @match       *://www.google.ne/search*
// @match       *://www.google.nl/search*
// @match       *://www.google.no/search*
// @match       *://www.google.com.np/search*
// @match       *://www.google.nr/search*
// @match       *://www.google.nu/search*
// @match       *://www.google.co.nz/search*
// @match       *://www.google.com.om/search*
// @match       *://www.google.com.pa/search*
// @match       *://www.google.com.pe/search*
// @match       *://www.google.com.pg/search*
// @match       *://www.google.com.ph/search*
// @match       *://www.google.com.pk/search*
// @match       *://www.google.pl/search*
// @match       *://www.google.pn/search*
// @match       *://www.google.com.pr/search*
// @match       *://www.google.ps/search*
// @match       *://www.google.pt/search*
// @match       *://www.google.com.py/search*
// @match       *://www.google.com.qa/search*
// @match       *://www.google.ro/search*
// @match       *://www.google.ru/search*
// @match       *://www.google.rw/search*
// @match       *://www.google.com.sa/search*
// @match       *://www.google.com.sb/search*
// @match       *://www.google.sc/search*
// @match       *://www.google.se/search*
// @match       *://www.google.com.sg/search*
// @match       *://www.google.sh/search*
// @match       *://www.google.si/search*
// @match       *://www.google.sk/search*
// @match       *://www.google.com.sl/search*
// @match       *://www.google.sn/search*
// @match       *://www.google.so/search*
// @match       *://www.google.sm/search*
// @match       *://www.google.sr/search*
// @match       *://www.google.st/search*
// @match       *://www.google.com.sv/search*
// @match       *://www.google.td/search*
// @match       *://www.google.tg/search*
// @match       *://www.google.co.th/search*
// @match       *://www.google.com.tj/search*
// @match       *://www.google.tk/search*
// @match       *://www.google.tl/search*
// @match       *://www.google.tm/search*
// @match       *://www.google.tn/search*
// @match       *://www.google.to/search*
// @match       *://www.google.com.tr/search*
// @match       *://www.google.tt/search*
// @match       *://www.google.com.tw/search*
// @match       *://www.google.co.tz/search*
// @match       *://www.google.com.ua/search*
// @match       *://www.google.co.ug/search*
// @match       *://www.google.co.uk/search*
// @match       *://www.google.com.uy/search*
// @match       *://www.google.co.uz/search*
// @match       *://www.google.com.vc/search*
// @match       *://www.google.co.ve/search*
// @match       *://www.google.vg/search*
// @match       *://www.google.co.vi/search*
// @match       *://www.google.com.vn/search*
// @match       *://www.google.vu/search*
// @match       *://www.google.ws/search*
// @match       *://www.google.rs/search*
// @match       *://www.google.co.za/search*
// @match       *://www.google.co.zm/search*
// @match       *://www.google.co.zw/search*
// @match       *://www.google.cat/search*
// @match       https://*/*
// @match       https://search.brave.com/*
// @match       https://startpage.com/*
// @match       https://www.startpage.com/*
// @match       https://www.youtube.com/*
// @match       https://github.com/*
// @match       https://gitlab.com/*
// @match       https://www.github.com/*
// @match       https://www.amazon.com/*
// @match       https://www.amazon.cn/*
// @match       https://www.amazon.in/*
// @match       https://www.amazon.co.jp/*
// @match       https://www.amazon.co.uk/*
// @match       https://www.amazon.ca/*
// @match       https://www.amazon.fr/*
// @match       https://www.amazon.de/*
// @match       https://www.amazon.it/*
// @match       https://www.amazon.es/*
// @match       https://www.amazon.com.au/*
// @match       https://www.amazon.com.mx/*
// @match       https://www.amazon.com.br/*
// @match       https://www.amazon.nl/*
// @match       https://scholar.google.ad/*
// @match       https://scholar.google.ae/*
// @match       https://scholar.google.al/*
// @match       https://scholar.google.am/*
// @match       https://scholar.google.as/*
// @match       https://scholar.google.at/*
// @match       https://scholar.google.az/*
// @match       https://scholar.google.ba/*
// @match       https://scholar.google.be/*
// @match       https://scholar.google.bf/*
// @match       https://scholar.google.bg/*
// @match       https://scholar.google.bi/*
// @match       https://scholar.google.bj/*
// @match       https://scholar.google.bs/*
// @match       https://scholar.google.bt/*
// @match       https://scholar.google.by/*
// @match       https://scholar.google.ca/*
// @match       https://scholar.google.cat/*
// @match       https://scholar.google.cd/*
// @match       https://scholar.google.cf/*
// @match       https://scholar.google.cg/*
// @match       https://scholar.google.ch/*
// @match       https://scholar.google.ci/*
// @match       https://scholar.google.cl/*
// @match       https://scholar.google.cm/*
// @match       https://scholar.google.cn/*
// @match       https://scholar.google.co.ao/*
// @match       https://scholar.google.co.bw/*
// @match       https://scholar.google.co.ck/*
// @match       https://scholar.google.co.cr/*
// @match       https://scholar.google.co.id/*
// @match       https://scholar.google.co.il/*
// @match       https://scholar.google.co.in/*
// @match       https://scholar.google.co.jp/*
// @match       https://scholar.google.co.ke/*
// @match       https://scholar.google.co.kr/*
// @match       https://scholar.google.co.ls/*
// @match       https://scholar.google.co.ma/*
// @match       https://scholar.google.co.mz/*
// @match       https://scholar.google.co.nz/*
// @match       https://scholar.google.co.th/*
// @match       https://scholar.google.co.tz/*
// @match       https://scholar.google.co.ug/*
// @match       https://scholar.google.co.uk/*
// @match       https://scholar.google.co.uz/*
// @match       https://scholar.google.co.ve/*
// @match       https://scholar.google.co.vi/*
// @match       https://scholar.google.co.za/*
// @match       https://scholar.google.co.zm/*
// @match       https://scholar.google.co.zw/*
// @match       https://scholar.google.com.af/*
// @match       https://scholar.google.com.ag/*
// @match       https://scholar.google.com.ai/*
// @match       https://scholar.google.com.ar/*
// @match       https://scholar.google.com.au/*
// @match       https://scholar.google.com.bd/*
// @match       https://scholar.google.com.bh/*
// @match       https://scholar.google.com.bn/*
// @match       https://scholar.google.com.bo/*
// @match       https://scholar.google.com.br/*
// @match       https://scholar.google.com.bz/*
// @match       https://scholar.google.com.co/*
// @match       https://scholar.google.com.cu/*
// @match       https://scholar.google.com.cy/*
// @match       https://scholar.google.com.do/*
// @match       https://scholar.google.com.ec/*
// @match       https://scholar.google.com.eg/*
// @match       https://scholar.google.com.et/*
// @match       https://scholar.google.com.fj/*
// @match       https://scholar.google.com.gh/*
// @match       https://scholar.google.com.gi/*
// @match       https://scholar.google.com.gt/*
// @match       https://scholar.google.com.hk/*
// @match       https://scholar.google.com.jm/*
// @match       https://scholar.google.com.kh/*
// @match       https://scholar.google.com.kw/*
// @match       https://scholar.google.com.lb/*
// @match       https://scholar.google.com.ly/*
// @match       https://scholar.google.com.mm/*
// @match       https://scholar.google.com.mt/*
// @match       https://scholar.google.com.mx/*
// @match       https://scholar.google.com.my/*
// @match       https://scholar.google.com.na/*
// @match       https://scholar.google.com.nf/*
// @match       https://scholar.google.com.ng/*
// @match       https://scholar.google.com.ni/*
// @match       https://scholar.google.com.np/*
// @match       https://scholar.google.com.om/*
// @match       https://scholar.google.com.pa/*
// @match       https://scholar.google.com.pe/*
// @match       https://scholar.google.com.pg/*
// @match       https://scholar.google.com.ph/*
// @match       https://scholar.google.com.pk/*
// @match       https://scholar.google.com.pr/*
// @match       https://scholar.google.com.py/*
// @match       https://scholar.google.com.qa/*
// @match       https://scholar.google.com.sa/*
// @match       https://scholar.google.com.sb/*
// @match       https://scholar.google.com.sg/*
// @match       https://scholar.google.com.sl/*
// @match       https://scholar.google.com.sv/*
// @match       https://scholar.google.com.tj/*
// @match       https://scholar.google.com.tr/*
// @match       https://scholar.google.com.tw/*
// @match       https://scholar.google.com.ua/*
// @match       https://scholar.google.com.uy/*
// @match       https://scholar.google.com.vc/*
// @match       https://scholar.google.com.vn/*
// @match       https://scholar.google.com/*
// @match       https://scholar.google.cv/*
// @match       https://scholar.google.cz/*
// @match       https://scholar.google.de/*
// @match       https://scholar.google.dj/*
// @match       https://scholar.google.dk/*
// @match       https://scholar.google.dm/*
// @match       https://scholar.google.dz/*
// @match       https://scholar.google.ee/*
// @match       https://scholar.google.es/*
// @match       https://scholar.google.fi/*
// @match       https://scholar.google.fm/*
// @match       https://scholar.google.fr/*
// @match       https://scholar.google.ga/*
// @match       https://scholar.google.ge/*
// @match       https://scholar.google.gg/*
// @match       https://scholar.google.gl/*
// @match       https://scholar.google.gm/*
// @match       https://scholar.google.gp/*
// @match       https://scholar.google.gr/*
// @match       https://scholar.google.gy/*
// @match       https://scholar.google.hn/*
// @match       https://scholar.google.hr/*
// @match       https://scholar.google.ht/*
// @match       https://scholar.google.hu/*
// @match       https://scholar.google.ie/*
// @match       https://scholar.google.im/*
// @match       https://scholar.google.iq/*
// @match       https://scholar.google.is/*
// @match       https://scholar.google.it/*
// @match       https://scholar.google.je/*
// @match       https://scholar.google.jo/*
// @match       https://scholar.google.kg/*
// @match       https://scholar.google.ki/*
// @match       https://scholar.google.kz/*
// @match       https://scholar.google.la/*
// @match       https://scholar.google.li/*
// @match       https://scholar.google.lk/*
// @match       https://scholar.google.lt/*
// @match       https://scholar.google.lu/*
// @match       https://scholar.google.lv/*
// @match       https://scholar.google.md/*
// @match       https://scholar.google.me/*
// @match       https://scholar.google.mg/*
// @match       https://scholar.google.mk/*
// @match       https://scholar.google.ml/*
// @match       https://scholar.google.mn/*
// @match       https://scholar.google.ms/*
// @match       https://scholar.google.mu/*
// @match       https://scholar.google.mv/*
// @match       https://scholar.google.mw/*
// @match       https://scholar.google.ne/*
// @match       https://scholar.google.nl/*
// @match       https://scholar.google.no/*
// @match       https://scholar.google.nr/*
// @match       https://scholar.google.nu/*
// @match       https://scholar.google.pl/*
// @match       https://scholar.google.pn/*
// @match       https://scholar.google.ps/*
// @match       https://scholar.google.pt/*
// @match       https://scholar.google.ro/*
// @match       https://scholar.google.rs/*
// @match       https://scholar.google.ru/*
// @match       https://scholar.google.rw/*
// @match       https://scholar.google.sc/*
// @match       https://scholar.google.se/*
// @match       https://scholar.google.sh/*
// @match       https://scholar.google.si/*
// @match       https://scholar.google.sk/*
// @match       https://scholar.google.sm/*
// @match       https://scholar.google.sn/*
// @match       https://scholar.google.so/*
// @match       https://scholar.google.sr/*
// @match       https://scholar.google.st/*
// @match       https://scholar.google.td/*
// @match       https://scholar.google.tg/*
// @match       https://scholar.google.tk/*
// @match       https://scholar.google.tl/*
// @match       https://scholar.google.tm/*
// @match       https://scholar.google.tn/*
// @match       https://scholar.google.to/*
// @match       https://scholar.google.tt/*
// @match       https://scholar.google.vg/*
// @match       https://scholar.google.vu/*
// @match       https://scholar.google.ws/*
// ==/UserScript==
globalThis.IS_USERSCRIPT = true;

const USE_GM = false;
const PREFIX = 'userscript-polyfill';

globalThis._localStorage_browser_polyfill = {
  get: async (...args) => {
    args = args.filter(Boolean);
    debugger;
    console.log('[localStorage] Get: ', ...args);
    const out = {};
    for (const k of args) {
      out[k] = USE_GM ? GM_getValue(k) : localStorage[`${PREFIX}_${k}`];
    }
    return out;
  },
  set: async (...args) => {
    debugger;
    console.log('[localStorage] Set: ', ...args);
  },
  clear: async () => {
    debugger;
    console.log('[localStorage] Clear');
  },
};

globalThis._browser_userscript_polyfill = {
  runtime: {
    sendMessage: (msg) => {
      if (msg.type === 'tabsCreate') {
        window.open(msg.options.url, '_blank');
      }
    },
    id: '093889f3-43be-45e3-bc5a-e257e75b466d',
  },
  storage: {sync: globalThis._localStorage_browser_polyfill, local: globalThis._localStorage_browser_polyfill},
  permissions: {
    remove: () => {},
    add: () => {},
    request: () => {},
    getAll: () => ({}),
  },
};
console.log(globalThis.browser, _browser_userscript_polyfill);
Object.assign(globalThis, {browser: globalThis._browser_userscript_polyfill, chrome: globalThis._browser_userscript_polyfill});
(function(a,b){if("function"==typeof define&&define.amd)define("webextension-polyfill",["module"],b);else if("undefined"!=typeof exports)b(module);else{var c={exports:{}};b(c),a.browser=c.exports}})("undefined"==typeof globalThis?"undefined"==typeof self?this:self:globalThis,function(a){"use strict";if(!(globalThis.chrome&&globalThis.chrome.runtime&&globalThis.chrome.runtime.id))throw new Error("This script should only be loaded in a browser extension.");if(!(globalThis.browser&&globalThis.browser.runtime&&globalThis.browser.runtime.id)){a.exports=(a=>{const b={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(b).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class c extends WeakMap{constructor(a,b=void 0){super(b),this.createItem=a}get(a){return this.has(a)||this.set(a,this.createItem(a)),super.get(a)}}const d=a=>a&&"object"==typeof a&&"function"==typeof a.then,e=(b,c)=>(...d)=>{a.runtime.lastError?b.reject(new Error(a.runtime.lastError.message)):c.singleCallbackArg||1>=d.length&&!1!==c.singleCallbackArg?b.resolve(d[0]):b.resolve(d)},f=a=>1==a?"argument":"arguments",g=(a,b)=>function(c,...d){if(d.length<b.minArgs)throw new Error(`Expected at least ${b.minArgs} ${f(b.minArgs)} for ${a}(), got ${d.length}`);if(d.length>b.maxArgs)throw new Error(`Expected at most ${b.maxArgs} ${f(b.maxArgs)} for ${a}(), got ${d.length}`);return new Promise((f,g)=>{if(b.fallbackToNoCallback)try{c[a](...d,e({resolve:f,reject:g},b))}catch(e){console.warn(`${a} API method doesn't seem to support the callback parameter, `+"falling back to call it without a callback: ",e),c[a](...d),b.fallbackToNoCallback=!1,b.noCallback=!0,f()}else b.noCallback?(c[a](...d),f()):c[a](...d,e({resolve:f,reject:g},b))})},h=(a,b,c)=>new Proxy(b,{apply(b,d,e){return c.call(d,a,...e)}});let i=Function.call.bind(Object.prototype.hasOwnProperty);const j=(a,b={},c={})=>{let d=Object.create(null),e=Object.create(a);return new Proxy(e,{has(b,c){return c in a||c in d},get(e,f){if(f in d)return d[f];if(!(f in a))return;let k=a[f];if("function"==typeof k){if("function"==typeof b[f])k=h(a,a[f],b[f]);else if(i(c,f)){let b=g(f,c[f]);k=h(a,a[f],b)}else k=k.bind(a);}else if("object"==typeof k&&null!==k&&(i(b,f)||i(c,f)))k=j(k,b[f],c[f]);else if(i(c,"*"))k=j(k,b[f],c["*"]);else return Object.defineProperty(d,f,{configurable:!0,enumerable:!0,get(){return a[f]},set(b){a[f]=b}}),k;return d[f]=k,k},set(b,c,e){return c in d?d[c]=e:a[c]=e,!0},defineProperty(a,b,c){return Reflect.defineProperty(d,b,c)},deleteProperty(a,b){return Reflect.deleteProperty(d,b)}})},k=a=>({addListener(b,c,...d){b.addListener(a.get(c),...d)},hasListener(b,c){return b.hasListener(a.get(c))},removeListener(b,c){b.removeListener(a.get(c))}}),l=new c(a=>"function"==typeof a?function(b){const c=j(b,{},{getContent:{minArgs:0,maxArgs:0}});a(c)}:a),m=new c(a=>"function"==typeof a?function(b,c,e){let f,g,h=!1,i=new Promise(a=>{f=function(b){h=!0,a(b)}});try{g=a(b,c,f)}catch(a){g=Promise.reject(a)}const j=!0!==g&&d(g);if(!0!==g&&!j&&!h)return!1;const k=a=>{a.then(a=>{e(a)},a=>{let b;b=a&&(a instanceof Error||"string"==typeof a.message)?a.message:"An unexpected error occurred",e({__mozWebExtensionPolyfillReject__:!0,message:b})}).catch(a=>{console.error("Failed to send onMessage rejected reply",a)})};return j?k(g):k(i),!0}:a),n=({reject:b,resolve:c},d)=>{a.runtime.lastError?a.runtime.lastError.message==="The message port closed before a response was received."?c():b(new Error(a.runtime.lastError.message)):d&&d.__mozWebExtensionPolyfillReject__?b(new Error(d.message)):c(d)},o=(a,b,c,...d)=>{if(d.length<b.minArgs)throw new Error(`Expected at least ${b.minArgs} ${f(b.minArgs)} for ${a}(), got ${d.length}`);if(d.length>b.maxArgs)throw new Error(`Expected at most ${b.maxArgs} ${f(b.maxArgs)} for ${a}(), got ${d.length}`);return new Promise((a,b)=>{const e=n.bind(null,{resolve:a,reject:b});d.push(e),c.sendMessage(...d)})},p={devtools:{network:{onRequestFinished:k(l)}},runtime:{onMessage:k(m),onMessageExternal:k(m),sendMessage:o.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:o.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},q={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return b.privacy={network:{"*":q},services:{"*":q},websites:{"*":q}},j(a,p,b)})(chrome)}else a.exports=globalThis.browser});
//# sourceMappingURL=browser-polyfill.min.js.map

// webextension-polyfill v.0.12.0 (https://github.com/mozilla/webextension-polyfill)

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
/* mousetrap v1.6.5 craig.is/killing/mice */
(function(q,u,c){function v(a,b,g){a.addEventListener?a.addEventListener(b,g,!1):a.attachEvent("on"+b,g)}function z(a){if("keypress"==a.type){var b=String.fromCharCode(a.which);a.shiftKey||(b=b.toLowerCase());return b}return n[a.which]?n[a.which]:r[a.which]?r[a.which]:String.fromCharCode(a.which).toLowerCase()}function F(a){var b=[];a.shiftKey&&b.push("shift");a.altKey&&b.push("alt");a.ctrlKey&&b.push("ctrl");a.metaKey&&b.push("meta");return b}function w(a){return"shift"==a||"ctrl"==a||"alt"==a||
"meta"==a}function A(a,b){var g,d=[];var e=a;"+"===e?e=["+"]:(e=e.replace(/\+{2}/g,"+plus"),e=e.split("+"));for(g=0;g<e.length;++g){var m=e[g];B[m]&&(m=B[m]);b&&"keypress"!=b&&C[m]&&(m=C[m],d.push("shift"));w(m)&&d.push(m)}e=m;g=b;if(!g){if(!p){p={};for(var c in n)95<c&&112>c||n.hasOwnProperty(c)&&(p[n[c]]=c)}g=p[e]?"keydown":"keypress"}"keypress"==g&&d.length&&(g="keydown");return{key:m,modifiers:d,action:g}}function D(a,b){return null===a||a===u?!1:a===b?!0:D(a.parentNode,b)}function d(a){function b(a){a=
a||{};var b=!1,l;for(l in p)a[l]?b=!0:p[l]=0;b||(x=!1)}function g(a,b,t,f,g,d){var l,E=[],h=t.type;if(!k._callbacks[a])return[];"keyup"==h&&w(a)&&(b=[a]);for(l=0;l<k._callbacks[a].length;++l){var c=k._callbacks[a][l];if((f||!c.seq||p[c.seq]==c.level)&&h==c.action){var e;(e="keypress"==h&&!t.metaKey&&!t.ctrlKey)||(e=c.modifiers,e=b.sort().join(",")===e.sort().join(","));e&&(e=f&&c.seq==f&&c.level==d,(!f&&c.combo==g||e)&&k._callbacks[a].splice(l,1),E.push(c))}}return E}function c(a,b,c,f){k.stopCallback(b,
b.target||b.srcElement,c,f)||!1!==a(b,c)||(b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation?b.stopPropagation():b.cancelBubble=!0)}function e(a){"number"!==typeof a.which&&(a.which=a.keyCode);var b=z(a);b&&("keyup"==a.type&&y===b?y=!1:k.handleKey(b,F(a),a))}function m(a,g,t,f){function h(c){return function(){x=c;++p[a];clearTimeout(q);q=setTimeout(b,1E3)}}function l(g){c(t,g,a);"keyup"!==f&&(y=z(g));setTimeout(b,10)}for(var d=p[a]=0;d<g.length;++d){var e=d+1===g.length?l:h(f||
A(g[d+1]).action);n(g[d],e,f,a,d)}}function n(a,b,c,f,d){k._directMap[a+":"+c]=b;a=a.replace(/\s+/g," ");var e=a.split(" ");1<e.length?m(a,e,b,c):(c=A(a,c),k._callbacks[c.key]=k._callbacks[c.key]||[],g(c.key,c.modifiers,{type:c.action},f,a,d),k._callbacks[c.key][f?"unshift":"push"]({callback:b,modifiers:c.modifiers,action:c.action,seq:f,level:d,combo:a}))}var k=this;a=a||u;if(!(k instanceof d))return new d(a);k.target=a;k._callbacks={};k._directMap={};var p={},q,y=!1,r=!1,x=!1;k._handleKey=function(a,
d,e){var f=g(a,d,e),h;d={};var k=0,l=!1;for(h=0;h<f.length;++h)f[h].seq&&(k=Math.max(k,f[h].level));for(h=0;h<f.length;++h)f[h].seq?f[h].level==k&&(l=!0,d[f[h].seq]=1,c(f[h].callback,e,f[h].combo,f[h].seq)):l||c(f[h].callback,e,f[h].combo);f="keypress"==e.type&&r;e.type!=x||w(a)||f||b(d);r=l&&"keydown"==e.type};k._bindMultiple=function(a,b,c){for(var d=0;d<a.length;++d)n(a[d],b,c)};v(a,"keypress",e);v(a,"keydown",e);v(a,"keyup",e)}if(q){var n={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",
18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},r={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},C={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},B={option:"alt",command:"meta","return":"enter",
escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},p;for(c=1;20>c;++c)n[111+c]="f"+c;for(c=0;9>=c;++c)n[c+96]=c.toString();d.prototype.bind=function(a,b,c){a=a instanceof Array?a:[a];this._bindMultiple.call(this,a,b,c);return this};d.prototype.unbind=function(a,b){return this.bind.call(this,a,function(){},b)};d.prototype.trigger=function(a,b){if(this._directMap[a+":"+b])this._directMap[a+":"+b]({},a);return this};d.prototype.reset=function(){this._callbacks={};
this._directMap={};return this};d.prototype.stopCallback=function(a,b){if(-1<(" "+b.className+" ").indexOf(" mousetrap ")||D(b,this.target))return!1;if("composedPath"in a&&"function"===typeof a.composedPath){var c=a.composedPath()[0];c!==a.target&&(b=c)}return"INPUT"==b.tagName||"SELECT"==b.tagName||"TEXTAREA"==b.tagName||b.isContentEditable};d.prototype.handleKey=function(){return this._handleKey.apply(this,arguments)};d.addKeycodes=function(a){for(var b in a)a.hasOwnProperty(b)&&(n[b]=a[b]);p=null};
d.init=function(){var a=d(u),b;for(b in a)"_"!==b.charAt(0)&&(d[b]=function(b){return function(){return a[b].apply(a,arguments)}}(b))};d.init();q.Mousetrap=d;"undefined"!==typeof module&&module.exports&&(module.exports=d);"function"===typeof define&&define.amd&&define(function(){return d})}})("undefined"!==typeof window?window:null,"undefined"!==typeof window?document:null);
(function(a){var c={},d=a.prototype.stopCallback;a.prototype.stopCallback=function(e,b,a,f){return this.paused?!0:c[a]||c[f]?!1:d.call(this,e,b,a)};a.prototype.bindGlobal=function(a,b,d){this.bind(a,b,d);if(a instanceof Array)for(b=0;b<a.length;b++)c[a[b]]=!0;else c[a]=!0};a.init()})(Mousetrap);
const DEFAULT_CSS = `/* NOTE:
 *
 * - Using !important is needed for some styles because otherwise they get
 *   overriden by the search engine stylesheets
 * - Using outline works better than border sometimes because creating the
 *   border can move other elements, for example the page numbers are moved in
 *   Google Scholar when highlighting the prev/next buttons.
 */

:root {
  --result-outline: 1px solid black;
}

@media (prefers-color-scheme: dark) {
  :root {
    --result-outline: 1px solid #aaaaaa;
  }
}

html[dark], [dark] {
  --result-outline: 1px solid #aaaaaa;
}

.wsn-google-focused-link {
    position: relative;
    /* This is required for the arrow to appear when navigating sub-results, see
     * also: https://github.com/infokiller/web-search-navigator/issues/357 */
    overflow: visible !important;
}

.wsn-google-focused-link::before,
.wsn-google-focused-map::before,
.wsn-gitlab-focused-link::before,
.wsn-brave-search-focused-link::before,
.wsn-startpage-focused-link::before {
    content: "\u25BA";
    margin-right: 25px;
    left: -25px;
    position: absolute;
}

.wsn-brave-search-focused-news {
  position: relative;
}

.wsn-brave-search-focused-news::before {
  content: "\u25BA";
  top: 5px;
  left: -45px;
  position: absolute;
}

.wsn-google-focused-image {
    outline: var(--result-outline) !important;
    /* Images are less visible with a thin outline */
    outline-width: 2px;
}

.wsn-google-focused-card,
.wsn-brave-search-focused-card,
.wsn-google-focused-job-card {
    border: var(--result-outline) !important;
}

.wsn-google-focused-map,
.wsn-google-card-item,
.wsn-gitlab-focused-group-row {
    outline: var(--result-outline) !important;
}

.wsn-google-focused-memex-result {
    border: var(--result-outline) !important;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

/* Startpage has dark themes where a black outline won't be visible */
.wsn-startpage-focused-link {
    outline: 1px solid #435a69 !important;
    outline-offset: 3px;
}

.wsn-youtube-focused-video {
    outline: var(--result-outline) !important;
    outline-offset: 1px;
}

.wsn-youtube-focused-grid-video {
    border: var(--result-outline) !important;
}

.wsn-google-scholar-next-page {
    /* Using outline works better than border for the Scholar previous/next
     * buttons because border moves the page numbers a bit. */
    outline: var(--result-outline) !important;
}

.wsn-amazon-focused-item {
    outline: var(--result-outline) !important;
    outline-offset: 3px;
}

.wsn-amazon-focused-cart-item,
.wsn-amazon-focused-carousel-item {
    border: var(--result-outline) !important;
}

.wsn-github-focused-item,
.wsn-github-focused-pagination {
    outline: var(--result-outline) !important;
    outline-offset: 2px;
}

/* This rule is only used when the "hide outline" option is enabled, and is used
 * to disable the website's default search result outlining */
.wsn-no-outline,
.wsn-no-outline:focus {
    outline: none;
}`;

const DEFAULT_KEYBINDINGS = {
  nextKey: ['down', 'j'],
  previousKey: ['up', 'k'],
  navigatePreviousResultPage: ['left', 'h'],
  navigateNextResultPage: ['right', 'l'],
  navigateKey: ['return', 'space'],
  navigateNewTabBackgroundKey: ['ctrl+return', 'command+return', 'ctrl+space'],
  navigateNewTabKey: [
    'ctrl+shift+return',
    'command+shift+return',
    'ctrl+shift+space',
  ],
  navigateSearchTab: ['a', 's'],
  navigateImagesTab: ['i'],
  navigateVideosTab: ['v'],
  navigateMapsTab: ['m'],
  navigateNewsTab: ['n'],
  navigateShoppingTab: ['alt+s'],
  navigateBooksTab: ['b'],
  navigateFlightsTab: ['alt+l'],
  navigateFinancialTab: ['f'],
  focusSearchInput: ['/', 'escape'],
  navigateShowAll: ['z z'],
  navigateShowHour: ['z h'],
  navigateShowDay: ['z d'],
  navigateShowWeek: ['z w'],
  navigateShowMonth: ['z m'],
  navigateShowYear: ['z y'],
  toggleSort: ['z s'],
  toggleVerbatimSearch: ['z v'],
  showImagesLarge: ['z l'],
  showImagesMedium: ['z e'],
  showImagesIcon: ['z i'],
  copyUrlKey: [],
};

const DEFAULT_OPTIONS = {
  ...DEFAULT_KEYBINDINGS,
  wrapNavigation: false,
  autoSelectFirst: true,
  hideOutline: false,
  delay: 0,
  googleIncludeCards: true,
  googleIncludeMemex: false,
  googleIncludePlaces: true,
  customCSS: DEFAULT_CSS,
  simulateMiddleClick: false,
  customGitlabUrl: '^https://(www.)?\\.*git.*\\.',
};

const keybindingStringToArray = (kb) => {
  // Alternative: kb.split(/, */);
  return kb.split(',').map((t) => t.trim());
};

// eslint-disable-next-line no-unused-vars
const keybindingArrayToString = (kb) => {
  return kb.join(', ');
};

/**
 * @param {StorageArea} storage The storage area to which this section will
 *  write.
 * @param {Object} defaultValues The default options.
 * @constructor
 */
class BrowserStorage {
  constructor(storage, defaultValues) {
    this.storage = storage;
    this.values = {};
    this.defaultValues = defaultValues;
  }
  load() {
    // this.storage.get(null) returns all the data stored:
    // https://developer.chrome.com/extensions/storage#method-StorageArea-get
    return this.storage.get(null).then((values) => {
      this.values = values;
      // Prior to versions 0.4.* the keybindings were stored as strings, so we
      // migrate them to arrays if needed.
      let migrated = false;
      for (const [key, value] of Object.entries(this.values)) {
        if (!(key in DEFAULT_KEYBINDINGS) || Array.isArray(value)) {
          continue;
        }
        migrated = true;
        this.values[key] = keybindingStringToArray(value);
      }
      if (migrated) {
        return this.save();
      }
    });
  }
  save() {
    return this.storage.set(this.values);
  }
  get(key) {
    const value = this.values[key];
    if (value != null) {
      return value;
    }
    return this.defaultValues[key];
  }
  set(key, value) {
    this.values[key] = value;
  }
  clear() {
    return this.storage.clear().then(() => {
      this.values = {};
    });
  }
  getAll() {
    // Merge options from storage with defaults.
    return { ...this.defaultValues, ...this.values };
  }
}

const STORAGE_KEY = 'webSearchNavigator';

class LocalStorage {
  constructor(defaultValues) {
    this.values = {};
    this.defaultValues = defaultValues;
    this.load();
  }

  load() {
    const storedData = localStorage.getItem(STORAGE_KEY);

    if (storedData) {
      this.values = JSON.parse(storedData);
    } else {
      this.values = { ...this.defaultValues };
      this.save();
    }
  }

  save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.values));
  }

  get(key) {
    const value = this.values[key];
    if (value != null) {
      return value;
    }
    return this.defaultValues[key];
  }

  set(key, value) {
    this.values[key] = value;
    this.save();
  }

  clear() {
    localStorage.removeItem(STORAGE_KEY);
    this.values = { ...this.defaultValues };
  }

  getAll() {
    // Merge options from storage with defaults.
    return { ...this.defaultValues, ...this.values };
  }
}

const createSyncedOptions = () => {
  if (globalThis.IS_USERSCRIPT) {
    console.log('Create LocalStorage options');
    return new LocalStorage(DEFAULT_OPTIONS);
  }
  return new BrowserStorage(browser.storage.sync, DEFAULT_OPTIONS);
};

// eslint-disable-next-line no-unused-vars
class ExtensionOptions {
  constructor() {
    this.sync = createSyncedOptions();
    if (globalThis.IS_USERSCRIPT) {
      this.local = createSyncedOptions();
      return;
    }
    this.local = new BrowserStorage(browser.storage.local, {
      lastQueryUrl: null,
      lastFocusedIndex: 0,
    });
  }

  load() {
    return Promise.all([this.local.load(), this.sync.load()]);
  }
}
/**
 * This file contains search engine specific logic via search engine objects.
 *
 * A search engine object must provide the following:
 *  - {regex} urlPattern
 *  - {CSS selector} searchBoxSelector
 *  - {SearchResult[]} getSearchResults()
 *
 * Optional functions/properties:
 *  - {Array} tabs
 *    Default: {}
 *  - {int} getTopMargin: used if top results are not entirely visible
 *    Default: 0
 *  - {int} getBottomMargin: used if bottom results are not entirely visible.
 *    Relevant for some search engines, since Firefox and Chrome show a tooltip
 *    with the URL of focused links at the bottom and can hide some of the
 *    search result at the bottom.
 *    Default: getDefaultBottomMargin()
 *  - {Function} onChangedResults: function for registering a callback on
 *    changed search results. The callback gets a single boolean parameter that
 *    is set to true if the only change is newly appended results.
 *    Default: null (meaning there's no support for such events)
 *  - {None} changeTools(period)
 *
 * Every SearchResult must provide the element and highlightClass properties and
 * optionally the following:
 *  - {Callback} anchorSelector: callback for getting the anchor
 *    Default: the element itself
 *  - {Callback} highlightedElementSelector: callback for getting the
 *    highlighted element
 *    Default: the element itself
 *  - {Callback} containerSelector: callback for getting the container that
 *    needs to be visible when an element is selected.
 *    Default: the element itself
 */

class SearchResult {
  // We must declare the private class fields.
  #element;
  #anchorSelector;
  #highlightedElementSelector;
  #containerSelector;

  /**
   * @param {Element} element
   * @param {function|null} anchorSelector
   * @param {string} highlightClass
   * @param {function|null} highlightedElementSelector
   * @param {function|null} containerSelector
   */
  constructor(
      element,
      anchorSelector,
      highlightClass,
      highlightedElementSelector,
      containerSelector,
  ) {
    this.#element = element;
    this.#anchorSelector = anchorSelector;
    this.highlightClass = highlightClass;
    this.#highlightedElementSelector = highlightedElementSelector;
    this.#containerSelector = containerSelector;
  }
  get anchor() {
    if (!this.#anchorSelector) {
      return this.#element;
    }
    return this.#anchorSelector(this.#element);
  }
  get container() {
    if (!this.#containerSelector) {
      return this.#element;
    }
    return this.#containerSelector(this.#element);
  }
  get highlightedElement() {
    if (!this.#highlightedElementSelector) {
      return this.#element;
    }
    return this.#highlightedElementSelector(this.#element);
  }
}

// eslint-disable-next-line
/**
 * @param {Array} includedSearchResults An array of
 * tuples.  Each tuple contains collection of the search results optionally
 * accompanied with their container selector.
 * @constructor
 */
const getSortedSearchResults = (
    includedSearchResults,
    excludedNodeList = [],
) => {
  const excludedResultsSet = new Set();
  for (const node of excludedNodeList) {
    excludedResultsSet.add(node);
  }
  const searchResults = [];
  for (const results of includedSearchResults) {
    for (const node of results.nodes) {
      const searchResult = new SearchResult(
          node,
          results.anchorSelector,
          results.highlightClass,
          results.highlightedElementSelector,
          results.containerSelector,
      );
      const anchor = searchResult.anchor;
      // Use offsetParent to exclude hidden elements, see:
      // https://stackoverflow.com/a/21696585/1014208
      if (
        anchor != null &&
        !excludedResultsSet.has(anchor) &&
        anchor.offsetParent !== null
      ) {
        // Prevent adding the same node multiple times.
        excludedResultsSet.add(anchor);
        searchResults.push(searchResult);
      }
    }
  }
  // Sort searchResults by their document position.
  searchResults.sort((a, b) => {
    const position = a.anchor.compareDocumentPosition(b.anchor);
    if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
      return -1;
    } else if (position & Node.DOCUMENT_POSITION_PRECEDING) {
      return 1;
    } else {
      return 0;
    }
  });
  return searchResults;
};

const getFixedSearchBoxTopMargin = (searchBoxContainer, element) => {
  // When scrolling down, the search box can have a fixed position and can hide
  // search results, so we try to compensate for it.
  if (!searchBoxContainer || searchBoxContainer.contains(element)) {
    return 0;
  }
  return searchBoxContainer.getBoundingClientRect().height;
};

// https://stackoverflow.com/a/7000222/2870889
// eslint-disable-next-line no-unused-vars
const isFirefox = () => {
  return navigator.userAgent.toLowerCase().indexOf('firefox') >= 0;
};

// eslint-disable-next-line no-unused-vars
const getDefaultBottomMargin = (element) => {
  return 28;
};

const selectorElementGetter = (selector) => {
  return () => {
    return document.querySelector(selector);
  };
};

const nParent = (element, n) => {
  while (n > 0 && element) {
    element = element.parentElement;
    n--;
  }
  return element;
};

const debounce = (callback, delayMs) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      return callback(...args);
    }, delayMs);
  };
};

class GoogleSearch {
  constructor(options) {
    this.options = options;
  }
  get urlPattern() {
    return /^https:\/\/(www\.)?google\./;
  }
  get searchBoxSelector() {
    // Must match search engine search box
    // NOTE: we used '#searchform input[name=q]' before 2020-06-05 but that
    // doesn't work in the images search tab. Another option is to use
    // 'input[role="combobox"]' but this doesn't work when there's also a
    // dictionary search box.
    // return '#searchform input[name=q]',
    return 'form[role=search] [name=q]';
  }
  getTopMargin(element) {
    return getFixedSearchBoxTopMargin(
        document.querySelector('#searchform.minidiv'),
        element,
    );
  }
  getBottomMargin(element) {
    return isFirefox() ? 0 : getDefaultBottomMargin();
  }
  onChangedResults(callback) {
    if (GoogleSearch.#isImagesTab()) {
      return GoogleSearch.#onImageSearchResults(callback);
    }
    if (this.options.googleIncludeMemex) {
      return GoogleSearch.#onMemexResults(callback);
    }
    // https://github.com/infokiller/web-search-navigator/issues/464
    const container = document.querySelector('#rcnt');
    if (!container) {
      return;
    }
    const observer = new MutationObserver(
        debounce((mutationsList, observer) => {
          callback(true);
        }, 50),
    );
    observer.observe(container, {
      attributes: false,
      childList: true,
      subtree: true,
    });
  }

  static #isImagesTab() {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get('tbm') === 'isch';
  }

  static #getImagesTabResults() {
    const includedElements = [
      // Image links
      {
        nodes: document.querySelectorAll('.islrc a[data-nav="1"]'),
        highlightClass: 'wsn-google-focused-image',
      },
      // Show more results button
      {
        nodes: document.querySelectorAll('#islmp [type="button"]'),
        highlightClass: 'wsn-google-focused-image',
      },
    ];
    return getSortedSearchResults(includedElements, []);
  }

  static #regularResults() {
    return [
      {
        nodes: document.querySelectorAll('#search .r > a:first-of-type'),
        highlightClass: 'wsn-google-focused-link',
        containerSelector: (n) => n.parentElement.parentElement,
      },
      {
        nodes: document.querySelectorAll('#search .r g-link > a:first-of-type'),
        highlightClass: 'wsn-google-focused-link',
        containerSelector: (n) => n.parentElement.parentElement,
      },
      // More results button in continous loading
      // https://imgur.com/a/X9zyJ24
      {
        nodes: document.querySelectorAll(
            '#botstuff a[href^="/search"][href*="start="] h3',
        ),
        highlightClass: 'wsn-google-focused-link',
        anchorSelector: (n) => n.closest('a'),
      },
      // Continuously loaded results are *sometimes* in the #botstuff container
      // https://imgur.com/a/s6ow0La
      {
        nodes: document.querySelectorAll('#botstuff a h3'),
        highlightClass: 'wsn-google-focused-link',
        containerSelector: (n) => nParent(n, 5),
        highlightedElementSelector: (n) => nParent(n, 5),
        anchorSelector: (n) => n.closest('a'),
      },
      // Sometimes featured snippets are not contained in #search (possibly when
      // there are large images?): https://imgur.com/a/VluRKIQ
      {
        nodes: document.querySelectorAll('.xpdopen .g a'),
        highlightClass: 'wsn-google-focused-link',
        highlightedElementSelector: (n) => n.querySelector('h3'),
      },
      // Large YouTube video as top result: https://imgur.com/a/JIe62QV
      {
        nodes: document.querySelectorAll('h3 a[href*="youtube.com"]'),
        highlightClass: 'wsn-google-focused-link',
        highlightedElementSelector: (n) => n.closest('h3'),
      },
      // Sub-results: https://imgur.com/a/CJePYJM
      {
        nodes: document.querySelectorAll('#search h3 a:first-of-type'),
        highlightClass: 'wsn-google-focused-link',
        highlightedElementSelector: (n) => n.closest('h3'),
        containerSelector: (n) => n.closest('tr'),
      },
      // Shopping results: https://imgur.com/a/wccM2iq
      {
        nodes: document.querySelectorAll('#rso a h4'),
        anchorSelector: (n) => n.closest('a'),
        highlightClass: 'wsn-google-focused-card',
        highlightedElementSelector: (n) => n.closest('.sh-dgr__content'),
      },
      // News tab: https://imgur.com/a/MR9q31f
      {
        nodes: document.querySelectorAll('#search g-card a'),
        highlightClass: 'wsn-google-focused-link',
      },
      // Jobs heading for the jobs cards section. Clicking on it takes you
      // to Google's job search.
      // As of 2023-05-28, the Google's jobs search URLs seem to contain two
      // query string params which seem relevant:
      // - ibp=htl;jobs
      // - htivrt=jobs
      // The first one matches the jobs heading, but also buttons in the
      // jobs UI such as filtering by WFH/in-office. Therefore, we use the
      // second one for specific jobs, but the first one to detect the jobs
      // heading (otherwise it would be matched later in vaccines).
      // eslint-disable-next-line max-len
      // const jobsSelector = '#search a:is([href*="ibp=htl;jobs"], [href*="htivrt=jobs"])';
      // NOTE: this must be added to the included elements before:
      // - vaccines
      // - vertical maps
      // - books and featured snippets
      // TODO: add screenshot
      {
        nodes: document.querySelectorAll(
            // eslint-disable-next-line max-len
            '#search a:is([href*="ibp=htl;jobs"],[href*="htivrt=jobs"]) [role=heading][aria-level="2"]',
        ),
        anchorSelector: (n) => n.closest('a'),
        // highlightedElementSelector: (n) => n.closest('li'),
        highlightClass: 'wsn-google-focused-job-card',
      },
      // Same as above, but for specific job results.
      // TODO: add screenshot
      // Jobs cards
      {
        // nodes: document.querySelectorAll('#search a[href*="htivrt=jobs"]'),
        // eslint-disable-next-line max-len
        nodes: document.querySelectorAll('#search li a[href*="htivrt=jobs"]'),
        highlightedElementSelector: (n) => n.closest('li'),
        highlightClass: 'wsn-google-focused-job-card',
      },
      // Books tab: https://imgur.com/a/QSBIOb6
      // NOTE: This is required for matching "features snippets" in the general
      // search tab, and also matches other results.
      {
        nodes: document.querySelectorAll('#search [data-hveid] a h3'),
        anchorSelector: (n) => n.closest('a'),
        containerSelector: (n) => n.closest('[data-hveid]'),
        highlightedElementSelector: (n) => n.closest('[data-hveid]'),
        highlightClass: 'wsn-google-focused-link',
      },
      // Next/previous results page
      {
        nodes: document.querySelectorAll('#pnprev, #pnnext'),
        highlightClass: 'wsn-google-card-item',
      },
    ];
  }

  static #cardResults() {
    const nearestChildOrSiblingOrParentAnchor = (element) => {
      const childAnchor = element.querySelector('a');
      if (childAnchor && childAnchor.href) {
        return childAnchor;
      }
      const siblingAnchor = element.parentElement.querySelector('a');
      if (siblingAnchor && siblingAnchor.href) {
        return siblingAnchor;
      }
      return element.closest('a');
    };
    const nearestCardContainer = (element) => {
      return element.closest('g-inner-card');
    };
    return [
      // Twitter: https://imgur.com/a/fdI75JG
      {
        nodes: document.querySelectorAll(
            '#search [data-init-vis=true] [role=heading]',
        ),
        anchorSelector: nearestChildOrSiblingOrParentAnchor,
        highlightedElementSelector: nearestCardContainer,
        highlightClass: 'wsn-google-focused-card',
      },
      // Vertical "Top stories" results
      {
        nodes: document.querySelectorAll('#search [role=text] [role=heading]'),
        anchorSelector: nearestChildOrSiblingOrParentAnchor,
        highlightClass: 'wsn-google-focused-link',
      },
      // Vertical video results: https://imgur.com/a/GyKhwrx
      // Vertical video results: https://imgur.com/a/8fbPnvT
      {
        nodes: document.querySelectorAll(
            '#search video-voyager a [role=heading]',
        ),
        anchorSelector: nearestChildOrSiblingOrParentAnchor,
        containerSelector: nearestChildOrSiblingOrParentAnchor,
        highlightedElementSelector: nearestChildOrSiblingOrParentAnchor,
        highlightClass: 'wsn-google-focused-link',
      },
      // Horizontal video results: https://imgur.com/a/gRGJ7l9
      // People also search for: https://imgur.com/a/QpCHKt0
      {
        nodes: document.querySelectorAll(
            '#search g-scrolling-carousel g-inner-card a [role=heading]',
        ),
        anchorSelector: nearestChildOrSiblingOrParentAnchor,
        containerSelector: nearestCardContainer,
        highlightedElementSelector: nearestCardContainer,
        highlightClass: 'wsn-google-card-item',
      },
      // Vaccines: https://imgur.com/a/325qJzE
      {
        nodes: document.querySelectorAll(
            '#search a.a-no-hover-decoration [role=heading]',
        ),
        anchorSelector: nearestChildOrSiblingOrParentAnchor,
        containerSelector: nearestChildOrSiblingOrParentAnchor,
        highlightedElementSelector: nearestChildOrSiblingOrParentAnchor,
        highlightClass: 'wsn-google-focused-link',
      },
      // Things to do in X: https://imgur.com/a/ibXwiuT
      {
        nodes: document.querySelectorAll('td a [role=heading]'),
        anchorSelector: nearestChildOrSiblingOrParentAnchor,
        containerSelector: (n) => n.closest('td'),
        highlightedElementSelector: (n) => n.closest('td'),
        highlightClass: 'wsn-google-card-item',
      },
      // Vertical Maps/Places: https://imgur.com/a/JXrxBCj
      // Vertical recipes: https://imgur.com/a/3r7klHk
      // Top stories grid: https://imgur.com/a/mY93YRF
      // TODO: fix the small movements in recipes item selection.
      {
        nodes: document.querySelectorAll('a [role=heading]'),
        anchorSelector: nearestChildOrSiblingOrParentAnchor,
        containerSelector: nearestChildOrSiblingOrParentAnchor,
        highlightedElementSelector: nearestChildOrSiblingOrParentAnchor,
        highlightClass: 'wsn-google-card-item',
      },
    ];
  }

  static #placesResults() {
    const nodes = document.querySelectorAll('.vk_c a');
    // The first node is usually the map image which needs to be styled
    // differently.
    let map;
    let links = nodes;
    if (nodes[0] != null && nodes[0].querySelector('img')) {
      map = nodes[0];
      links = Array.from(nodes).slice(1);
    }
    const results = [];
    if (map != null) {
      results.push({
        nodes: [map],
        highlightedElementSelector: (n) => n.parentElement,
        highlightClass: 'wsn-google-focused-map',
      });
    }
    results.push({
      nodes: links,
      highlightClass: 'wsn-google-focused-link',
    });
    return results;
  }

  static #memexResults() {
    return [
      {
        nodes: document.querySelectorAll(
            '#memexResults ._3d3zwUrsb4CVi1Li4H6CBw a',
        ),
        highlightClass: 'wsn-google-focused-memex-result',
      },
    ];
  }

  getSearchResults() {
    if (GoogleSearch.#isImagesTab()) {
      return GoogleSearch.#getImagesTabResults();
    }
    const includedElements = GoogleSearch.#regularResults();
    if (this.options.googleIncludeCards) {
      includedElements.push(...GoogleSearch.#cardResults());
    }
    if (this.options.googleIncludePlaces) {
      includedElements.push(...GoogleSearch.#placesResults());
    }
    if (this.options.googleIncludeMemex) {
      includedElements.push(...GoogleSearch.#memexResults());
    }
    const excludedElements = document.querySelectorAll(
        [
          // People also ask. Each one of the used selectors should be
          // sufficient, but we use both to be more robust to upstream DOM
          // changes.
          '.related-question-pair a',
          '#search .kp-blk:not(.c2xzTb) .r > a:first-of-type',
          // Right hand sidebar. We exclude it because it is after all the
          // results in the document order (as determined by
          // Node.DOCUMENT_POSITION_FOLLOWING used in getSortedSearchResults),
          // and it's confusing.
          '#rhs a',
        ].join(', '),
    );
    return getSortedSearchResults(includedElements, excludedElements);
  }

  static #onImageSearchResults(callback) {
    const container = document.querySelector('.islrc');
    if (!container) {
      return;
    }
    const observer = new MutationObserver(
        debounce((mutationsList, observer) => {
          callback(true);
        }, 50),
    );
    observer.observe(container, {
      attributes: false,
      childList: true,
      subtree: false,
    });
  }

  static #onMemexResults(callback) {
    const container = document.querySelector('#rhs');
    if (!container) {
      return;
    }
    const observer = new MutationObserver(
        debounce((mutationsList, observer) => {
          if (document.querySelector('#memexResults') != null) {
            callback(true);
          }
        }, 50),
    );
    observer.observe(container, {
      attributes: false,
      childList: true,
      subtree: true,
    });
  }

  static #imageSearchTabs() {
    const visibleTabs = document.querySelectorAll('.T47uwc > a');
    // NOTE: The order of the tabs after the first two is dependent on the
    // query. For example:
    // - "cats": videos, news, maps
    // - "trump": news, videos, maps
    // - "california": maps, news, videos
    return {
      navigateSearchTab: visibleTabs[0],
      navigateMapsTab: selectorElementGetter(
          '.T47uwc > a[href*="maps.google."]',
      ),
      navigateVideosTab: selectorElementGetter('.T47uwc > a[href*="&tbm=vid"]'),
      navigateNewsTab: selectorElementGetter('.T47uwc > a[href*="&tbm=nws"]'),
      navigateShoppingTab: selectorElementGetter(
          'a[role="menuitem"][href*="&tbm=shop"]',
      ),
      navigateBooksTab: selectorElementGetter(
          'a[role="menuitem"][href*="&tbm=bks"]',
      ),
      navigateFlightsTab: selectorElementGetter(
          'a[role="menuitem"][href*="&tbm=flm"]',
      ),
      navigateFinancialTab: selectorElementGetter(
          'a[role="menuitem"][href*="/finance?"]',
      ),
      // TODO: Disable image search's default keybindings to avoid confusing the
      // user, because the default keybindings can cause an indenepdent
      // navigation of the image results with another outline. The code below
      // doesn't work because the key event is captured by the image search
      // code, since Moustrap is bound on document, instead of a more specific
      // container. The following does work, but the code needs some changes to
      // support binding on a specific container per search engine:
      //
      // Mousetrap(document.querySelector('.islrc')).bind ...
      // Mousetrap(document.querySelector('#Sva75c')).bind ...
      //
      // navigatePreviousResultPage: null,
      // navigateNextResultPage: null,
    };
  }

  // Array storing tuples of tabs navigation keybindings and their corresponding
  // CSS selector
  get previousPageButton() {
    if (GoogleSearch.#isImagesTab()) {
      return null;
    }
    return selectorElementGetter('#pnprev');
  }

  get nextPageButton() {
    if (GoogleSearch.#isImagesTab()) {
      return null;
    }
    return selectorElementGetter('#pnnext');
  }
  get tabs() {
    if (GoogleSearch.#isImagesTab()) {
      return GoogleSearch.#imageSearchTabs();
    }
    return {
      navigateSearchTab: selectorElementGetter(
          // eslint-disable-next-line max-len
          'a[href*="/search?q="]:not([href*="&tbm="]):not([href*="maps.google."])',
      ),
      navigateImagesTab: selectorElementGetter('a[href*="&tbm=isch"]'),
      navigateVideosTab: selectorElementGetter('a[href*="&tbm=vid"]'),
      navigateMapsTab: selectorElementGetter('a[href*="maps.google."]'),
      navigateNewsTab: selectorElementGetter('a[href*="&tbm=nws"]'),
      navigateShoppingTab: selectorElementGetter('a[href*="&tbm=shop"]'),
      navigateBooksTab: selectorElementGetter('a[href*="&tbm=bks"]'),
      navigateFlightsTab: selectorElementGetter('a[href*="&tbm=flm"]'),
      navigateFinancialTab: selectorElementGetter('[href*="/finance?"]'),
    };
  }

  /**
   *  Filter the results based on special properties
   * @param {*} period, filter identifier. Accepted filter are :
   *  'a' : all results
   *  'h' : last hour
   *  'd' : last day
   *  'w' : last week
   *  'm' : last month
   *  'y' : last year
   *  'v' : verbatim search
   *  null : toggle sort
   */
  // TODO: Refactor this function to get enums after migrating to typescript.
  changeTools(period) {
    const searchParams = new URLSearchParams(window.location.search);
    // Use the last value of the tbs param in case there are multiple ones,
    // since the last one overrides the previous ones.
    const allTbsValues = searchParams.getAll('tbs');
    const lastTbsValue = allTbsValues[allTbsValues.length - 1] || '';
    const match = /(qdr:.|li:1)(,sbd:.)?/.exec(lastTbsValue);
    const currentPeriod = (match && match[1]) || '';
    const currentSort = (match && match[2]) || '';
    if (period === 'a') {
      searchParams.delete('tbs');
    } else if (period) {
      let newTbs = '';
      if (period === 'v') {
        if (currentPeriod === 'li:1') {
          newTbs = '';
        } else {
          newTbs = 'li:1';
        }
      } else {
        newTbs = `qdr:${period}`;
      }
      searchParams.set('tbs', `${newTbs}${currentSort}`);
      // Can't apply sort when not using period.
    } else if (currentPeriod) {
      searchParams.set(
          'tbs',
          `${currentPeriod}` + (currentSort ? '' : ',sbd:1'),
      );
    }
    const newSearchString = '?' + searchParams.toString();
    if (newSearchString !== window.location.search) {
      window.location.search = newSearchString;
    }
    return false;
  }

  changeImageSize(size) {
    const sizeOptions = {
      LARGE: {value: 0, name: 'Large', code: 'l'},
      MEDIUM: {value: 1, name: 'Medium', code: 'e'},
      ICON: {value: 2, name: 'Icon', code: 'i'},
    };
    const openTool = document.querySelector(
        '[class="PNyWAd ZXJQ7c"][jsname="I4bIT"]',
    );
    if (openTool != null) {
      openTool.click();
    }
    const openSizeDropDown = document.querySelector('[aria-label="Size"]');
    if (openSizeDropDown != null) {
      openSizeDropDown.click();
    }
    const dropDownWithSize = document.querySelector(
        '[class="xFo9P r9PaP Fmo8N"][jsname="wLFV5d"]',
    );
    const getButton = (selector) => {
      let button;
      if (document.querySelector(selector) != null) {
        button = document.querySelector(selector);
      } else {
        button = null;
      }
      return button;
    };
    const setImageSize = (dropDownWithSize, buttonSelector) => {
      let button = getButton(buttonSelector);
      if (dropDownWithSize == null && button != null) {
        button.click();
      } else if (dropDownWithSize != null && button == null) {
        dropDownWithSize.click();
        button = getButton(buttonSelector);
        button.click();
      } else if (dropDownWithSize != null && button != null) {
        button.click();
      }
    };
    switch (size) {
      case sizeOptions.LARGE.code:
        if (
          dropDownWithSize == null ||
          dropDownWithSize.getAttribute('aria-label') != sizeOptions.LARGE.name
        ) {
          setImageSize(
              dropDownWithSize,
              '[class="MfLWbb"][aria-label="Large"]',
          );
        }
        break;
      case sizeOptions.MEDIUM.code:
        if (
          dropDownWithSize == null ||
          dropDownWithSize.getAttribute('aria-label') != sizeOptions.MEDIUM.name
        ) {
          setImageSize(
              dropDownWithSize,
              '[class="MfLWbb"][aria-label="Medium"]',
          );
        }
        break;
      case sizeOptions.ICON.code:
        if (
          dropDownWithSize == null ||
          dropDownWithSize.getAttribute('aria-label') != sizeOptions.ICON.name
        ) {
          setImageSize(dropDownWithSize, '[class="MfLWbb"][aria-label="Icon"]');
        }
        break;
      default:
        break;
    }
  }
}

class BraveSearch {
  constructor(options) {
    this.options = options;
  }

  get urlPattern() {
    return /^https:\/\/search\.brave\.com/;
  }

  get searchBoxSelector() {
    return '.form-input, input[id=searchbox]';
  }

  getTopMargin(element) {
    return getFixedSearchBoxTopMargin(
        document.querySelector('header.navbar'),
        element,
    );
  }

  onChangedResults(callback) {
    const containers = document.querySelectorAll('#results');
    const observer = new MutationObserver(
        debounce((mutationsList, observer) => {
          callback(true);
        }, 50),
    );
    for (const container of containers) {
      observer.observe(container, {
        attributes: false,
        childList: true,
        subtree: true,
      });
    }
  }

  static #getNewsTabResults() {
    const includedElements = [
      {
        nodes: document.querySelectorAll('.snippet a'),
        highlightClass: 'wsn-brave-search-focused-news',
        containerSelector: (n) => n.parentElement,
      },
    ];
    return getSortedSearchResults(includedElements);
  }

  static #getVideosTabResults() {
    const includedElements = [
      {
        nodes: document.querySelectorAll('.card a'),
        highlightClass: 'wsn-brave-search-focused-card',
        highlightedElementSelector: (n) => n.closest('.card'),
        containerSelector: (n) => n.parentElement,
      },
    ];
    return getSortedSearchResults(includedElements);
  }

  getSearchResults() {
    if (BraveSearch.#isTabActive(this.tabs.navigateNewsTab)) {
      return BraveSearch.#getNewsTabResults();
    } else if (BraveSearch.#isTabActive(this.tabs.navigateVideosTab)) {
      return BraveSearch.#getVideosTabResults();
    }

    const includedElements = [
      {
        nodes: document.querySelectorAll('.snippet.fdb > a'),
        highlightClass: 'wsn-brave-search-focused-link',
        containerSelector: (n) => n.parentElement,
      },
      // News cards
      {
        nodes: document.querySelectorAll(
            '.card[data-type="news"]:nth-child(-n+3)',
        ),
        highlightClass: 'wsn-brave-search-focused-card',
      },
      // Video cards
      {
        nodes: document.querySelectorAll(
            '.card[data-type="videos"]:nth-child(-n+3)',
        ),
        highlightClass: 'wsn-brave-search-focused-card',
      },
    ];

    return getSortedSearchResults(includedElements);
  }

  static #isTabActive(tab) {
    return tab && tab.parentElement.classList.contains('active');
  }

  get tabs() {
    return {
      navigateSearchTab: document.querySelector('a[href*="/search?q="]'),
      navigateImagesTab: document.querySelector(
          '#tab-images > a:first-of-type',
      ),
      navigateNewsTab: document.querySelector('a[href*="/news?q="]'),
      navigateVideosTab: document.querySelector(
          '#tab-videos > a:first-of-type',
      ),
    };
  }
}

class StartPage {
  constructor(options) {
    this.options = options;
  }
  get urlPattern() {
    return /^https:\/\/(www\.)?startpage\./;
  }
  get searchBoxSelector() {
    return '#q';
  }
  getTopMargin(element) {
    return getFixedSearchBoxTopMargin(
        document.querySelector('div.layout-web__header'),
        element,
    );
  }
  getBottomMargin(element) {
    // Startpage in Firefox has an issue where trying to scroll can result in
    // window.scrollY being updated for a brief time although no scrolling is
    // done, which confuses the scrollToElement function, which can lead to
    // being stuck focused on a search result.
    return isFirefox() ? 0 : getDefaultBottomMargin();
  }

  static #isSearchTab() {
    return document.querySelector('div.layout-web') != null;
  }
  static #isImagesTab() {
    return document.querySelector('div.layout-images') != null;
  }

  getSearchResults() {
    // Don't initialize results navigation on image search, since it doesn't
    // work there.
    if (StartPage.#isImagesTab()) {
      return [];
    }
    const containerSelector = (element) => {
      if (StartPage.#isSearchTab()) {
        return element.closest('.w-gl__result');
      }
      return element;
    };
    const includedElements = [
      {
        nodes: document.querySelectorAll('a.w-gl__result-url'),
        highlightedElementSelector: containerSelector,
        highlightClass: 'wsn-startpage-focused-link',
        containerSelector: containerSelector,
      },
      {
        nodes: document.querySelectorAll('.pagination--desktop button'),
        highlightClass: 'wsn-startpage-focused-link',
      },
      // As of 2020-06-20, this doesn't seem to match anything.
      {
        nodes: document.querySelectorAll(
            '.vo-sp.vo-sp--default > a.vo-sp__link',
        ),
        highlightedElementSelector: containerSelector,
        highlightClass: 'wsn-startpage-focused-link',
      },
    ];
    const excludedElements = document.querySelectorAll('button[disabled]');
    return getSortedSearchResults(includedElements, excludedElements);
  }

  get previousPageButton() {
    const menuLinks = document.querySelectorAll('.inline-nav-menu__link');
    if (!menuLinks || menuLinks.length < 4) {
      return null;
    }

    return document.querySelector(
        'form.pagination__form.next-prev-form--desktop:first-of-type',
    );
  }

  get nextPageButton() {
    const menuLinks = document.querySelectorAll('.inline-nav-menu__link');
    if (!menuLinks || menuLinks.length < 4) {
      return null;
    }

    return document.querySelector(
        'form.pagination__form.next-prev-form--desktop:last-of-type',
    );
  }

  get tabs() {
    const menuLinks = document.querySelectorAll('.inline-nav-menu__link');
    if (!menuLinks || menuLinks.length < 4) {
      return {};
    }
    return {
      navigateSearchTab: menuLinks[0],
      navigateImagesTab: menuLinks[1],
      navigateVideosTab: menuLinks[2],
      navigateNewsTab: menuLinks[3],
    };
  }

  changeTools(period) {
    const forms = document.forms;
    let timeForm;

    for (let i = 0; i < forms.length; i++) {
      if (forms[i].className === 'search-filter-time__form') {
        timeForm = forms[i];
      }
    }

    switch (period) {
      case 'd':
        timeForm.elements['with_date'][1].click();
        break;
      case 'w':
        timeForm.elements['with_date'][2].click();
        break;
      case 'm':
        timeForm.elements['with_date'][3].click();
        break;
      case 'y':
        timeForm.elements['with_date'][4].click();
        break;
      default:
        break;
    }
  }
}

class YouTube {
  constructor(options) {
    this.options = options;
    this.gridNavigation = false;
  }
  get urlPattern() {
    return /^https:\/\/(www)\.youtube\./;
  }
  get searchBoxSelector() {
    return 'input#search';
  }
  getTopMargin(element) {
    return getFixedSearchBoxTopMargin(
        document.querySelector('#masthead-container'),
        element,
    );
  }

  onChangedResults(callback) {
    // The ytd-section-list-renderer element may not exist yet when this code
    // runs, so we look for changes in the higher level elements until we find
    // ytd-section-list-renderer.
    const YT_CONTAINER_SELECTOR = [
      'ytd-section-list-renderer',
      '.ytd-section-list-renderer',
      'ytd-rich-grid-renderer',
      'ytd-shelf-renderer',
    ].join(',');
    const resultsObserver = new MutationObserver(
        debounce((mutationsList, observer) => {
          callback(true);
        }, 50),
    );
    let lastLoadedURL = null;
    const pageObserverCallback = (mutationsList, observer) => {
      const url = window.location.pathname + window.location.search;
      if (url === lastLoadedURL) {
        return;
      } else {
        resultsObserver.disconnect();
      }
      const containers = document.querySelectorAll(YT_CONTAINER_SELECTOR);
      if (containers.length == 0) {
        return;
      }
      lastLoadedURL = url;
      callback(false);
      for (const container of containers) {
        resultsObserver.observe(container, {
          attributes: false,
          childList: true,
          subtree: true,
        });
      }
    };
    // TODO: the observer callback is triggered many times because of the broad
    // changes that the observer tracks. I tried to use other observation specs
    // to limit it, but then it failed to detect URL changes without page load
    // (which is what happened in issue #337 [1]).
    // [1] https://github.com/infokiller/web-search-navigator/issues/337
    const pageObserver = new MutationObserver(
        debounce(pageObserverCallback, 50),
    );
    pageObserver.observe(document.querySelector('#page-manager'), {
      attributes: false,
      childList: true,
      subtree: true,
    });
  }

  getSearchResults() {
    const includedElements = [
      // Videos in vertical search results: https://imgur.com/a/Z8KV5Oe
      {
        nodes: document.querySelectorAll('a#video-title.ytd-video-renderer'),
        highlightClass: 'wsn-youtube-focused-video',
        highlightedElementSelector: (n) => n.closest('ytd-video-renderer'),
        containerSelector: (n) => n.closest('ytd-video-renderer'),
      },
      // Playlist results in vertical search results: https://imgur.com/a/nPjGd9H
      {
        nodes: document.querySelectorAll(
            'ytd-playlist-renderer a[href*="/playlist"]',
        ),
        highlightClass: 'wsn-youtube-focused-video',
        highlightedElementSelector: (n) => n.closest('ytd-playlist-renderer'),
        containerSelector: (n) => n.closest('ytd-playlist-renderer'),
      },
      // Playlists
      {
        nodes: document.querySelectorAll('a.ytd-playlist-video-renderer'),
        highlightClass: 'wsn-youtube-focused-video',
        highlightedElementSelector: (n) =>
          n.closest('ytd-playlist-video-renderer'),
        containerSelector: (n) => n.closest('ytd-playlist-video-renderer'),
      },
      // Mixes
      {
        nodes: document.querySelectorAll('div#content a.ytd-radio-renderer'),
        highlightClass: 'wsn-youtube-focused-video',
      },
      // Channels
      {
        nodes: document.querySelectorAll(
            'ytd-grid-video-renderer a#video-title:not([aria-hidden="true"])',
        ),
        highlightClass: 'wsn-youtube-focused-grid-video',
        highlightedElementSelector: (n) => n.closest('ytd-grid-video-renderer'),
        containerSelector: (n) => n.closest('ytd-grid-video-renderer'),
      },
    ];
    // checking if homepage results are present
    const homePageElements = {
      nodes: document.querySelectorAll(
          'ytd-rich-item-renderer a#video-title-link',
      ),
      highlightClass: 'wsn-youtube-focused-video',
      highlightedElementSelector: (n) => n.closest('ytd-rich-item-renderer'),
      containerSelector: (n) => n.closest('ytd-rich-item-renderer'),
    };
    const results = getSortedSearchResults(
        [...includedElements, homePageElements],
        [],
    );
    // When navigating away from the home page, the home page elements are still
    // in the DOM but they are not visible, so we must check if they are
    // visible (using offsetParent), not just if they are present.
    const isHomePage = Array.from(homePageElements.nodes).some(
        (n) => n.offsetParent != null,
    );
    const gridRow = document.querySelector('ytd-rich-grid-row');
    if (isHomePage && gridRow != null) {
      results.itemsPerRow = gridRow.getElementsByTagName(
          'ytd-rich-item-renderer',
      ).length;
      results.gridNavigation = results.itemsPerRow > 0;
    }
    return results;
  }

  changeTools(period) {
    if (!document.querySelector('div#collapse-content')) {
      const toggleButton = document.querySelectorAll(
          'a.ytd-toggle-button-renderer',
      )[0];
      // Toggling the buttons ensures that div#collapse-content is loaded
      toggleButton.click();
      toggleButton.click();
    }
    const forms = document.querySelectorAll(
        'div#collapse-content > *:first-of-type ytd-search-filter-renderer',
    );
    let neededForm = null;
    switch (period) {
      case 'h':
        neededForm = forms[0];
        break;
      case 'd':
        neededForm = forms[1];
        break;
      case 'w':
        neededForm = forms[2];
        break;
      case 'm':
        neededForm = forms[3];
        break;
      case 'y':
        neededForm = forms[4];
        break;
    }
    if (neededForm) {
      neededForm.childNodes[1].click();
    }
  }
}

class GoogleScholar {
  constructor(options) {
    this.options = options;
  }
  get urlPattern() {
    return /^https:\/\/scholar\.google\./;
  }
  get searchBoxSelector() {
    return '#gs_hdr_tsi';
  }

  getSearchResults() {
    const includedElements = [
      {
        nodes: document.querySelectorAll('.gs_rt a'),
        highlightClass: 'wsn-google-focused-link',
        highlightedElementSelector: (n) => n.closest('.gs_rt'),
        containerSelector: (n) => n.parentElement.parentElement,
      },
      {
        nodes: document.querySelectorAll(
            '.gs_ico_nav_previous, .gs_ico_nav_next',
        ),
        anchorSelector: (n) => n.parentElement,
        highlightClass: 'wsn-google-scholar-next-page',
        highlightedElementSelector: (n) => n.parentElement.children[1],
        containerSelector: (n) => n.parentElement.children[1],
      },
    ];
    return getSortedSearchResults(includedElements, []);
  }

  get previousPageButton() {
    const previousPageElement = document.querySelector('.gs_ico_nav_previous');
    if (previousPageElement !== null) {
      return previousPageElement.parentElement;
    }

    return null;
  }

  get nextPageButton() {
    const nextPageElement = document.querySelector('.gs_ico_nav_next');
    if (nextPageElement !== null) {
      return nextPageElement.parentElement;
    }
    return null;
  }
}

class Amazon {
  constructor(options) {
    this.options = options;
  }
  get urlPattern() {
    return /^https:\/\/(www\.)?amazon\./;
  }
  get searchBoxSelector() {
    return '#twotabsearchtextbox';
  }
  onChangedResults(callback) {
    const container = document.querySelector('.s-main-slot');
    if (!container) {
      return;
    }
    const observer = new MutationObserver(
        debounce((mutationsList, observer) => {
          callback(false);
        }, 50),
    );
    observer.observe(container, {
      attributes: false,
      childList: true,
      subtree: false,
    });
  }

  getSearchResults() {
    const includedElements = [
      // Carousel items
      {
        nodes: document.querySelectorAll(
            '.s-main-slot .a-carousel-card h2 .a-link-normal.a-text-normal',
        ),
        highlightedElementSelector: (n) => n.closest('.a-carousel-card'),
        highlightClass: 'wsn-amazon-focused-carousel-item',
        containerSelector: (n) => n.closest('.a-carousel-card'),
      },
      // Regular items.
      // NOTE: Must appear after the carousel items because this selector is
      // more general.
      {
        nodes: document.querySelectorAll(
            '.s-main-slot h2 .a-link-normal.a-text-normal',
        ),
        // highlightedElementSelector: (n) => n.parentElement.children[1],
        highlightedElementSelector: (n) =>
          n.closest('.a-section').parentElement.closest('.a-section'),
        highlightClass: 'wsn-amazon-focused-item',
        containerSelector: (n) =>
          n.closest('.a-section').parentElement.closest('.a-section'),
      },
      // Next/previous and page numbers.
      {
        nodes: document.querySelectorAll('a.s-pagination-item'),
        highlightClass: 'wsn-amazon-focused-item',
      },
      // Shopping card items
      {
        nodes: document.querySelectorAll(
            '.sc-list-item-content .a-list-item .a-link-normal',
        ),
        highlightClass: 'wsn-amazon-focused-cart-item',
        highlightedElementSelector: (n) => n.closest('.sc-list-item-content'),
        containerSelector: (n) => n.closest('.sc-list-item-content'),
      },
    ];
    // Exclude active page number and hidden carousel elements.
    // TODO: The hidden carousel elements do not match at page load because
    // they don't yet have the aria-hidden property set.
    const excludedElements = document.querySelectorAll(
        '.a-pagination .a-selected a, .a-carousel-card[aria-hidden="true"] a',
    );
    return getSortedSearchResults(includedElements, excludedElements);
  }

  get previousPageButton() {
    return document.querySelector('a.s-pagination-previous');
  }

  get nextPageButton() {
    return document.querySelector('a.s-pagination-next');
  }
}

class Github {
  constructor(options) {
    this.options = options;
  }
  get urlPattern() {
    return /^https:\/\/(www\.)?github\.com/;
  }
  get searchBoxSelector() {
    // TODO: With the escape key, this only works the first time the keybinding
    // is used, Since Github seem to capture this as well, which causes it to
    // leave the search box.
    return 'input[name="q"]';
  }

  static #getCommitSearchLinks() {
    const commitsContainers = document.querySelectorAll(
        '#commit_search_results .text-normal',
    );
    const commits = [];
    for (const con of commitsContainers) {
      const links = con.querySelectorAll('a');
      if (links.length === 0) {
        continue;
      }
      if (links.length === 1) {
        commits.push(links[0]);
      } else {
        const prLink = con.querySelector(
            'a[data-hovercard-type="pull_request"]',
        );
        if (prLink != null) {
          commits.push(prLink);
        }
      }
    }
    return commits;
  }

  getSearchResults() {
    const includedElements = [
      // Repos
      {
        nodes: document.querySelectorAll('.repo-list a'),
        highlightClass: 'wsn-github-focused-item',
        containerSelector: (n) => n.closest('.mt-n1'),
      },
      // Code
      {
        nodes: document.querySelectorAll('#code_search_results .text-normal a'),
        highlightClass: 'wsn-github-focused-item',
      },
      // Commits/PRs
      {
        nodes: Github.#getCommitSearchLinks(),
        highlightClass: 'wsn-github-focused-item',
      },
      // Issues
      {
        nodes: document.querySelectorAll(
            '#issue_search_results .text-normal a',
        ),
        highlightClass: 'wsn-github-focused-item',
      },
      // Marketplace
      {
        nodes: document.querySelectorAll(
            '#marketplace_search_results .text-normal a',
        ),
        highlightClass: 'wsn-github-focused-item',
      },
      // Topics
      {
        nodes: document.querySelectorAll(
            '#topic_search_results .text-normal a',
        ),
        highlightClass: 'wsn-github-focused-item',
      },
      // Wikis
      {
        nodes: document.querySelectorAll('#wiki_search_results .text-normal a'),
        highlightClass: 'wsn-github-focused-item',
      },
      // Users
      {
        nodes: document.querySelectorAll('#user_search_results .text-normal a'),
        highlightClass: 'wsn-github-focused-item',
      },
      // Pinned repos in user profile
      {
        nodes: document.querySelectorAll(
            '.pinned-item-list-item-content span.repo',
        ),
        highlightClass: 'wsn-github-focused-item',
        highlightedElementSelector: (n) => n.closest('a'),
        containerSelector: (n) => n.closest('a'),
        anchorSelector: (n) => n.closest('a'),
      },
      // Personal repos list in user profile
      {
        nodes: document.querySelectorAll(
            '#user-repositories-list a[itemprop*="codeRepository"]',
        ),
        highlightClass: 'wsn-github-focused-item',
        containerSelector: (n) => n.closest('li') || n,
      },
      // Next/previous and page numbers.
      {
        nodes: document.querySelectorAll('.paginate-container a'),
        highlightClass: 'wsn-github-focused-pagination',
      },
    ];
    const searchParams = new URLSearchParams(window.location.search);
    // Starred repos of user
    if (searchParams.get('tab') === 'stars') {
      includedElements.push({
        nodes: document.querySelectorAll('h3 a'),
        highlightClass: 'wsn-github-focused-item',
      });
    }
    const excludedElements = [
      // Exclude small links
      ...document.querySelectorAll('.muted-link, .Link--muted'),
      // Exclude topic tags
      ...document.querySelectorAll('.topic-tag'),
      // Exclude small links in commits
      // ...document.querySelectorAll(
      //     '#commit_search_results .text-normal a.message'),
    ];
    return getSortedSearchResults(includedElements, excludedElements);
  }

  onChangedResults(callback) {
    const container = document.querySelector('body');
    if (!container) {
      return;
    }
    // Store the last URL to detect page navigations (for example going to the
    // next page of results).
    let lastURL = window.location.href;
    const observer = new MutationObserver(
        debounce((mutationsList, observer) => {
          let appendOnly = true;
          if (window.location.href !== lastURL) {
            lastURL = window.location.href;
            appendOnly = false;
          }
          callback(appendOnly);
        }, 50),
    );
    observer.observe(container, {
      attributes: false,
      childList: true,
      subtree: false,
    });
  }

  // Github already has built-in support for tabs:
  // https://docs.github.com/en/github/getting-started-with-github/keyboard-shortcuts
  get tabs() {
    return {};
  }
}

class Gitlab {
  constructor(options) {
    this.options = options;
  }

  get urlPattern() {
    return /^https:\/\/(www\.)?gitlab\.com/;
  }

  get searchBoxSelector() {
    return '.form-input, input[id=search]';
  }

  getTopMargin(element) {
    return getFixedSearchBoxTopMargin(
        document.querySelector('header.navbar'),
        element,
    );
  }

  onChangedResults(callback) {
    const containers = document.querySelectorAll(
        '.projects-list, .groups-list, #content-body',
    );
    const observer = new MutationObserver(async (mutationsList, observer) => {
      callback(true);
    });
    for (const container of containers) {
      observer.observe(container, {
        attributes: false,
        childList: true,
        subtree: true,
      });
    }
  }

  getSearchResults() {
    const includedElements = [
      {
        nodes: document.querySelectorAll('li.project-row h2 a'),
        containerSelector: (n) => n.closest('li.project-row'),
        highlightedElementSelector: (n) => n.closest('li.project-row'),
        highlightClass: 'wsn-gitlab-focused-group-row',
      },
      // Org subgroups, for example:
      // https://gitlab.archlinux.org/archlinux
      {
        nodes: document.querySelectorAll(
            'ul.groups-list li.group-row a[aria-label]',
        ),
        containerSelector: (n) => n.closest('li.group-row'),
        highlightedElementSelector: (n) => n.closest('li.group-row'),
        highlightClass: 'wsn-gitlab-focused-group-row',
      },
      // Prev/next page
      {
        nodes: document.querySelectorAll('li.page-item a.page-link'),
        containerSelector: (n) => n.closest('li.page-item'),
        highlightedElementSelector: (n) => n.closest('li.group-row'),
        highlightClass: 'wsn-gitlab-focused-group-row',
      },
    ];
    return getSortedSearchResults(includedElements);
  }
}

class CustomGitlab extends Gitlab {
  get urlPattern() {
    return new RegExp(this.options.customGitlabUrl);
  }
}

// Get search engine object matching the current url
/* eslint-disable-next-line no-unused-vars */
const getSearchEngine = (options) => {
  const searchEngines = [
    new GoogleSearch(options),
    new BraveSearch(options),
    new StartPage(options),
    new YouTube(options),
    new GoogleScholar(options),
    new Amazon(options),
    new Github(options),
    new Gitlab(options),
    new CustomGitlab(options),
  ];
  // Switch over all compatible search engines
  const href = window.location.href;
  for (let i = 0; i < searchEngines.length; i++) {
    if (href.match(searchEngines[i].urlPattern)) {
      return searchEngines[i];
    }
  }
  return null;
};
/* global ExtensionOptions, getSearchEngine, Mousetrap */
/* global getDefaultBottomMargin */

// TODO: Replace with enums when switching to typescript.
const FOCUS_SCROLL_OFF = 0;
const FOCUS_SCROLL_ON = 1;
const FOCUS_SCROLL_ONLY = 2;

// Returns true if scrolling was done.
const scrollToElement = (searchEngine, element) => {
  if (element == null) {
    console.error('Cannot scroll to null element');
    return;
  }
  let topMargin = 0;
  if (searchEngine.getTopMargin) {
    topMargin = searchEngine.getTopMargin(element);
  }
  let bottomMargin = getDefaultBottomMargin();
  if (searchEngine.getBottomMargin) {
    bottomMargin = searchEngine.getBottomMargin(element);
  }
  const elementBounds = element.getBoundingClientRect();
  const scrollY = window.scrollY;
  if (elementBounds.top < topMargin) {
    // scroll element to top
    element.scrollIntoView(true);
    window.scrollBy(0, -topMargin);
  } else if (elementBounds.bottom + bottomMargin > window.innerHeight) {
    // scroll element to bottom
    element.scrollIntoView(false);
    window.scrollBy(0, bottomMargin);
  }
  return Math.abs(window.scrollY - scrollY) > 0.01;
};

const bindKeys = (bindings, toggle) => {
  // NOTE: Mousetrap calls the handler even if there's a larger sequence that
  // ends with the same key. For example, if the user binds both 'a b' and
  // 'b', when pressing the sequence 'a b' both handlers will be called, which
  // is not the desired behavior for this extension. Therefore, we first sort
  // all keybindings by their sequence length, so that handlers of larger
  // sequences will be called before the shorter ones. Then, we only call
  // other handlers if the previous handler returned true.
  bindings.sort((a, b) => {
    return b[0].split(' ').length - a[0].split(' ').length;
  });
  let lastEvent;
  let lastHandlerResult;
  for (const [shortcut, element, global, callback] of bindings) {
    const wrappedCallback = (event) => {
      if (!toggle['active']) {
        return true;
      }
      if (event === lastEvent && !lastHandlerResult) {
        return;
      }
      lastEvent = event;
      lastHandlerResult = callback(event);
      return lastHandlerResult;
    };
    if (global) {
      /* eslint-disable-next-line new-cap */
      Mousetrap(element).bindGlobal(shortcut, wrappedCallback);
    } else {
      /* eslint-disable-next-line new-cap */
      Mousetrap(element).bind(shortcut, wrappedCallback);
    }
  }
};

class SearchResultsManager {
  constructor(searchEngine, options) {
    this.searchEngine = searchEngine;
    this.options = options;
    this.focusedIndex = -1;
    this.isInitialFocusSet = false;
  }

  reloadSearchResults() {
    this.searchResults = this.searchEngine.getSearchResults();
    if (!this.isInitialFocusSet) {
      this.setInitialFocus();
    }
  }

  setInitialFocus() {
    if (this.searchResults.length === 0) {
      return;
    }
    const lastNavigation = this.options.local.values;
    if (
      location.href === lastNavigation.lastQueryUrl &&
      lastNavigation.lastFocusedIndex >= 0 &&
      lastNavigation.lastFocusedIndex < this.searchResults.length
    ) {
      this.focus(lastNavigation.lastFocusedIndex, FOCUS_SCROLL_ON);
    } else if (this.options.sync.get('autoSelectFirst')) {
      // Highlight the first result when the page is loaded, but don't scroll to
      // it because there may be KP cards such as stock graphs.
      this.focus(0, FOCUS_SCROLL_OFF);
    }
  }

  /**
   * Returns the element to click on upon navigation. The focused element in the
   * document is preferred (if there is one) over the highlighted result. Note
   * that the focused element does not have to be an anchor <a> element.
   *
   * @param {boolean} linkOnly If true the focused element is preferred only
   * when it is a link with "href" attribute.
   * @return {Element}
   */
  getElementToNavigate(linkOnly = false) {
    const focusedElement = document.activeElement;
    // StartPage seems to still focus and change it to body when the page loads.
    if (focusedElement == null || focusedElement.localName === 'body') {
      if (
        this.focusedIndex < 0 ||
        this.focusedIndex >= this.searchResults.length
      ) {
        return null;
      }
      return this.searchResults[this.focusedIndex].anchor;
    }
    const isLink =
      focusedElement.localName === 'a' && focusedElement.hasAttribute('href');
    if (!linkOnly || isLink) {
      return focusedElement;
    }
  }

  highlight(searchResult) {
    const highlighted = searchResult.highlightedElement;
    if (highlighted == null) {
      console.error('No element to highlight: %o', highlighted);
      return;
    }
    highlighted.classList.add(searchResult.highlightClass);
    if (
      this.options.sync.get('hideOutline') ||
      searchResult.anchor !== highlighted
    ) {
      searchResult.anchor.classList.add('wsn-no-outline');
    }
  }

  unhighlight(searchResult) {
    const highlighted = searchResult.highlightedElement;
    if (highlighted == null) {
      console.error('No element to unhighlight: %o', highlighted);
      return;
    }
    highlighted.classList.remove(searchResult.highlightClass);
    highlighted.classList.remove('wsn-no-outline');
  }

  focus(index, scroll = FOCUS_SCROLL_ONLY) {
    if (this.focusedIndex >= 0) {
      const searchResult = this.searchResults[this.focusedIndex];
      // If the current result is outside the viewport and FOCUS_SCROLL_ONLY was
      // requested, scroll to the current hidden result, but don't focus on the
      // new result.
      // This behavior is intended to handle cases where the user scrolls away
      // from the currently focused result and then presses the keybindings to
      // focus on the previous/next result. In this case, since the user
      // doesn't see the current result, it's more intuitive to only scroll to
      // the current result, and then on the next keypress they can focus on the
      // previous/next result and actually see on what result they want to focus
      // on.
      if (
        scroll === FOCUS_SCROLL_ONLY &&
        scrollToElement(this.searchEngine, searchResult.container)
      ) {
        return;
      }
      // Remove highlighting from previous item.
      this.unhighlight(searchResult);
    }
    const searchResult = this.searchResults[index];
    if (!searchResult) {
      this.focusedIndex = -1;
      return;
    }
    this.highlight(searchResult);
    // We already scroll below, so no need for focus to scroll. The scrolling
    // behavior of `focus` also seems less predictable and caused an issue, see:
    // https://github.com/infokiller/web-search-navigator/issues/35
    searchResult.anchor.focus({preventScroll: true});
    // Ensure whole search result container is visible in the viewport, not only
    // the search result link.
    if (scroll !== FOCUS_SCROLL_OFF) {
      scrollToElement(this.searchEngine, searchResult.container);
    }
    this.focusedIndex = index;
    this.isInitialFocusSet = true;
  }

  focusNext(shouldWrap) {
    if (this.focusedIndex < this.searchResults.length - 1) {
      this.focus(this.focusedIndex + 1);
    } else if (shouldWrap) {
      this.focus(0);
    }
  }

  focusPrevious(shouldWrap) {
    if (this.focusedIndex > 0) {
      this.focus(this.focusedIndex - 1);
    } else if (shouldWrap) {
      this.focus(this.searchResults.length - 1);
    } else {
      window.scrollTo(window.scrollX, 0);
    }
  }

  focusDown(shouldWrap) {
    if (
      this.focusedIndex + this.searchResults.itemsPerRow <
      this.searchResults.length
    ) {
      this.focus(this.focusedIndex + this.searchResults.itemsPerRow);
    } else if (shouldWrap) {
      const focusedRowIndex =
        this.focusedIndex % this.searchResults.itemsPerRow;
      this.focus(focusedRowIndex);
    }
  }

  focusUp(shouldWrap) {
    if (this.focusedIndex - this.searchResults.itemsPerRow >= 0) {
      this.focus(this.focusedIndex - this.searchResults.itemsPerRow);
    } else if (shouldWrap) {
      const focusedRowIndex =
        this.focusedIndex % this.searchResults.itemsPerRow;
      this.focus(
          this.searchResults -
          1 -
          this.searchResults.itemsPerRow +
          focusedRowIndex,
      );
    } else {
      window.scrollTo(window.scrollY, 0);
    }
  }
}

class WebSearchNavigator {
  constructor() {
    this.bindings = [];
    this.bindingsToggle = {active: true};
  }

  async init() {
    this.options = new ExtensionOptions();
    await this.options.load();
    this.searchEngine = await getSearchEngine(this.options.sync.getAll());
    if (this.searchEngine == null) {
      return;
    }
    const sleep = (milliseconds) => {
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };
    await sleep(this.options.sync.get('delay'));
    this.injectCSS();
    this.initKeybindings();
  }

  injectCSS() {
    const style = document.createElement('style');
    style.textContent = this.options.sync.get('customCSS');
    document.head.append(style);
  }

  initKeybindings() {
    this.bindingsToggle['active'] = false;
    for (const [shortcut, element, ,] of this.bindings) {
      /* eslint-disable-next-line new-cap */
      const ms = Mousetrap(element);
      ms.unbind(shortcut);
      ms.reset();
    }
    const isFirstCall = this.bindings.length === 0;
    this.bindings = [];
    // UGLY WORKAROUND: Results navigation breaks YouTube space keybinding for
    // pausing/resuming a video. A workaround is to click on an element on the
    // page (except the video), but for now I'm disabling results navigation
    // when watching a video.
    // TODO: Find a proper fix.
    if (!window.location.href.match(/^https:\/\/(www)\.youtube\.com\/watch/)) {
      this.initResultsNavigation(isFirstCall);
    }
    this.initTabsNavigation();
    this.initChangeToolsNavigation();
    this.initSearchInputNavigation();
    this.bindingsToggle = {active: true};
    bindKeys(this.bindings, this.bindingsToggle);
  }

  initSearchInputNavigation() {
    let searchInput = document.querySelector(
        this.searchEngine.searchBoxSelector,
    );
    if (searchInput == null) {
      return;
    }
    // Only apply the extension logic if the key is not something the user may
    // have wanted to type into the searchbox, so that we don't interfere with
    // regular typing.
    const shouldHandleSearchInputKey = (event) => {
      return event.ctrlKey || event.metaKey || event.key === 'Escape';
    };
    // In Github, the search input element changes while in the page, so we
    // redetect it if it's not visible.
    const detectSearchInput = () => {
      if (searchInput != null && searchInput.offsetParent != null) {
        return true;
      }
      searchInput = document.querySelector(this.searchEngine.searchBoxSelector);
      return searchInput != null && searchInput.offsetParent != null;
    };
    // If insideSearchboxHandler returns true, outsideSearchboxHandler will also
    // be called (because it's defined on document, hence has lower priority),
    // in which case we don't want to handle the event. Therefore, we store the
    // last event handled in insideSearchboxHandler, and only handle the event
    // in outsideSearchboxHandler if it's not the same one.
    let lastEvent;
    const outsideSearchboxHandler = (event) => {
      if (!detectSearchInput()) {
        return;
      }
      if (event === lastEvent) {
        return !shouldHandleSearchInputKey(event);
      }
      const element = document.activeElement;
      if (
        element.isContentEditable ||
        ['textarea', 'input'].includes(element.tagName.toLowerCase())
      ) {
        return true;
      }
      // Scroll to the search box in case it's outside the viewport so that it's
      // clear to the user that it has focus.
      scrollToElement(this.searchEngine, searchInput);
      searchInput.select();
      // searchInput.click();
      return false;
    };
    const insideSearchboxHandler = (event) => {
      if (!detectSearchInput()) {
        return;
      }
      lastEvent = event;
      if (!shouldHandleSearchInputKey(event)) {
        return true;
      }
      // Everything is selected; deselect all.
      if (
        searchInput.selectionStart === 0 &&
        searchInput.selectionEnd === searchInput.value.length
      ) {
        // Scroll to the search box in case it's outside the viewport so that
        // it's clear to the user that it has focus.
        scrollToElement(this.searchEngine, searchInput);
        searchInput.setSelectionRange(
            searchInput.value.length,
            searchInput.value.length,
        );
        return false;
      }
      // Closing search suggestions via document.body.click() or
      // searchInput.blur() breaks the state of google's controller.
      // The suggestion box is closed, yet it won't re-appear on the next
      // search box focus event.

      // Input can be blurred only when the suggestion box is already
      // closed, hence the blur event is queued.
      window.setTimeout(() => searchInput.blur());
      // Invoke the default handler which will close-up search suggestions
      // properly (google's controller won't break), but it won't remove the
      // focus.
      return true;
    };
    this.register(
        this.options.sync.get('focusSearchInput'),
        outsideSearchboxHandler,
    );
    // Bind globally, otherwise Mousetrap ignores keypresses inside inputs.
    // We must bind it separately to the search box element, or otherwise the
    // key event won't always be captured (for example this is the case on
    // Google Search as of 2020-06-22), presumably because the javascript in the
    // page will disable further processing.
    this.register(
        this.options.sync.get('focusSearchInput'),
        insideSearchboxHandler,
        searchInput,
        true,
    );
  }

  registerObject(obj) {
    for (const [optionName, elementOrGetter] of Object.entries(obj)) {
      this.register(this.options.sync.get(optionName), () => {
        if (elementOrGetter == null) {
          return true;
        }
        let element;
        if (elementOrGetter instanceof HTMLElement) {
          element = elementOrGetter;
        } else {
          element = elementOrGetter();
        }
        if (element == null) {
          return true;
        }
        // Some search engines use forms instead of links for navigation
        if (element.tagName == 'FORM') {
          element.submit();
        } else {
          element.click();
        }
        return false;
      });
    }
  }

  initTabsNavigation() {
    const tabs = this.searchEngine.tabs || {};
    this.registerObject(tabs);
  }

  initResultsNavigation(isFirstCall) {
    this.registerObject({
      navigatePreviousResultPage: this.searchEngine.previousPageButton,
      navigateNextResultPage: this.searchEngine.nextPageButton,
    });
    this.resetResultsManager();
    let gridNavigation = this.resultsManager.searchResults.gridNavigation;
    this.registerResultsNavigationKeybindings(gridNavigation);
    // NOTE: we must not call onChangedResults multiple times, otherwise the
    // URL change detection logic (which exists in YouTube) will break.
    if (!isFirstCall || !this.searchEngine.onChangedResults) {
      return;
    }
    this.searchEngine.onChangedResults((appendedOnly) => {
      if (appendedOnly) {
        this.resultsManager.reloadSearchResults();
      } else {
        this.resetResultsManager();
      }
      // In YouTube, the initial load does not always detect the grid navigation
      // (because it can happen before results are actually loaded to the page).
      // In this case, we must rebind the navigation keys after the results are
      // loaded.
      if (gridNavigation != this.resultsManager.searchResults.gridNavigation) {
        gridNavigation = this.resultsManager.searchResults.gridNavigation;
        this.initKeybindings();
      }
    });
  }

  resetResultsManager() {
    if (this.resultsManager != null && this.resultsManager.focusedIndex >= 0) {
      const searchResult =
        this.resultsManager.searchResults[this.resultsManager.focusedIndex];
      // NOTE: it seems that search results can become undefined when the DOM
      // elements are removed (for example when the results change).
      if (searchResult != null) {
        this.resultsManager.unhighlight(searchResult);
      }
    }
    this.resultsManager = new SearchResultsManager(
        this.searchEngine,
        this.options,
    );
    this.resultsManager.reloadSearchResults();
  }

  registerResultsNavigationKeybindings(gridNavigation) {
    const getOpt = (key) => {
      return this.options.sync.get(key);
    };
    const onFocusChange = (callback) => {
      return () => {
        if (!this.resultsManager.isInitialFocusSet) {
          this.resultsManager.focus(0);
        } else {
          const _callback = callback.bind(this.resultsManager);
          _callback(getOpt('wrapNavigation'));
        }
        return false;
      };
    };

    if (!gridNavigation) {
      this.register(
          getOpt('nextKey'),
          onFocusChange(this.resultsManager.focusNext),
      );
      this.register(
          getOpt('previousKey'),
          onFocusChange(this.resultsManager.focusPrevious),
      );
    } else {
      this.register(
          getOpt('nextKey'),
          onFocusChange(this.resultsManager.focusDown),
      );
      this.register(
          getOpt('previousKey'),
          onFocusChange(this.resultsManager.focusUp),
      );
      // Left
      this.register(
          getOpt('navigatePreviousResultPage'),
          onFocusChange(this.resultsManager.focusPrevious),
      );
      // Right
      this.register(
          getOpt('navigateNextResultPage'),
          onFocusChange(this.resultsManager.focusNext),
      );
    }
    this.register(getOpt('navigateKey'), () => {
      const link = this.resultsManager.getElementToNavigate();
      if (link == null) {
        return true;
      }
      const lastNavigation = this.options.local.values;
      lastNavigation.lastQueryUrl = location.href;
      lastNavigation.lastFocusedIndex = this.resultsManager.focusedIndex;
      this.options.local.save();
      // If the element is a link, use the href to directly navigate, since some
      // websites will open it in a new tab.
      if (link.localName === 'a' && link.href) {
        window.location.href = link.href;
      } else {
        link.click();
      }
      return false;
    });
    this.register(getOpt('navigateNewTabKey'), () => {
      const link = this.resultsManager.getElementToNavigate(true);
      if (link == null) {
        return true;
      }
      browser.runtime.sendMessage({
        type: 'tabsCreate',
        options: {
          url: link.href,
          active: true,
        },
      });
      return false;
    });
    this.register(getOpt('navigateNewTabBackgroundKey'), () => {
      const link = this.resultsManager.getElementToNavigate(true);
      if (link == null) {
        return true;
      }
      if (getOpt('simulateMiddleClick')) {
        const mouseEventParams = {
          bubbles: true,
          cancelable: false,
          view: window,
          button: 1,
          which: 2,
          buttons: 0,
          clientX: link.getBoundingClientRect().x,
          clientY: link.getBoundingClientRect().y,
        };
        const middleClickMousedown = new MouseEvent(
            'mousedown',
            mouseEventParams,
        );
        link.dispatchEvent(middleClickMousedown);
        const middleClickMouseup = new MouseEvent('mouseup', mouseEventParams);
        link.dispatchEvent(middleClickMouseup);
      }
      browser.runtime.sendMessage({
        type: 'tabsCreate',
        options: {
          url: link.href,
          active: false,
        },
      });
      return false;
    });
    this.register(getOpt('copyUrlKey'), () => {
      const link = this.resultsManager.getElementToNavigate();
      if (
        link == null || link.localName !== 'a' || !link.href ||
        !navigator.clipboard
      ) {
        return true;
      }
      navigator.clipboard.writeText(link.href).then(
          () => false,
          (err) => true,
      );
    });
  }

  initChangeToolsNavigation() {
    if (this.searchEngine.changeTools == null) {
      return;
    }
    const getOpt = (key) => {
      return this.options.sync.get(key);
    };
    this.register(getOpt('navigateShowAll'), () =>
      this.searchEngine.changeTools('a'),
    );
    this.register(getOpt('navigateShowHour'), () =>
      this.searchEngine.changeTools('h'),
    );
    this.register(getOpt('navigateShowDay'), () =>
      this.searchEngine.changeTools('d'),
    );
    this.register(getOpt('navigateShowWeek'), () =>
      this.searchEngine.changeTools('w'),
    );
    this.register(getOpt('navigateShowMonth'), () =>
      this.searchEngine.changeTools('m'),
    );
    this.register(getOpt('navigateShowYear'), () =>
      this.searchEngine.changeTools('y'),
    );
    this.register(getOpt('toggleVerbatimSearch'), () =>
      this.searchEngine.changeTools('v'),
    );
    this.register(getOpt('toggleSort'), () =>
      this.searchEngine.changeTools(null),
    );
    this.register(getOpt('showImagesLarge'), () =>
      this.searchEngine.changeImageSize('l'),
    );
    this.register(getOpt('showImagesMedium'), () =>
      this.searchEngine.changeImageSize('e'),
    );
    this.register(getOpt('showImagesIcon'), () =>
      this.searchEngine.changeImageSize('i'),
    );
  }

  register(shortcuts, callback, element = document, global = false) {
    for (const shortcut of shortcuts) {
      this.bindings.push([shortcut, element, global, callback]);
    }
  }
}

const extension = new WebSearchNavigator();
extension.init();



// Some weird escaping things going on
const NEWLINE = String.fromCharCode(10);

const OPTIONS_HTML = atob(
  `

PCFET0NUWVBFIGh0bWw+CjxodG1sPgoKPGhlYWQ+CiAgICA8dGl0bGU+T3B0aW9ucyBmb3IgV2ViIFNlYXJjaCBOYXZpZ2F0b3I8L3RpdGxlPgogICAgPGxpbmsgcmVsPSJzdHlsZXNoZWV0IiBocmVmPSJvcHRpb25zX3BhZ2UuY3NzIj4KPC9oZWFkPgoKPGJvZHk+CiAgICA8c2VjdGlvbiBpZD0iZ2VuZXJhbC1zZXR0aW5ncy1jb250YWluZXIiPgogICAgICAgIDxoMj5HZW5lcmFsIHNldHRpbmdzPC9oMj4KICAgICAgICA8ZGl2IGNsYXNzPSJvcHRpb24iPgogICAgICAgICAgICA8bGFiZWwgZm9yPSJ3cmFwLW5hdmlnYXRpb24iPgogICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImNoZWNrYm94IiBpZD0id3JhcC1uYXZpZ2F0aW9uIj4gV3JhcCBhcm91bmQgd2hlbiBuYXZpZ2F0aW5nIGJlZm9yZS9hZnRlciB0aGUgZmlyc3QvbGFzdCBzZWFyY2ggcmVzdWx0CiAgICAgICAgICAgIDwvbGFiZWw+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0ib3B0aW9uIj4KICAgICAgICAgICAgPGxhYmVsIGZvcj0iYXV0by1zZWxlY3QtZmlyc3QiPgogICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImNoZWNrYm94IiBpZD0iYXV0by1zZWxlY3QtZmlyc3QiPiBGb2N1cyBvbiBmaXJzdCBzZWFyY2ggcmVzdWx0IGF1dG9tYXRpY2FsbHkgYWZ0ZXIgdGhlIHBhZ2UgbG9hZHMKICAgICAgICAgICAgPC9sYWJlbD4KICAgICAgICA8L2Rpdj4KICAgIDwvc2VjdGlvbj4KICAgIDxzZWN0aW9uIGlkPSJnb29nbGUtc2V0dGluZ3MtY29udGFpbmVyIj4KICAgICAgICA8aDI+R29vZ2xlIHNwZWNpZmljIHNldHRpbmdzPC9oMj4KICAgICAgICA8ZGl2IGNsYXNzPSJvcHRpb24iPgogICAgICAgICAgICA8bGFiZWwgZm9yPSJnb29nbGUtaW5jbHVkZS1jYXJkcyI+CiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0iY2hlY2tib3giIGlkPSJnb29nbGUtaW5jbHVkZS1jYXJkcyI+IEluY2x1ZGUgY2FyZHMgKHRvcCBzdG9yaWVzLCB0d2l0dGVyLCB2aWRlb3MpIGluIHJlZ3VsYXIgR29vZ2xlIHNlYXJjaCBwYWdlCiAgICAgICAgICAgIDwvbGFiZWw+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0ib3B0aW9uIj4KICAgICAgICAgICAgPGxhYmVsIGZvcj0iZ29vZ2xlLWluY2x1ZGUtcGxhY2VzIj4KICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJjaGVja2JveCIgaWQ9Imdvb2dsZS1pbmNsdWRlLXBsYWNlcyI+IEluY2x1ZGUgUGxhY2VzIGluIHJlZ3VsYXIgR29vZ2xlIHNlYXJjaCBwYWdlCiAgICAgICAgICAgIDwvbGFiZWw+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0ib3B0aW9uIj4KICAgICAgICAgICAgPGxhYmVsIGZvcj0iZ29vZ2xlLWluY2x1ZGUtbWVtZXgiPgogICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImNoZWNrYm94IiBpZD0iZ29vZ2xlLWluY2x1ZGUtbWVtZXgiPiBJbmNsdWRlIFdvcmxkQnJhaW4ncyBNZW1leCBleHRlbnNpb24gcmVzdWx0cyBpbiBHb29nbGUgc2VhcmNoIHBhZ2UKICAgICAgICAgICAgPC9sYWJlbD4KICAgICAgICA8L2Rpdj4KICAgIDwvc2VjdGlvbj4KICAgIDxzZWN0aW9uIGlkPSJrZXliaW5kaW5ncy1jb250YWluZXIiPgogICAgICAgIDxoMj5LZXliaW5kaW5nczwvaDI+CiAgICAgICAgPGRldGFpbHM+CiAgICAgICAgICAgIDxzdW1tYXJ5PjxoMz5IZWxwPC9oMz48L3N1bW1hcnk+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImhlbHAiPgogICAgICAgICAgICAgICAgQWxsIGtleWJpbmRpbmdzIHNob3VsZCBiZSBzcGVjaWZpZWQgaW4KICAgICAgICAgICAgICAgIDxhIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9jY2FtcGJlbGwvbW91c2V0cmFwIiB0YXJnZXQ9Il9ibGFuayI+TW91c2V0cmFwPC9hPiBmb3JtYXQuIEV4YW1wbGVzOgogICAgICAgICAgICAgICAgPHVsPgogICAgICAgICAgICAgICAgICAgIDxsaT4KICAgICAgICAgICAgICAgICAgICAgICAgPGtiZCBjbGFzcz0ia2V5YmluZGluZyI+YTwva2JkPgogICAgICAgICAgICAgICAgICAgIDwvbGk+CiAgICAgICAgICAgICAgICAgICAgPGxpPgogICAgICAgICAgICAgICAgICAgICAgICA8a2JkIGNsYXNzPSJrZXliaW5kaW5nIj56IHk8L2tiZD4KICAgICAgICAgICAgICAgICAgICA8L2xpPgogICAgICAgICAgICAgICAgICAgIDxsaT4KICAgICAgICAgICAgICAgICAgICAgICAgPGtiZCBjbGFzcz0ia2V5YmluZGluZyI+Y3RybCthPC9rYmQ+CiAgICAgICAgICAgICAgICAgICAgPC9saT4KICAgICAgICAgICAgICAgICAgICA8bGk+CiAgICAgICAgICAgICAgICAgICAgICAgIDxrYmQgY2xhc3M9ImtleWJpbmRpbmciPmNvbW1hbmQrYTwva2JkPgogICAgICAgICAgICAgICAgICAgIDwvbGk+CiAgICAgICAgICAgICAgICAgICAgPGxpPgogICAgICAgICAgICAgICAgICAgICAgICA8a2JkIGNsYXNzPSJrZXliaW5kaW5nIj5hLCBjdHJsK2IsIHogeSwgY29tbWFuZCtjPC9rYmQ+IC0gbXVsdGlwbGUgc2hvcnRjdXRzIHRoYXQgd2lsbCBiZSB0cmVhdGVkIGVxdWl2YWxlbnRseTwvbGk+CiAgICAgICAgICAgICAgICA8L3VsPgogICAgICAgICAgICAgICAgU3BlY2lhbCBrZXlzIG5hbWVzOiBiYWNrc3BhY2UsIHRhYiwgY2xlYXIsIGVudGVyLCByZXR1cm4sIGVzYywgZXNjYXBlLCBzcGFjZSwgdXAsIGRvd24sIGxlZnQsIHJpZ2h0LCBob21lLCBlbmQsIHBhZ2V1cCwgcGFnZWRvd24sCiAgICAgICAgICAgICAgICBkZWwsIGRlbGV0ZSwgYW5kIGYxIHRocm91Z2ggZjE5LiBJbiBvcmRlciB0byBkaXNhYmxlIGEga2V5YmluZGluZywgZGVsZXRlIGl0cyBrZXliaW5kaW5nIGluIHRoZSB0ZXh0Ym94LgoKICAgICAgICAgICAgICAgIE5vdGUgdGhhdCBub3QgYWxsIHNlYXJjaCBlbmdpbmVzIHN1cHBvcnQgYWxsIHRoZSBrZXliaW5kaW5ncy4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kZXRhaWxzPgogICAgICAgIDxkZXRhaWxzPgogICAgICAgICAgICA8c3VtbWFyeT48aDM+Q29tbW9uIGFjdGlvbnM8L2gzPjwvc3VtbWFyeT4KICAgICAgICAgICAgPGRpdiBjbGFzcz0ib3B0aW9uIj4KICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9Im5leHQta2V5IiBjbGFzcz0ib3B0aW9uLWRlc2MiPk5leHQgc2VhcmNoIHJlc3VsdDwvbGFiZWw+CiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9Im5leHQta2V5IiBjbGFzcz0iaW5wdXQta2V5YmluZGluZyIgdHlwZT0idGV4dCIgdmFsdWU9ImRvd24sIGoiPgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0ib3B0aW9uIj4KICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9InByZXZpb3VzLWtleSIgY2xhc3M9Im9wdGlvbi1kZXNjIj5QcmV2aW91cyBzZWFyY2ggcmVzdWx0PC9sYWJlbD4KICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0icHJldmlvdXMta2V5IiBjbGFzcz0iaW5wdXQta2V5YmluZGluZyIgdHlwZT0idGV4dCIgdmFsdWU9InVwLCBrIj4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9Im9wdGlvbiI+CiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJuYXZpZ2F0ZS1rZXkiIGNsYXNzPSJvcHRpb24tZGVzYyI+T3BlbjwvbGFiZWw+CiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9Im5hdmlnYXRlLWtleSIgY2xhc3M9ImlucHV0LWtleWJpbmRpbmciIHR5cGU9InRleHQiIHZhbHVlPSJyZXR1cm4sIHNwYWNlIj4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9Im9wdGlvbiI+CiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJuYXZpZ2F0ZS1uZXctdGFiLWJhY2tncm91bmQta2V5IiBjbGFzcz0ib3B0aW9uLWRlc2MiPk9wZW4gaW4gYSBuZXcgYmFja2dyb3VuZCB0YWI8L2xhYmVsPgogICAgICAgICAgICAgICAgPGlucHV0IGlkPSJuYXZpZ2F0ZS1uZXctdGFiLWJhY2tncm91bmQta2V5IiBjbGFzcz0iaW5wdXQta2V5YmluZGluZyIgdHlwZT0idGV4dCIgdmFsdWU9ImN0cmwrc2hpZnQrcmV0dXJuLCBjb21tYW5kK3NoaWZ0K3JldHVybiwgY3RybCtzaGlmdCtzcGFjZSI+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJvcHRpb24iPgogICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0ibmF2aWdhdGUtbmV3LXRhYi1rZXkiIGNsYXNzPSJvcHRpb24tZGVzYyI+T3BlbiBpbiBhIG5ldyB3aW5kb3cvdGFiPC9sYWJlbD4KICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0ibmF2aWdhdGUtbmV3LXRhYi1rZXkiIGNsYXNzPSJpbnB1dC1rZXliaW5kaW5nIiB0eXBlPSJ0ZXh0IiB2YWx1ZT0iY3RybCtyZXR1cm4sIGNvbW1hbmQrcmV0dXJuLCBjdHJsK3NwYWNlIj4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9Im9wdGlvbiI+CiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJmb2N1cy1zZWFyY2gtaW5wdXQiIGNsYXNzPSJvcHRpb24tZGVzYyI+Rm9jdXMgc2VhcmNoIGJveDwvbGFiZWw+CiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9ImZvY3VzLXNlYXJjaC1pbnB1dCIgY2xhc3M9ImlucHV0LWtleWJpbmRpbmciIHR5cGU9InRleHQiIHZhbHVlPSIvLCBlc2NhcGUiPgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0ib3B0aW9uIj4KICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9Im5hdmlnYXRlLW5leHQtcmVzdWx0LXBhZ2UiIGNsYXNzPSJvcHRpb24tZGVzYyI+TmV4dCBwYWdlPC9sYWJlbD4KICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0ibmF2aWdhdGUtbmV4dC1yZXN1bHQtcGFnZSIgY2xhc3M9ImlucHV0LWtleWJpbmRpbmciIHR5cGU9InRleHQiIHZhbHVlPSJyaWdodCI+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJvcHRpb24iPgogICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0ibmF2aWdhdGUtcHJldmlvdXMtcmVzdWx0LXBhZ2UiIGNsYXNzPSJvcHRpb24tZGVzYyI+UHJldmlvdXMgcGFnZTwvbGFiZWw+CiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9Im5hdmlnYXRlLXByZXZpb3VzLXJlc3VsdC1wYWdlIiBjbGFzcz0iaW5wdXQta2V5YmluZGluZyIgdHlwZT0idGV4dCIgdmFsdWU9ImxlZnQiPgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0ib3B0aW9uIj4KICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJjb3B5LXVybC1rZXkiIGNsYXNzPSJvcHRpb24tZGVzYyI+Q29weSBVUkwgb2YgZm9jdXM8L2xhYmVsPgogICAgICAgICAgICAgIDxpbnB1dCBpZD0iY29weS11cmwta2V5IiBjbGFzcz0iaW5wdXQta2V5YmluZGluZyIgdHlwZT0idGV4dCIgdmFsdWU9IiI+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGV0YWlscz4KICAgICAgICA8ZGV0YWlscz4KICAgICAgICAgICAgPHN1bW1hcnk+PGgzPlJlc3VsdHMgZmlsdGVyaW5nPC9oMz48L3N1bW1hcnk+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9Im9wdGlvbiI+CiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJuYXZpZ2F0ZS1zaG93LWFsbCIgY2xhc3M9Im9wdGlvbi1kZXNjIj5UdXJuIG9mZiBmaWx0ZXIgKHNob3cgYWxsIHJlc3VsdHMpPC9sYWJlbD4KICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0ibmF2aWdhdGUtc2hvdy1hbGwiIGNsYXNzPSJpbnB1dC1rZXliaW5kaW5nIiB0eXBlPSJ0ZXh0IiB2YWx1ZT0ieiB6LCBjdHJsLXNoaWZ0LWEiPgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0ib3B0aW9uIj4KICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9Im5hdmlnYXRlLXNob3ctaG91ciIgY2xhc3M9Im9wdGlvbi1kZXNjIj5GaWx0ZXIgcmVzdWx0cyBieSBwYXN0IGhvdXI8L2xhYmVsPgogICAgICAgICAgICAgICAgPGlucHV0IGlkPSJuYXZpZ2F0ZS1zaG93LWhvdXIiIGNsYXNzPSJpbnB1dC1rZXliaW5kaW5nIiB0eXBlPSJ0ZXh0IiB2YWx1ZT0ieiBoLCBjdHJsLXNoaWZ0LWgiPgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0ib3B0aW9uIj4KICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9Im5hdmlnYXRlLXNob3ctZGF5IiBjbGFzcz0ib3B0aW9uLWRlc2MiPkZpbHRlciByZXN1bHRzIGJ5IHBhc3QgMjQgaG91cnM8L2xhYmVsPgogICAgICAgICAgICAgICAgPGlucHV0IGlkPSJuYXZpZ2F0ZS1zaG93LWRheSIgY2xhc3M9ImlucHV0LWtleWJpbmRpbmciIHR5cGU9InRleHQiIHZhbHVlPSJ6IGQsIGN0cmwtc2hpZnQtZCI+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJvcHRpb24iPgogICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0ibmF2aWdhdGUtc2hvdy13ZWVrIiBjbGFzcz0ib3B0aW9uLWRlc2MiPkZpbHRlciByZXN1bHRzIGJ5IHBhc3Qgd2VlazwvbGFiZWw+CiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9Im5hdmlnYXRlLXNob3ctd2VlayIgY2xhc3M9ImlucHV0LWtleWJpbmRpbmciIHR5cGU9InRleHQiIHZhbHVlPSJ6IHcsIGN0cmwtc2hpZnQtdyI+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJvcHRpb24iPgogICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0ibmF2aWdhdGUtc2hvdy1tb250aCIgY2xhc3M9Im9wdGlvbi1kZXNjIj5GaWx0ZXIgcmVzdWx0cyBieSBwYXN0IG1vbnRoPC9sYWJlbD4KICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0ibmF2aWdhdGUtc2hvdy1tb250aCIgY2xhc3M9ImlucHV0LWtleWJpbmRpbmciIHR5cGU9InRleHQiIHZhbHVlPSJ6IG0sIGN0cmwtc2hpZnQtbSI+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJvcHRpb24iPgogICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0ibmF2aWdhdGUtc2hvdy15ZWFyIiBjbGFzcz0ib3B0aW9uLWRlc2MiPkZpbHRlciByZXN1bHRzIGJ5IHBhc3QgeWVhcjwvbGFiZWw+CiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9Im5hdmlnYXRlLXNob3cteWVhciIgY2xhc3M9ImlucHV0LWtleWJpbmRpbmciIHR5cGU9InRleHQiIHZhbHVlPSJ6IHksIGN0cmwtc2hpZnQteSI+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJvcHRpb24iPgogICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0idG9nZ2xlLXNvcnQiIGNsYXNzPSJvcHRpb24tZGVzYyI+VG9nZ2xlIHNvcnQgYnkgZGF0ZS9yZWxldmFuY2U8L2xhYmVsPgogICAgICAgICAgICAgICAgPGlucHV0IGlkPSJ0b2dnbGUtc29ydCIgY2xhc3M9ImlucHV0LWtleWJpbmRpbmciIHR5cGU9InRleHQiIHZhbHVlPSJ6IHMsIGN0cmwtc2hpZnQtcyI+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJvcHRpb24iPgogICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0idG9nZ2xlLXZlcmJhdGltLXNlYXJjaCIgY2xhc3M9Im9wdGlvbi1kZXNjIj5Ub2dnbGUgdmVyYmF0aW0gc2VhcmNoPC9sYWJlbD4KICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0idG9nZ2xlLXZlcmJhdGltLXNlYXJjaCIgY2xhc3M9ImlucHV0LWtleWJpbmRpbmciIHR5cGU9InRleHQiIHZhbHVlPSJ6IHYsIGN0cmwtc2hpZnQtdiI+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJvcHRpb24iPgogICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0ic2hvdy1pbWFnZXMtbGFyZ2UiIGNsYXNzPSJvcHRpb24tZGVzYyI+RmlsdGVyIGltYWdlIHJlc3VsdHMgYnkgbGFyZ2Ugc2l6ZTwvbGFiZWw+CiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9InNob3ctaW1hZ2VzLWxhcmdlIiBjbGFzcz0iaW5wdXQta2V5YmluZGluZyIgdHlwZT0idGV4dCIgdmFsdWU9InogbCI+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJvcHRpb24iPgogICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0ic2hvdy1pbWFnZXMtbWVkaXVtIiBjbGFzcz0ib3B0aW9uLWRlc2MiPkZpbHRlciBpbWFnZSByZXN1bHRzIGJ5IG1lZGl1bSBzaXplPC9sYWJlbD4KICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0ic2hvdy1pbWFnZXMtbWVkaXVtIiBjbGFzcz0iaW5wdXQta2V5YmluZGluZyIgdHlwZT0idGV4dCIgdmFsdWU9InogZSI+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJvcHRpb24iPgogICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0ic2hvdy1pbWFnZXMtaWNvbiIgY2xhc3M9Im9wdGlvbi1kZXNjIj5GaWx0ZXIgaW1hZ2UgcmVzdWx0cyBieSBpY29uIHNpemU8L2xhYmVsPgogICAgICAgICAgICAgICAgPGlucHV0IGlkPSJzaG93LWltYWdlcy1pY29uIiBjbGFzcz0iaW5wdXQta2V5YmluZGluZyIgdHlwZT0idGV4dCIgdmFsdWU9InogaSI+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGV0YWlscz4KICAgICAgICA8ZGV0YWlscz4KICAgICAgICAgICAgPHN1bW1hcnk+PGgzPkdvb2dsZSBhbmQgU3RhcnRwYWdlPC9oMz48L3N1bW1hcnk+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9Im9wdGlvbiI+CiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJuYXZpZ2F0ZS1zZWFyY2gtdGFiIiBjbGFzcz0ib3B0aW9uLWRlc2MiPkdvIHRvIEFsbCAoPSBkZWZhdWx0IHNlYXJjaCB0YWIpPC9sYWJlbD4KICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0ibmF2aWdhdGUtc2VhcmNoLXRhYiIgY2xhc3M9ImlucHV0LWtleWJpbmRpbmciIHR5cGU9InRleHQiIHZhbHVlPSJhLCBzIj4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9Im9wdGlvbiI+CiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJuYXZpZ2F0ZS1pbWFnZXMtdGFiIiBjbGFzcz0ib3B0aW9uLWRlc2MiPkdvIHRvIEltYWdlczwvbGFiZWw+CiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9Im5hdmlnYXRlLWltYWdlcy10YWIiIGNsYXNzPSJpbnB1dC1rZXliaW5kaW5nIiB0eXBlPSJ0ZXh0IiB2YWx1ZT0iaSI+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJvcHRpb24iPgogICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0ibmF2aWdhdGUtdmlkZW9zLXRhYiIgY2xhc3M9Im9wdGlvbi1kZXNjIj5HbyB0byBWaWRlb3M8L2xhYmVsPgogICAgICAgICAgICAgICAgPGlucHV0IGlkPSJuYXZpZ2F0ZS12aWRlb3MtdGFiIiBjbGFzcz0iaW5wdXQta2V5YmluZGluZyIgdHlwZT0idGV4dCIgdmFsdWU9InYiPgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0ib3B0aW9uIj4KICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9Im5hdmlnYXRlLW1hcHMtdGFiIiBjbGFzcz0ib3B0aW9uLWRlc2MiPkdvIHRvIE1hcHM8L2xhYmVsPgogICAgICAgICAgICAgICAgPGlucHV0IGlkPSJuYXZpZ2F0ZS1tYXBzLXRhYiIgY2xhc3M9ImlucHV0LWtleWJpbmRpbmciIHR5cGU9InRleHQiIHZhbHVlPSJtIj4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9Im9wdGlvbiI+CiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJuYXZpZ2F0ZS1uZXdzLXRhYiIgY2xhc3M9Im9wdGlvbi1kZXNjIj5HbyB0byBOZXdzPC9sYWJlbD4KICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0ibmF2aWdhdGUtbmV3cy10YWIiIGNsYXNzPSJpbnB1dC1rZXliaW5kaW5nIiB0eXBlPSJ0ZXh0IiB2YWx1ZT0ibiI+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJvcHRpb24iPgogICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0ibmF2aWdhdGUtc2hvcHBpbmctdGFiIiBjbGFzcz0ib3B0aW9uLWRlc2MiPkdvIHRvIFNob3BwaW5nPC9sYWJlbD4KICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0ibmF2aWdhdGUtc2hvcHBpbmctdGFiIiBjbGFzcz0iaW5wdXQta2V5YmluZGluZyIgdHlwZT0idGV4dCIgdmFsdWU9ImFsdCtuIj4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9Im9wdGlvbiI+CiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJuYXZpZ2F0ZS1ib29rcy10YWIiIGNsYXNzPSJvcHRpb24tZGVzYyI+R28gdG8gQm9va3M8L2xhYmVsPgogICAgICAgICAgICAgICAgPGlucHV0IGlkPSJuYXZpZ2F0ZS1ib29rcy10YWIiIGNsYXNzPSJpbnB1dC1rZXliaW5kaW5nIiB0eXBlPSJ0ZXh0IiB2YWx1ZT0iYiI+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJvcHRpb24iPgogICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0ibmF2aWdhdGUtZmxpZ2h0cy10YWIiIGNsYXNzPSJvcHRpb24tZGVzYyI+R28gdG8gRmxpZ2h0czwvbGFiZWw+CiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9Im5hdmlnYXRlLWZsaWdodHMtdGFiIiBjbGFzcz0iaW5wdXQta2V5YmluZGluZyIgdHlwZT0idGV4dCIgdmFsdWU9ImFsdCtsIj4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9Im9wdGlvbiI+CiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJuYXZpZ2F0ZS1maW5hbmNpYWwtdGFiIiBjbGFzcz0ib3B0aW9uLWRlc2MiPkdvIHRvIEZpbmFuY2lhbDwvbGFiZWw+CiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9Im5hdmlnYXRlLWZpbmFuY2lhbC10YWIiIGNsYXNzPSJpbnB1dC1rZXliaW5kaW5nIiB0eXBlPSJ0ZXh0IiB2YWx1ZT0iZiI+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGV0YWlscz4KICAgIDwvc2VjdGlvbj4KICAgIDxzZWN0aW9uIGlkPSJzZWFyY2gtZW5naW5lcy1jb250YWluZXIiPgogICAgICAgIDxoMj5FWFBFUklNRU5UQUw6IEFsdGVybmF0aXZlIHNlYXJjaCBlbmdpbmVzPC9oMj4KICAgICAgICA8ZGV0YWlscyBjbGFzcz0iaGVscCI+CiAgICAgICAgICAgIDxzdW1tYXJ5PjxoMz5IZWxwPC9oMz48L3N1bW1hcnk+CiAgICAgICAgICAgIFRoZXJlIGlzIGV4cGVyaW1lbnRhbCBzdXBwb3J0IGZvciB1c2luZyB0aGlzIGV4dGVuc2lvbiBpbiB0aGUgd2Vic2l0ZXMgYmVsb3cuCiAgICAgICAgICAgIE5vdGUgdGhhdCBzb21lIGZlYXR1cmVzIGFyZSBzdGlsbCBidWdneSBpbiBjZXJ0YWluIHdlYnNpdGVzLgogICAgICAgICAgICBZb3UgY2FuIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBleHRlbnNpb24gb2YgdGhlc2Ugd2Vic2l0ZXMgYXQgYW55IHRpbWUgYnkgY2xpY2tpbmcgb24gdGhlIGNoZWNrYm94ZXMuCiAgICAgICAgICAgIFdoZW4geW91IGVuYWJsZSBhIHdlYnNpdGUsIHRoZSBicm93c2VyIHdpbGwgcHJvbXB0IHlvdSBmb3IgYWRkaXRpb25hbCBwZXJtaXNzaW9ucyB3aGljaCBhcmUgbmVlZGVkIHRvIGJlIGFibGUgdG8gcnVuIHRoaXMgZXh0ZW5zaW9uIG9uIHRoYXQgd2Vic2l0ZS4KICAgICAgICA8L2RldGFpbHM+CiAgICAgICAgPGRpdiBjbGFzcz0ib3B0aW9uIj4KICAgICAgICAgICAgPGxhYmVsIGZvcj0iYnJhdmUtc2VhcmNoIj4KICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJjaGVja2JveCIgaWQ9ImJyYXZlLXNlYXJjaCI+IEVuYWJsZSBvbiBCcmF2ZSBTZWFyY2gKICAgICAgICAgICAgPC9sYWJlbD4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJvcHRpb24iPgogICAgICAgICAgICA8bGFiZWwgZm9yPSJzdGFydHBhZ2UiPgogICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImNoZWNrYm94IiBpZD0ic3RhcnRwYWdlIj4gRW5hYmxlIG9uIFN0YXJ0cGFnZQogICAgICAgICAgICA8L2xhYmVsPgogICAgICAgIDwvZGl2PgogICAgICAgIDxkaXYgY2xhc3M9Im9wdGlvbiI+CiAgICAgICAgICAgIDxsYWJlbCBmb3I9InlvdXR1YmUiPgogICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImNoZWNrYm94IiBpZD0ieW91dHViZSI+IEVuYWJsZSBvbiBZb3VUdWJlCiAgICAgICAgICAgIDwvbGFiZWw+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0ib3B0aW9uIj4KICAgICAgICAgICAgPGxhYmVsIGZvcj0iZ29vZ2xlLXNjaG9sYXIiPgogICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImNoZWNrYm94IiBpZD0iZ29vZ2xlLXNjaG9sYXIiPiBFbmFibGUgb24gR29vZ2xlIFNjaG9sYXIKICAgICAgICAgICAgPC9sYWJlbD4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJvcHRpb24iPgogICAgICAgICAgICA8bGFiZWwgZm9yPSJhbWF6b24iPgogICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImNoZWNrYm94IiBpZD0iYW1hem9uIj4gRW5hYmxlIG9uIEFtYXpvbgogICAgICAgICAgICA8L2xhYmVsPgogICAgICAgIDwvZGl2PgogICAgICAgIDxkaXYgY2xhc3M9Im9wdGlvbiI+CiAgICAgICAgICAgIDxsYWJlbCBmb3I9ImdpdGh1YiI+CiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0iY2hlY2tib3giIGlkPSJnaXRodWIiPiBFbmFibGUgb24gR2l0aHViCiAgICAgICAgICAgIDwvbGFiZWw+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0ib3B0aW9uIj4KICAgICAgICAgICAgPGxhYmVsIGZvcj0iZ2l0bGFiIj4KICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJjaGVja2JveCIgaWQ9ImdpdGxhYiI+IEVuYWJsZSBvbiBHaXRsYWIKICAgICAgICAgICAgPC9sYWJlbD4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJvcHRpb24iPgogICAgICAgICAgICA8bGFiZWwgZm9yPSJjdXN0b20tZ2l0bGFiIj4KICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJjaGVja2JveCIgaWQ9ImN1c3RvbS1naXRsYWIiPiBFbmFibGUgb24gY3VzdG9tIEdpdGxhYgogICAgICAgICAgICA8L2xhYmVsPgogICAgICAgIDwvZGl2PgogICAgPC9zZWN0aW9uPgogICAgPHNlY3Rpb24gaWQ9ImFwcGVhcmFuY2UtY29udGFpbmVyIj4KICAgICAgICA8aDI+QXBwZWFyYW5jZTwvaDI+CiAgICAgICAgPGRpdiBjbGFzcz0ib3B0aW9uIj4KICAgICAgICAgICAgPGxhYmVsIGZvcj0iaGlkZS1vdXRsaW5lIj4KICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJjaGVja2JveCIgaWQ9ImhpZGUtb3V0bGluZSI+IEhpZGUgb3V0bGluZSBvbiBzZWxlY3RlZCBzZWFyY2ggcmVzdWx0CiAgICAgICAgICAgIDwvbGFiZWw+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0ib3B0aW9uIj4KICAgICAgICAgICAgPGgzPkVYUEVSSU1FTlRBTDogQ3VzdG9tIENTUzwvaDM+CiAgICAgICAgICAgIFlvdSBjYW4gc2V0IGN1c3RvbSBDU1MgcnVsZXMgdG8gY2hhbmdlIGhvdyB0aGUgZm9jdXNlZCBzZWFyY2ggcmVzdWx0cyBhcmUgaGlnaGxpZ2h0ZWQuIFRoZSB0ZXh0YXJlYSBiZWxvdyBjb250YWlucyB0aGUgZGVmYXVsdCBDU1MgcnVsZXMuCiAgICAgICAgICAgIElmIHlvdSB3YW50IHRvIHJlc2V0IHRoZSBDU1MgdG8gdGhlIGRlZmF1bHRzLCBzZXQgdGhlIHRleHRhcmVhIGNvbnRlbnQgdG8gYW4gZW1wdHkgc3RyaW5nIGFuZCBzYXZlLgogICAgICAgICAgICA8ZGV0YWlscz4KICAgICAgICAgICAgICAgIDxzdW1tYXJ5PjxoMz5FZGl0IENTUyBydWxlczwvaDM+PC9zdW1tYXJ5PgogICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9ImN1c3RvbS1jc3MtdGV4dGFyZWEiIGlkPSJjdXN0b20tY3NzLXRleHRhcmVhIj48L3RleHRhcmVhPgogICAgICAgICAgICA8L2RldGFpbHM+CiAgICAgICAgPC9kaXY+CiAgICA8L3NlY3Rpb24+CiAgICA8c2VjdGlvbiBpZD0iYWR2YW5jZWQtc2V0dGluZ3MtY29udGFpbmVyIj4KICAgICAgICA8ZGV0YWlscz4KICAgICAgICAgICAgPHN1bW1hcnk+PGgyPkFkdmFuY2VkPC9oMj48L3N1bW1hcnk+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9Im9wdGlvbiI+CiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJoZWxwIj4KICAgICAgICAgICAgICAgICAgICBUaGlzIG9wdGlvbiBjYW4gYmUgdXNlZCBhcyBhIHdvcmthcm91bmQgZm9yIHNvbWUgd2Vic2l0ZXMuCiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDxkaXYgaWQ9ImRlbGF5LWNvbnRhaW5lciI+CiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0iZGVsYXkiPgogICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ibnVtYmVyIiBpZD0iZGVsYXkiPkRlbGF5IGV4dGVuc2lvbiBpbml0aWFsaXphdGlvbiBpbiBtaWxsaXNlY29uZHMKICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJvcHRpb24iPgogICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0ic2ltdWxhdGUtbWlkZGxlLWNsaWNrIj4KICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0iY2hlY2tib3giIGlkPSJzaW11bGF0ZS1taWRkbGUtY2xpY2siPiBTaW11bGF0ZSBtaWRkbGUgY2xpY2sgd2hlbiBvcGVuaW5nIGluIGEgbmV3IGJhY2tncm91bmQgdGFiCiAgICAgICAgICAgICAgICA8L2xhYmVsPgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0ib3B0aW9uIj4KICAgICAgICAgICAgICAgIDxoMz5DdXN0b20gR2l0bGFiIFVSTCByZWdleDwvaDM+CiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJoZWxwIj4KICAgICAgICAgICAgICAgICAgICBEZWZpbmUgcHJpdmF0ZSBHaXRsYWIgVVJMIHJlZ2V4LiBEZWZhdWx0IGlzIF5odHRwczovLyh3d3dcLik/LipnaXQuKlwuIAogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICA8ZGl2IGlkPSJjdXN0b20tZ2l0bGFiLXVybC1jb250YWluZXIiPgogICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9ImN1c3RvbS1naXRsYWItdXJsIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9InRleHQiIGlkPSJjdXN0b20tZ2l0bGFiLXVybCI+CiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2RldGFpbHM+CiAgICA8L3NlY3Rpb24+CgogICAgPGRpdiBpZD0ic3RhdHVzIj48L2Rpdj4KICAgIDxkaXYgaWQ9ImJ1dHRvbnMtY29udGFpbmVyIj4KICAgICAgICA8YnV0dG9uIGlkPSJzYXZlIj5TYXZlPC9idXR0b24+CiAgICAgICAgPGJ1dHRvbiBpZD0icmVzZXQiPlJlc2V0IHRvIGRlZmF1bHRzPC9idXR0b24+CiAgICA8L2Rpdj4KCiAgICA8c2NyaXB0IHNyYz0iYnJvd3Nlci1wb2x5ZmlsbC5qcyI+PC9zY3JpcHQ+CiAgICA8c2NyaXB0IHNyYz0ib3B0aW9ucy5qcyI+PC9zY3JpcHQ+CiAgICA8c2NyaXB0IHNyYz0ib3B0aW9uc19wYWdlLmpzIj48L3NjcmlwdD4KPC9ib2R5PgoKPC9odG1sPgo=

`.replaceAll(NEWLINE, ''),
);

const OPTIONS_CSS = atob(
  `

Ym9keSB7CiAgd2lkdGg6IDQwMHB4Owp9CgpzZWN0aW9uIHsKICBtYXJnaW4tYm90dG9tOiAxMHB4Owp9CgpoMiB7CiAgZm9udC1zaXplOiAxLjRlbTsKICBmb250LXdlaWdodDogNTUwOwogIG1hcmdpbi10b3A6IDEwcHg7CiAgbWFyZ2luLWJvdHRvbTogMTBweDsKfQoKaDMgewogIGZvbnQtc2l6ZTogMS4yZW07CiAgZm9udC13ZWlnaHQ6IDQ1MDsKICBtYXJnaW4tdG9wOiAxMHB4OwogIG1hcmdpbi1ib3R0b206IDVweDsKfQoKc3VtbWFyeSB7CiAgbWFyZ2luLXRvcDogNXB4OwogIG1hcmdpbi1ib3R0b206IDVweDsKfQoKZGV0YWlscyB7CiAgbWFyZ2luLWJvdHRvbTogNXB4Owp9CgpzdW1tYXJ5IGgzLApzdW1tYXJ5IGgyIHsKICBkaXNwbGF5OiBpbmxpbmU7Cn0KCi5vcHRpb24gewogIG1hcmdpbi1ib3R0b206IDVweDsKfQoKLm9wdGlvbi1kZXNjIHsKICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgd2lkdGg6IDQ4JTsKfQoKLmlucHV0LWtleWJpbmRpbmcgewogIG1hcmdpbi1sZWZ0OiBhdXRvOwogIG1hcmdpbi1yaWdodDogMDsKICB3aWR0aDogNDglOwp9CgouaGVscCB7CiAgZm9udC13ZWlnaHQ6IDM1MDsKfQoKI2N1c3RvbS1jc3MtdGV4dGFyZWEgewogIHdpZHRoOiAxMDAlOwogIGhlaWdodDogNDAwcHg7Cn0KCi5zZWFyY2gtZW5naW5lLWNoZWNrYm94IHsKICBkaXNwbGF5OiBibG9jazsKfQoKI2RlbGF5LWNvbnRhaW5lciB7CiAgbWFyZ2luLXRvcDogNXB4Owp9CgojZGVsYXkgewogIHdpZHRoOiA3NXB4OwogIG1hcmdpbi1yaWdodDogNXB4Owp9Cgojc3RhdHVzIHsKICBmb250LXdlaWdodDogYm9sZDsKfQoKI2J1dHRvbnMtY29udGFpbmVyIGJ1dHRvbiB7CiAgbWFyZ2luLXRvcDogNXB4OwogIG1hcmdpbi1ib3R0b206IDVweDsKfQoKLyogRmlyZWZveCBzcGVjaWZpYyBvdmVycmlkZXMgKi8KQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgiIikgewogIGJvZHkgewogICAgd2lkdGg6IDYwMHB4OwogICAgLyogV2l0aG91dCB0aGlzLCB0aGUgRmlyZWZveCBvcHRpb25zIHBhZ2UgYm9keSBpcyBjbG9zZSB0byB0aGUgYm9yZGVyICovCiAgICBtYXJnaW4tbGVmdDogMTBweDsKICB9CgogIC5vcHRpb24tZGVzYyB7CiAgICB3aWR0aDogMjgwcHg7CiAgfQoKICAjY3VzdG9tLWNzcy10ZXh0YXJlYSB7CiAgICB3aWR0aDogNjAwcHg7CiAgICBoZWlnaHQ6IDYwMHB4OwogIH0KfQo=

`.replaceAll(NEWLINE, ''),
);

const OPTIONS_JS = atob(
  `

Y29uc3QgREVGQVVMVF9DU1MgPSBgLyogTk9URToKICoKICogLSBVc2luZyAhaW1wb3J0YW50IGlzIG5lZWRlZCBmb3Igc29tZSBzdHlsZXMgYmVjYXVzZSBvdGhlcndpc2UgdGhleSBnZXQKICogICBvdmVycmlkZW4gYnkgdGhlIHNlYXJjaCBlbmdpbmUgc3R5bGVzaGVldHMKICogLSBVc2luZyBvdXRsaW5lIHdvcmtzIGJldHRlciB0aGFuIGJvcmRlciBzb21ldGltZXMgYmVjYXVzZSBjcmVhdGluZyB0aGUKICogICBib3JkZXIgY2FuIG1vdmUgb3RoZXIgZWxlbWVudHMsIGZvciBleGFtcGxlIHRoZSBwYWdlIG51bWJlcnMgYXJlIG1vdmVkIGluCiAqICAgR29vZ2xlIFNjaG9sYXIgd2hlbiBoaWdobGlnaHRpbmcgdGhlIHByZXYvbmV4dCBidXR0b25zLgogKi8KCjpyb290IHsKICAtLXJlc3VsdC1vdXRsaW5lOiAxcHggc29saWQgYmxhY2s7Cn0KCkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHsKICA6cm9vdCB7CiAgICAtLXJlc3VsdC1vdXRsaW5lOiAxcHggc29saWQgI2FhYWFhYTsKICB9Cn0KCmh0bWxbZGFya10sIFtkYXJrXSB7CiAgLS1yZXN1bHQtb3V0bGluZTogMXB4IHNvbGlkICNhYWFhYWE7Cn0KCi53c24tZ29vZ2xlLWZvY3VzZWQtbGluayB7CiAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAvKiBUaGlzIGlzIHJlcXVpcmVkIGZvciB0aGUgYXJyb3cgdG8gYXBwZWFyIHdoZW4gbmF2aWdhdGluZyBzdWItcmVzdWx0cywgc2VlCiAgICAgKiBhbHNvOiBodHRwczovL2dpdGh1Yi5jb20vaW5mb2tpbGxlci93ZWItc2VhcmNoLW5hdmlnYXRvci9pc3N1ZXMvMzU3ICovCiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50Owp9Cgoud3NuLWdvb2dsZS1mb2N1c2VkLWxpbms6OmJlZm9yZSwKLndzbi1nb29nbGUtZm9jdXNlZC1tYXA6OmJlZm9yZSwKLndzbi1naXRsYWItZm9jdXNlZC1saW5rOjpiZWZvcmUsCi53c24tYnJhdmUtc2VhcmNoLWZvY3VzZWQtbGluazo6YmVmb3JlLAoud3NuLXN0YXJ0cGFnZS1mb2N1c2VkLWxpbms6OmJlZm9yZSB7CiAgICBjb250ZW50OiAiXHUyNUJBIjsKICAgIG1hcmdpbi1yaWdodDogMjVweDsKICAgIGxlZnQ6IC0yNXB4OwogICAgcG9zaXRpb246IGFic29sdXRlOwp9Cgoud3NuLWJyYXZlLXNlYXJjaC1mb2N1c2VkLW5ld3MgewogIHBvc2l0aW9uOiByZWxhdGl2ZTsKfQoKLndzbi1icmF2ZS1zZWFyY2gtZm9jdXNlZC1uZXdzOjpiZWZvcmUgewogIGNvbnRlbnQ6ICJcdTI1QkEiOwogIHRvcDogNXB4OwogIGxlZnQ6IC00NXB4OwogIHBvc2l0aW9uOiBhYnNvbHV0ZTsKfQoKLndzbi1nb29nbGUtZm9jdXNlZC1pbWFnZSB7CiAgICBvdXRsaW5lOiB2YXIoLS1yZXN1bHQtb3V0bGluZSkgIWltcG9ydGFudDsKICAgIC8qIEltYWdlcyBhcmUgbGVzcyB2aXNpYmxlIHdpdGggYSB0aGluIG91dGxpbmUgKi8KICAgIG91dGxpbmUtd2lkdGg6IDJweDsKfQoKLndzbi1nb29nbGUtZm9jdXNlZC1jYXJkLAoud3NuLWJyYXZlLXNlYXJjaC1mb2N1c2VkLWNhcmQsCi53c24tZ29vZ2xlLWZvY3VzZWQtam9iLWNhcmQgewogICAgYm9yZGVyOiB2YXIoLS1yZXN1bHQtb3V0bGluZSkgIWltcG9ydGFudDsKfQoKLndzbi1nb29nbGUtZm9jdXNlZC1tYXAsCi53c24tZ29vZ2xlLWNhcmQtaXRlbSwKLndzbi1naXRsYWItZm9jdXNlZC1ncm91cC1yb3cgewogICAgb3V0bGluZTogdmFyKC0tcmVzdWx0LW91dGxpbmUpICFpbXBvcnRhbnQ7Cn0KCi53c24tZ29vZ2xlLWZvY3VzZWQtbWVtZXgtcmVzdWx0IHsKICAgIGJvcmRlcjogdmFyKC0tcmVzdWx0LW91dGxpbmUpICFpbXBvcnRhbnQ7CiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OwogICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OwogICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94Owp9CgovKiBTdGFydHBhZ2UgaGFzIGRhcmsgdGhlbWVzIHdoZXJlIGEgYmxhY2sgb3V0bGluZSB3b24ndCBiZSB2aXNpYmxlICovCi53c24tc3RhcnRwYWdlLWZvY3VzZWQtbGluayB7CiAgICBvdXRsaW5lOiAxcHggc29saWQgIzQzNWE2OSAhaW1wb3J0YW50OwogICAgb3V0bGluZS1vZmZzZXQ6IDNweDsKfQoKLndzbi15b3V0dWJlLWZvY3VzZWQtdmlkZW8gewogICAgb3V0bGluZTogdmFyKC0tcmVzdWx0LW91dGxpbmUpICFpbXBvcnRhbnQ7CiAgICBvdXRsaW5lLW9mZnNldDogMXB4Owp9Cgoud3NuLXlvdXR1YmUtZm9jdXNlZC1ncmlkLXZpZGVvIHsKICAgIGJvcmRlcjogdmFyKC0tcmVzdWx0LW91dGxpbmUpICFpbXBvcnRhbnQ7Cn0KCi53c24tZ29vZ2xlLXNjaG9sYXItbmV4dC1wYWdlIHsKICAgIC8qIFVzaW5nIG91dGxpbmUgd29ya3MgYmV0dGVyIHRoYW4gYm9yZGVyIGZvciB0aGUgU2Nob2xhciBwcmV2aW91cy9uZXh0CiAgICAgKiBidXR0b25zIGJlY2F1c2UgYm9yZGVyIG1vdmVzIHRoZSBwYWdlIG51bWJlcnMgYSBiaXQuICovCiAgICBvdXRsaW5lOiB2YXIoLS1yZXN1bHQtb3V0bGluZSkgIWltcG9ydGFudDsKfQoKLndzbi1hbWF6b24tZm9jdXNlZC1pdGVtIHsKICAgIG91dGxpbmU6IHZhcigtLXJlc3VsdC1vdXRsaW5lKSAhaW1wb3J0YW50OwogICAgb3V0bGluZS1vZmZzZXQ6IDNweDsKfQoKLndzbi1hbWF6b24tZm9jdXNlZC1jYXJ0LWl0ZW0sCi53c24tYW1hem9uLWZvY3VzZWQtY2Fyb3VzZWwtaXRlbSB7CiAgICBib3JkZXI6IHZhcigtLXJlc3VsdC1vdXRsaW5lKSAhaW1wb3J0YW50Owp9Cgoud3NuLWdpdGh1Yi1mb2N1c2VkLWl0ZW0sCi53c24tZ2l0aHViLWZvY3VzZWQtcGFnaW5hdGlvbiB7CiAgICBvdXRsaW5lOiB2YXIoLS1yZXN1bHQtb3V0bGluZSkgIWltcG9ydGFudDsKICAgIG91dGxpbmUtb2Zmc2V0OiAycHg7Cn0KCi8qIFRoaXMgcnVsZSBpcyBvbmx5IHVzZWQgd2hlbiB0aGUgImhpZGUgb3V0bGluZSIgb3B0aW9uIGlzIGVuYWJsZWQsIGFuZCBpcyB1c2VkCiAqIHRvIGRpc2FibGUgdGhlIHdlYnNpdGUncyBkZWZhdWx0IHNlYXJjaCByZXN1bHQgb3V0bGluaW5nICovCi53c24tbm8tb3V0bGluZSwKLndzbi1uby1vdXRsaW5lOmZvY3VzIHsKICAgIG91dGxpbmU6IG5vbmU7Cn1gOwoKY29uc3QgREVGQVVMVF9LRVlCSU5ESU5HUyA9IHsKICBuZXh0S2V5OiBbJ2Rvd24nLCAnaiddLAogIHByZXZpb3VzS2V5OiBbJ3VwJywgJ2snXSwKICBuYXZpZ2F0ZVByZXZpb3VzUmVzdWx0UGFnZTogWydsZWZ0JywgJ2gnXSwKICBuYXZpZ2F0ZU5leHRSZXN1bHRQYWdlOiBbJ3JpZ2h0JywgJ2wnXSwKICBuYXZpZ2F0ZUtleTogWydyZXR1cm4nLCAnc3BhY2UnXSwKICBuYXZpZ2F0ZU5ld1RhYkJhY2tncm91bmRLZXk6IFsnY3RybCtyZXR1cm4nLCAnY29tbWFuZCtyZXR1cm4nLCAnY3RybCtzcGFjZSddLAogIG5hdmlnYXRlTmV3VGFiS2V5OiBbCiAgICAnY3RybCtzaGlmdCtyZXR1cm4nLAogICAgJ2NvbW1hbmQrc2hpZnQrcmV0dXJuJywKICAgICdjdHJsK3NoaWZ0K3NwYWNlJywKICBdLAogIG5hdmlnYXRlU2VhcmNoVGFiOiBbJ2EnLCAncyddLAogIG5hdmlnYXRlSW1hZ2VzVGFiOiBbJ2knXSwKICBuYXZpZ2F0ZVZpZGVvc1RhYjogWyd2J10sCiAgbmF2aWdhdGVNYXBzVGFiOiBbJ20nXSwKICBuYXZpZ2F0ZU5ld3NUYWI6IFsnbiddLAogIG5hdmlnYXRlU2hvcHBpbmdUYWI6IFsnYWx0K3MnXSwKICBuYXZpZ2F0ZUJvb2tzVGFiOiBbJ2InXSwKICBuYXZpZ2F0ZUZsaWdodHNUYWI6IFsnYWx0K2wnXSwKICBuYXZpZ2F0ZUZpbmFuY2lhbFRhYjogWydmJ10sCiAgZm9jdXNTZWFyY2hJbnB1dDogWycvJywgJ2VzY2FwZSddLAogIG5hdmlnYXRlU2hvd0FsbDogWyd6IHonXSwKICBuYXZpZ2F0ZVNob3dIb3VyOiBbJ3ogaCddLAogIG5hdmlnYXRlU2hvd0RheTogWyd6IGQnXSwKICBuYXZpZ2F0ZVNob3dXZWVrOiBbJ3ogdyddLAogIG5hdmlnYXRlU2hvd01vbnRoOiBbJ3ogbSddLAogIG5hdmlnYXRlU2hvd1llYXI6IFsneiB5J10sCiAgdG9nZ2xlU29ydDogWyd6IHMnXSwKICB0b2dnbGVWZXJiYXRpbVNlYXJjaDogWyd6IHYnXSwKICBzaG93SW1hZ2VzTGFyZ2U6IFsneiBsJ10sCiAgc2hvd0ltYWdlc01lZGl1bTogWyd6IGUnXSwKICBzaG93SW1hZ2VzSWNvbjogWyd6IGknXSwKICBjb3B5VXJsS2V5OiBbXSwKfTsKCmNvbnN0IERFRkFVTFRfT1BUSU9OUyA9IHsKICAuLi5ERUZBVUxUX0tFWUJJTkRJTkdTLAogIHdyYXBOYXZpZ2F0aW9uOiBmYWxzZSwKICBhdXRvU2VsZWN0Rmlyc3Q6IHRydWUsCiAgaGlkZU91dGxpbmU6IGZhbHNlLAogIGRlbGF5OiAwLAogIGdvb2dsZUluY2x1ZGVDYXJkczogdHJ1ZSwKICBnb29nbGVJbmNsdWRlTWVtZXg6IGZhbHNlLAogIGdvb2dsZUluY2x1ZGVQbGFjZXM6IHRydWUsCiAgY3VzdG9tQ1NTOiBERUZBVUxUX0NTUywKICBzaW11bGF0ZU1pZGRsZUNsaWNrOiBmYWxzZSwKICBjdXN0b21HaXRsYWJVcmw6ICdeaHR0cHM6Ly8od3d3Lik/XFwuKmdpdC4qXFwuJywKfTsKCmNvbnN0IGtleWJpbmRpbmdTdHJpbmdUb0FycmF5ID0gKGtiKSA9PiB7CiAgLy8gQWx0ZXJuYXRpdmU6IGtiLnNwbGl0KC8sICovKTsKICByZXR1cm4ga2Iuc3BsaXQoJywnKS5tYXAoKHQpID0+IHQudHJpbSgpKTsKfTsKCi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycwpjb25zdCBrZXliaW5kaW5nQXJyYXlUb1N0cmluZyA9IChrYikgPT4gewogIHJldHVybiBrYi5qb2luKCcsICcpOwp9OwoKLyoqCiAqIEBwYXJhbSB7U3RvcmFnZUFyZWF9IHN0b3JhZ2UgVGhlIHN0b3JhZ2UgYXJlYSB0byB3aGljaCB0aGlzIHNlY3Rpb24gd2lsbAogKiAgd3JpdGUuCiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0VmFsdWVzIFRoZSBkZWZhdWx0IG9wdGlvbnMuCiAqIEBjb25zdHJ1Y3RvcgogKi8KY2xhc3MgQnJvd3NlclN0b3JhZ2UgewogIGNvbnN0cnVjdG9yKHN0b3JhZ2UsIGRlZmF1bHRWYWx1ZXMpIHsKICAgIHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7CiAgICB0aGlzLnZhbHVlcyA9IHt9OwogICAgdGhpcy5kZWZhdWx0VmFsdWVzID0gZGVmYXVsdFZhbHVlczsKICB9CiAgbG9hZCgpIHsKICAgIC8vIHRoaXMuc3RvcmFnZS5nZXQobnVsbCkgcmV0dXJucyBhbGwgdGhlIGRhdGEgc3RvcmVkOgogICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9leHRlbnNpb25zL3N0b3JhZ2UjbWV0aG9kLVN0b3JhZ2VBcmVhLWdldAogICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5nZXQobnVsbCkudGhlbigodmFsdWVzKSA9PiB7CiAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzOwogICAgICAvLyBQcmlvciB0byB2ZXJzaW9ucyAwLjQuKiB0aGUga2V5YmluZGluZ3Mgd2VyZSBzdG9yZWQgYXMgc3RyaW5ncywgc28gd2UKICAgICAgLy8gbWlncmF0ZSB0aGVtIHRvIGFycmF5cyBpZiBuZWVkZWQuCiAgICAgIGxldCBtaWdyYXRlZCA9IGZhbHNlOwogICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLnZhbHVlcykpIHsKICAgICAgICBpZiAoIShrZXkgaW4gREVGQVVMVF9LRVlCSU5ESU5HUykgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHsKICAgICAgICAgIGNvbnRpbnVlOwogICAgICAgIH0KICAgICAgICBtaWdyYXRlZCA9IHRydWU7CiAgICAgICAgdGhpcy52YWx1ZXNba2V5XSA9IGtleWJpbmRpbmdTdHJpbmdUb0FycmF5KHZhbHVlKTsKICAgICAgfQogICAgICBpZiAobWlncmF0ZWQpIHsKICAgICAgICByZXR1cm4gdGhpcy5zYXZlKCk7CiAgICAgIH0KICAgIH0pOwogIH0KICBzYXZlKCkgewogICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5zZXQodGhpcy52YWx1ZXMpOwogIH0KICBnZXQoa2V5KSB7CiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07CiAgICBpZiAodmFsdWUgIT0gbnVsbCkgewogICAgICByZXR1cm4gdmFsdWU7CiAgICB9CiAgICByZXR1cm4gdGhpcy5kZWZhdWx0VmFsdWVzW2tleV07CiAgfQogIHNldChrZXksIHZhbHVlKSB7CiAgICB0aGlzLnZhbHVlc1trZXldID0gdmFsdWU7CiAgfQogIGNsZWFyKCkgewogICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5jbGVhcigpLnRoZW4oKCkgPT4gewogICAgICB0aGlzLnZhbHVlcyA9IHt9OwogICAgfSk7CiAgfQogIGdldEFsbCgpIHsKICAgIC8vIE1lcmdlIG9wdGlvbnMgZnJvbSBzdG9yYWdlIHdpdGggZGVmYXVsdHMuCiAgICByZXR1cm4geyAuLi50aGlzLmRlZmF1bHRWYWx1ZXMsIC4uLnRoaXMudmFsdWVzIH07CiAgfQp9Cgpjb25zdCBTVE9SQUdFX0tFWSA9ICd3ZWJTZWFyY2hOYXZpZ2F0b3InOwoKY2xhc3MgTG9jYWxTdG9yYWdlIHsKICBjb25zdHJ1Y3RvcihkZWZhdWx0VmFsdWVzKSB7CiAgICB0aGlzLnZhbHVlcyA9IHt9OwogICAgdGhpcy5kZWZhdWx0VmFsdWVzID0gZGVmYXVsdFZhbHVlczsKICAgIHRoaXMubG9hZCgpOwogIH0KCiAgbG9hZCgpIHsKICAgIGNvbnN0IHN0b3JlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTVE9SQUdFX0tFWSk7CgogICAgaWYgKHN0b3JlZERhdGEpIHsKICAgICAgdGhpcy52YWx1ZXMgPSBKU09OLnBhcnNlKHN0b3JlZERhdGEpOwogICAgfSBlbHNlIHsKICAgICAgdGhpcy52YWx1ZXMgPSB7IC4uLnRoaXMuZGVmYXVsdFZhbHVlcyB9OwogICAgICB0aGlzLnNhdmUoKTsKICAgIH0KICB9CgogIHNhdmUoKSB7CiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTVE9SQUdFX0tFWSwgSlNPTi5zdHJpbmdpZnkodGhpcy52YWx1ZXMpKTsKICB9CgogIGdldChrZXkpIHsKICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTsKICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7CiAgICAgIHJldHVybiB2YWx1ZTsKICAgIH0KICAgIHJldHVybiB0aGlzLmRlZmF1bHRWYWx1ZXNba2V5XTsKICB9CgogIHNldChrZXksIHZhbHVlKSB7CiAgICB0aGlzLnZhbHVlc1trZXldID0gdmFsdWU7CiAgICB0aGlzLnNhdmUoKTsKICB9CgogIGNsZWFyKCkgewogICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU1RPUkFHRV9LRVkpOwogICAgdGhpcy52YWx1ZXMgPSB7IC4uLnRoaXMuZGVmYXVsdFZhbHVlcyB9OwogIH0KCiAgZ2V0QWxsKCkgewogICAgLy8gTWVyZ2Ugb3B0aW9ucyBmcm9tIHN0b3JhZ2Ugd2l0aCBkZWZhdWx0cy4KICAgIHJldHVybiB7IC4uLnRoaXMuZGVmYXVsdFZhbHVlcywgLi4udGhpcy52YWx1ZXMgfTsKICB9Cn0KCmNvbnN0IGNyZWF0ZVN5bmNlZE9wdGlvbnMgPSAoKSA9PiB7CiAgaWYgKGdsb2JhbFRoaXMuSVNfVVNFUlNDUklQVCkgewogICAgY29uc29sZS5sb2coJ0NyZWF0ZSBMb2NhbFN0b3JhZ2Ugb3B0aW9ucycpOwogICAgcmV0dXJuIG5ldyBMb2NhbFN0b3JhZ2UoREVGQVVMVF9PUFRJT05TKTsKICB9CiAgcmV0dXJuIG5ldyBCcm93c2VyU3RvcmFnZShicm93c2VyLnN0b3JhZ2Uuc3luYywgREVGQVVMVF9PUFRJT05TKTsKfTsKCi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycwpjbGFzcyBFeHRlbnNpb25PcHRpb25zIHsKICBjb25zdHJ1Y3RvcigpIHsKICAgIHRoaXMuc3luYyA9IGNyZWF0ZVN5bmNlZE9wdGlvbnMoKTsKICAgIGlmIChnbG9iYWxUaGlzLklTX1VTRVJTQ1JJUFQpIHsKICAgICAgdGhpcy5sb2NhbCA9IGNyZWF0ZVN5bmNlZE9wdGlvbnMoKTsKICAgICAgcmV0dXJuOwogICAgfQogICAgdGhpcy5sb2NhbCA9IG5ldyBCcm93c2VyU3RvcmFnZShicm93c2VyLnN0b3JhZ2UubG9jYWwsIHsKICAgICAgbGFzdFF1ZXJ5VXJsOiBudWxsLAogICAgICBsYXN0Rm9jdXNlZEluZGV4OiAwLAogICAgfSk7CiAgfQoKICBsb2FkKCkgewogICAgcmV0dXJuIFByb21pc2UuYWxsKFt0aGlzLmxvY2FsLmxvYWQoKSwgdGhpcy5zeW5jLmxvYWQoKV0pOwogIH0KfQo=

`.replaceAll(NEWLINE, ''),
);

const OPTIONS_PAGE_JS = atob(
  `

Ly8gQmFzZWQgb24gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9leHRlbnNpb25zL29wdGlvbnNWMgoKLyogZ2xvYmFsIGtleWJpbmRpbmdTdHJpbmdUb0FycmF5LCBrZXliaW5kaW5nQXJyYXlUb1N0cmluZyAqLwovKiBnbG9iYWwgY3JlYXRlU3luY2VkT3B0aW9ucywgREVGQVVMVF9DU1MgKi8KCmNvbnN0IEdPT0dMRV9ET01BSU5TID0gWwogICdhZCcsICdhZScsICdhbCcsICdhbScsICdhcycsICdhdCcsICdheicsICdiYScsICdiZScsICdiZicsICdiZycsICdiaScsICdiaicsCiAgJ2JzJywgJ2J0JywgJ2J5JywgJ2NhJywgJ2NhdCcsICdjZCcsICdjZicsICdjZycsICdjaCcsICdjaScsICdjbCcsICdjbScsICdjbicsCiAgJ2NvLmFvJywgJ2NvLmJ3JywgJ2NvLmNrJywgJ2NvLmNyJywgJ2NvLmlkJywgJ2NvLmlsJywgJ2NvLmluJywgJ2NvLmpwJywKICAnY28ua2UnLCAnY28ua3InLCAnY28ubHMnLCAnY28ubWEnLCAnY28ubXonLCAnY28ubnonLCAnY28udGgnLCAnY28udHonLAogICdjby51ZycsICdjby51aycsICdjby51eicsICdjby52ZScsICdjby52aScsICdjby56YScsICdjby56bScsICdjby56dycsICdjb20nLAogICdjb20uYWYnLCAnY29tLmFnJywgJ2NvbS5haScsICdjb20uYXInLCAnY29tLmF1JywgJ2NvbS5iZCcsICdjb20uYmgnLAogICdjb20uYm4nLCAnY29tLmJvJywgJ2NvbS5icicsICdjb20uYnonLCAnY29tLmNvJywgJ2NvbS5jdScsICdjb20uY3knLAogICdjb20uZG8nLCAnY29tLmVjJywgJ2NvbS5lZycsICdjb20uZXQnLCAnY29tLmZqJywgJ2NvbS5naCcsICdjb20uZ2knLAogICdjb20uZ3QnLCAnY29tLmhrJywgJ2NvbS5qbScsICdjb20ua2gnLCAnY29tLmt3JywgJ2NvbS5sYicsICdjb20ubHknLAogICdjb20ubW0nLCAnY29tLm10JywgJ2NvbS5teCcsICdjb20ubXknLCAnY29tLm5hJywgJ2NvbS5uZicsICdjb20ubmcnLAogICdjb20ubmknLCAnY29tLm5wJywgJ2NvbS5vbScsICdjb20ucGEnLCAnY29tLnBlJywgJ2NvbS5wZycsICdjb20ucGgnLAogICdjb20ucGsnLCAnY29tLnByJywgJ2NvbS5weScsICdjb20ucWEnLCAnY29tLnNhJywgJ2NvbS5zYicsICdjb20uc2cnLAogICdjb20uc2wnLCAnY29tLnN2JywgJ2NvbS50aicsICdjb20udHInLCAnY29tLnR3JywgJ2NvbS51YScsICdjb20udXknLAogICdjb20udmMnLCAnY29tLnZuJywgJ2N2JywgJ2N6JywgJ2RlJywgJ2RqJywgJ2RrJywgJ2RtJywgJ2R6JywgJ2VlJywgJ2VzJywKICAnZmknLCAnZm0nLCAnZnInLCAnZ2EnLCAnZ2UnLCAnZ2cnLCAnZ2wnLCAnZ20nLCAnZ3AnLCAnZ3InLCAnZ3knLCAnaG4nLCAnaHInLAogICdodCcsICdodScsICdpZScsICdpbScsICdpcScsICdpcycsICdpdCcsICdqZScsICdqbycsICdrZycsICdraScsICdreicsICdsYScsCiAgJ2xpJywgJ2xrJywgJ2x0JywgJ2x1JywgJ2x2JywgJ21kJywgJ21lJywgJ21nJywgJ21rJywgJ21sJywgJ21uJywgJ21zJywgJ211JywKICAnbXYnLCAnbXcnLCAnbmUnLCAnbmwnLCAnbm8nLCAnbnInLCAnbnUnLCAncGwnLCAncG4nLCAncHMnLCAncHQnLCAncm8nLCAncnMnLAogICdydScsICdydycsICdzYycsICdzZScsICdzaCcsICdzaScsICdzaycsICdzbScsICdzbicsICdzbycsICdzcicsICdzdCcsICd0ZCcsCiAgJ3RnJywgJ3RrJywgJ3RsJywgJ3RtJywgJ3RuJywgJ3RvJywgJ3R0JywgJ3ZnJywgJ3Z1JywgJ3dzJywKXTsKCmNvbnN0IEFNQVpPTl9ET01BSU5TID0gWwogICdjYScsCiAgJ2NuJywKICAnY28uanAnLAogICdjby51aycsCiAgJ2NvbScsCiAgJ2NvbS5hdScsCiAgJ2NvbS5icicsCiAgJ2NvbS5teCcsCiAgJ2RlJywKICAnZXMnLAogICdmcicsCiAgJ2luJywKICAnaXQnLAogICdubCcsCl07Cgpjb25zdCBnZW5lcmF0ZVVSTFBhdHRlcm5zID0gKHByZWZpeCwgZG9tYWlucywgc3VmZml4KSA9PiB7CiAgY29uc3QgdXJscyA9IFtdOwogIGZvciAoY29uc3QgZG9tYWluIG9mIGRvbWFpbnMpIHsKICAgIHVybHMucHVzaChgJHtwcmVmaXh9LiR7ZG9tYWlufSR7c3VmZml4fWApOwogIH0KICByZXR1cm4gdXJsczsKfTsKCi8vIEF1dGhvcml6ZWQgdXJscyBmb3IgY29tcGF0aWJsZSBzZWFyY2ggZW5naW5lcwpjb25zdCBPUFRJT05BTF9QRVJNSVNTSU9OU19VUkxTID0gewogICdicmF2ZS1zZWFyY2gnOiBbJ2h0dHBzOi8vc2VhcmNoLmJyYXZlLmNvbS8qJ10sCiAgJ3N0YXJ0cGFnZSc6IFsKICAgIC8vIEl0IHVzZWQgdG8gYmUgJ2h0dHBzOi8vd3d3LnN0YXJ0cGFnZS5jb20vKi8qc2VhcmNoKicgYnV0IHdoZW4gcmVxdWVzdGluZwogICAgLy8gdGhpcyBVUkwgY2hyb21lIGFjdHVhbGx5IGdyYW50cyBwZXJtaXNzaW9uIHRvIHRoZSBVUkwgYmVsb3cuIFRoaXMKICAgIC8vIGRpc2NyZXBhbmN5IGNhdXNlcyB0aGUgb3B0aW9ucyBwYWdlIHRvIHRoaW5rIHRoYXQgd2UgZG9uJ3QgaGF2ZQogICAgLy8gcGVybWlzc2lvbiBmb3Igc3RhcnRwYWdlLgogICAgJ2h0dHBzOi8vd3d3LnN0YXJ0cGFnZS5jb20vKicsCiAgICAnaHR0cHM6Ly9zdGFydHBhZ2UuY29tLyonLAogIF0sCiAgJ3lvdXR1YmUnOiBbJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tLyonXSwKICAnZ29vZ2xlLXNjaG9sYXInOiBnZW5lcmF0ZVVSTFBhdHRlcm5zKAogICAgICAnaHR0cHM6Ly9zY2hvbGFyLmdvb2dsZScsCiAgICAgIEdPT0dMRV9ET01BSU5TLAogICAgICAnLyonLAogICksCiAgJ2dpdGh1Yic6IFsnaHR0cHM6Ly9naXRodWIuY29tLyonXSwKICAnYW1hem9uJzogZ2VuZXJhdGVVUkxQYXR0ZXJucygnaHR0cHM6Ly93d3cuYW1hem9uJywgQU1BWk9OX0RPTUFJTlMsICcvKicpLAogICdnaXRsYWInOiBbJ2h0dHBzOi8vZ2l0bGFiLmNvbS8qJ10sCiAgJ2N1c3RvbS1naXRsYWInOiBbJ2h0dHBzOi8vKi8qJ10sCn07CgpnbG9iYWxUaGlzLl9icm93c2VyX3VzZXJzY3JpcHRfcG9seWZpbGwucGVybWlzc2lvbnMuZ2V0QWxsID0gKCkgPT4gKHsKICBvcmlnaW5zOiBPYmplY3QudmFsdWVzKE9QVElPTkFMX1BFUk1JU1NJT05TX1VSTFMpLmZsYXQoKSwKfSkKCmNvbnN0IEtFWUJJTkRJTkdfVE9fRElWID0gewogIG5leHRLZXk6ICduZXh0LWtleScsCiAgcHJldmlvdXNLZXk6ICdwcmV2aW91cy1rZXknLAogIG5hdmlnYXRlUHJldmlvdXNSZXN1bHRQYWdlOiAnbmF2aWdhdGUtcHJldmlvdXMtcmVzdWx0LXBhZ2UnLAogIG5hdmlnYXRlTmV4dFJlc3VsdFBhZ2U6ICduYXZpZ2F0ZS1uZXh0LXJlc3VsdC1wYWdlJywKICBuYXZpZ2F0ZUtleTogJ25hdmlnYXRlLWtleScsCiAgbmF2aWdhdGVOZXdUYWJLZXk6ICduYXZpZ2F0ZS1uZXctdGFiLWtleScsCiAgbmF2aWdhdGVOZXdUYWJCYWNrZ3JvdW5kS2V5OiAnbmF2aWdhdGUtbmV3LXRhYi1iYWNrZ3JvdW5kLWtleScsCiAgbmF2aWdhdGVTZWFyY2hUYWI6ICduYXZpZ2F0ZS1zZWFyY2gtdGFiJywKICBuYXZpZ2F0ZUltYWdlc1RhYjogJ25hdmlnYXRlLWltYWdlcy10YWInLAogIG5hdmlnYXRlVmlkZW9zVGFiOiAnbmF2aWdhdGUtdmlkZW9zLXRhYicsCiAgbmF2aWdhdGVNYXBzVGFiOiAnbmF2aWdhdGUtbWFwcy10YWInLAogIG5hdmlnYXRlTmV3c1RhYjogJ25hdmlnYXRlLW5ld3MtdGFiJywKICBuYXZpZ2F0ZVNob3BwaW5nVGFiOiAnbmF2aWdhdGUtc2hvcHBpbmctdGFiJywKICBuYXZpZ2F0ZUJvb2tzVGFiOiAnbmF2aWdhdGUtYm9va3MtdGFiJywKICBuYXZpZ2F0ZUZsaWdodHNUYWI6ICduYXZpZ2F0ZS1mbGlnaHRzLXRhYicsCiAgbmF2aWdhdGVGaW5hbmNpYWxUYWI6ICduYXZpZ2F0ZS1maW5hbmNpYWwtdGFiJywKICBmb2N1c1NlYXJjaElucHV0OiAnZm9jdXMtc2VhcmNoLWlucHV0JywKICBuYXZpZ2F0ZVNob3dBbGw6ICduYXZpZ2F0ZS1zaG93LWFsbCcsCiAgbmF2aWdhdGVTaG93SG91cjogJ25hdmlnYXRlLXNob3ctaG91cicsCiAgbmF2aWdhdGVTaG93RGF5OiAnbmF2aWdhdGUtc2hvdy1kYXknLAogIG5hdmlnYXRlU2hvd1dlZWs6ICduYXZpZ2F0ZS1zaG93LXdlZWsnLAogIG5hdmlnYXRlU2hvd01vbnRoOiAnbmF2aWdhdGUtc2hvdy1tb250aCcsCiAgbmF2aWdhdGVTaG93WWVhcjogJ25hdmlnYXRlLXNob3cteWVhcicsCiAgdG9nZ2xlU29ydDogJ3RvZ2dsZS1zb3J0JywKICB0b2dnbGVWZXJiYXRpbVNlYXJjaDogJ3RvZ2dsZS12ZXJiYXRpbS1zZWFyY2gnLAogIHNob3dJbWFnZXNMYXJnZTogJ3Nob3ctaW1hZ2VzLWxhcmdlJywKICBzaG93SW1hZ2VzTWVkaXVtOiAnc2hvdy1pbWFnZXMtbWVkaXVtJywKICBzaG93SW1hZ2VzSWNvbjogJ3Nob3ctaW1hZ2VzLWljb24nLAogIGNvcHlVcmxLZXk6ICdjb3B5LXVybC1rZXknLAp9OwoKLyoqCiAqIEFkZCBvdGhlciBzZWFyY2ggZW5naW5lcyBkb21haW4gb24gdXNlciBpbnB1dAogKiBAcGFyYW0ge0VsZW1lbnR9IGNoZWNrYm94CiAqLwpjb25zdCBzZXRTZWFyY2hFbmdpbmVQZXJtaXNzaW9uXyA9IGFzeW5jIChjaGVja2JveCkgPT4gewogIGNvbnN0IHVybHMgPSBPUFRJT05BTF9QRVJNSVNTSU9OU19VUkxTW2NoZWNrYm94LmlkXTsKICBpZiAoY2hlY2tib3guY2hlY2tlZCkgewogICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlOwogICAgY29uc3QgZ3JhbnRlZCA9IGF3YWl0IGJyb3dzZXIucGVybWlzc2lvbnMucmVxdWVzdCh7b3JpZ2luczogdXJsc30pOwogICAgY2hlY2tib3guY2hlY2tlZCA9IGdyYW50ZWQ7CiAgfSBlbHNlIHsKICAgIGJyb3dzZXIucGVybWlzc2lvbnMucmVtb3ZlKHtvcmlnaW5zOiB1cmxzfSk7CiAgfQp9OwoKY2xhc3MgT3B0aW9uc1BhZ2VNYW5hZ2VyIHsKICBhc3luYyBpbml0KCkgewogICAgYXdhaXQgdGhpcy5sb2FkT3B0aW9ucygpOwogICAgY29uc3QgYnJhdmVTZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnJhdmUtc2VhcmNoJyk7CiAgICBicmF2ZVNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7CiAgICAgIHNldFNlYXJjaEVuZ2luZVBlcm1pc3Npb25fKGJyYXZlU2VhcmNoKTsKICAgIH0pOwogICAgY29uc3Qgc3RhcnRwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0cGFnZScpOwogICAgc3RhcnRwYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHsKICAgICAgc2V0U2VhcmNoRW5naW5lUGVybWlzc2lvbl8oc3RhcnRwYWdlKTsKICAgIH0pOwogICAgY29uc3QgeW91dHViZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5b3V0dWJlJyk7CiAgICB5b3V0dWJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHsKICAgICAgc2V0U2VhcmNoRW5naW5lUGVybWlzc2lvbl8oeW91dHViZSk7CiAgICB9KTsKICAgIGNvbnN0IGdvb2dsZVNjaG9sYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZ2xlLXNjaG9sYXInKTsKICAgIGdvb2dsZVNjaG9sYXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gewogICAgICBzZXRTZWFyY2hFbmdpbmVQZXJtaXNzaW9uXyhnb29nbGVTY2hvbGFyKTsKICAgIH0pOwogICAgY29uc3QgZ2l0aHViID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpdGh1YicpOwogICAgZ2l0aHViLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHsKICAgICAgc2V0U2VhcmNoRW5naW5lUGVybWlzc2lvbl8oZ2l0aHViKTsKICAgIH0pOwogICAgY29uc3QgYW1hem9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FtYXpvbicpOwogICAgYW1hem9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHsKICAgICAgc2V0U2VhcmNoRW5naW5lUGVybWlzc2lvbl8oYW1hem9uKTsKICAgIH0pOwogICAgY29uc3QgZ2l0bGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpdGxhYicpOwogICAgZ2l0bGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHsKICAgICAgc2V0U2VhcmNoRW5naW5lUGVybWlzc2lvbl8oZ2l0bGFiKTsKICAgIH0pOwogICAgY29uc3QgY3VzdG9tR2l0bGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1naXRsYWInKTsKICAgIGN1c3RvbUdpdGxhYi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7CiAgICAgIHNldFNlYXJjaEVuZ2luZVBlcm1pc3Npb25fKGN1c3RvbUdpdGxhYik7CiAgICB9KTsKICAgIC8vIE5PVEU6IHRoaXMuc2F2ZU9wdGlvbnMgYW5kIHRoaXMucmVzZXRUb0RlZmF1bHRzIGNhbm5vdCBiZSBwYXNzZWQgZGlyZWN0bHkKICAgIC8vIG9yIG90aGVyd2lzZSBgdGhpc2Agd29uJ3QgYmUgYm91bmQgdG8gdGhlIG9iamVjdC4KICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7CiAgICAgIHRoaXMuc2F2ZU9wdGlvbnMoKTsKICAgIH0pOwogICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7CiAgICAgIHRoaXMucmVzZXRUb0RlZmF1bHRzKCk7CiAgICB9KTsKICB9CgogIC8vIFNhdmVzIG9wdGlvbnMgZnJvbSB0aGUgRE9NIHRvIGJyb3dzZXIuc3RvcmFnZS5zeW5jLgogIGFzeW5jIHNhdmVPcHRpb25zKCkgewogICAgY29uc3QgZ2V0T3B0ID0gKGtleSkgPT4gewogICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldChrZXkpOwogICAgfTsKICAgIGNvbnN0IHNldE9wdCA9IChrZXksIHZhbHVlKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdTZXQnLCBrZXksIHZhbHVlLCB0aGlzLm9wdGlvbnMuc3RvcmFnZSwgdGhpcy5vcHRpb25zKTsKICAgICAgdGhpcy5vcHRpb25zLnNldChrZXksIHZhbHVlKTsKICAgIH07CiAgICAvLyBIYW5kbGUgbm9uLWtleWJpbmRpbmdzIHNldHRpbmdzIGZpcnN0CiAgICBzZXRPcHQoCiAgICAgICAgJ3dyYXBOYXZpZ2F0aW9uJywKICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcC1uYXZpZ2F0aW9uJykuY2hlY2tlZCwKICAgICk7CiAgICBzZXRPcHQoCiAgICAgICAgJ2F1dG9TZWxlY3RGaXJzdCcsCiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG8tc2VsZWN0LWZpcnN0JykuY2hlY2tlZCwKICAgICk7CiAgICBzZXRPcHQoJ2hpZGVPdXRsaW5lJywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGUtb3V0bGluZScpLmNoZWNrZWQpOwogICAgc2V0T3B0KCdkZWxheScsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxheScpLnZhbHVlKTsKICAgIHNldE9wdCgKICAgICAgICAnZ29vZ2xlSW5jbHVkZUNhcmRzJywKICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZ2xlLWluY2x1ZGUtY2FyZHMnKS5jaGVja2VkLAogICAgKTsKICAgIHNldE9wdCgKICAgICAgICAnZ29vZ2xlSW5jbHVkZU1lbWV4JywKICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZ2xlLWluY2x1ZGUtbWVtZXgnKS5jaGVja2VkLAogICAgKTsKICAgIHNldE9wdCgKICAgICAgICAnZ29vZ2xlSW5jbHVkZVBsYWNlcycsCiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2dsZS1pbmNsdWRlLXBsYWNlcycpLmNoZWNrZWQsCiAgICApOwogICAgLy8gSGFuZGxlIGtleWJpbmRpbmcgb3B0aW9ucwogICAgZm9yIChjb25zdCBba2V5LCBvcHROYW1lXSBvZiBPYmplY3QuZW50cmllcyhLRVlCSU5ESU5HX1RPX0RJVikpIHsKICAgICAgLy8gS2V5YmluZGluZ3MgYXJlIHN0b3JlZCBpbnRlcm5hbGx5IGFzIGFycmF5cywgYnV0IGVkaXRlZCBieSB1c2VycyBhcwogICAgICAvLyBjb21tYW4gZGVsaW1pdGVkIHN0cmluZ3MuCiAgICAgIHNldE9wdCgKICAgICAgICAgIGtleSwKICAgICAgICAgIGtleWJpbmRpbmdTdHJpbmdUb0FycmF5KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdE5hbWUpLnZhbHVlKSwKICAgICAgKTsKICAgIH0KICAgIGNvbnN0IGN1c3RvbUNTUyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tY3NzLXRleHRhcmVhJykudmFsdWU7CiAgICBpZiAoZ2V0T3B0KCdjdXN0b21DU1MnKSAhPT0gREVGQVVMVF9DU1MgfHwgY3VzdG9tQ1NTICE9PSBERUZBVUxUX0NTUykgewogICAgICBpZiAoY3VzdG9tQ1NTLnRyaW0oKSkgewogICAgICAgIHNldE9wdCgnY3VzdG9tQ1NTJywgY3VzdG9tQ1NTKTsKICAgICAgfSBlbHNlIHsKICAgICAgICBzZXRPcHQoJ2N1c3RvbUNTUycsIERFRkFVTFRfQ1NTKTsKICAgICAgfQogICAgfQogICAgc2V0T3B0KAogICAgICAgICdzaW11bGF0ZU1pZGRsZUNsaWNrJywKICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2ltdWxhdGUtbWlkZGxlLWNsaWNrJykuY2hlY2tlZCwKICAgICk7CiAgICBjb25zdCBnaXRsYWJVUkxSZWdleCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tZ2l0bGFiLXVybCcpLnZhbHVlOwogICAgdHJ5IHsKICAgICAgbmV3IFJlZ0V4cChnaXRsYWJVUkxSZWdleCk7CiAgICAgIHNldE9wdCgKICAgICAgICAgICdjdXN0b21HaXRsYWJVcmwnLAogICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1naXRsYWItdXJsJykudmFsdWUsCiAgICAgICk7CiAgICB9IGNhdGNoIChlKSB7CiAgICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXMnKTsKICAgICAgc3RhdHVzLnRleHRDb250ZW50ID0gYEludmFsaWQgZ2l0bGFiIFVSTCByZWdleDogJHtlLm1lc3NhZ2V9YDsKICAgICAgcmV0dXJuOwogICAgfQogICAgdHJ5IHsKICAgICAgYXdhaXQgdGhpcy5vcHRpb25zLnNhdmUoKTsKICAgICAgdGhpcy5mbGFzaE1lc3NhZ2UoJ09wdGlvbnMgc2F2ZWQnKTsKICAgIH0gY2F0Y2ggKGUpIHsKICAgICAgdGhpcy5mbGFzaE1lc3NhZ2UoJ0Vycm9yIHdoZW4gc2F2aW5nIG9wdGlvbnMnKTsKICAgIH0KICB9CgogIGxvYWRTZWFyY2hFbmdpbmVQZXJtaXNzaW9uc18ocGVybWlzc2lvbnMpIHsKICAgIC8vIENoZWNrIHdoYXQgVVJMcyB3ZSBoYXZlIHBlcm1pc3Npb24gZm9yLgogICAgY29uc3QgYnJhdmVTZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnJhdmUtc2VhcmNoJyk7CiAgICBicmF2ZVNlYXJjaC5jaGVja2VkID0gT1BUSU9OQUxfUEVSTUlTU0lPTlNfVVJMU1snYnJhdmUtc2VhcmNoJ10uZXZlcnkoCiAgICAgICAgKHVybCkgPT4gewogICAgICAgICAgcmV0dXJuIHBlcm1pc3Npb25zLm9yaWdpbnMuaW5jbHVkZXModXJsKTsKICAgICAgICB9LAogICAgKTsKICAgIGNvbnN0IHN0YXJ0cGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydHBhZ2UnKTsKICAgIHN0YXJ0cGFnZS5jaGVja2VkID0gT1BUSU9OQUxfUEVSTUlTU0lPTlNfVVJMU1snc3RhcnRwYWdlJ10uZXZlcnkoKHVybCkgPT4gewogICAgICByZXR1cm4gcGVybWlzc2lvbnMub3JpZ2lucy5pbmNsdWRlcyh1cmwpOwogICAgfSk7CiAgICBjb25zdCB5b3V0dWJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3lvdXR1YmUnKTsKICAgIHlvdXR1YmUuY2hlY2tlZCA9IE9QVElPTkFMX1BFUk1JU1NJT05TX1VSTFNbJ3lvdXR1YmUnXS5ldmVyeSgodXJsKSA9PiB7CiAgICAgIHJldHVybiBwZXJtaXNzaW9ucy5vcmlnaW5zLmluY2x1ZGVzKHVybCk7CiAgICB9KTsKICAgIGNvbnN0IGdvb2dsZVNjaG9sYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZ2xlLXNjaG9sYXInKTsKICAgIGdvb2dsZVNjaG9sYXIuY2hlY2tlZCA9IE9QVElPTkFMX1BFUk1JU1NJT05TX1VSTFNbJ2dvb2dsZS1zY2hvbGFyJ10uZXZlcnkoCiAgICAgICAgKHVybCkgPT4gewogICAgICAgICAgcmV0dXJuIHBlcm1pc3Npb25zLm9yaWdpbnMuaW5jbHVkZXModXJsKTsKICAgICAgICB9LAogICAgKTsKICAgIGNvbnN0IGFtYXpvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbWF6b24nKTsKICAgIGFtYXpvbi5jaGVja2VkID0gT1BUSU9OQUxfUEVSTUlTU0lPTlNfVVJMU1snYW1hem9uJ10uZXZlcnkoKHVybCkgPT4gewogICAgICByZXR1cm4gcGVybWlzc2lvbnMub3JpZ2lucy5pbmNsdWRlcyh1cmwpOwogICAgfSk7CiAgICBjb25zdCBnaXRodWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2l0aHViJyk7CiAgICBnaXRodWIuY2hlY2tlZCA9IE9QVElPTkFMX1BFUk1JU1NJT05TX1VSTFNbJ2dpdGh1YiddLmV2ZXJ5KCh1cmwpID0+IHsKICAgICAgcmV0dXJuIHBlcm1pc3Npb25zLm9yaWdpbnMuaW5jbHVkZXModXJsKTsKICAgIH0pOwogICAgY29uc3QgZ2l0bGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpdGxhYicpOwogICAgZ2l0bGFiLmNoZWNrZWQgPSBPUFRJT05BTF9QRVJNSVNTSU9OU19VUkxTWydnaXRsYWInXS5ldmVyeSgodXJsKSA9PiB7CiAgICAgIHJldHVybiBwZXJtaXNzaW9ucy5vcmlnaW5zLmluY2x1ZGVzKHVybCk7CiAgICB9KTsKICAgIGNvbnN0IGN1c3RvbUdpdGxhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tZ2l0bGFiJyk7CiAgICBjdXN0b21HaXRsYWIuY2hlY2tlZCA9IE9QVElPTkFMX1BFUk1JU1NJT05TX1VSTFNbJ2N1c3RvbS1naXRsYWInXS5ldmVyeSgKICAgICAgICAodXJsKSA9PiB7CiAgICAgICAgICByZXR1cm4gcGVybWlzc2lvbnMub3JpZ2lucy5pbmNsdWRlcyh1cmwpOwogICAgICAgIH0sCiAgICApOwogIH0KCiAgLy8gTG9hZCBvcHRpb25zIGZyb20gYnJvd3Nlci5zdG9yYWdlLnN5bmMgdG8gdGhlIERPTS4KICBhc3luYyBsb2FkT3B0aW9ucygpIHsKICAgIHRoaXMub3B0aW9ucyA9IGNyZWF0ZVN5bmNlZE9wdGlvbnMoKTsKICAgIGNvbnN0IFssIHBlcm1pc3Npb25zXSA9IGF3YWl0IFByb21pc2UuYWxsKFsKICAgICAgdGhpcy5vcHRpb25zLmxvYWQoKSwKICAgICAgYnJvd3Nlci5wZXJtaXNzaW9ucy5nZXRBbGwoKSwKICAgIF0pOwogICAgdGhpcy5sb2FkU2VhcmNoRW5naW5lUGVybWlzc2lvbnNfKHBlcm1pc3Npb25zKTsKICAgIGNvbnN0IGdldE9wdCA9IChrZXkpID0+IHsKICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXQoa2V5KTsKICAgIH07CiAgICAvLyBIYW5kbGUgY2hlY2tzIHNlcGFyYXRlbHkuCiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcC1uYXZpZ2F0aW9uJykuY2hlY2tlZCA9CiAgICAgIGdldE9wdCgnd3JhcE5hdmlnYXRpb24nKTsKICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvLXNlbGVjdC1maXJzdCcpLmNoZWNrZWQgPQogICAgICBnZXRPcHQoJ2F1dG9TZWxlY3RGaXJzdCcpOwogICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGUtb3V0bGluZScpLmNoZWNrZWQgPSBnZXRPcHQoJ2hpZGVPdXRsaW5lJyk7CiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsYXknKS52YWx1ZSA9IGdldE9wdCgnZGVsYXknKTsKICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tZ2l0bGFiLXVybCcpLnZhbHVlID0KICAgICAgZ2V0T3B0KCdjdXN0b21HaXRsYWJVcmwnKTsKICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb29nbGUtaW5jbHVkZS1jYXJkcycpLmNoZWNrZWQgPQogICAgICBnZXRPcHQoJ2dvb2dsZUluY2x1ZGVDYXJkcycpOwogICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2dsZS1pbmNsdWRlLW1lbWV4JykuY2hlY2tlZCA9CiAgICAgIGdldE9wdCgnZ29vZ2xlSW5jbHVkZU1lbWV4Jyk7CiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZ2xlLWluY2x1ZGUtcGxhY2VzJykuY2hlY2tlZCA9IGdldE9wdCgKICAgICAgICAnZ29vZ2xlSW5jbHVkZVBsYWNlcycsCiAgICApOwogICAgLy8gUmVzdG9yZSBvcHRpb25zIGZyb20gZGl2cy4KICAgIGZvciAoY29uc3QgW2tleSwgb3B0TmFtZV0gb2YgT2JqZWN0LmVudHJpZXMoS0VZQklORElOR19UT19ESVYpKSB7CiAgICAgIC8vIEtleWJpbmRpbmdzIGFyZSBzdG9yZWQgaW50ZXJuYWxseSBhcyBhcnJheXMsIGJ1dCBlZGl0ZWQgYnkgdXNlcnMgYXMKICAgICAgLy8gY29tbWFuIGRlbGltaXRlZCBzdHJpbmdzLgogICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHROYW1lKS52YWx1ZSA9IGtleWJpbmRpbmdBcnJheVRvU3RyaW5nKAogICAgICAgICAgZ2V0T3B0KGtleSksCiAgICAgICk7CiAgICB9CiAgICAvLyBMb2FkIGN1c3RvbSBDU1MKICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tY3NzLXRleHRhcmVhJykudmFsdWUgPSBnZXRPcHQoJ2N1c3RvbUNTUycpOwogICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpbXVsYXRlLW1pZGRsZS1jbGljaycpLmNoZWNrZWQgPSBnZXRPcHQoCiAgICAgICAgJ3NpbXVsYXRlTWlkZGxlQ2xpY2snLAogICAgKTsKICB9CgogIGFzeW5jIHJlc2V0VG9EZWZhdWx0cygpIHsKICAgIHRyeSB7CiAgICAgIGF3YWl0IHRoaXMub3B0aW9ucy5jbGVhcigpOwogICAgICBhd2FpdCB0aGlzLmxvYWRPcHRpb25zKCk7CiAgICAgIHRoaXMuZmxhc2hNZXNzYWdlKCdPcHRpb25zIHNldCB0byBkZWZhdWx0cycpOwogICAgfSBjYXRjaCAoZSkgewogICAgICB0aGlzLmZsYXNoTWVzc2FnZSgnRXJyb3Igd2hlbiBzZXR0aW5nIG9wdGlvbnMgdG8gZGVmYXVsdHMnKTsKICAgIH0KICB9CgogIGZsYXNoTWVzc2FnZShtZXNzYWdlKSB7CiAgICAvLyBVcGRhdGUgc3RhdHVzIHRvIGxldCB1c2VyIGtub3cuCiAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzJyk7CiAgICBzdGF0dXMudGV4dENvbnRlbnQgPSBtZXNzYWdlOwogICAgc2V0VGltZW91dCgoKSA9PiB7CiAgICAgIHN0YXR1cy50ZXh0Q29udGVudCA9ICcnOwogICAgfSwgMzAwMCk7CiAgfQp9Cgpjb25zdCBtYW5hZ2VyID0gbmV3IE9wdGlvbnNQYWdlTWFuYWdlcigpOwovLyBOT1RFOiBtYW5hZ2VyLmluaXQgY2Fubm90IGJlIHBhc3NlZCBkaXJlY3RseSBvciBvdGhlcndpc2UgYHRoaXNgIHdvbid0IGJlCi8vIGJvdW5kIHRvIHRoZSBvYmplY3QuCmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7CiAgbWFuYWdlci5pbml0KCk7Cn0pOwo=

`.replaceAll(NEWLINE, ''),
);

const BROWSER_POLYFILL_JS = atob(
  `

Z2xvYmFsVGhpcy5JU19VU0VSU0NSSVBUID0gdHJ1ZTsKCmNvbnN0IFVTRV9HTSA9IGZhbHNlOwpjb25zdCBQUkVGSVggPSAndXNlcnNjcmlwdC1wb2x5ZmlsbCc7CgpnbG9iYWxUaGlzLl9sb2NhbFN0b3JhZ2VfYnJvd3Nlcl9wb2x5ZmlsbCA9IHsKICBnZXQ6IGFzeW5jICguLi5hcmdzKSA9PiB7CiAgICBhcmdzID0gYXJncy5maWx0ZXIoQm9vbGVhbik7CiAgICBkZWJ1Z2dlcjsKICAgIGNvbnNvbGUubG9nKCdbbG9jYWxTdG9yYWdlXSBHZXQ6ICcsIC4uLmFyZ3MpOwogICAgY29uc3Qgb3V0ID0ge307CiAgICBmb3IgKGNvbnN0IGsgb2YgYXJncykgewogICAgICBvdXRba10gPSBVU0VfR00gPyBHTV9nZXRWYWx1ZShrKSA6IGxvY2FsU3RvcmFnZVtgJHtQUkVGSVh9XyR7a31gXTsKICAgIH0KICAgIHJldHVybiBvdXQ7CiAgfSwKICBzZXQ6IGFzeW5jICguLi5hcmdzKSA9PiB7CiAgICBkZWJ1Z2dlcjsKICAgIGNvbnNvbGUubG9nKCdbbG9jYWxTdG9yYWdlXSBTZXQ6ICcsIC4uLmFyZ3MpOwogIH0sCiAgY2xlYXI6IGFzeW5jICgpID0+IHsKICAgIGRlYnVnZ2VyOwogICAgY29uc29sZS5sb2coJ1tsb2NhbFN0b3JhZ2VdIENsZWFyJyk7CiAgfSwKfTsKCmdsb2JhbFRoaXMuX2Jyb3dzZXJfdXNlcnNjcmlwdF9wb2x5ZmlsbCA9IHsKICBydW50aW1lOiB7CiAgICBzZW5kTWVzc2FnZTogKG1zZykgPT4gewogICAgICBpZiAobXNnLnR5cGUgPT09ICd0YWJzQ3JlYXRlJykgewogICAgICAgIHdpbmRvdy5vcGVuKG1zZy5vcHRpb25zLnVybCwgJ19ibGFuaycpOwogICAgICB9CiAgICB9LAogICAgaWQ6ICcwOTM4ODlmMy00M2JlLTQ1ZTMtYmM1YS1lMjU3ZTc1YjQ2NmQnLAogIH0sCiAgc3RvcmFnZToge3N5bmM6IGdsb2JhbFRoaXMuX2xvY2FsU3RvcmFnZV9icm93c2VyX3BvbHlmaWxsLCBsb2NhbDogZ2xvYmFsVGhpcy5fbG9jYWxTdG9yYWdlX2Jyb3dzZXJfcG9seWZpbGx9LAogIHBlcm1pc3Npb25zOiB7CiAgICByZW1vdmU6ICgpID0+IHt9LAogICAgYWRkOiAoKSA9PiB7fSwKICAgIHJlcXVlc3Q6ICgpID0+IHt9LAogICAgZ2V0QWxsOiAoKSA9PiAoe30pLAogIH0sCn07CmNvbnNvbGUubG9nKGdsb2JhbFRoaXMuYnJvd3NlciwgX2Jyb3dzZXJfdXNlcnNjcmlwdF9wb2x5ZmlsbCk7Ck9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge2Jyb3dzZXI6IGdsb2JhbFRoaXMuX2Jyb3dzZXJfdXNlcnNjcmlwdF9wb2x5ZmlsbCwgY2hyb21lOiBnbG9iYWxUaGlzLl9icm93c2VyX3VzZXJzY3JpcHRfcG9seWZpbGx9KTsKKGZ1bmN0aW9uKGEsYil7aWYoImZ1bmN0aW9uIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoIndlYmV4dGVuc2lvbi1wb2x5ZmlsbCIsWyJtb2R1bGUiXSxiKTtlbHNlIGlmKCJ1bmRlZmluZWQiIT10eXBlb2YgZXhwb3J0cyliKG1vZHVsZSk7ZWxzZXt2YXIgYz17ZXhwb3J0czp7fX07YihjKSxhLmJyb3dzZXI9Yy5leHBvcnRzfX0pKCJ1bmRlZmluZWQiPT10eXBlb2YgZ2xvYmFsVGhpcz8idW5kZWZpbmVkIj09dHlwZW9mIHNlbGY/dGhpczpzZWxmOmdsb2JhbFRoaXMsZnVuY3Rpb24oYSl7InVzZSBzdHJpY3QiO2lmKCEoZ2xvYmFsVGhpcy5jaHJvbWUmJmdsb2JhbFRoaXMuY2hyb21lLnJ1bnRpbWUmJmdsb2JhbFRoaXMuY2hyb21lLnJ1bnRpbWUuaWQpKXRocm93IG5ldyBFcnJvcigiVGhpcyBzY3JpcHQgc2hvdWxkIG9ubHkgYmUgbG9hZGVkIGluIGEgYnJvd3NlciBleHRlbnNpb24uIik7aWYoIShnbG9iYWxUaGlzLmJyb3dzZXImJmdsb2JhbFRoaXMuYnJvd3Nlci5ydW50aW1lJiZnbG9iYWxUaGlzLmJyb3dzZXIucnVudGltZS5pZCkpe2EuZXhwb3J0cz0oYT0+e2NvbnN0IGI9e2FsYXJtczp7Y2xlYXI6e21pbkFyZ3M6MCxtYXhBcmdzOjF9LGNsZWFyQWxsOnttaW5BcmdzOjAsbWF4QXJnczowfSxnZXQ6e21pbkFyZ3M6MCxtYXhBcmdzOjF9LGdldEFsbDp7bWluQXJnczowLG1heEFyZ3M6MH19LGJvb2ttYXJrczp7Y3JlYXRlOnttaW5BcmdzOjEsbWF4QXJnczoxfSxnZXQ6e21pbkFyZ3M6MSxtYXhBcmdzOjF9LGdldENoaWxkcmVuOnttaW5BcmdzOjEsbWF4QXJnczoxfSxnZXRSZWNlbnQ6e21pbkFyZ3M6MSxtYXhBcmdzOjF9LGdldFN1YlRyZWU6e21pbkFyZ3M6MSxtYXhBcmdzOjF9LGdldFRyZWU6e21pbkFyZ3M6MCxtYXhBcmdzOjB9LG1vdmU6e21pbkFyZ3M6MixtYXhBcmdzOjJ9LHJlbW92ZTp7bWluQXJnczoxLG1heEFyZ3M6MX0scmVtb3ZlVHJlZTp7bWluQXJnczoxLG1heEFyZ3M6MX0sc2VhcmNoOnttaW5BcmdzOjEsbWF4QXJnczoxfSx1cGRhdGU6e21pbkFyZ3M6MixtYXhBcmdzOjJ9fSxicm93c2VyQWN0aW9uOntkaXNhYmxlOnttaW5BcmdzOjAsbWF4QXJnczoxLGZhbGxiYWNrVG9Ob0NhbGxiYWNrOiEwfSxlbmFibGU6e21pbkFyZ3M6MCxtYXhBcmdzOjEsZmFsbGJhY2tUb05vQ2FsbGJhY2s6ITB9LGdldEJhZGdlQmFja2dyb3VuZENvbG9yOnttaW5BcmdzOjEsbWF4QXJnczoxfSxnZXRCYWRnZVRleHQ6e21pbkFyZ3M6MSxtYXhBcmdzOjF9LGdldFBvcHVwOnttaW5BcmdzOjEsbWF4QXJnczoxfSxnZXRUaXRsZTp7bWluQXJnczoxLG1heEFyZ3M6MX0sb3BlblBvcHVwOnttaW5BcmdzOjAsbWF4QXJnczowfSxzZXRCYWRnZUJhY2tncm91bmRDb2xvcjp7bWluQXJnczoxLG1heEFyZ3M6MSxmYWxsYmFja1RvTm9DYWxsYmFjazohMH0sc2V0QmFkZ2VUZXh0OnttaW5BcmdzOjEsbWF4QXJnczoxLGZhbGxiYWNrVG9Ob0NhbGxiYWNrOiEwfSxzZXRJY29uOnttaW5BcmdzOjEsbWF4QXJnczoxfSxzZXRQb3B1cDp7bWluQXJnczoxLG1heEFyZ3M6MSxmYWxsYmFja1RvTm9DYWxsYmFjazohMH0sc2V0VGl0bGU6e21pbkFyZ3M6MSxtYXhBcmdzOjEsZmFsbGJhY2tUb05vQ2FsbGJhY2s6ITB9fSxicm93c2luZ0RhdGE6e3JlbW92ZTp7bWluQXJnczoyLG1heEFyZ3M6Mn0scmVtb3ZlQ2FjaGU6e21pbkFyZ3M6MSxtYXhBcmdzOjF9LHJlbW92ZUNvb2tpZXM6e21pbkFyZ3M6MSxtYXhBcmdzOjF9LHJlbW92ZURvd25sb2Fkczp7bWluQXJnczoxLG1heEFyZ3M6MX0scmVtb3ZlRm9ybURhdGE6e21pbkFyZ3M6MSxtYXhBcmdzOjF9LHJlbW92ZUhpc3Rvcnk6e21pbkFyZ3M6MSxtYXhBcmdzOjF9LHJlbW92ZUxvY2FsU3RvcmFnZTp7bWluQXJnczoxLG1heEFyZ3M6MX0scmVtb3ZlUGFzc3dvcmRzOnttaW5BcmdzOjEsbWF4QXJnczoxfSxyZW1vdmVQbHVnaW5EYXRhOnttaW5BcmdzOjEsbWF4QXJnczoxfSxzZXR0aW5nczp7bWluQXJnczowLG1heEFyZ3M6MH19LGNvbW1hbmRzOntnZXRBbGw6e21pbkFyZ3M6MCxtYXhBcmdzOjB9fSxjb250ZXh0TWVudXM6e3JlbW92ZTp7bWluQXJnczoxLG1heEFyZ3M6MX0scmVtb3ZlQWxsOnttaW5BcmdzOjAsbWF4QXJnczowfSx1cGRhdGU6e21pbkFyZ3M6MixtYXhBcmdzOjJ9fSxjb29raWVzOntnZXQ6e21pbkFyZ3M6MSxtYXhBcmdzOjF9LGdldEFsbDp7bWluQXJnczoxLG1heEFyZ3M6MX0sZ2V0QWxsQ29va2llU3RvcmVzOnttaW5BcmdzOjAsbWF4QXJnczowfSxyZW1vdmU6e21pbkFyZ3M6MSxtYXhBcmdzOjF9LHNldDp7bWluQXJnczoxLG1heEFyZ3M6MX19LGRldnRvb2xzOntpbnNwZWN0ZWRXaW5kb3c6e2V2YWw6e21pbkFyZ3M6MSxtYXhBcmdzOjIsc2luZ2xlQ2FsbGJhY2tBcmc6ITF9fSxwYW5lbHM6e2NyZWF0ZTp7bWluQXJnczozLG1heEFyZ3M6MyxzaW5nbGVDYWxsYmFja0FyZzohMH0sZWxlbWVudHM6e2NyZWF0ZVNpZGViYXJQYW5lOnttaW5BcmdzOjEsbWF4QXJnczoxfX19fSxkb3dubG9hZHM6e2NhbmNlbDp7bWluQXJnczoxLG1heEFyZ3M6MX0sZG93bmxvYWQ6e21pbkFyZ3M6MSxtYXhBcmdzOjF9LGVyYXNlOnttaW5BcmdzOjEsbWF4QXJnczoxfSxnZXRGaWxlSWNvbjp7bWluQXJnczoxLG1heEFyZ3M6Mn0sb3Blbjp7bWluQXJnczoxLG1heEFyZ3M6MSxmYWxsYmFja1RvTm9DYWxsYmFjazohMH0scGF1c2U6e21pbkFyZ3M6MSxtYXhBcmdzOjF9LHJlbW92ZUZpbGU6e21pbkFyZ3M6MSxtYXhBcmdzOjF9LHJlc3VtZTp7bWluQXJnczoxLG1heEFyZ3M6MX0sc2VhcmNoOnttaW5BcmdzOjEsbWF4QXJnczoxfSxzaG93OnttaW5BcmdzOjEsbWF4QXJnczoxLGZhbGxiYWNrVG9Ob0NhbGxiYWNrOiEwfX0sZXh0ZW5zaW9uOntpc0FsbG93ZWRGaWxlU2NoZW1lQWNjZXNzOnttaW5BcmdzOjAsbWF4QXJnczowfSxpc0FsbG93ZWRJbmNvZ25pdG9BY2Nlc3M6e21pbkFyZ3M6MCxtYXhBcmdzOjB9fSxoaXN0b3J5OnthZGRVcmw6e21pbkFyZ3M6MSxtYXhBcmdzOjF9LGRlbGV0ZUFsbDp7bWluQXJnczowLG1heEFyZ3M6MH0sZGVsZXRlUmFuZ2U6e21pbkFyZ3M6MSxtYXhBcmdzOjF9LGRlbGV0ZVVybDp7bWluQXJnczoxLG1heEFyZ3M6MX0sZ2V0VmlzaXRzOnttaW5BcmdzOjEsbWF4QXJnczoxfSxzZWFyY2g6e21pbkFyZ3M6MSxtYXhBcmdzOjF9fSxpMThuOntkZXRlY3RMYW5ndWFnZTp7bWluQXJnczoxLG1heEFyZ3M6MX0sZ2V0QWNjZXB0TGFuZ3VhZ2VzOnttaW5BcmdzOjAsbWF4QXJnczowfX0saWRlbnRpdHk6e2xhdW5jaFdlYkF1dGhGbG93OnttaW5BcmdzOjEsbWF4QXJnczoxfX0saWRsZTp7cXVlcnlTdGF0ZTp7bWluQXJnczoxLG1heEFyZ3M6MX19LG1hbmFnZW1lbnQ6e2dldDp7bWluQXJnczoxLG1heEFyZ3M6MX0sZ2V0QWxsOnttaW5BcmdzOjAsbWF4QXJnczowfSxnZXRTZWxmOnttaW5BcmdzOjAsbWF4QXJnczowfSxzZXRFbmFibGVkOnttaW5BcmdzOjIsbWF4QXJnczoyfSx1bmluc3RhbGxTZWxmOnttaW5BcmdzOjAsbWF4QXJnczoxfX0sbm90aWZpY2F0aW9uczp7Y2xlYXI6e21pbkFyZ3M6MSxtYXhBcmdzOjF9LGNyZWF0ZTp7bWluQXJnczoxLG1heEFyZ3M6Mn0sZ2V0QWxsOnttaW5BcmdzOjAsbWF4QXJnczowfSxnZXRQZXJtaXNzaW9uTGV2ZWw6e21pbkFyZ3M6MCxtYXhBcmdzOjB9LHVwZGF0ZTp7bWluQXJnczoyLG1heEFyZ3M6Mn19LHBhZ2VBY3Rpb246e2dldFBvcHVwOnttaW5BcmdzOjEsbWF4QXJnczoxfSxnZXRUaXRsZTp7bWluQXJnczoxLG1heEFyZ3M6MX0saGlkZTp7bWluQXJnczoxLG1heEFyZ3M6MSxmYWxsYmFja1RvTm9DYWxsYmFjazohMH0sc2V0SWNvbjp7bWluQXJnczoxLG1heEFyZ3M6MX0sc2V0UG9wdXA6e21pbkFyZ3M6MSxtYXhBcmdzOjEsZmFsbGJhY2tUb05vQ2FsbGJhY2s6ITB9LHNldFRpdGxlOnttaW5BcmdzOjEsbWF4QXJnczoxLGZhbGxiYWNrVG9Ob0NhbGxiYWNrOiEwfSxzaG93OnttaW5BcmdzOjEsbWF4QXJnczoxLGZhbGxiYWNrVG9Ob0NhbGxiYWNrOiEwfX0scGVybWlzc2lvbnM6e2NvbnRhaW5zOnttaW5BcmdzOjEsbWF4QXJnczoxfSxnZXRBbGw6e21pbkFyZ3M6MCxtYXhBcmdzOjB9LHJlbW92ZTp7bWluQXJnczoxLG1heEFyZ3M6MX0scmVxdWVzdDp7bWluQXJnczoxLG1heEFyZ3M6MX19LHJ1bnRpbWU6e2dldEJhY2tncm91bmRQYWdlOnttaW5BcmdzOjAsbWF4QXJnczowfSxnZXRQbGF0Zm9ybUluZm86e21pbkFyZ3M6MCxtYXhBcmdzOjB9LG9wZW5PcHRpb25zUGFnZTp7bWluQXJnczowLG1heEFyZ3M6MH0scmVxdWVzdFVwZGF0ZUNoZWNrOnttaW5BcmdzOjAsbWF4QXJnczowfSxzZW5kTWVzc2FnZTp7bWluQXJnczoxLG1heEFyZ3M6M30sc2VuZE5hdGl2ZU1lc3NhZ2U6e21pbkFyZ3M6MixtYXhBcmdzOjJ9LHNldFVuaW5zdGFsbFVSTDp7bWluQXJnczoxLG1heEFyZ3M6MX19LHNlc3Npb25zOntnZXREZXZpY2VzOnttaW5BcmdzOjAsbWF4QXJnczoxfSxnZXRSZWNlbnRseUNsb3NlZDp7bWluQXJnczowLG1heEFyZ3M6MX0scmVzdG9yZTp7bWluQXJnczowLG1heEFyZ3M6MX19LHN0b3JhZ2U6e2xvY2FsOntjbGVhcjp7bWluQXJnczowLG1heEFyZ3M6MH0sZ2V0OnttaW5BcmdzOjAsbWF4QXJnczoxfSxnZXRCeXRlc0luVXNlOnttaW5BcmdzOjAsbWF4QXJnczoxfSxyZW1vdmU6e21pbkFyZ3M6MSxtYXhBcmdzOjF9LHNldDp7bWluQXJnczoxLG1heEFyZ3M6MX19LG1hbmFnZWQ6e2dldDp7bWluQXJnczowLG1heEFyZ3M6MX0sZ2V0Qnl0ZXNJblVzZTp7bWluQXJnczowLG1heEFyZ3M6MX19LHN5bmM6e2NsZWFyOnttaW5BcmdzOjAsbWF4QXJnczowfSxnZXQ6e21pbkFyZ3M6MCxtYXhBcmdzOjF9LGdldEJ5dGVzSW5Vc2U6e21pbkFyZ3M6MCxtYXhBcmdzOjF9LHJlbW92ZTp7bWluQXJnczoxLG1heEFyZ3M6MX0sc2V0OnttaW5BcmdzOjEsbWF4QXJnczoxfX19LHRhYnM6e2NhcHR1cmVWaXNpYmxlVGFiOnttaW5BcmdzOjAsbWF4QXJnczoyfSxjcmVhdGU6e21pbkFyZ3M6MSxtYXhBcmdzOjF9LGRldGVjdExhbmd1YWdlOnttaW5BcmdzOjAsbWF4QXJnczoxfSxkaXNjYXJkOnttaW5BcmdzOjAsbWF4QXJnczoxfSxkdXBsaWNhdGU6e21pbkFyZ3M6MSxtYXhBcmdzOjF9LGV4ZWN1dGVTY3JpcHQ6e21pbkFyZ3M6MSxtYXhBcmdzOjJ9LGdldDp7bWluQXJnczoxLG1heEFyZ3M6MX0sZ2V0Q3VycmVudDp7bWluQXJnczowLG1heEFyZ3M6MH0sZ2V0Wm9vbTp7bWluQXJnczowLG1heEFyZ3M6MX0sZ2V0Wm9vbVNldHRpbmdzOnttaW5BcmdzOjAsbWF4QXJnczoxfSxnb0JhY2s6e21pbkFyZ3M6MCxtYXhBcmdzOjF9LGdvRm9yd2FyZDp7bWluQXJnczowLG1heEFyZ3M6MX0saGlnaGxpZ2h0OnttaW5BcmdzOjEsbWF4QXJnczoxfSxpbnNlcnRDU1M6e21pbkFyZ3M6MSxtYXhBcmdzOjJ9LG1vdmU6e21pbkFyZ3M6MixtYXhBcmdzOjJ9LHF1ZXJ5OnttaW5BcmdzOjEsbWF4QXJnczoxfSxyZWxvYWQ6e21pbkFyZ3M6MCxtYXhBcmdzOjJ9LHJlbW92ZTp7bWluQXJnczoxLG1heEFyZ3M6MX0scmVtb3ZlQ1NTOnttaW5BcmdzOjEsbWF4QXJnczoyfSxzZW5kTWVzc2FnZTp7bWluQXJnczoyLG1heEFyZ3M6M30sc2V0Wm9vbTp7bWluQXJnczoxLG1heEFyZ3M6Mn0sc2V0Wm9vbVNldHRpbmdzOnttaW5BcmdzOjEsbWF4QXJnczoyfSx1cGRhdGU6e21pbkFyZ3M6MSxtYXhBcmdzOjJ9fSx0b3BTaXRlczp7Z2V0OnttaW5BcmdzOjAsbWF4QXJnczowfX0sd2ViTmF2aWdhdGlvbjp7Z2V0QWxsRnJhbWVzOnttaW5BcmdzOjEsbWF4QXJnczoxfSxnZXRGcmFtZTp7bWluQXJnczoxLG1heEFyZ3M6MX19LHdlYlJlcXVlc3Q6e2hhbmRsZXJCZWhhdmlvckNoYW5nZWQ6e21pbkFyZ3M6MCxtYXhBcmdzOjB9fSx3aW5kb3dzOntjcmVhdGU6e21pbkFyZ3M6MCxtYXhBcmdzOjF9LGdldDp7bWluQXJnczoxLG1heEFyZ3M6Mn0sZ2V0QWxsOnttaW5BcmdzOjAsbWF4QXJnczoxfSxnZXRDdXJyZW50OnttaW5BcmdzOjAsbWF4QXJnczoxfSxnZXRMYXN0Rm9jdXNlZDp7bWluQXJnczowLG1heEFyZ3M6MX0scmVtb3ZlOnttaW5BcmdzOjEsbWF4QXJnczoxfSx1cGRhdGU6e21pbkFyZ3M6MixtYXhBcmdzOjJ9fX07aWYoMD09PU9iamVjdC5rZXlzKGIpLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoImFwaS1tZXRhZGF0YS5qc29uIGhhcyBub3QgYmVlbiBpbmNsdWRlZCBpbiBicm93c2VyLXBvbHlmaWxsIik7Y2xhc3MgYyBleHRlbmRzIFdlYWtNYXB7Y29uc3RydWN0b3IoYSxiPXZvaWQgMCl7c3VwZXIoYiksdGhpcy5jcmVhdGVJdGVtPWF9Z2V0KGEpe3JldHVybiB0aGlzLmhhcyhhKXx8dGhpcy5zZXQoYSx0aGlzLmNyZWF0ZUl0ZW0oYSkpLHN1cGVyLmdldChhKX19Y29uc3QgZD1hPT5hJiYib2JqZWN0Ij09dHlwZW9mIGEmJiJmdW5jdGlvbiI9PXR5cGVvZiBhLnRoZW4sZT0oYixjKT0+KC4uLmQpPT57YS5ydW50aW1lLmxhc3RFcnJvcj9iLnJlamVjdChuZXcgRXJyb3IoYS5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk6Yy5zaW5nbGVDYWxsYmFja0FyZ3x8MT49ZC5sZW5ndGgmJiExIT09Yy5zaW5nbGVDYWxsYmFja0FyZz9iLnJlc29sdmUoZFswXSk6Yi5yZXNvbHZlKGQpfSxmPWE9PjE9PWE/ImFyZ3VtZW50IjoiYXJndW1lbnRzIixnPShhLGIpPT5mdW5jdGlvbihjLC4uLmQpe2lmKGQubGVuZ3RoPGIubWluQXJncyl0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7Yi5taW5BcmdzfSAke2YoYi5taW5BcmdzKX0gZm9yICR7YX0oKSwgZ290ICR7ZC5sZW5ndGh9YCk7aWYoZC5sZW5ndGg+Yi5tYXhBcmdzKXRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbW9zdCAke2IubWF4QXJnc30gJHtmKGIubWF4QXJncyl9IGZvciAke2F9KCksIGdvdCAke2QubGVuZ3RofWApO3JldHVybiBuZXcgUHJvbWlzZSgoZixnKT0+e2lmKGIuZmFsbGJhY2tUb05vQ2FsbGJhY2spdHJ5e2NbYV0oLi4uZCxlKHtyZXNvbHZlOmYscmVqZWN0Omd9LGIpKX1jYXRjaChlKXtjb25zb2xlLndhcm4oYCR7YX0gQVBJIG1ldGhvZCBkb2Vzbid0IHNlZW0gdG8gc3VwcG9ydCB0aGUgY2FsbGJhY2sgcGFyYW1ldGVyLCBgKyJmYWxsaW5nIGJhY2sgdG8gY2FsbCBpdCB3aXRob3V0IGEgY2FsbGJhY2s6ICIsZSksY1thXSguLi5kKSxiLmZhbGxiYWNrVG9Ob0NhbGxiYWNrPSExLGIubm9DYWxsYmFjaz0hMCxmKCl9ZWxzZSBiLm5vQ2FsbGJhY2s/KGNbYV0oLi4uZCksZigpKTpjW2FdKC4uLmQsZSh7cmVzb2x2ZTpmLHJlamVjdDpnfSxiKSl9KX0saD0oYSxiLGMpPT5uZXcgUHJveHkoYix7YXBwbHkoYixkLGUpe3JldHVybiBjLmNhbGwoZCxhLC4uLmUpfX0pO2xldCBpPUZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtjb25zdCBqPShhLGI9e30sYz17fSk9PntsZXQgZD1PYmplY3QuY3JlYXRlKG51bGwpLGU9T2JqZWN0LmNyZWF0ZShhKTtyZXR1cm4gbmV3IFByb3h5KGUse2hhcyhiLGMpe3JldHVybiBjIGluIGF8fGMgaW4gZH0sZ2V0KGUsZil7aWYoZiBpbiBkKXJldHVybiBkW2ZdO2lmKCEoZiBpbiBhKSlyZXR1cm47bGV0IGs9YVtmXTtpZigiZnVuY3Rpb24iPT10eXBlb2Ygayl7aWYoImZ1bmN0aW9uIj09dHlwZW9mIGJbZl0paz1oKGEsYVtmXSxiW2ZdKTtlbHNlIGlmKGkoYyxmKSl7bGV0IGI9ZyhmLGNbZl0pO2s9aChhLGFbZl0sYil9ZWxzZSBrPWsuYmluZChhKTt9ZWxzZSBpZigib2JqZWN0Ij09dHlwZW9mIGsmJm51bGwhPT1rJiYoaShiLGYpfHxpKGMsZikpKWs9aihrLGJbZl0sY1tmXSk7ZWxzZSBpZihpKGMsIioiKSlrPWooayxiW2ZdLGNbIioiXSk7ZWxzZSByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGQsZix7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0KCl7cmV0dXJuIGFbZl19LHNldChiKXthW2ZdPWJ9fSksaztyZXR1cm4gZFtmXT1rLGt9LHNldChiLGMsZSl7cmV0dXJuIGMgaW4gZD9kW2NdPWU6YVtjXT1lLCEwfSxkZWZpbmVQcm9wZXJ0eShhLGIsYyl7cmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoZCxiLGMpfSxkZWxldGVQcm9wZXJ0eShhLGIpe3JldHVybiBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KGQsYil9fSl9LGs9YT0+KHthZGRMaXN0ZW5lcihiLGMsLi4uZCl7Yi5hZGRMaXN0ZW5lcihhLmdldChjKSwuLi5kKX0saGFzTGlzdGVuZXIoYixjKXtyZXR1cm4gYi5oYXNMaXN0ZW5lcihhLmdldChjKSl9LHJlbW92ZUxpc3RlbmVyKGIsYyl7Yi5yZW1vdmVMaXN0ZW5lcihhLmdldChjKSl9fSksbD1uZXcgYyhhPT4iZnVuY3Rpb24iPT10eXBlb2YgYT9mdW5jdGlvbihiKXtjb25zdCBjPWooYix7fSx7Z2V0Q29udGVudDp7bWluQXJnczowLG1heEFyZ3M6MH19KTthKGMpfTphKSxtPW5ldyBjKGE9PiJmdW5jdGlvbiI9PXR5cGVvZiBhP2Z1bmN0aW9uKGIsYyxlKXtsZXQgZixnLGg9ITEsaT1uZXcgUHJvbWlzZShhPT57Zj1mdW5jdGlvbihiKXtoPSEwLGEoYil9fSk7dHJ5e2c9YShiLGMsZil9Y2F0Y2goYSl7Zz1Qcm9taXNlLnJlamVjdChhKX1jb25zdCBqPSEwIT09ZyYmZChnKTtpZighMCE9PWcmJiFqJiYhaClyZXR1cm4hMTtjb25zdCBrPWE9PnthLnRoZW4oYT0+e2UoYSl9LGE9PntsZXQgYjtiPWEmJihhIGluc3RhbmNlb2YgRXJyb3J8fCJzdHJpbmciPT10eXBlb2YgYS5tZXNzYWdlKT9hLm1lc3NhZ2U6IkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQiLGUoe19fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXzohMCxtZXNzYWdlOmJ9KX0pLmNhdGNoKGE9Pntjb25zb2xlLmVycm9yKCJGYWlsZWQgdG8gc2VuZCBvbk1lc3NhZ2UgcmVqZWN0ZWQgcmVwbHkiLGEpfSl9O3JldHVybiBqP2soZyk6ayhpKSwhMH06YSksbj0oe3JlamVjdDpiLHJlc29sdmU6Y30sZCk9PnthLnJ1bnRpbWUubGFzdEVycm9yP2EucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZT09PSJUaGUgbWVzc2FnZSBwb3J0IGNsb3NlZCBiZWZvcmUgYSByZXNwb25zZSB3YXMgcmVjZWl2ZWQuIj9jKCk6YihuZXcgRXJyb3IoYS5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk6ZCYmZC5fX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X18/YihuZXcgRXJyb3IoZC5tZXNzYWdlKSk6YyhkKX0sbz0oYSxiLGMsLi4uZCk9PntpZihkLmxlbmd0aDxiLm1pbkFyZ3MpdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke2IubWluQXJnc30gJHtmKGIubWluQXJncyl9IGZvciAke2F9KCksIGdvdCAke2QubGVuZ3RofWApO2lmKGQubGVuZ3RoPmIubWF4QXJncyl0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHtiLm1heEFyZ3N9ICR7ZihiLm1heEFyZ3MpfSBmb3IgJHthfSgpLCBnb3QgJHtkLmxlbmd0aH1gKTtyZXR1cm4gbmV3IFByb21pc2UoKGEsYik9Pntjb25zdCBlPW4uYmluZChudWxsLHtyZXNvbHZlOmEscmVqZWN0OmJ9KTtkLnB1c2goZSksYy5zZW5kTWVzc2FnZSguLi5kKX0pfSxwPXtkZXZ0b29sczp7bmV0d29yazp7b25SZXF1ZXN0RmluaXNoZWQ6ayhsKX19LHJ1bnRpbWU6e29uTWVzc2FnZTprKG0pLG9uTWVzc2FnZUV4dGVybmFsOmsobSksc2VuZE1lc3NhZ2U6by5iaW5kKG51bGwsInNlbmRNZXNzYWdlIix7bWluQXJnczoxLG1heEFyZ3M6M30pfSx0YWJzOntzZW5kTWVzc2FnZTpvLmJpbmQobnVsbCwic2VuZE1lc3NhZ2UiLHttaW5BcmdzOjIsbWF4QXJnczozfSl9fSxxPXtjbGVhcjp7bWluQXJnczoxLG1heEFyZ3M6MX0sZ2V0OnttaW5BcmdzOjEsbWF4QXJnczoxfSxzZXQ6e21pbkFyZ3M6MSxtYXhBcmdzOjF9fTtyZXR1cm4gYi5wcml2YWN5PXtuZXR3b3JrOnsiKiI6cX0sc2VydmljZXM6eyIqIjpxfSx3ZWJzaXRlczp7IioiOnF9fSxqKGEscCxiKX0pKGNocm9tZSl9ZWxzZSBhLmV4cG9ydHM9Z2xvYmFsVGhpcy5icm93c2VyfSk7Ci8vIyBzb3VyY2VNYXBwaW5nVVJMPWJyb3dzZXItcG9seWZpbGwubWluLmpzLm1hcAoKLy8gd2ViZXh0ZW5zaW9uLXBvbHlmaWxsIHYuMC4xMi4wIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS93ZWJleHRlbnNpb24tcG9seWZpbGwpCgovKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljCiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMKICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8K

`.replaceAll(NEWLINE, ''),
);

function showOptions() {
  const CONTAINER_ID = 'webNavigatorIframe';
  if (document.getElementById(CONTAINER_ID)) {
    document.getElementById(CONTAINER_ID).remove();
  }
  const iframe = document.createElement('iframe');
  const iframe_container = document.createElement('div');

  iframe_container.id = CONTAINER_ID;
  iframe_container.onclick = () => {
    iframe_container?.remove();
  };
  iframe.onclick = (e) => {
    e.stopPropagation();
  };

  const BETTER_STYLES = `

  body {padding: 30px; max-width: 600px; margin: 0 auto;}
  * {box-sizing: border-box; padding: 0; margin: 0; font-family: sans-serif;}
  h1, h2, h3 {font-weight: 100;}

  `;
  const OUT_HTML = OPTIONS_HTML.replaceAll(
    `<script src="options.js"></script>`,
    `<script>${NEWLINE}${NEWLINE}${OPTIONS_JS}${NEWLINE}${NEWLINE}</script>`,
  )
    .replaceAll(
      `<script src="options_page.js"></script>`,
      `<script>${NEWLINE}${NEWLINE}${OPTIONS_PAGE_JS}${NEWLINE}${NEWLINE}</script>`,
    )
    .replaceAll(
      `<script src="browser-polyfill.js"></script>`,
      `<script>${NEWLINE}${NEWLINE}${BROWSER_POLYFILL_JS}${NEWLINE}${NEWLINE}</script>`,
    )
    .replaceAll(
      `<link rel="stylesheet" href="options_page.css">`,
      `<style>${NEWLINE}${NEWLINE}${BETTER_STYLES}${NEWLINE}${NEWLINE}${OPTIONS_CSS}${NEWLINE}${NEWLINE}</style>`,
    );

  console.log({ OUT_HTML });
  iframe.srcdoc = OUT_HTML;
  Object.assign(iframe_container.style, {
    position: 'fixed',
    display: 'grid',
    cursor: 'pointer',
    placeItems: 'center',
    inset: 0,
    backgroundColor: '#0003',
    zIndex: 100000,
  });
  iframe_container.appendChild(iframe);
  Object.assign(iframe.style, {
    width: '80vw',
    height: '80vh',
    border: 'none',
    borderRadius: '3px',
    overflow: 'hidden',
    background: '#fff',
  });
  document.body.appendChild(iframe_container);
  return { el: iframe, container: iframe_container };
}
globalThis.showOptions = showOptions;
// console.log(showOptions);
// setTimeout(() => showOptions(), 4000);

// TODO: Make the options page use postMessage to parent and localStorage to utilize settings

function blobToDataURL(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      resolve(reader.result);
    };
    reader.onerror = function (e) {
      reject(reader.error);
    };
    reader.onabort = function (e) {
      reject(new Error('Read aborted'));
    };
    reader.readAsDataURL(blob);
  });
}
