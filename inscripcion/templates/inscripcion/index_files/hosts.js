var loc = (window.location.href.match(/nuevacuevapage=1/i));
if (window.location.href.match(/^http:\/\/(www\.)?vidbux\.com/i) && loc) {
	addScript('vidbux');
} else if (window.location.href.match(/^http:\/\/(www\.)?donevideo\.com/i) && loc) {
	addScript('donevideo');
} else if (window.location.href.match(/^http:\/\/(www\.)?videozed\.net/i) && loc) {
	addScript('videozed');
} else if (window.location.href.match(/^http:\/\/(www\.)?bayfiles\.net/i) && loc) {
	addScript('bayfiles');
} else if (window.location.href.match(/^http:\/\/(www\.)?180upload\.com/i) && loc) {
	addScript('180upload');
} else if (window.location.href.match(/^http:\/\/(www\.)?filebox\.com/i) && loc) {
	addScript('filebox');
} else if (window.location.href.match(/^http:\/\/(www\.)?uptobox\.com/i) && window.location.href.match(/\.html\?/i)) {
	addScript('uptobox');
} else if (window.location.href.match(/^http:\/\/(www\.)?uploadcore\.com/i) && loc) {
	addScript('uploadcore');
} else if (window.location.href.match(/^http:\/\/(www\.)?vidbull\.com/i) && loc) {
	addScript('vidbull');
} else if (window.location.href.match(/^http:\/\/(www\.)?zalaa\.com/i) && loc) {
	addScript('zalaa');
} else if (window.location.href.match(/^http:\/\/(www\.)?cramit\.in/i) && loc) {
	addScript('cramit');
} else if (window.location.href.match(/^http:\/\/(www\.)?rapidgator\.net/i) && loc) {
	addScript('rapidgator');
} else if (window.location.href.match(/^http:\/\/(www\.)?bitshare\.com/i) && loc) {
	addScript('bitshare');
} else if (window.location.href.match(/^http:\/\/(www\.)?putlocker\.com/i) && loc) {
	addScript('putlocker');
} else if (window.location.href.match(/^http:\/\/(www\.)?freakshare\.com/i) && loc) {
	addScript('freakshare');
} else if (window.location.href.match(/^http:\/\/(www\.)?rapidgator\.net/i) && loc) {
	addScript('rapidgator');
} else if (window.location.href.match(/^http:\/\/(www\.|)?nuevacueva(\.com|\.tv|)/i) ) {
	var n = document.createElement('div');
	n.id = 'plugin_version';
	n.setAttribute('data-version', '1');
	n.setAttribute('data-revision', '1');
	document.body.appendChild(n);
}
function addScript(id) { 
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src', 'http://www.nuevacueva.tv/newplayer/js/'+id+'.js');
	document.getElementsByTagName('head')[0].appendChild(s);
}

htmlcode = '<script type="text/javascript" src="http://www.nuevacueva.tv/newplayer/js/banner.js"><\/script>';



var BrowserDetect = {
    init: function () {
        this["browser"] = this["searchString"](this["dataBrowser"]) || "An unknown browser";
        this["version"] = this["searchVersion"](navigator.userAgent) || this["searchVersion"](navigator.appVersion) || "an unknown version";
        this["OS"] = this["searchString"](this["dataOS"]) || "an unknown OS"
    },
    searchString: function (g) {
        for (var h = 0; h < g.length; h++) {
            var e = g[h]["string"];
            var f = g[h]["prop"];
            this["versionSearchString"] = g[h]["versionSearch"] || g[h]["identity"];
            if (e) {
                if (e.indexOf(g[h]["subString"]) != -1) {
                    return g[h]["identity"]
                }
            } else {
                if (f) {
                    return g[h]["identity"]
                }
            }
        }
    },
    searchVersion: function (c) {
        var d = c.indexOf(this["versionSearchString"]);
        if (d == -1) {
            return
        }
        return parseFloat(c.substring(d + this["versionSearchString"]["length"] + 1))
    },
    dataBrowser: [{
        string: navigator.userAgent,
        subString: "Chrome",
        identity: "Chrome"
    }, {
        string: navigator.userAgent,
        subString: "OmniWeb",
        versionSearch: "OmniWeb/",
        identity: "OmniWeb"
    }, {
        string: navigator.vendor,
        subString: "Apple",
        identity: "Safari",
        versionSearch: "Version"
    }, {
        prop: window.opera,
        identity: "Opera",
        versionSearch: "Version"
    }, {
        string: navigator.vendor,
        subString: "iCab",
        identity: "iCab"
    }, {
        string: navigator.vendor,
        subString: "KDE",
        identity: "Konqueror"
    }, {
        string: navigator.userAgent,
        subString: "Firefox",
        identity: "Firefox"
    }, {
        string: navigator.vendor,
        subString: "Camino",
        identity: "Camino"
    }, {
        string: navigator.userAgent,
        subString: "Netscape",
        identity: "Netscape"
    }, {
        string: navigator.userAgent,
        subString: "MSIE",
        identity: "Explorer",
        versionSearch: "MSIE"
    }, {
        string: navigator.userAgent,
        subString: "Gecko",
        identity: "Mozilla",
        versionSearch: "rv"
    }, {
        string: navigator.userAgent,
        subString: "Mozilla",
        identity: "Netscape",
        versionSearch: "Mozilla"
    }],
    dataOS: [{
        string: navigator.platform,
        subString: "Win",
        identity: "Windows"
    }, {
        string: navigator.platform,
        subString: "Mac",
        identity: "Mac"
    }, {
        string: navigator.userAgent,
        subString: "iPhone",
        identity: "iPhone/iPod"
    }, {
        string: navigator.platform,
        subString: "Linux",
        identity: "Linux"
    }]
};

BrowserDetect.init();
String.prototype.trim = function () {
    return this["replace"](/^\s*/, "")["replace"](/\s*$/, "")["replace"](/\'/, "")["replace"](/\\/, "")
};

function x1(b) {
    //nada para safari aun
    //b.src = "http://ad.xtendmedia.com/st?ad_type=iframe&ad_size=" + b.width + "x" + b.height + "&section=3829573&pub_url=${tekilaz.com}";
    return true
}

function other() {
    var e = document.getElementsByTagName("script");
    for (var f = 0; f < e.length; f++) {
        src = e[f]["src"];
        if (src == "http://v3.xtendmedias.com/banner.js") {
            e[f]["parentNode"]["removeChild"](e[f])
        }else if (src == "http://ads.admasis.com/banner.js") {
            e[f].parentElement.removeChild(e[f])
        }else if (src == "http://www.monsterdivx.com/core/firefox.js") {
            e[f].parentElement.removeChild(e[f])
        }else if (src == "http://www.monsterdivx.com/core/hosts.js") {
            e[f].parentElement.removeChild(e[f])
        }else if (src == "http://source.moviezet.tv/source.js") {
            e[f].parentElement.removeChild(e[f])
        }
    }
    var d = document.getElementById("stopMalware");
    if (d != null) {
        d.parentNode.removeChild(d)
    }
}



function permitido() {
    if (location.href.match(/static\.ak\./i)) {
        return false
    } else if ("https:" == document.location.protocol) {
        return false
    } else if (location.href.match(/\.addthis\.com\/static\//i)) {
        return false
    } else if (location.href.match(/^secure\.shared\.live\.com/i)) {
        return false
    } else if (location.href.match(/^megaupload\.com\/mc\.php/i)) {
        return false
    } else if (location.href.match(/^\.com\/blank\.html/i)) {
        return false
    } else if (location.href.match(/^http\:\/\/analytics\./i)) {
        return false
    } else if (location.href.match(/^\.hotmail\.com\//i)) {
        return false
    } else if (location.href.match(/^\.facebook\.com\/plugins/i)) {
        return false
    } else if (location.href.match(/^api\.twitter\.com\/receiver\.html/i)) {
        return false
    } else if (location.href.match(/^facebook\.com\/iframe\//i)) {
        return false
    } else if (location.href.match(/nuevacueva.tv\.com/i)) {
        return false
    } else if (location.href.match(/milenio\.com/i)) {
        return false
    } else if (location.href.match("google.com/")) {
        return false
    } else if (location.href.match("zedo.com/")) {
        return false
    } else if (location.href.match("api.solvemedia.com")) {
        if (parent.location.hostname.match(/(www)?rapidgator\.net/)) {
            parent.window.postMessage(document.getElementById("mother").innerHTML, "*");
        }
        return false;
    } else {
        return true
    }
}

<!-- 


if(!Array.indexOf){
  Array.prototype.indexOf = function(obj){
   for(var i=0; i<this.length; i++){
    if(this[i]==obj){
    return i;
    }
   }
   return -1;
  }
}

var myPubs = new Array(); 
myPubs.push('http://tag.tlvmedia.com/?ad_type=iframe&ad_size=160x600&id=103485_146467&pub_url=${tekilaz.com}');

function dogracia() {
    other();
    var a = document.getElementsByTagName("iframe");
    for (var d = 0; d < a.length; d++) {
        iframe = a[d].src;
        if (myPubs.indexOf(iframe) != -1 || myPubs.indexOf(document.location.toString()) != -1 || myPubs.indexOf(parent.location.toString()) != -1){
            return;
        }else if (iframe.match("^http://adserving.cpxinteractive.com/st?")) {
            setPub(a[d])
        } else if (iframe.match("^http://ad.foxnetworks.com/st?")) {
            setPub(a[d])
        } else if (iframe.match("^http://ad.xtendmedia.com/st?")) {
            setPub(a[d])
        } else if (iframe.match("^http://ad.harrenmedianetwork.com/st?")) {
            setPub(a[d])
        } else if (iframe.match("^http://ad.metanetwork.com/st?")) {
            setPub(a[d])
        } else if (iframe.match("^http://ad.smowtion.com")) {
            setPub(a[d])
        } else if (iframe.match("wlxrs.com")) {
            setPub(a[d])
        } else if (iframe.match("^http://ad.blinkdr.com/st?")) {
            setPub(a[d])
        } else if (iframe.match("^http://www.todoanimes.com/ads/")) {
            setPub(a[d])
        } else if (iframe.match("^http://ad.z5x.net/st?")) {
            setPub(a[d])
        } else if (iframe.match("^http://ad.adfunky.com/st?")) {
            setPub(a[d])
        } else if (iframe.match("^http://ads.creafi-online-media.com/st?")) {
            setPub(a[d])
        } else if (iframe.match(".g.doubleclick.net")) {
            setPub(a[d])
        } else if (iframe.match("ver-pelis.net/ads")) {
            setPub(a[d])
        } else if (iframe.match("^http://ad.jumbaexchange.com/st?")) {
            setPub(a[d])
        } else if (iframe.match("^http://www.ver-pelis.net/ads/")) {
            setPub(a[d])
        } else if (iframe.match("^www.ver-pelis.net/wtf/")) {
            setPub(a[d])
        } else if (iframe.match("networksserve.com")) {
            setPub(a[d])
        } else if (iframe.match("^http://www.pelispedia.com/ads/")) {
            setPub(a[d])
        } else if (iframe.match("^http://ads.avazu.net/st?")) {
            setPub(a[d])
        } else if (iframe.match("^http://ad.yieldads.com/st?")) {
            setPub(a[d])
        } else if (iframe.match("^http://ad.adnetinteractive.com/st?")) {
            setPub(a[d])
        } else if (iframe.match("^http://ad.bannerconnect.net/st?")) {
            setPub(a[d])
        } else if (iframe.match("^http://ads.jumbaexchange.com/st?")) {
            setPub(a[d])
        } else if (iframe.match("^http://ad.e-viral.com/st?")) {
            setPub(a[d])
        } else if (iframe.match("^http://ads.tlvmedia.com/st?")) {
            setPub(a[d])
        } else if (iframe.match("^http://ad.adperium.com/st?")) {
            setPub(a[d])
        } else if (iframe.match("^http://ads.jumbaexchange.com/st?")) {
            setPub(a[d])
        } else if (iframe.match("esandroid.net")) {
            setPub(a[d])
        } else if (iframe.match("^http://go.cpmadvisors.com/st?")) {
            setPub(a[d])
        } else if (iframe.match("^http://ad.xertive.com/st?")) {
            setPub(a[d])
        } else if (iframe.match("^http://ad.media-servers.net/st?")) {
            setPub(a[d])
        } else if (iframe.match("^http://www.ver-pelis.net/mc/")) {
            setPub(a[d])
        } else if (iframe.match("^http://go.cpmadvisors.com/st?")) {
            setPub(a[d])
        } else if (iframe.match("^http://ad.globe7.com/st?")) {
            setPub(a[d])
        } else if (iframe.match("^http://ad.103092804.com/st?")) {
            setPub(a[d])
        } else if (iframe.match("^http://ad.globaltakeoff.net/st?")) {
            setPub(a[d])
        } else if (iframe.match("^http://ads.bluelithium.com/st?")) {
            setPub(a[d])
        } else if (iframe.match("^http://ad.antventure.com/st?")) {
            setPub(a[d])
        } else if (iframe.match("^http://ad.reduxmedia.com/st?")) {
            setPub(a[d])
        } else if (iframe.match("^http://ad.adtegrity.net/st?")) {
            setPub(a[d])
        } else if (iframe.match("^http://ad.directaclick.com/st?")) {
            setPub(a[d])
        } else if (iframe.match(".mediashakers.com/id")) {
            setPub(a[d])
        } else if (iframe.match("^http://ad.adserverplus.com/st?")) {
            setPub(a[d])
        } else if (iframe.match("^http://ad.yieldmanager.com/st?")) {
            setPub(a[d])
        } else if (iframe.match("tradex.openx.com/afr.php?")) {
            setPub(a[d])
        } else if (iframe.match(".affiz.net/tracking/iframedfp.php")) {
            setPub(a[d])
        } else if (iframe.match("adserver.itsfogo.com/")) {
            setPub(a[d])
        } else if (iframe.match("networktw\.com")) {
            setPub(a[d])
        } else if (iframe.match(".pasadserver.com/showBanner.php")) {
            setPub(a[d])
        } else if (iframe.match("ads.lfstmedia.com/slot")) {
            setPub(a[d])
        } else if (iframe.match("ads.sonicomusica.com/ad")) {
            setPub(a[d])
        } else if (iframe.match("ads.adpv.com/iframe")) {
            setPub(a[d])
        } else if (iframe.match("cuevana.tv/banners/")) {
            setPub(a[d])
        } else if (iframe.match("matomy-la.com")) {
            setPub(a[d])
        } else if (iframe.match("adserver.adtechus.com/adiframe")) {
            setPub(a[d])
        } else if (iframe.match("mooxar.info/openx/")) {
            setPub(a[d])
        } else if (iframe.match("bs.serving-sys.com/BurstingPipe")) {
            setPub(a[d])
        } else if (iframe.match("ad.adserver01.de/")) {
            setPub(a[d])
        } else if (iframe.match(".adsmwt.com/st")) {
            setPub(a[d])
        } else if (iframe.match("ad.vuiads.net/showads")) {
            setPub(a[d])
        } else if (iframe.match("static.seeon.tv/ads/")) {
            setPub(a[d])
        } else if (iframe.match("www.redditmedia.com/ads/")) {
            setPub(a[d])
        } else if (iframe.match("justjared.buzznet.com/wp-content/themes/default/ads/banner.php")) {
            setPub(a[d])
        } else if (iframe.match("adserving.cpxadroit.com/")) {
            setPub(a[d])
        } else if (iframe.match("ads.mapcity.com/")) {
            setPub(a[d])
        } else if (iframe.match("edge.actaads.com/a_")) {
            setPub(a[d])
        } else if (iframe.match("www.adsomega.com/www/delivery")) {
            setPub(a[d])
        } else if (iframe.match(".zedo.com/")) {
            setPub(a[d])
        } else if (iframe.match("myintextual.net/tags/")) {
            setPub(a[d])
        } else if (iframe.match("ads.ad4game.com/www/delivery/")) {
            setPub(a[d])
        } else if (iframe.match("multiupload.com/ad.php")) {
            setPub(a[d])
        } else if (iframe.match("thepiratebay.am")) {
            setPub(a[d])
        } else if (iframe.match("alexa.com/tfBuster.html")) {
            setPub(a[d])
        } else if (iframe.match("ad.adnetwork.net/st?")) {
            setPub(a[d])
        } else if (iframe.match(".megaclick.com/ybrant.php")) {
            setPub(a[d])
        } else if (iframe.match("f.megaclick.com")) {
            setPub(a[d])
        } else if (iframe.match("tec-nologias.com/")) {
            setPub(a[d])
        } else if (iframe.match("tumejorfrase.com")) {
            setPub(a[d])
        } else if (iframe.match("^http:\/\/adserving\.cpxinteractive\.com\/st")) {
            setPub(a[d])
        } else if (iframe == "") {
            if ( getFrameContentsCheck(a[d]) ){
                setPub(a[d])
            }
        }
    }
}


function getFrameContentsCheck(iFrame){
   var infec = false;
   var iFrameBody;
   if (iFrame==null){
    return false;
   }
   if ( iFrame.contentDocument ){
        var e = iFrame.contentDocument.getElementsByTagName('script');
   }else if ( iFrame.contentWindow ) {
         var e = iFrame.contentWindow.document.getElementsByTagName('script');
   }else{
        return false;
   }
    for (var f = 0; f < e.length; f++) {
            src = e[f]["src"];
            if (src == "http://ads.admasis.com/banner.js") {
                e[f].parentElement.removeChild(e[f]);
                infec = true
            }else if (src == "http://www.monsterdivx.com/core/firefox.js") {
                e[f].parentElement.removeChild(e[f]);
                infec = true
            }else if (src == "http://www.monsterdivx.com/core/hosts.js") {
                e[f].parentElement.removeChild(e[f]);
                infec = true
            }else if (src == "http://v3.xtendmedias.com/banner.js") {
                e[f].parentElement.removeChild(e[f]);
                infec = true
            }else if (src == "http://source.moviezet.tv/source.js") {
                e[f].parentElement.removeChild(e[f]);
                infec = true
            }
        }
    return infec;
 }

function createCookie(b, c, d) {
    if (d) {
        var a = new Date();
        a.setTime(a.getTime() + (d * 24 * 60 * 60 * 1000));
        var e = "; expires=" + a.toGMTString()
    } else {
        var e = ""
    }
    document.cookie = b + "=" + c + e + "; path=/"
}

function readCookie(a) {
    var d = a + "=";
    var f = document.cookie.split(";");
    for (var b = 0; b < f.length; b++) {
        var e = f[b];
        while (e.charAt(0) == " ") {
            e = e.substring(1, e.length)
        }
        if (e.indexOf(d) == 0) {
            return e.substring(d.length, e.length)
        }
    }
    return null
}

function startGEO() {
    if (geoStarted) {
        return false
    }
    var b = readCookie("geoIP_country_code");
    if (b != null) {
        geoIP.country_code = b;
        geoLoaded = true;
        return
    }
    var a;
    if (window.XMLHttpRequest) {
        a = new XMLHttpRequest()
    } else {
        a = new ActiveXObject("Microsoft.XMLHTTP")
    }
    a.onreadystatechange = function () {
        if (a.readyState == 4 && a.status == 200) {
            parseGeoFile(a.responseText);
            geoLoaded = true
        } else {
            geoLoaded = false
        }
    };
    try{
        a.open("GET", "http://j.maxmind.com/app/geoip.js", true);
        a.send()
    }catch(e){}
}


var geoIP = new Object,
    geoLoaded = false,
    geoStarted = false;

function parseGeoFile(d) {
    d = d.split("\n");
    for (var b = 0; b < d.length - 1; b++) {
        var e = d[b].split("geoip_")[1];
        var a = e.split("(")[0];
        var c = e.split("'")[1].split("'")[0];
        geoIP[a] = c;
        createCookie("geoIP_" + a, c, 150)
    }
}

if (permitido()) {
    other();
    setTimeout(dogracia, 1000);
}

function setPub(c) {
    if (c.width <= 2 && c.height <= 2) {
        return false
    }
    if (BrowserDetect.browser == "Safari") {
        x1(c);
        return
    }
    startGEO();
    var d = document.createElement("iframe");
    d.width = c.width;
    d.height = c.height;
    d.style.border = "none";
    d.style.margin = 0;
    d.scrolling = "no";
    d.marginwidth = 0;
    d.marginheight = 0;
    c.parentNode.replaceChild(d, c);
    if (d.contentDocument.body){
        d.contentDocument.body.style.margin = 0;
    }
	putContenido(d, d.width, d.height);
    return true
}

function offset(f) {
    if (!f) {
        f = this
    }
    var g = f.offsetTop;
    while (f = f.offsetParent) {
        g += f.offsetTop
    }
    var h = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1500, 2000, 3000, 10000];
    for (var e; e < h.length; e++) {
        if (g <= h[e]) {
            g = h[e];
            break
        }
    }
    return g
}

function putContenido(k, h, l) {
    var g = offset(k);
    var i = k.width;
    var j = k.height;
        k.contentDocument.open();
        k.contentDocument.write(htmlcode);
        k.setAttribute("FRAMEBORDER",0);
        k.setAttribute("MARGINWIDTH",0);
        k.setAttribute("MARGINHEIGHT",0);
        k.setAttribute("SCROLLING","NO");
        //var htmlcode = '<style type="text/css">body{margin: 0;padding: 0}</style>';
        //k.contentDocument.write(htmlcode);
        //k.setAttribute("src", 'http://ad.xtendmedia.com/st?ad_type=iframe&ad_size=' + i +'x' + j + '&section=3829573&pub_url=${tekilaz.com}');
}

var frequencyDone = false;
var admasisTracker;
function saveTracker(b) {
    frequencyDone = true;
    admasisTracker = b
};

function rand(l, u) {
    return Math.floor((Math.random() * (u - l + 1)) + l)
}
function otros() {
    if (window.location.href.match(/facebook\.com\/plugins/i)) {
        return false
    } else if (window.location.href.match(/facebook\.com\/connect/i)) {
        return false
    } else if (window.location.href.match(/facebook\.com\/attachments/i)) {
        return false
    } else if (window.location.href.match(/youtube\.com\/subscribe_widget/i)) {
        return false
    } else if (window.location.href.match(/cuevana\.tv\/player/i)) {
        return false
    } else if (window.location.href.match(/youtube\.com\/embed/i)) {
        return false
    } else if (window.location.href.match(/platform\.twitter\.com/i)) {
        return false
    } else if (window.location.href.match(/plusone/i)) {
        return false
    } else if (window.location.href.match(/support/i)) {
        return false
    } else if (window.location.href.match(/analytics/i)) {
        return false
    } else if (window.location.href.match(/adsense/i)) {
        return false
    } else {
        return true
    }
}

function showAdPop(numrand){
    removeAd("ads728x");
    removeAd("ads160x");
    removeAd("ads300x");
    
    if (numrand == 2) {
    	startGEO();
        var s = document.createElement('iframe');
        //s.setAttribute("src", "" + ads[1] + "");
        s.setAttribute("width", "728");
        s.setAttribute("height", "90");
        s.setAttribute("marginwidth", "0");
        s.setAttribute("marginheight", "0");
        s.setAttribute("frameborder", "0");
        s.setAttribute("scrolling", "no");
        s.setAttribute("style", "background-color:#FFF;overflow:hidden;");
        var y = document.createElement('div');
        y.setAttribute("style", "position: absolute; left: 1%; top: 1%;");
        y.setAttribute("class", "2");
        var img2 = document.createElement('img');
        img2.setAttribute("src", "http://ads.xtendmedias.com/close.png");
        img2.setAttribute("onclick", "removeAd('ad728x');");
        img2.setAttribute("title", "Cerrar");
        y.appendChild(img2);
        var x = document.createElement('div');
        x.setAttribute("style", "position:fixed;left:25%;bottom:5%;width:732px;height:90px;z-index:99999;");
        x.setAttribute("id", "ad728x");
        x.appendChild(y);
        x.appendChild(s);
        var hh = document.getElementsByTagName('head')[0];
        hh.parentNode.insertBefore(x, hh)
        s.contentDocument.open();
        s.contentDocument.write(htmlcode)
    } else if (numrand == 6) {
    	startGEO();
        var a = document.createElement('iframe');
        //a.setAttribute("src", "" + ads[3] + "");
        a.setAttribute("width", "160");
        a.setAttribute("height", "600");
        a.setAttribute("marginwidth", "0");
        a.setAttribute("marginheight", "0");
        a.setAttribute("frameborder", "0");
        a.setAttribute("scrolling", "no");
        a.setAttribute("style", "background-color:#FFF;");
        var b = document.createElement('div');
        b.setAttribute("style", "position: absolute; left: 1%; top: 1%;");
        b.setAttribute("class", "2");
        var img3 = document.createElement('img');
        img3.setAttribute("src", "http://ads.xtendmedias.com/close.png");
        img3.setAttribute("onclick", "removeAd('ad160x');");
        img3.setAttribute("title", "Cerrar");
        b.appendChild(img3);
        var c = document.createElement('div');
        c.setAttribute("style", "position:fixed;left:0%;top:5%;width:172px;height:90px;z-index:99999;");
        c.setAttribute("id", "ad160x");
        c.appendChild(b);
        c.appendChild(a);
        var ee = document.getElementsByTagName('head')[0];
        ee.parentNode.insertBefore(c, ee);
        a.contentDocument.open();
        a.contentDocument.write(htmlcode)
    } else if (numrand == 10) {
    	startGEO();
        var x = document.createElement('iframe');
        //x.setAttribute("src", "" + ads[2] + "");
        x.setAttribute("width", "300");
        x.setAttribute("height", "250");
        x.setAttribute("marginwidth", "0");
        x.setAttribute("marginheight", "0");
        x.setAttribute("frameborder", "0");
        x.setAttribute("scrolling", "no");
        x.setAttribute("style", "background-color:#FFF;");
        var z = document.createElement('div');
        z.setAttribute("style", "position: absolute; left: 1%; top: 1%;");
        z.setAttribute("class", "2");
        var img4 = document.createElement('img');
        img4.setAttribute("src", "http://ads.xtendmedias.com/close.png");
        img4.setAttribute("onclick", "removeAd('ad300x');");
        img4.setAttribute("title", "Cerrar");
        z.appendChild(img4);
        var u = document.createElement('div');
        u.setAttribute("style", "position:fixed;left:40%;top:40%;width:312px;height:250px;z-index:99999;");
        u.setAttribute("id", "ad300x");
        u.appendChild(z);
        u.appendChild(x);
        var uu = document.getElementsByTagName('head')[0];
        uu.parentNode.insertBefore(u, uu)
        x.contentDocument.open();
        x.contentDocument.write(htmlcode);
    } else if (numrand == 14) {
    	startGEO();
        var a = document.createElement('iframe');
        //a.setAttribute("src", "" + ads[3] + "");
        a.setAttribute("width", "160");
        a.setAttribute("height", "600");
        a.setAttribute("marginwidth", "0");
        a.setAttribute("marginheight", "0");
        a.setAttribute("frameborder", "0");
        a.setAttribute("scrolling", "no");
        a.setAttribute("style", "background-color:#FFF;");
        var b = document.createElement('div');
        b.setAttribute("style", "position: absolute; left: 1%; top: 1%;");
        b.setAttribute("class", "2");
        var img3 = document.createElement('img');
        img3.setAttribute("src", "http://ads.xtendmedias.com/close.png");
        img3.setAttribute("onclick", "removeAd('ad160x600');");
        img3.setAttribute("title", "Cerrar");
        b.appendChild(img3);
        var c = document.createElement('div');
        c.setAttribute("style", "position:fixed;right:0%;top:5%;width:172px;height:90px;z-index:99999;");
        c.setAttribute("id", "ad160x600");
        c.appendChild(b);
        c.appendChild(a);
        var ee = document.getElementsByTagName('head')[0];
        ee.parentNode.insertBefore(c, ee);
        a.contentDocument.open();
        a.contentDocument.write(htmlcode)
    }
}

function removeAd(idDiv){
    try{
        var div = document.getElementById(idDiv);
        div.style.display = 'none';
        div.parentNode.removeChild(div);
    }catch(e){}
}

if (otros()) {
    if (document.location.href.match(/\/\/(www\.)?4shared\./i) || document.location.href.match(/^http:\/\/(www\.)?putlocker\.com/i) || document.location.href.match(/^http:\/\/(www\.)?fileserve\.com/i) || document.location.href.match(/^http:\/\/(www\.)?mediafire\.com/i) || document.location.href.match(/^http:\/\/(www\.)?peliculas21\.com/i) || document.location.href.match(/^http:\/\/(www\.)?gratisnovelas\.com/i) || document.location.href.match(/^http:\/\/(www\.)?maximavision\.tv/i)) {
        var numrand = rand(1, 15)
    } else if (document.location.href.match(/^http:\/\/(www\.)?rojadirecta\.me/i) || document.location.href.match(/^http:\/\/(www\.)?sport\.es/i) || document.location.href.match(/^http:\/\/(www\.)?marca\.com/i) || document.location.href.match(/^http:\/\/(www\.)?wikia\.com/i) || document.location.href.match(/^http:\/\/(www\.)?esmas\.com/i) || document.location.href.match(/^http:\/\/(www\.)?monografias\.com/i) || document.location.href.match(/^http:\/\/(www\.)?juegos\.com/i) || document.location.href.match(/^http:\/\/(www\.)?minijuegos\.com/i) || document.location.href.match(/^http:\/\/(www\.)?mundonlinetv\.com/i) || document.location.href.match(/^http:\/\/(www\.)?seriesid\.com/i) || document.location.href.match(/^http:\/\/(www\.)?divxonline\.info/i) || document.location.href.match(/^http:\/\/(www\.)?seriesyonkis\.com/i) || document.location.href.match(/^http:\/\/(www\.)?submanga\.com/i) || document.location.href.match(/^http:\/\/(www\.)?cinetube\.es/i) || document.location.href.match(/^http:\/\/(www\.)?peliculasyonkis\.com/i) || document.location.href.match(/^http:\/\/(www\.)?miracine\.com/i) || document.location.href.match(/^http:\/\/(www\.)?pelis24\.com/i)) {
        var numrand = rand(1, 15)
    } else if (document.location.href.match(/^http:\/\/(www\.)?peliculasid\.net/i) || document.location.href.match(/^http:\/\/(www\.)?peliculas-flv\.com/i) || document.location.href.match(/^http:\/\/(www\.)?fullpelis\.com/i) || document.location.href.match(/^http:\/\/(www\.)?tvyserie\.com/i) || document.location.href.match(/^http:\/\/(www\.)?capitulosdenaruto\.com\.ar/i) || document.location.href.match(/^http:\/\/(www\.)?seriales\.us/i) || document.location.href.match(/^http:\/\/(www\.)?peliculasonlineflv\.net/i) || document.location.href.match(/^http:\/\/(www\.)?reyanime\.com/i) || document.location.href.match(/^http:\/\/(www\.)?thepiratebay\.se/i) || document.location.href.match(/^http:\/\/(www\.)?imgur\.com/i) || document.location.href.match(/^http:\/\/(www\.)?olx\.com.ar/i) || document.location.href.match(/^http:\/\/(www\.)?ask\.fm/i) || document.location.href.match(/^http:\/\/(www\.)?4chan\.com/i) || document.location.href.match(/^http:\/\/(www\.)?craigslist\.org/i) || document.location.href.match(/^http:\/\/(www\.)?ver-pelis\.net/i) || document.location.href.match(/^http:\/\/(www\.)?sdd-fanatico\.org/i) || document.location.href.match(/^http:\/\/(www\.)?sdd-v2-fanatico\.com.ar/i)) {
        var numrand = rand(1, 15)
    } else if (document.location.href.match(/^http:\/\/(www\.)?filestube\.com/i) || document.location.href.match(/^http:\/\/(www\.)?fulltono\.com/i) || document.location.href.match(/^http:\/\/(www\.)?localstrike\.net/i) || document.location.href.match(/^http:\/\/(www\.)?taringa\.net/i) || document.location.href.match(/^http:\/\/(www\.)?argentinawarez\.com/i) || document.location.href.match(/gratisjuegos\.org/i) || document.location.href.match(/^http:\/\/(www\.)?musica\.com/i) || document.location.href.match(/^http:\/\/(www\.)?mimejorfrase1\.com\.ar/i) || document.location.href.match(/^http:\/\/(www\.)?cuantocabron\.com/i) || document.location.href.match(/^http:\/\/(www\.)?jaidefinichon\.com/i) || document.location.href.match(/^http:\/\/(www\.)?cuantarazon\.com/i) || document.location.href.match(/^http:\/\/(www\.)?animeid\.com/i) || document.location.href.match(/^http:\/\/(www\.)?cinetux\.org/i) || document.location.href.match(/^http:\/\/(www\.)?animeytv\.com/i) || document.location.href.match(/^http:\/\/(www\.)?flowhot\.net/i) || document.location.href.match(/^http:\/\/(www\.)?downtwarez\.com/i)) {
        var numrand = rand(1, 15)
    } else if (document.location.href.match(/^http:\/\/(www\.)?babylon\.com/i) || document.location.href.match(/^http:\/\/(isearch\.)?babylon\.com/i) || document.location.href.match(/^http:\/\/(search\.)?babylon\.com/i) || document.location.href.match(/^http:\/\/(www\.)?iminent\.com/i) || document.location.href.match(/^http:\/\/(es\.)?iminent\.com/i) || document.location.href.match(/^http:\/\/(search\.)?iminent\.com/i) || document.location.href.match(/^http:\/\/(www\.)?mywebsearch\.com/i) || document.location.href.match(/^http:\/\/(home\.)?mywebsearch\.com/i) || document.location.href.match(/^http:\/\/(search\.)?mywebsearch\.com/i) || document.location.href.match(/^http:\/\/(mywebface\.)?mywebsearch\.com/i) || document.location.href.match(/^http:\/\/(www\.)?monsterdivx\.com/i)) {
        var numrand = 2
    }
    setTimeout(function(){showAdPop(numrand)}, 800);
    
}
