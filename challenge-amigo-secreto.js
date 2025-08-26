<!DOCTYPE html>
<!-- saved from url=(0014)about:internet -->
<html lang="en"><head id="main-scripts-head"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <meta http-equiv="Content-Security-Policy" content="default-src &#39;self&#39; &#39;unsafe-inline&#39; &#39;unsafe-eval&#39; data: asset: https://asset.localhost localhost:* ws://localhost:* ws://127.0.0.1:* https://storage.googleapis.com https://platform.twitter.com https://buttons.github.io https://unpkg.com/@aicore/ https://www.googletagmanager.com;
           img-src * data: localhost:* asset: https://asset.localhost ;
           media-src * data: localhost:* asset: https://asset.localhost ;
           font-src * data: localhost:* asset: https://asset.localhost ;
           frame-src * localhost:* asset: https://asset.localhost ;
           connect-src * localhost:* asset: https://asset.localhost ;">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <meta name="theme-color" content="#47484B">
    <link rel="icon" type="image/x-icon" href="https://phcode.dev/styles/images/favicons/fav.png">
    <link rel="apple-touch-icon" sizes="180x180" href="https://phcode.dev/styles/images/favicons/apple-touch-icon.png">
    <link rel="mask-icon" href="https://phcode.dev/styles/images/favicons/safari-pinned-tab.svg" color="#da532c">
    <meta name="msapplication-TileColor" content="#47484B">
    <link rel="manifest" href="https://phcode.dev/manifest.json">

    <!-- Primary Meta Tags -->
    <title>• challenge-amigo-secreto_esp-main - app.js</title>
    <meta name="title" content="Phoenix Code">
    <meta name="description" content="A text editor designed to make coding as intuitive and fun as playing a video game - specially crafted for web developers, designers, and students.">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://phcode.dev/">
    <meta property="og:title" content="Phoenix Code | Code Creatively">
    <meta property="og:description" content="A text editor designed to make coding as intuitive and fun as playing a video game - specially crafted for web developers, designers, and students.">
    <meta property="og:image" content="assets/images/socialcard.png">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://phcode.dev/">
    <meta property="twitter:title" content="Phoenix Code | Code Creatively">
    <meta property="twitter:description" content="A text editor designed to make coding as intuitive and fun as playing a video game - specially crafted for web developers, designers, and students.">
    <meta property="twitter:image" content="assets/images/socialcard.png">

    <!--    boot-time styles only here-->
    <style>
        .forced-hidden {
            display: none !important;
        }
    </style>
    <!-- start inline javascript and non module bootstrap scripts. you must add module scripts to the
     javascript module section only!!-->
<!--    The app cache version is set by the pipeline version update script. Do not update manually.-->
    <script type="text/javascript" async="" src="./challenge-amigo-secreto_files/js"></script><script>window.PHOENIX_APP_CACHE_VERSION="4.0.4";</script>
<!--    The app cache version is set by the pipeline version update script. Do not update manually.-->
    <script>
        if(["dev.phcode.dev", "staging.phcode.dev"].includes(location.hostname)
            && localStorage.getItem("devDomainsEnabled") !== "true"){
            alert("Hello explorer, you have reached a development version of phcode.dev that is not for general use and could be very unstable." +
                `\n\nIf you know what you are doing and what to visit the dev site, please go to https://${location.hostname}/devEnable.html to enable dev site and visit again.` +
                "\n\nYou will now be redirected to phcode.dev.");
            window.location = "https://phcode.dev";
        }
        if(location.href.startsWith("tauri://") || location.href.startsWith('https://tauri.localhost')){
            const errorMessage = `You should use custom protocol phtauri:// instead of tauri protocol ${location.href} .`;
            alert(errorMessage);
            console.error(errorMessage);
            throw new Error(errorMessage);
        }
        function _isTestWindow() {
            // the test window query param will only be acknowledged if we are embedded in the spec runner.
            // and test windows should be embedded within the same host as phcode.dev/tauri for security
            const isTestPhoenixWindow = window.parent.location.pathname.endsWith("SpecRunner.html") &&
                window.parent.location.host === window.location.host &&
                !!(new window.URLSearchParams(window.location.search || "")).get("testEnvironment");
            const isSpecRunnerWindow = window.location.pathname.endsWith("/SpecRunner.html");
            return isTestPhoenixWindow || isSpecRunnerWindow;
        }
        let canAccessTauri = false;
        try {
            // This is to allow phoenix live previews in phoenix desktop editor so that we can
            // develop phoenix inside phoenix.
            // This will throw an error if the live preview iframe and parent are cross-origin which is case in phcode
            canAccessTauri = window.top.window.__TAURI__;
            canAccessTauri = true;
        } catch (e) {
            // Cross-origin, exception caught, isSameOrigin remains false
        }

        // In Mac !! the window.__TAURI__ object is present in iframes, even if it doesnt works. so we are forced
        // to use if(window.parent.window !== window) instead of if(!window.__TAURI__) here.
        if(canAccessTauri && window.parent.window !== window && window.top.window.__TAURI__) {
            // This is only intended to be used for in tests where phoenix is loaded inside iframes.
            // this means that we are loaded in an iframe in the specrunner. Tauri doesnt expose tauri APIs
            // in its iframes, so we directly use the top most windows tauri api object for tests to run properly.
            console.warn("Phoenix is loaded in iframe, attempting to use tauri APIs from window.top.__TAURI__");
            window.__TAURI__ = {
                invoke: window.top.window.__TAURI__.invoke,
                convertFileSrc: window.top.window.__TAURI__.convertFileSrc,
                transformCallback: window.top.window.__TAURI__.transformCallback,
                app: window.top.window.__TAURI__.app,
                cli: window.top.window.__TAURI__.cli,
                clipboard: window.top.window.__TAURI__.clipboard,
                dialog: window.top.window.__TAURI__.dialog,
                event: window.top.window.__TAURI__.event,
                globalShortcut: window.top.window.__TAURI__.globalShortcut,
                http: window.top.window.__TAURI__.http,
                mocks: window.top.window.__TAURI__.mocks,
                notification: window.top.window.__TAURI__.notification,
                os: window.top.window.__TAURI__.os,
                path: window.top.window.__TAURI__.path,
                process: window.top.window.__TAURI__.process,
                shell: window.top.window.__TAURI__.shell,
                tauri: window.top.window.__TAURI__.tauri,
                updater: window.top.window.__TAURI__.updater,
                window: window.top.window.__TAURI__.window,
                fs: {} // this needs some special handling and will be assigned below.
            };
            // fs special handling start :patch the fs.readBinaryFile and fs.WriteBinaryFile apis to use this windows uint8arrays
            for (let key in window.top.window.__TAURI__.fs) {
                window.__TAURI__.fs[key] = window.top.window.__TAURI__.fs[key];
            }

            const readBinaryFile = window.__TAURI__.fs.readBinaryFile;
            const writeBinaryFile = window.__TAURI__.fs.writeBinaryFile;
            window.__TAURI__.fs.readBinaryFile = function (...args) {
                return new Promise((resolve, reject)=>{
                    readBinaryFile(...args)
                        .then(contents=>{
                            // contents is Uint8Array of parent window instance type. we have to convert it to
                            // this windows uintarray type
                            resolve(new Uint8Array(contents))
                        })
                        .catch(reject)
                });
            }
            window.__TAURI__.fs.writeBinaryFile = function (platformPath, arrayBuffer, options) {
                let uint8ArrayOfTop = new window.top.Uint8Array(arrayBuffer); // this will only pass the reference
                uint8ArrayOfTop = new window.top.Uint8Array(uint8ArrayOfTop); // this will perform a deep copy bitwise
                return new Promise((resolve, reject)=>{
                    writeBinaryFile(platformPath, uint8ArrayOfTop.buffer, options)
                        .then(resolve)
                        .catch(reject)
                });
            }
            // fs special handling end
        }
        if(window.__TAURI__) {
            function setupTauriBootVars() {
                // this is used by storage.js (window.PhStore) to restore our persistent storage layer in tauri.
                window._tauriStorageRestorePromise = window.__TAURI__.fs.readTextFile(
                    "storageDB/storageDBDump.json", { dir: window.__TAURI__.fs.BaseDirectory.AppLocalData })
                    .catch(err =>{
                        console.error("First boot detected or Failed to init storage from cache." +
                            " If first boot, ignore this error", err);
                    });
                // increase this version number if you are modifying any boot vars
                const TAURI_BOOT_VARS_LOCALSTORAGE_KEY = "tauriBootVarsV1";
                const tauriBootVarsStr = localStorage.getItem(TAURI_BOOT_VARS_LOCALSTORAGE_KEY);
                if(tauriBootVarsStr) {
                    try{
                        window._tauriBootVars = JSON.parse(tauriBootVarsStr);
                        window._tauriBootVarsPromise = Promise.resolve("Resolved from localstorage.");
                    } catch (e) {
                        console.error("Error getting tauri boot vars from localstorage. Falling back to make tauri bootstrap calls.", e);
                    }
                }
                const appNamePromise = window.__TAURI__.app.getName();
                // for running tests, the user document dir is set to app data dir as we dont want to
                // corrupt user documents dir for tests
                let documentDirPromise, homeDirPromise;
                if(_isTestWindow()){
                    documentDirPromise = window.__TAURI__.path.appLocalDataDir(); // appdata/testDocuments will be appended below
                } else {
                    documentDirPromise = window.__TAURI__.path.documentDir();
                    homeDirPromise = window.__TAURI__.path.homeDir();
                }

                const appLocalDirPromise =  window.__TAURI__.path.appLocalDataDir();
                const tempDirPromise = window.__TAURI__.os.tempdir();
                window._tauriBootVars = {};
                const tauriBootStartTime = Date.now();
                window._tauriBootVarsPromise = Promise.allSettled([appNamePromise, documentDirPromise,
                    appLocalDirPromise, tempDirPromise, homeDirPromise])
                    .then((results) => {
                        window._tauriBootVars.appname = results[0].value;

                        if(results[1].status === "fulfilled"){
                            window._tauriBootVars.documentDir = results[1].value;
                        } else if(results[4].status === "fulfilled"){
                            // some linux distros may not have Documents folder. so we use the home folder
                            // https://github.com/phcode-dev/phoenix/issues/1729
                            window._tauriBootVars.documentDir = results[4].value;
                        } else if(results[2].status === "fulfilled"){
                            console.error("Unable to determine user documents dir, defaulting to app data dir as document dir:",
                                results[1].reason, "home folder error: ", results[4].reason);
                            window._tauriBootVars.documentDir = results[2].value;
                        } else {
                            alert("Could not resolve user documents directory. \nPhoenix Code cannot start.");
                        }

                        if(results[2].status === "fulfilled") {
                            window._tauriBootVars.appLocalDir = results[2].value;
                        } else {
                            alert("Could not resolve Application Data directory. \nPhoenix Code cannot start.");
                        }

                        // For tests, documents dir is localAppDataDir/testDocuments to keep user documents garbage free for tests
                        // Also In github actions, the tauri get doc dir call gets stuck indefinitely
                        if(_isTestWindow()){
                            if(!window._tauriBootVars.documentDir.endsWith(window.__TAURI__.path.sep)){
                                window._tauriBootVars.documentDir = window._tauriBootVars.documentDir + window.__TAURI__.path.sep;
                            }
                            window._tauriBootVars.documentDir = `${window._tauriBootVars.documentDir}testDocuments${window.__TAURI__.path.sep}`;
                        }
                        //Documents dir special case for tests

                        window._tauriBootVars.appLocalDir = results[2].value;
                        window._tauriBootVars.tempDir = results[3].value;
                        window._tauriBootVars.bootstrapTime = Date.now() - tauriBootStartTime;
                        localStorage.setItem(TAURI_BOOT_VARS_LOCALSTORAGE_KEY, JSON.stringify(window._tauriBootVars));
                    });
            }
            setupTauriBootVars();
        }

        // environment setup for boot. do not move out of index html!!
        (function(){
            function _mobileCheck() {
                let check = false;
                // eslint-disable-next-line
                (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
                return check;
            }
            function _mobileAndTabletCheck() {
                let check = false;
                // eslint-disable-next-line
                (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
                return check;
            }
            function isSafari() {
                // Safari 3.0+ "[object HTMLElementConstructor]"
                return /constructor/i.test(window.HTMLElement)
                  || (function (p) {
                      return p.toString() === "[object SafariRemoteNotification]";
                  })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
            }
            function detectEngine() {
                const userAgent = navigator.userAgent;

                if (/WebKit/.test(userAgent)) {
                    if (/Chrome|Blink|Edg\//.test(userAgent)) {
                        return 'Blink';  // Chrome or Edge (based on Blink)
                    } else {
                        return 'WebKit'; // Likely Safari or other true WebKit-based browser
                    }
                }

                return 'Other';
            }
            function getBrowserDetails() {
                let isChrome = navigator.userAgent.indexOf("Chrome") !== -1;
                let isEdgeBrowser = navigator.userAgent.indexOf("Edg") !== -1;
                let isEdgeChromiumBrowser = isChrome && isEdgeBrowser;
                let isOpera = (!!window.opr && !!window.opr.addons) ||
                    !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
                let isOperaChromiumBrowser = isChrome && isOpera;
                let isChromeBrowser = isChrome && !isEdgeChromiumBrowser && !isOperaChromiumBrowser;
                return{
                    isTablet: _mobileAndTabletCheck(),
                    isMobile: _mobileCheck(),
                    isDeskTop: !_mobileAndTabletCheck() && !_mobileCheck(),
                    isChromeOS: /CrOS/.test(navigator.userAgent),
                    isTauri: !!window.__TAURI__,
                    mobile: {
                        isAndroid: (navigator.userAgent.match(/Android/i) !== null),
                        isIos: (navigator.userAgent.match(/iPhone|iPad|iPod/i) !== null),
                        isOpera: (navigator.userAgent.match(/Opera Mini/i) !== null),
                        isWindows: ((navigator.userAgent.match(/IEMobile/i) ||
                            navigator.userAgent.match(/WPDesktop/i))!== null)
                    },
                    desktop: {
                        isOpera: isOpera,
                        isFirefox: typeof window.InstallTrigger !== 'undefined',
                        isChromeBased: isChrome,
                        isChrome: isChromeBrowser,
                        isEdgeChromium: isEdgeChromiumBrowser,
                        isOperaChromium: isOperaChromiumBrowser,
                        isSafari: isSafari(),
                        isWebKit: detectEngine() === 'WebKit',
                        isBlink: detectEngine() === 'Blink'
                    }
                };
            }
            function _getBaseURL() {
                // strip query string
                let base = window.location.href.split('?')[0];
                if(base.endsWith(".html")){
                    base = base.slice(0, base.lastIndexOf('/'));
                }
                if(!base.endsWith("/")){
                    base = `${base}/`;
                }
                return base;
            }

            // Determine OS/platform
            window._getPlatformOverride = function (){
                const currentUrl = window.location.href;
                const searchParams = new URLSearchParams(new URL(currentUrl).search);
                const platform = searchParams.get('platform');
                const allowedOverRides = ['win', 'mac', 'linux'];
                if(allowedOverRides.includes(platform)){
                    return platform;
                }
                return null;
            }
            let platform = "win";
            if(_getPlatformOverride() && _isTestWindow()){
                platform = _getPlatformOverride();
                console.warn("using platform override: ", platform, "This is only expected to run in tests.");
            } else if (navigator.platform && navigator.platform.match("Mac")) {
                platform = "mac";
            } else if (navigator.platform && navigator.platform.indexOf("Linux") >= 0) {
                platform = "linux";
            }
            window.Phoenix = {
                PHOENIX_INSTANCE_ID: "PH-" + Math.round( Math.random()*1000000000000),
                browser: getBrowserDetails(),
                platform,
                baseURL: _getBaseURL(),
                isTestWindow: _isTestWindow(),
                firstBoot: false, // will be set below
                startTime: Date.now(),
                TRUSTED_ORIGINS: {
                    // if modifying this list, make sure to update in https://github.com/phcode-dev/phcode.live/blob/main/docs/trustedOrigins.js
                    // extensions may add their trusted origin to this list at any time.
                    'http://localhost:8000': true, // phcode dev server
                    'http://localhost:8001': true, // phcode dev live preview server
                    'http://localhost:5000': true, // playwright tests
                    'http://127.0.0.1:8000': true, // phcode dev server
                    'http://127.0.0.1:8001': true, // phcode dev live preview server
                    'http://127.0.0.1:5000': true, // playwright tests
                    'phtauri://localhost': true, // tauri prod app
                    'https://phtauri.localhost': true, // tauri
                    'https://phcode.live': true, // phcode prod live preview server
                    'https://phcode.dev': true,
                    'https://dev.phcode.dev': true,
                    'https://staging.phcode.dev': true,
                    'https://create.phcode.dev': true
                }
            };
            window.Phoenix.isNativeApp = window.Phoenix.browser.isTauri;
            window.Phoenix.TRUSTED_ORIGINS[location.origin] = true;
            Phoenix.isSupportedBrowser = Phoenix.isNativeApp ||
                (Phoenix.browser.isDeskTop && ("serviceWorker" in navigator));
            window.testEnvironment = window.Phoenix.isTestWindow;

            // now setup PhoenixBaseURL, which if of the form https://phcode.dev/ or tauri://localhost/
            const url = new URL(window.location.href);
            url.search = ''; // remove all query string params.
            let baseUrl = url.href;
            if(baseUrl.endsWith(".html")){
                // http://a.b/index.html -> // http://a.b
                baseUrl = baseUrl.substring(0, baseUrl.lastIndexOf("/"));
            }
            if(!baseUrl.endsWith("/")){
                baseUrl = baseUrl + "/";
            }
            window.PhoenixBaseURL = baseUrl;
        }());
    </script>
    <script src="./challenge-amigo-secreto_files/virtualfs.js.descarga"></script>

    <!-- load bugsnag error reporter as soon as cache handling code is done-->
    <script src="./challenge-amigo-secreto_files/bugsnag.min.js.descarga"></script>
    <script src="./challenge-amigo-secreto_files/appConfig.js.descarga"></script>
    <script type="module">
        import BugsnagPerformance from "./thirdparty/bugsnag-performance.min.js";
        BugsnagPerformance.start({
            apiKey: '94ef94f4daf871ca0f2fc912c6d4764d',
            appVersion: AppConfig.version,
            releaseStage: window.__TAURI__ ? `tauri-${AppConfig.config.bugsnagEnv}-${Phoenix.platform}` : AppConfig.config.bugsnagEnv,
            autoInstrumentRouteChanges: false,
            autoInstrumentNetworkRequests: false,
            autoInstrumentFullPageLoads: false
        });
        window.BugsnagPerformance = BugsnagPerformance;
    </script>
    <script src="./challenge-amigo-secreto_files/loggerSetup.js.descarga"></script>
    <script src="./challenge-amigo-secreto_files/EventDispatcher.js.descarga"></script>

    <script>
        window.splashScreenPresent = true;

        /*Bootstrap cache check. since index.html is always loaded network first, the cache reset code will always
        be guaranteed to be hit on app update.
        Note that this cannot be moved to a separate file and should be in index.html due to above reason.
        There is a nuke cache option. Though mostly safe, Use it wisely to prevent slow startup when resetting.
        */
        window._CURRENT_CACHE_VERSION_KEY = "currentWebCacheVersion";
        if(!localStorage.getItem(window._CURRENT_CACHE_VERSION_KEY)){
            // first boot, no cache
            localStorage.setItem(window._CURRENT_CACHE_VERSION_KEY, PHOENIX_APP_CACHE_VERSION);
        }

        function _loadPhoenixMain() {
            if(window._phoenixMainLoaded){
                return;
            }
            window._phoenixMainLoaded = true;
            const loadJS = function(url, implementationCode, location, dataMainValue){
                //url is URL of external file, implementationCode is the code
                //to be called from the file, location is the location to
                //insert the <script> element

                const scriptTag = document.createElement('script');
                if(dataMainValue){
                    scriptTag.setAttribute('data-main', dataMainValue);
                }
                scriptTag.onload = implementationCode;
                scriptTag.onreadystatechange = implementationCode;
                scriptTag.src = url;

                location.appendChild(scriptTag);
            };
            function _requireDone() {
                loadJS('verify-dependencies-loaded.js', null, document.body);
            }

            function _startRequireLoop() {
                loadJS('thirdparty/requirejs/require.js', _requireDone, document.body, "main");
            }
            if(window.PhStore){
                window.PhStore.storageReadyPromise.finally(_startRequireLoop);
            } else {
                const interval = setInterval(()=>{
                    if(window.PhStore){
                        clearInterval(interval);
                        PhStore.storageReadyPromise.finally(_startRequireLoop);
                    }
                }, 50);
            }
        }

        async function _resetCacheIfNeeded(force) {
            if(Phoenix.isNativeApp || Phoenix.isTestWindow) {
                // no web cache in desktop builds ot test windows
                return;
            }
            if(!window.caches){
                console.error("CacheStorage: API not supported by browser.");
            }

            function _showUpdateMessage(message) {
                let splashScreenFrame = document.getElementById("splash-screen-frame");
                if(splashScreenFrame){
                    let displayText2 = splashScreenFrame.contentDocument.getElementById("load-status-display-text");
                    displayText2 && (displayText2.textContent = message);
                }
            }

            async function computeSHA256(response) {
                try {
                    if (!response.ok) {
                        return null;
                    }
                    const data = await response.arrayBuffer();
                    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
                    // Convert the ArrayBuffer to hex string
                    const hashArray = Array.from(new Uint8Array(hashBuffer));
                    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
                } catch (error) {
                    console.error("cache-upgrade: error computing hash:", error);
                    return null;
                }
            }

            async function migrate(oldCache, newCache, newCacheManifest) {
                try{
                    const newCacheOpen = await caches.open(newCache);
                    const oldCacheOpen = await caches.open(oldCache);
                    const oldCacheKeys = await oldCacheOpen.keys();
                    let count = 0, totalCount = 0;
                    for(let request of oldCacheKeys){
                        totalCount++;
                        let newResponseCached = await newCacheOpen.match(request);
                        let relativePath = (new URL(request.url)).pathname.slice(1);
                        const newSHA = newCacheManifest[relativePath];
                        if(!newResponseCached && newSHA) {
                            const oldResponse = await oldCacheOpen.match(request);
                            const oldResponseClone = oldResponse.clone();
                            if(!oldResponse){
                                continue;
                            }
                            _showUpdateMessage(`${count} of ${totalCount} files unchanged...`);
                            const oldSHA = await computeSHA256(oldResponse);
                            if(newSHA === oldSHA) {
                                count++;
                                await newCacheOpen.put(request, oldResponseClone);
                            }
                        }
                    }
                    console.log("cache-upgrade: reused entries from old cache: ", count, "of", totalCount);
                    await caches.delete(oldCache);
                } catch (e) {
                    console.error("cache-upgrade: Error while migrating cache", e);
                }
            }

            async function updateCache(newCacheName, oldCacheName, defaultCacheName) {
                try{
                    let newCacheManifest = await fetch(`web-cache/${newCacheName}/cacheManifest.json`);
                    if(!newCacheManifest.ok){
                        return false;
                    }
                    newCacheManifest = await newCacheManifest.json();
                    _showUpdateMessage("Migrating default caches...");
                    if(await caches.has(defaultCacheName)){
                        await migrate(defaultCacheName, newCacheName, newCacheManifest);
                    }
                    _showUpdateMessage("Migrating last version caches...");
                    if(oldCacheName && await caches.has(oldCacheName)){
                        await migrate(oldCacheName, newCacheName, newCacheManifest);
                    }
                    return true;
                } catch (e) {
                    console.error("Error updating cache: ", e);
                }
                return false;
            }

            const LESS_REFRESH_SCHEDULED_KEY = "lessRefreshScheduled";

            function _readFileSafe(readPath) {
                return new Promise(resolve =>{
                    fs.readFile(readPath, "utf8", (err, text)=>{
                        if(err){
                            console.error("Could not read", readPath)
                            resolve(null);
                            return;
                        }
                        resolve(text);
                    });
                });
            }

            function _writeFileSafe(writePath, text) {
                return new Promise(resolve =>{
                    fs.writeFile(writePath, text, "utf8", (err)=>{
                        if(err){
                            console.error("Could not written", writePath)
                        }
                        resolve(err);
                    });
                });
            }

            const WEB_CACHE_FILE_PATH = "/webCacheVersion.txt";
            const CACHE_NAME_EVERYTHING = "everythingV2"; // this is used in service worker
            /**
             * Clears legacy caches from the browser storage. This function is intended to be used
             * when migrating to a new cache management strategy. Safe to be deleted after sep-2024
             * @return {Promise<void>}
             */
            async function clearLegacyCache() {
                // as we switched to new versioned cache management, we will be clearing all the legacy cache.
                const legacyCacheName = "browserCacheVersionKey";
                const lastClearedVersion = window.localStorage.getItem(legacyCacheName);
                if(lastClearedVersion){
                    // legacy cache detected
                    console.log("Legacy cache detected, resetting...");
                    localStorage.removeItem(legacyCacheName);
                    await window.caches.delete(legacyCacheName);
                    localStorage.setItem(LESS_REFRESH_SCHEDULED_KEY, "yes");
                    if(window.fs){
                        await _writeFileSafe(WEB_CACHE_FILE_PATH, PHOENIX_APP_CACHE_VERSION);
                        location.reload();
                    } else {
                        location.reload();
                    }
                }
            }
            await clearLegacyCache();

            const shouldRefreshLess = window.localStorage.getItem(LESS_REFRESH_SCHEDULED_KEY) === 'yes';
            if(shouldRefreshLess){
                let lessRefreshInterval = setInterval(()=>{
                    // wait for less to get loaded. less caches css in local storage in production urls
                    // and might not load new css classes if we don't reset. less doesn't cache in localhost.
                    if(window.less && less.refresh){
                        less.refresh(true).finally(()=>{
                            localStorage.setItem(LESS_REFRESH_SCHEDULED_KEY, "no");
                        });
                        clearInterval(lessRefreshInterval);
                    }
                }, 500);
            }

            const currentCacheName = await _readFileSafe(WEB_CACHE_FILE_PATH);
            if(force){
                // We have to delete and clear cache if force option is given
                await window.caches.delete(CACHE_NAME_EVERYTHING);
                currentCacheName && await window.caches.delete(currentCacheName);
            }
            if(!currentCacheName) {
                // fresh install, no cache
                console.log("No cache detected, ignore if first boot or safari ITP.");
                localStorage.setItem(window._CURRENT_CACHE_VERSION_KEY, PHOENIX_APP_CACHE_VERSION);
                await _writeFileSafe(WEB_CACHE_FILE_PATH, PHOENIX_APP_CACHE_VERSION);
                // on next reload, the new cache will be active and populated by service worker
            } else if(currentCacheName && (currentCacheName !== PHOENIX_APP_CACHE_VERSION || force)) {
                // This is an upgrade we could in the future use the cacheManifest.json to increase update speed
                // by only selectively updating the changed files.
                console.warn("Old version cache detected", currentCacheName, "updating to", PHOENIX_APP_CACHE_VERSION);
                const cacheUpdated = await updateCache(PHOENIX_APP_CACHE_VERSION, currentCacheName, CACHE_NAME_EVERYTHING);
                if(cacheUpdated){
                    await _writeFileSafe(WEB_CACHE_FILE_PATH, PHOENIX_APP_CACHE_VERSION);
                    localStorage.setItem(window._CURRENT_CACHE_VERSION_KEY, PHOENIX_APP_CACHE_VERSION);
                    localStorage.setItem(LESS_REFRESH_SCHEDULED_KEY, "yes");
                    if(!force){
                        location.reload();
                        // force reload handlers should reload themselves.
                    }
                } else if(location.pathname.endsWith("/src/") || location.pathname.endsWith("/dist/")
                    || location.pathname.endsWith("index.html")){
                    // load phoenix if its any of the non-cached urls.
                    _loadPhoenixMain();
                }
            }
        }
        _resetCacheIfNeeded();

        function _addOrRemoveSplashScreenIfNeeded() {
            if(!window.__TAURI__) {
                document.getElementById('phoenix-loading-splash-screen-overlay').classList.remove('forced-hidden')
            }
            if(window.testEnvironment || window.__TAURI__){
                // tauri means local builds and, it loads up pretty fast, so splash screen
                document.getElementById('phoenix-loading-splash-screen-overlay').remove();
                window.splashScreenPresent = false;
            }
        }

        // this function is called onload so it is safe to be deferred loaded inline script as it is guarented to only
        // get executed after all deferred scripts has been loaded
        function _loadPhoenixAfterSplashScreen() {
            $("#Phoenix-Main .main-view").removeClass("forced-hidden");
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                // Dark mode is enabled
                document.body.classList.add('dark'); // This will later be overridden by the theme manager as required.
            }
            _addOrRemoveSplashScreenIfNeeded();
            if(!Phoenix.isNativeApp && !Phoenix.isTestWindow) {
                const currentCacheVersion = localStorage.getItem(window._CURRENT_CACHE_VERSION_KEY);
                if(currentCacheVersion !== PHOENIX_APP_CACHE_VERSION){
                    // dont load phoenix as the cache is inconsistent, the updater will reload after fixing cache
                    let splashScreenFrame = document.getElementById("splash-screen-frame");
                    if(!splashScreenFrame){
                        return;
                    }
                    let displayBtn1 = splashScreenFrame.contentDocument.getElementById("load-status-display-btn");
                    let displayText2 = splashScreenFrame.contentDocument.getElementById("load-status-display-text");
                    displayBtn1 && (displayBtn1.textContent = "Updating app...");
                    displayText2 && (displayText2.textContent = "Please wait....");
                    return;
                }
            }
            _loadPhoenixMain();
        }
    </script>

    <!-- start inline javascript and non module bootstrap scripts-->

    <!-- start javascript module scripts-->
    <!--
    All module script tags comes here. If there are non module scripts that depend on modules, they must be
    marked with defer Since module scripts are marked as defer by default. If not done, this can lead to
     unpredictable ordering with mixed scripts as the non module script without defer attribute
     will get loaded before the module scripts.
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-defer
    -->
    <!-- Import the phoenix browser virtual file system -->
    <script src="./challenge-amigo-secreto_files/highlight.min.js.descarga"></script>
    <script src="./challenge-amigo-secreto_files/shell.js.descarga" type="module" defer=""></script>
    <script src="./challenge-amigo-secreto_files/virtual-server-loader(1).js.descarga" type="module" defer=""></script>
<!--    node loader should come only after fs libs are loaded as we init fs libs with node fs urls-->
    <script src="./challenge-amigo-secreto_files/node-loader.js.descarga" defer=""></script>
    <script src="./challenge-amigo-secreto_files/storage.js.descarga" type="module"></script>
    <!-- end javascript module scripts-->

    <!-- CSS/LESS -->

    <link rel="stylesheet" type="text/css" href="./challenge-amigo-secreto_files/github.min.css">
    <link rel="stylesheet" type="text/css" href="./challenge-amigo-secreto_files/all.min.css">
    <link rel="stylesheet" type="text/css" href="./challenge-amigo-secreto_files/devicon.min.css">
    <link rel="stylesheet" type="text/css" href="./challenge-amigo-secreto_files/ffont.css">
    <link rel="stylesheet" type="text/css" href="./challenge-amigo-secreto_files/octicon-woff-only.css">
    <link rel="stylesheet" type="text/css" href="./challenge-amigo-secreto_files/brackets-all.css"> <!--will be replaced in prod/staging with brackets-all.css by release:staging and prod command-->

    <!-- Pre-load third party scripts that cannot be async loaded. Defer loading of all below scripts
     caused increase in boot time with cache as observed from analytics. so we don't defer third party deps-->
    <script>
        // https://lesscss.org/usage/#using-less-in-the-browser-setting-options
        less = {
            math: 'always'
        };
    </script>
    <script src="./challenge-amigo-secreto_files/less.min.js.descarga" defer=""></script>
    <script src="./challenge-amigo-secreto_files/jquery-2.1.3.min.js.descarga" defer=""></script>
    <script src="./challenge-amigo-secreto_files/underscore-min.js.descarga" defer=""></script>
    <script src="./challenge-amigo-secreto_files/floating-ui.core.umd.min.js.descarga" defer=""></script>
    <script src="./challenge-amigo-secreto_files/floating-ui.dom.umd.min.js.descarga" defer=""></script>
    <script type="text/javascript" src="./challenge-amigo-secreto_files/FileSaver.min.js.descarga" defer=""></script>
    <script type="text/javascript" src="./challenge-amigo-secreto_files/jszip.js.descarga" defer=""></script>
    <script type="text/javascript" src="./challenge-amigo-secreto_files/jszip-utils-phoenix.js.descarga" defer=""></script>

    <!-- Warn about failed cross origin requests in Chrome -->
    <script type="application/javascript" src="./challenge-amigo-secreto_files/xorigin.js.descarga" defer=""></script>
    <style>
        #phoenix-loading-splash-screen-overlay {
            position: fixed; /* Sit on top of the page content */
            display: block; /* Hidden by default */
            width: 100%; /* Full width (cover the whole page) */
            height: 100%; /* Full height (cover the whole page) */
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0,0,0,0.5); /* Black background with opacity */
            z-index: 1000000; /* overlay should be at the top */
            cursor: pointer; /* Add a pointer on hover */
        }
    </style>

    <script type="text/javascript">
        function _chromeOSPWAHandle() {
            let deferredPrompt;
            const PWA_PROMPTED_BEFORE_KEY = "PWA_PROMPTED_BEFORE";
            function isChromeOS() {
                return /CrOS/.test(navigator.userAgent);
            }
            function showPWAInstallIcon() {
                if(!window.$ || !window.Strings){
                    setTimeout(showPWAInstallIcon, 5000);
                    return;
                }
                let $updateIcon = window.$("#update-notification");
                $updateIcon.removeClass("forced-hidden");
                $updateIcon.attr("title", Strings.INSTALL_WEBAPP);
                $updateIcon.click(()=>{
                    deferredPrompt.prompt();
                    deferredPrompt.userChoice.then((choiceResult) => {
                        if (choiceResult.outcome === 'accepted') {
                            deferredPrompt = null;
                            $updateIcon.addClass("forced-hidden");
                        } else {
                            console.log('User dismissed the A2HS prompt');
                        }
                    });
                });
                if(!localStorage.getItem(PWA_PROMPTED_BEFORE_KEY)){
                    localStorage.setItem(PWA_PROMPTED_BEFORE_KEY, "yes");
                    deferredPrompt.prompt();
                }
            }
            window.addEventListener("beforeinstallprompt", (event) => {
                event.preventDefault(); // no install prompts in any other browser.
                if(!isChromeOS()){
                    return;
                }
                deferredPrompt = event;
                showPWAInstallIcon();
            });
        }
        _chromeOSPWAHandle();
    </script>

<script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="main" src="./challenge-amigo-secreto_files/main.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="utils/Metrics" src="./challenge-amigo-secreto_files/Metrics.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="utils/Compatibility" src="./challenge-amigo-secreto_files/Compatibility.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="utils/EventDispatcher" src="./challenge-amigo-secreto_files/EventDispatcher.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="brackets" src="./challenge-amigo-secreto_files/brackets.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="widgets/bootstrap-dropdown" src="./challenge-amigo-secreto_files/bootstrap-dropdown.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="widgets/bootstrap-modal" src="./challenge-amigo-secreto_files/bootstrap-modal.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="widgets/bootstrap-twipsy-mod" src="./challenge-amigo-secreto_files/bootstrap-twipsy-mod.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/jquery.knob.modified" src="./challenge-amigo-secreto_files/jquery.knob.modified.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/marked.min" src="./challenge-amigo-secreto_files/marked.min.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/addon/comment/continuecomment" src="./challenge-amigo-secreto_files/continuecomment.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/addon/edit/closebrackets" src="./challenge-amigo-secreto_files/closebrackets.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/addon/edit/closetag" src="./challenge-amigo-secreto_files/closetag.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/addon/edit/matchbrackets" src="./challenge-amigo-secreto_files/matchbrackets.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/addon/edit/matchtags" src="./challenge-amigo-secreto_files/matchtags.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/addon/fold/xml-fold" src="./challenge-amigo-secreto_files/xml-fold.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/addon/mode/multiplex" src="./challenge-amigo-secreto_files/multiplex.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/addon/mode/overlay" src="./challenge-amigo-secreto_files/overlay.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/addon/mode/simple" src="./challenge-amigo-secreto_files/simple.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/addon/scroll/scrollpastend" src="./challenge-amigo-secreto_files/scrollpastend.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/addon/search/match-highlighter" src="./challenge-amigo-secreto_files/match-highlighter.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/addon/search/searchcursor" src="./challenge-amigo-secreto_files/searchcursor.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/addon/selection/active-line" src="./challenge-amigo-secreto_files/active-line.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/addon/selection/mark-selection" src="./challenge-amigo-secreto_files/mark-selection.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/addon/display/rulers" src="./challenge-amigo-secreto_files/rulers.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/addon/comment/comment" src="./challenge-amigo-secreto_files/comment.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/keymap/sublime" src="./challenge-amigo-secreto_files/sublime.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="NodeConnector" src="./challenge-amigo-secreto_files/NodeConnector.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="strings" src="./challenge-amigo-secreto_files/strings.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/lodash" src="./challenge-amigo-secreto_files/lodash.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/tinycolor" src="./challenge-amigo-secreto_files/tinycolor.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/lib/codemirror" src="./challenge-amigo-secreto_files/codemirror.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/mustache/mustache" src="./challenge-amigo-secreto_files/mustache.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/path-utils/path-utils" src="./challenge-amigo-secreto_files/path-utils.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/acorn/dist/acorn" src="./challenge-amigo-secreto_files/acorn.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="text" src="./challenge-amigo-secreto_files/text.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/acorn/dist/acorn_loose" src="./challenge-amigo-secreto_files/acorn_loose.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/murmurhash3_gc" src="./challenge-amigo-secreto_files/murmurhash3_gc.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/semver.browser" src="./challenge-amigo-secreto_files/semver.browser.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="widgets/bootstrap-tab" src="./challenge-amigo-secreto_files/bootstrap-tab.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="fileSystemImpl" src="./challenge-amigo-secreto_files/AppshellFileSystem.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/acorn/dist/walk" src="./challenge-amigo-secreto_files/walk.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/globmatch" src="./challenge-amigo-secreto_files/globmatch.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="preferences/PreferencesImpl" src="./challenge-amigo-secreto_files/PreferencesImpl.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="i18n" src="./challenge-amigo-secreto_files/i18n.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="preact-compat" src="./challenge-amigo-secreto_files/preact-compat.min.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/classnames" src="./challenge-amigo-secreto_files/classnames.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/immutable" src="./challenge-amigo-secreto_files/immutable.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/addon/search/matchesonscrollbar" src="./challenge-amigo-secreto_files/matchesonscrollbar.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="preact" src="./challenge-amigo-secreto_files/preact.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/addon/scroll/annotatescrollbar" src="./challenge-amigo-secreto_files/annotatescrollbar.js.descarga"></script><style id="scrollbars"></style><style>#Phoenix-Main .CodeMirror-matchingtag:not(.CodeMirror-searching) {
  background: #cfead6;
  --border-height: calc((var(--editor-line-height) * 1em - 1em) / 2);
  border-top: var(--border-height) solid #cfead6;
  border-bottom: var(--border-height) solid #cfead6;
}
</style><link type="text/css" rel="stylesheet" href="./challenge-amigo-secreto_files/styles.css"><link type="text/css" rel="stylesheet" href="./challenge-amigo-secreto_files/live-preview.css"><link type="text/css" rel="stylesheet" href="./challenge-amigo-secreto_files/default_provider_style.css"><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/groovy/groovy" src="./challenge-amigo-secreto_files/groovy.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/properties/properties" src="./challenge-amigo-secreto_files/properties.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/css/css" src="./challenge-amigo-secreto_files/css.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/stylus/stylus" src="./challenge-amigo-secreto_files/stylus.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/htmlmixed/htmlmixed" src="./challenge-amigo-secreto_files/htmlmixed.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/htmlembedded/htmlembedded" src="./challenge-amigo-secreto_files/htmlembedded.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/javascript/javascript" src="./challenge-amigo-secreto_files/javascript.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/jsx/jsx" src="./challenge-amigo-secreto_files/jsx.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/stex/stex" src="./challenge-amigo-secreto_files/stex.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/dart/dart" src="./challenge-amigo-secreto_files/dart.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/vbscript/vbscript" src="./challenge-amigo-secreto_files/vbscript.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/vb/vb" src="./challenge-amigo-secreto_files/vb.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/xml/xml" src="./challenge-amigo-secreto_files/xml.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/php/php" src="./challenge-amigo-secreto_files/php.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/clike/clike" src="./challenge-amigo-secreto_files/clike.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/rust/rust" src="./challenge-amigo-secreto_files/rust.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/coffeescript/coffeescript" src="./challenge-amigo-secreto_files/coffeescript.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/clojure/clojure" src="./challenge-amigo-secreto_files/clojure.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/perl/perl" src="./challenge-amigo-secreto_files/perl.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/ruby/ruby" src="./challenge-amigo-secreto_files/ruby.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/python/python" src="./challenge-amigo-secreto_files/python.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/sass/sass" src="./challenge-amigo-secreto_files/sass.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/lua/lua" src="./challenge-amigo-secreto_files/lua.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/sql/sql" src="./challenge-amigo-secreto_files/sql.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/diff/diff" src="./challenge-amigo-secreto_files/diff.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/markdown/markdown" src="./challenge-amigo-secreto_files/markdown.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/gfm/gfm" src="./challenge-amigo-secreto_files/gfm.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/yaml/yaml" src="./challenge-amigo-secreto_files/yaml.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/toml/toml" src="./challenge-amigo-secreto_files/toml.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/haxe/haxe" src="./challenge-amigo-secreto_files/haxe.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/shell/shell" src="./challenge-amigo-secreto_files/shell(1).js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/haskell/haskell" src="./challenge-amigo-secreto_files/haskell.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/turtle/turtle" src="./challenge-amigo-secreto_files/turtle.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/go/go" src="./challenge-amigo-secreto_files/go.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/swift/swift" src="./challenge-amigo-secreto_files/swift.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/pug/pug" src="./challenge-amigo-secreto_files/pug.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/meta" src="./challenge-amigo-secreto_files/meta.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="InlineColorEditor" data-requiremodule="main" src="./challenge-amigo-secreto_files/main(1).js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="CloseOthers" data-requiremodule="main" src="./challenge-amigo-secreto_files/main(2).js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="DebugCommands" data-requiremodule="main" src="./challenge-amigo-secreto_files/main(3).js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="CodeFolding" data-requiremodule="main" src="./challenge-amigo-secreto_files/main(4).js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="CSSPseudoSelectorHints" data-requiremodule="main" src="./challenge-amigo-secreto_files/main(5).js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="HandlebarsSupport" data-requiremodule="main" src="./challenge-amigo-secreto_files/main(6).js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="CSSCodeHints" data-requiremodule="main" src="./challenge-amigo-secreto_files/main(7).js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="JSLint" data-requiremodule="main" src="./challenge-amigo-secreto_files/main(8).js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="PrefsCodeHints" data-requiremodule="main" src="./challenge-amigo-secreto_files/main(9).js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="CSSAtRuleCodeHints" data-requiremodule="main" src="./challenge-amigo-secreto_files/main(10).js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="SVGCodeHints" data-requiremodule="main" src="./challenge-amigo-secreto_files/main(11).js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="HTMLCodeHints" data-requiremodule="main" src="./challenge-amigo-secreto_files/main(12).js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="JavaScriptQuickEdit" data-requiremodule="main" src="./challenge-amigo-secreto_files/main(13).js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="QuickView" data-requiremodule="main" src="./challenge-amigo-secreto_files/main(14).js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="InlineTimingFunctionEditor" data-requiremodule="main" src="./challenge-amigo-secreto_files/main(15).js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="HtmlEntityCodeHints" data-requiremodule="main" src="./challenge-amigo-secreto_files/main(16).js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="MDNDocs" data-requiremodule="main" src="./challenge-amigo-secreto_files/main(17).js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="Phoenix-prettier" data-requiremodule="main" src="./challenge-amigo-secreto_files/main(18).js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="HealthData" data-requiremodule="main" src="./challenge-amigo-secreto_files/main(19).js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="JavaScriptRefactoring" data-requiremodule="main" src="./challenge-amigo-secreto_files/main(20).js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="JavaScriptCodeHints" data-requiremodule="main" src="./challenge-amigo-secreto_files/main(21).js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="InlineColorEditor" data-requiremodule="InlineColorEditor" src="./challenge-amigo-secreto_files/InlineColorEditor.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="DebugCommands" data-requiremodule="text" src="./challenge-amigo-secreto_files/text.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/addon/fold/brace-fold" src="./challenge-amigo-secreto_files/brace-fold.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/addon/fold/comment-fold" src="./challenge-amigo-secreto_files/comment-fold.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/addon/fold/markdown-fold" src="./challenge-amigo-secreto_files/markdown-fold.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="CSSPseudoSelectorHints" data-requiremodule="text" src="./challenge-amigo-secreto_files/text.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="JSLint" data-requiremodule="JSHint" src="./challenge-amigo-secreto_files/JSHint.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="JSLint" data-requiremodule="ESLint" src="./challenge-amigo-secreto_files/ESLint.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="CSSAtRuleCodeHints" data-requiremodule="text" src="./challenge-amigo-secreto_files/text.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="SVGCodeHints" data-requiremodule="text" src="./challenge-amigo-secreto_files/text.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="CSSCodeHints" data-requiremodule="text" src="./challenge-amigo-secreto_files/text.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="CSSCodeHints" data-requiremodule="css-lint" src="./challenge-amigo-secreto_files/css-lint.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="thirdparty/CodeMirror/mode/handlebars/handlebars" src="./challenge-amigo-secreto_files/handlebars.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="HTMLCodeHints" data-requiremodule="HTMLJumpToDef" src="./challenge-amigo-secreto_files/HTMLJumpToDef.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="HTMLCodeHints" data-requiremodule="text" src="./challenge-amigo-secreto_files/text.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="HTMLCodeHints" data-requiremodule="html-lint" src="./challenge-amigo-secreto_files/html-lint.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="JavaScriptRefactoring" data-requiremodule="text" src="./challenge-amigo-secreto_files/text.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="HtmlEntityCodeHints" data-requiremodule="text" src="./challenge-amigo-secreto_files/text.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="MDNDocs" data-requiremodule="InlineDocsViewer" src="./challenge-amigo-secreto_files/InlineDocsViewer.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="InlineTimingFunctionEditor" data-requiremodule="InlineTimingFunctionEditor" src="./challenge-amigo-secreto_files/InlineTimingFunctionEditor.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="InlineTimingFunctionEditor" data-requiremodule="TimingFunctionUtils" src="./challenge-amigo-secreto_files/TimingFunctionUtils.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="InlineTimingFunctionEditor" data-requiremodule="text" src="./challenge-amigo-secreto_files/text.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="InlineColorEditor" data-requiremodule="ColorEditor" src="./challenge-amigo-secreto_files/ColorEditor.js.descarga"></script><style>.CodeMirror-foldgutter-open:after {
  content: "\25bc";
  font-size: 1em;
  color: #ccc;
}
.CodeMirror-foldgutter-folded:after {
  content: "\25b6";
  font-size: 1em;
  color: #999;
}
.CodeMirror.over-gutter .CodeMirror-foldgutter-open:after,
.CodeMirror-activeline .CodeMirror-foldgutter-open:after {
  color: #aaa;
}
.CodeMirror-foldgutter,
.CodeMirror-foldgutter-open,
.CodeMirror-foldgutter-folded,
.CodeMirror-foldgutter-blank {
  width: 1em;
  cursor: default;
  line-height: 100%;
}
.CodeMirror-foldgutter-open,
.CodeMirror-foldgutter-folded {
  padding-top: 2px;
}
.CodeMirror-gutter-elt {
  height: 100% !important;
}
.CodeMirror.folding-enabled .CodeMirror-linenumber {
  padding-right: 5px;
}
.show-line-padding .folding-enabled.linenumber-disabled pre {
  padding-left: 0;
}
.CodeMirror.linenumber-disabled .CodeMirror-foldgutter,
.CodeMirror.linenumber-disabled .CodeMirror-foldgutter-open,
.CodeMirror.linenumber-disabled .CodeMirror-foldgutter-folded,
.CodeMirror.linenumber-disabled .CodeMirror-foldgutter-blank {
  padding-left: 15px;
}
.CodeMirror-foldmarker {
  pointer-events: auto;
  padding-right: 3px;
  padding-left: 3px;
  margin-right: 3px;
  margin-left: 3px;
  border-radius: 2px;
  cursor: pointer;
  border: 1px solid #d7d7d7;
  color: #777;
  background-color: #fff;
}
.CodeMirror-foldmarker:after {
  content: "...";
  font-size: 1em;
  vertical-align: top;
  line-height: 0.8em;
}
</style><script type="text/javascript" charset="utf-8" async="" data-requirecontext="UrlCodeHints" data-requiremodule="main" src="./challenge-amigo-secreto_files/main(22).js.descarga"></script><link type="text/css" rel="stylesheet" href="./challenge-amigo-secreto_files/styles(1).css"><script type="text/javascript" charset="utf-8" async="" data-requirecontext="InlineTimingFunctionEditor" data-requiremodule="BezierCurveEditor" src="./challenge-amigo-secreto_files/BezierCurveEditor.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="InlineTimingFunctionEditor" data-requiremodule="StepEditor" src="./challenge-amigo-secreto_files/StepEditor.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="MDNDocs" data-requiremodule="text" src="./challenge-amigo-secreto_files/text.js.descarga"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="InlineColorEditor" data-requiremodule="text" src="./challenge-amigo-secreto_files/text.js.descarga"></script><style>#quick-view-color-swatch {
  width: 40px;
  height: 40px;
  background-size: 100%;
}
#quick-view-image-preview .image-preview {
  line-height: 0;
  background-image: url(https://phcode.dev/extensions/default/QuickView/preview-bg.svg);
  border-radius: 2px;
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.06), 0 1px 0 rgba(255, 255, 255, 0.12);
}
.dark #quick-view-image-preview .image-preview {
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.06), 0 1px 0 rgba(255, 255, 255, 0.06);
  background-image: url(https://phcode.dev/extensions/default/QuickView/preview-bg-dark.svg);
}
#quick-view-image-preview .image-preview img {
  min-width: 100px;
  max-width: 200px;
  max-height: 200px;
}
#quick-view-image-preview .img-size {
  background-color: #d4d7d7;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 0.9em;
  color: #333;
  padding-left: 3px;
  margin-top: 0;
  text-align: left;
  text-shadow: 0 1px 0px rgba(255, 255, 255, 0.12);
}
.dark #quick-view-image-preview .img-size {
  background-color: #222;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  color: #ccc;
  text-shadow: 0 1px 0px rgba(255, 255, 255, 0.06);
}
</style><script type="text/javascript" charset="utf-8" async="" data-requirecontext="UrlCodeHints" data-requiremodule="text" src="./challenge-amigo-secreto_files/text.js.descarga"></script><style>.bezier-curve-editor .coordinate-plane:after,
.step-editor .coordinate-plane:after {
    content: 'Tiempo';
}

.bezier-curve-editor .coordinate-plane:hover:before {
    content: 'Progresión (' attr(data-progression) '%)';
}

.bezier-curve-editor .coordinate-plane:before,
.step-editor .coordinate-plane:before {
    content: 'Progresión';
}

.bezier-curve-editor .coordinate-plane:hover:after {
    content: 'Tiempo (' attr(data-time) '%)';
}
</style><style>/*
 * GNU AGPL-3.0 License
 *
 * Copyright (c) 2021 - present core.ai . All rights reserved.
 * Original work Copyright (c) 2012 - 2021 Adobe Systems Incorporated. All rights reserved.
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License
 * for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see https://opensource.org/licenses/AGPL-3.0.
 *
 */
.CodeMirror .highlight {
  background: #ecc;
}
.CodeMirror .flash {
  -webkit-animation: flash 1s;
}
@-webkit-keyframes flash {
  from {
    background: #ecc;
  }
  to {
    background: inherit;
  }
}
</style><style type="text/css" id="codemirror-dynamic-font-family">.CodeMirror{ font-family: 'SourceCodePro-Medium', ＭＳ ゴシック, 'MS Gothic', monospace  }</style><style type="text/css" id="codemirror-dynamic-fonts">/* mixin for converting EM to PX */
/* mixin for passthrough other units */
.CodeMirror {
  font-size: 12px !important;
}
.codehint-menu .dropdown-menu li a,
.inlinemenu-menu .dropdown-menu li a {
  font-size: 12px !important;
  line-height: 17px !important;
}
span.brackets-js-hints-with-type-details {
  width: 300px !important;
}
.codehint-menu .dropdown-menu,
.inlinemenu-menu .dropdown-menu {
  max-height: 136px !important;
}
</style><script type="text/javascript" async="" src="./challenge-amigo-secreto_files/js(1)"></script><script type="text/javascript" async="" src="./challenge-amigo-secreto_files/analytics.min.js.descarga"></script><style>/*
 * GNU AGPL-3.0 License
 *
 * Copyright (c) 2021 - present core.ai . All rights reserved.
 * Original work Copyright (c) 2012 - 2021 Adobe Systems Incorporated. All rights reserved.
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License
 * for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see https://opensource.org/licenses/AGPL-3.0.
 *
 */
.color-editor {
  font-size: 12px;
  min-width: 450px;
  height: 190px;
  padding: 16px 16px 14px 46px;
}
.color-editor:focus {
  outline: none;
}
.color-editor aside {
  display: inline-block;
  position: relative;
  height: 100%;
  overflow: visible;
  margin-left: 6px;
  vertical-align: top;
}
.color-editor aside header {
  width: 100%;
  overflow: hidden;
  margin-bottom: 10px;
}
.color-editor aside header .large-swatches {
  border-radius: 3px;
  background-image: url("https://phcode.dev/extensions/default/InlineColorEditor/img/color_thumb_back.png");
  background-size: 8px;
  height: 35px;
  width: 88px;
  margin-right: 9px;
  display: inline-block;
  position: relative;
  overflow: hidden;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}
.color-editor aside header .large-swatch {
  width: 50%;
  height: 100%;
  position: absolute;
  box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.2);
}
.color-editor aside header .current-color {
  border-radius: 3px 0px 0px 3px;
  left: 0;
  top: 0;
}
.color-editor aside header .original-color {
  border-radius: 0px 3px 3px 0px;
  right: 0;
  top: 0;
}
.color-editor aside ul.swatches {
  list-style: none;
}
.color-editor aside ul.swatches li {
  height: 18px;
  margin-bottom: 2px;
  padding: 0 1px 1px 2px;
}
.color-editor aside ul.swatches li:focus {
  outline: none;
  box-shadow: 0 0 0 1px #94ceff;
  border-radius: 2px;
}
.color-editor aside ul.swatches li .swatch-bg {
  background-image: url("https://phcode.dev/extensions/default/InlineColorEditor/img/color_thumb_back.png");
  background-size: 8px;
  width: 15px;
  height: 15px;
  border-radius: 3px;
  position: relative;
  top: 2px;
  display: inline-block;
}
.color-editor aside ul.swatches li .swatch-bg .swatch {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2), 0 1px 0 #fff;
  top: 0;
}
.color-editor aside ul.swatches li .value {
  left: -3px;
  position: relative;
  top: -1px;
}
.color-editor section {
  display: inline-block;
  position: relative;
  vertical-align: top;
}
.color-editor section .sliders {
  position: relative;
  clear: both;
}
.color-editor section .gradient-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12), 0 1px 0 rgba(255, 255, 255, 0.5);
}
.color-editor section .color-selection-field {
  width: 181px;
  height: 156px;
  margin-right: 13px;
  display: block;
  border-radius: 4px;
  position: relative;
  float: left;
}
.color-editor section .color-selection-field .saturation-gradient {
  background-image: linear-gradient(to left, hsla(0, 0%, 100%, 0), #fff);
}
.color-editor section .color-selection-field .luminosity-gradient {
  background-image: linear-gradient(hsla(0, 0%, 100%, 0), #000);
}
.color-editor section .color-selection-field .selector-base {
  width: 12px;
  height: 12px;
  background-color: #fff;
  position: absolute;
  margin-bottom: -8px;
  margin-left: -5px;
}
.color-editor section .color-selection-field .selector-base:focus {
  outline: none;
  box-shadow: 0 0 0 5px #94ceff;
  border-radius: 10px;
}
.color-editor section .color-selection-field .selector {
  width: 19px;
  height: 19px;
  position: absolute;
  left: -4px;
  top: -4px;
  background-image: url("https://phcode.dev/extensions/default/InlineColorEditor/img/grabber_color-well.png");
}
.color-editor section .slider {
  border-radius: 3px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  width: 12px;
  height: 156px;
  margin-right: 13px;
  background-color: #ccc;
  display: block;
  box-shadow: 0 1px 0 #fff, inset 0 1px 0 rgba(0, 0, 0, 0.2);
  float: left;
  position: relative;
}
.color-editor section .slider .selector-base {
  width: 14px;
  height: 6px;
  background-color: transparent;
  position: absolute;
  margin: -1px -6px -4px -1px;
}
.color-editor section .slider .selector-base:focus {
  outline: none;
  box-shadow: 0 0 0 5px #94ceff;
  border-radius: 1px;
}
.color-editor section .slider .selector {
  width: 20px;
  height: 12px;
  left: -3px;
  top: -3px;
  position: absolute;
  background-image: url("https://phcode.dev/extensions/default/InlineColorEditor/img/grabber_color-slider.png");
}
.color-editor section .slider.opacity-slider {
  background-image: url("https://phcode.dev/extensions/default/InlineColorEditor/img/color_thumb_back.png");
  background-size: 8px;
  margin-right: 0px;
}
.color-editor section .hue-slider {
  background-image: linear-gradient(#f00, #f0f, #00f, #0ff, #0f0, #ff0, #f00);
}
.color-editor section footer {
  font-size: 100%;
  clear: both;
  line-height: normal;
  padding-top: 10px;
}
.color-editor section footer .color-value {
  width: 118px;
  height: 23px;
  margin-right: 5px;
  border-color: #b2b5b5;
  box-sizing: border-box;
  display: inline-block;
  color: #222;
}
.color-editor section footer input {
  display: inline-block;
  height: 23px;
  padding: 0 0 0 4px;
  border: 1px solid #b2b5b5;
  box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.06);
  background: #fff;
  font-family: "SourceSansPro";
  font-size: 12px;
  color: #454545;
  border-radius: 3px;
  margin: 0;
  vertical-align: middle;
}
.color-editor section footer input:focus {
  background: #fff;
  outline: none;
  box-shadow: 0 0 0 1px #94ceff;
  border: 1px solid #2893ef;
  z-index: 911;
}
@media all and (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2) {
  .color-editor aside header .large-swatches {
    background-image: url("https://phcode.dev/extensions/default/InlineColorEditor/img/color_thumb_back@2x.png");
  }
  .color-editor aside ul.swatches li .swatch-bg {
    background-image: url("https://phcode.dev/extensions/default/InlineColorEditor/img/color_thumb_back@2x.png");
  }
  .color-editor section .color-selection-field .selector {
    background-image: url("https://phcode.dev/extensions/default/InlineColorEditor/img/grabber_color-well@2x.png");
    background-size: 100% 100%;
  }
  .color-editor section .slider .selector {
    background-image: url("https://phcode.dev/extensions/default/InlineColorEditor/img/grabber_color-slider@2x.png");
    background-size: 200% 100%;
  }
  .color-editor section .slider.opacity-slider {
    background-image: url("https://phcode.dev/extensions/default/InlineColorEditor/img/color_thumb_back@2x.png");
  }
}
.color-editor ul,
.color-editor li {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: middle;
  background: transparent;
  -webkit-font-smoothing: antialiased;
}
.color-editor ul.button-bar {
  list-style: none;
  border-radius: 3px;
  display: inline-block;
  font-size: 12px;
  margin-left: -3px;
}
.color-editor .button-bar li {
  display: inline-block;
  margin-left: -4px;
}
.color-editor .button-bar a {
  text-decoration: none;
  color: #454545;
  cursor: default;
  display: block;
  padding: 2px 4px 4px;
  height: 15px;
  font-size: 12px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.76);
  background-color: #e5e9e9;
  border: 1px solid #b2b5b5;
  border-right: 1px solid transparent;
  margin-left: -3px;
  box-shadow: inset 0 1px 0 #f3f3f3;
}
.color-editor .button-bar a:focus,
.color-editor .button-bar li.selected a:focus {
  outline: none;
  position: relative;
  border: 1px solid #2893ef;
  border-right: 1px solid #2893ef !important;
  /* we need this !important, sorry! */
  box-shadow: 0 0 0 1px #94ceff;
  z-index: 999;
}
.color-editor .button-bar li:first-child {
  margin-left: 0;
}
.color-editor .button-bar li:first-child a {
  margin-left: 0;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.color-editor .button-bar li:last-child a {
  border-right: 1px solid #b2b5b5;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.color-editor .button-bar li.selected a {
  background-color: #e0f0fa;
  box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.06);
  background-image: none;
  color: #0083e8;
}
.color-editor .button-bar li.disabled a {
  cursor: default;
  opacity: 0.3;
}
.color-editor .platform-mac .CodeMirror {
  font-family: "SourceSansPro" !important;
}
.dark .color-editor aside header .large-swatches,
.dark .color-editor aside ul.swatches li .swatch-bg,
.dark .color-editor section .slider.opacity-slider {
  background-image: url("https://phcode.dev/extensions/default/InlineColorEditor/img/color_thumb_back_dark.png");
}
.dark .color-editor aside header .large-swatches {
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.dark .color-editor ul.swatches li .value {
  color: #ccc;
}
.dark .color-editor section .gradient-overlay {
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.06), inset 0 1px 0 rgba(0, 0, 0, 0.12);
}
.dark .color-editor aside ul.swatches li .swatch-bg .swatch {
  box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.06), 0 1px 0 rgba(255, 255, 255, 0.06);
}
.dark .color-editor aside ul.swatches li:focus {
  outline: 1px solid #2893ef;
  box-shadow: 0 0 0 1px transparent;
}
.dark .color-editor section .color-selection-field .selector-base {
  color: #555;
}
.dark .color-editor section .color-selection-field .selector-base:focus {
  box-shadow: 0 0 0 5px #2893ef;
}
.dark .color-editor section .slider {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.06);
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(0, 0, 0, 0.24);
}
.dark .color-editor section .slider .selector-base:focus {
  box-shadow: 0 0 0 5px #2893ef;
}
.dark .color-editor section footer .color-value {
  border-color: #202020;
  color: #ccc;
}
.dark .color-editor section footer input {
  border: 1px solid #202020;
  box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.06);
  background: #555;
  color: #ccc;
}
.dark .color-editor section footer input:focus {
  background: #555;
  box-shadow: 0 0 0 1px transparent;
  border: 1px solid #2893ef;
}
.dark .color-editor .button-bar a {
  color: #ccc;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.06);
  background-color: #3f3f3f;
  border: 1px solid #202020;
  border-right: 1px solid transparent;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
}
.dark .color-editor .button-bar a:focus,
.dark .color-editor .button-bar li.selected a:focus {
  border: 1px solid #2893ef;
  border-right: 1px solid #2893ef !important;
  /* we need this !important, sorry! */
  box-shadow: 0 0 0 1px transparent;
}
.dark .color-editor .button-bar li:last-child a {
  border-right: 1px solid #202020;
}
.dark .color-editor .button-bar li.selected a {
  background-color: #2a3b50;
  box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.06);
  color: #fff;
}
@media all and (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2) {
  .dark .color-editor aside header .large-swatches {
    background-image: url("https://phcode.dev/extensions/default/InlineColorEditor/img/color_thumb_back_dark@2x.png");
  }
  .dark .color-editor aside ul.swatches li .swatch-bg {
    background-image: url("https://phcode.dev/extensions/default/InlineColorEditor/img/color_thumb_back_dark@2x.png");
  }
  .dark .color-editor section .slider.opacity-slider {
    background-image: url("https://phcode.dev/extensions/default/InlineColorEditor/img/color_thumb_back_dark@2x.png");
  }
}
</style><style>/* Colors */
/* Typography */
/* Overall inline widget content container */
.css-prop-defn {
  margin-left: 20px;
  color: #777;
  /* Enable text selection */
  cursor: auto;
  -webkit-user-select: text;
  -khtml-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  -o-user-select: text;
  user-select: text;
  font-family: SourceSansPro;
  font-size: 14px;
}
.css-prop-defn:focus {
  outline: none;
}
.css-prop-defn h1 {
  color: #333;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  margin: 15px 0 9px 0;
}
.css-prop-defn a {
  color: #0083e8;
}
.css-prop-defn code {
  font-family: SourceCodePro;
  font-size: 12px;
  color: #333;
  background: none;
  padding: 0;
  white-space: normal;
}
.css-prop-defn b {
  font-weight: 500;
}
.css-prop-defn table {
  width: 100%;
  margin-bottom: 1em;
}
.css-prop-defn table th,
.css-prop-defn table td {
  border: 1px solid #aaaaaa;
  padding: 0 0.15em;
}
/* Left-hand column */
.css-prop-summary {
  box-sizing: border-box;
  float: left;
  padding-left: 20px;
  width: 35%;
  word-wrap: break-word;
  -webkit-hyphens: auto;
  hyphens: auto;
}
.css-prop-summary p {
  line-height: 18px;
}
/* Right-hand column */
.css-prop-values {
  box-sizing: border-box;
  float: right;
  width: 60%;
}
.css-prop-values .scroller {
  max-height: 300px;
  overflow-y: auto;
  margin: 20px 21px 0 0;
}
.css-prop-values .scroller:focus {
  outline: none;
}
.css-prop-values dl {
  margin-top: 0px;
}
.css-prop-values dl dt {
  color: #333;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 3px;
}
.css-prop-values dl dd {
  line-height: 18px;
  margin-left: 20px;
  margin-right: 0px;
  margin-bottom: -2px;
  padding-bottom: 0px;
}
.css-prop-values dl dd p,
.css-prop-values dl dd li,
.css-prop-values dl dd b {
  font-size: 13px;
  font-style: normal;
  line-height: 18px;
  margin-bottom: 15px;
}
.divider-holder {
  position: absolute;
  left: 37%;
  top: 0;
  height: 100%;
}
.divider-holder .divider {
  margin-left: 12px;
  width: 0px;
  height: 100%;
  border-left: 1px solid #c3c6c5;
}
.fullscreen-summary .css-prop-summary {
  width: 95%;
}
.fullscreen-summary .css-prop-values,
.fullscreen-summary .divider-holder {
  display: none;
}
.content-bottom {
  clear: both;
}
/* Link to full docs, at bottom */
a.more-info {
  position: absolute;
  bottom: 0px;
  right: 50px;
  padding: 4px 10px 4px 28px;
  background: #e5e9e9 url("https://phcode.dev/extensions/default/MDNDocs/logo.svg");
  background-repeat: no-repeat;
  background-size: 15px 15px;
  background-position: 8px 4px;
  border: 1px solid #b2b5b5;
  border-radius: 3px 3px 0 0;
  border-bottom: none;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);
  font-size: 12px;
  font-weight: 500;
  color: #333;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.12);
}
a.more-info:hover {
  text-decoration: none;
}
/* Dark UI Theme */
.dark .css-prop-defn {
  color: #bbb;
}
.dark .css-prop-defn h1,
.dark .css-prop-defn b {
  color: #ccc;
}
.dark .css-prop-defn a {
  color: #6bbeff;
}
.dark .css-prop-defn code {
  color: #ccc;
}
.dark .css-prop-defn dl dt {
  color: #ccc;
}
.dark .css-prop-defn .divider-holder .divider {
  border-left: 1px solid #343434;
}
.dark .css-prop-defn a.more-info {
  background-color: #3f3f3f;
  border: 1px solid #202020;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
  color: #ccc;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.06);
}
.dark .css-prop-defn table th,
.dark .css-prop-defn table td {
  border-color: #626262;
}
</style><style>/**
 * All BezierCurveEditor selectors descend from .bezier-curve-editor to constrain styles to this extension
 */
.bezier-curve-editor * {
  margin: 0;
}
.bezier-curve-editor {
  position: relative;
  height: 300px;
  margin: 0 25px;
}
.bezier-curve-editor:focus {
  outline: none;
}
.bezier-curve-editor .cubic-bezier {
  background: url(https://phcode.dev/extensions/default/InlineTimingFunctionEditor/grid.png) 0px -75px repeat-x;
  background-size: 15px 450px;
  height: 300px;
  width: 149px;
  margin: 0 0 0 25px;
  position: absolute;
  top: 0;
  z-index: 2;
}
.bezier-curve-editor:after {
  content: "";
  display: block;
  height: 300px;
  width: 149px;
  margin: 0 0 0 25px;
  background: -webkit-linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #fff 30%, #fff 70%, rgba(255, 255, 255, 0) 100%);
  background-position: 2px 0;
  position: absolute;
  top: 0;
  z-index: 1;
}
.bezier-curve-editor .coordinate-plane {
  position: relative;
  left: 0;
  line-height: 0;
  top: 75px;
  width: 149px;
  height: 149px;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}
.bezier-curve-editor .coordinate-plane:before,
.bezier-curve-editor .coordinate-plane:after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.3em 0.5em;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  color: #454545;
  font-size: 11px;
  line-height: 1;
}
.bezier-curve-editor .coordinate-plane:before {
  border-bottom: 1px solid transparent;
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
  -moz-transform-origin: bottom left;
  -ms-transform-origin: bottom left;
  -o-transform-origin: bottom left;
  -webkit-transform-origin: bottom left;
  transform-origin: bottom left;
  white-space: nowrap;
}
.bezier-curve-editor .coordinate-plane:after {
  margin-bottom: -1.5em;
  white-space: nowrap;
}
.bezier-curve-editor .control-point {
  background: #e5e9e9;
  position: absolute;
  z-index: 2;
  height: 16px;
  width: 16px;
  border: 1px solid #b2b5b5;
  margin: -8px 0 0 -8px;
  outline: none;
  padding: 0 !important;
  box-sizing: border-box;
  border-radius: 8px;
}
.bezier-curve-editor .control-point:focus {
  border: 1px solid #2893ef !important;
  box-shadow: 0 0 0 2px #94ceff;
}
.bezier-curve-editor .P0,
.bezier-curve-editor .P3 {
  background: #2893ef;
  border-radius: 0;
  border: none;
  height: 12px;
  width: 12px;
  z-index: 1;
}
.bezier-curve-editor .P1,
.bezier-curve-editor .P2 {
  cursor: pointer;
  z-index: 100;
}
.bezier-curve-editor .P0 {
  left: 2px;
  top: 151px;
}
.bezier-curve-editor .P3 {
  right: -7px;
  top: 1px;
}
.bezier-curve-editor canvas.curve {
  position: absolute;
  z-index: 1;
  top: -75px;
  left: 0;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
/**
 * All StepEditor selectors descend from .step-editor to constrain styles to this extension
 */
.step-editor * {
  margin: 0;
}
.step-editor {
  position: relative;
  height: 190px;
  margin: 0 25px;
}
.step-editor:focus,
.step-editor canvas.steps:focus {
  outline: none;
}
.step-editor .steps-func {
  height: 179px;
  width: 179px;
  margin: 0 0 0 17px;
  position: absolute;
  top: 0;
  z-index: 2;
}
.step-editor:after {
  content: "";
  display: block;
  height: 179px;
  width: 179px;
  margin: 0 0 0 25px;
  background-position: 2px 0;
  position: absolute;
  top: 0;
  z-index: 1;
}
.step-editor .coordinate-plane {
  background: #fff;
  position: relative;
  left: 0;
  line-height: 0;
  top: 0;
  width: 179px;
  height: 190px;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}
.step-editor .coordinate-plane:before,
.step-editor .coordinate-plane:after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  color: #454545;
  font-size: 11px;
  line-height: 1;
}
.step-editor .coordinate-plane:before {
  border-bottom: 1px solid transparent;
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
  -moz-transform-origin: top left;
  -ms-transform-origin: top left;
  -o-transform-origin: top left;
  -webkit-transform-origin: top left;
  transform-origin: top left;
  white-space: nowrap;
  padding: 0.3em 0.5em 0 1.3em;
}
.step-editor .coordinate-plane:after {
  margin-left: 15px;
  white-space: nowrap;
  bottom: 0.9em;
  padding: 0 0.5em 0 0.2em;
}
.step-editor canvas.steps {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
.bezier-curve-editor .info,
.step-editor .info {
  position: absolute;
  z-index: 1;
  top: 20px;
  left: 170px;
  width: 400px;
  font-family: SourceSansPro;
  font-size: 11px;
  line-height: 2.2 !important;
}
.step-editor .info {
  left: 205px;
}
.bezier-curve-editor kbd,
.step-editor kbd {
  font-size: 15px;
  font-weight: bold;
  color: #454545;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: inline-block;
  margin: 0 2px 2px 0;
  padding: 0 3px 2px;
  border-radius: 2px;
  vertical-align: top;
  line-height: 1;
}
.bezier-curve-editor kbd.text,
.step-editor kbd.text {
  font-size: 10px;
  font-family: SourceSansPro;
  font-weight: normal;
  padding: 4px 4px;
}
.bezier-curve-editor .info .hint,
.step-editor .info .hint {
  margin-top: 25px;
  font-size: 13px;
  display: none;
  opacity: 1;
  line-height: 1.5 !important;
}
.bezier-curve-editor .info .hint.fadeout,
.step-editor .info .hint.fadeout {
  transition: opacity 0.6s ease-in 0.1s;
  opacity: 0;
}
/* Dark UI theme */
.dark .bezier-curve-editor {
  color: #ccc;
}
.dark .bezier-curve-editor .cubic-bezier {
  background: url("https://phcode.dev/extensions/default/InlineTimingFunctionEditor/grid-dark.png") 0px -75px repeat-x;
  background-size: 15px 450px;
}
.dark .bezier-curve-editor .control-point {
  background: #3f3f3f;
  border: 1px solid #202020;
}
.dark .bezier-curve-editor .control-point:focus {
  border: 1px solid #2893ef !important;
  box-shadow: 0 0 0 2px transparent;
}
.dark .bezier-curve-editor .P0,
.dark .bezier-curve-editor .P3 {
  background: #2893ef;
}
.dark .bezier-curve-editor .coordinate-plane:before,
.dark .bezier-curve-editor .coordinate-plane:after {
  color: #ccc;
}
.dark .bezier-curve-editor kbd {
  background: #3D3D3D;
  color: white;
}
.dark .bezier-curve-editor:after {
  background: -webkit-linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #555 30%, #555 70%, rgba(255, 255, 255, 0) 100%);
}
.dark .step-editor {
  color: #ccc;
}
.dark .step-editor kbd {
  background: #3D3D3D;
  color: white;
}
.dark .step-editor .coordinate-plane {
  background: #2c2c2c;
}
.dark .step-editor .coordinate-plane:before,
.dark .step-editor .coordinate-plane:after {
  color: #ccc;
}
.dark .bezier-curve-editor code,
.dark .step-editor code {
  color: #fff;
}
</style><link type="text/css" rel="stylesheet" href="./challenge-amigo-secreto_files/styles(2).css"><link type="text/css" rel="stylesheet" href="./challenge-amigo-secreto_files/brackets-js-hints.css"><link type="text/css" rel="stylesheet" href="./challenge-amigo-secreto_files/brackets-prefs-hints.css"></head>
<body id="Phoenix-Main" onload="_loadPhoenixAfterSplashScreen()" class="platform-win in-appshell" style="--editor-line-height: 1.5;">


<div class="main-view">
    <div id="notificationUIDefaultAnchor" href="#">
    </div>
    <div id="sidebar" class="sidebar panel quiet-scrollbars horz-resizable right-resizer collapsible" data-minsize="0" data-maxsize="80%" data-forceleft=".content" style="box-sizing: border-box;"><div class="horz-resizer" style="left: 270px;"></div>
        <div id="mainNavBar">
            <div id="mainNavBarLeft">
                <div id="newProject" class="new-project-btn btn-alt-quiet" title="Iniciar proyecto…"></div>
            </div>
            <div>
                <a id="phcode-io-main-nav" href="https://phcode.io/" target="_blank" rel="noopener">phcode.io</a>
            </div>
            <div id="mainNavBarRight">
                <div id="navBackButton" class="btn-alt-quiet nav-back-btn" title="Navegar hacia atrás (Alt+←)"></div>
                <div id="navForwardButton" class="btn-alt-quiet nav-forward-btn-disabled" title="Navegar hacia adelante (Alt+→)"></div>
                <div id="showInfileTree" class="show-in-file-tree-btn btn-alt-quiet" title="Mostrar en el árbol de directorios (Ctrl+Shift+))"></div>
                <div id="searchNav" class="search-nav-btn btn-alt-quiet" title="Buscar en archivos (Ctrl+Shift+F)"></div>
                <div class="working-set-splitview-btn btn-alt-quiet" title="Configurar el área de trabajo"></div>
            </div>
        </div>

        <div id="working-set-list-container" style="display: block;">

        <div class="working-set-view active" id="working-set-list-first-pane">
    <div class="working-set-header" style="display: block;"><span class="working-set-header-title">Área de trabajo</span></div>
    <div class="open-files-container active" style="overflow: hidden auto; position: relative; display: block;"><div class="sidebar-selection" style="display: block; top: 0px;"></div>
        <!-- This will contain runtime-generated <li>'s for each file in the working set -->
        <ul><li class="selected"><div class="file-status-icon dirty"></div><a href="https://phcode.dev/#"><span class="bd-icon"><i class="devicon-javascript-plain colored"></i></span><span title="app.js" class="baseName">app</span><span title="app.js" class="extension">.js</span></a></li><li><div class="file-status-icon dirty"></div><a href="https://phcode.dev/#"><span class="bd-icon"><i class="devicon-html5-plain colored"></i></span><span title="index.html" class="baseName">index</span><span title="index.html" class="extension">.html</span></a></li></ul>
    <div class="scroller-shadow top" style="background-position: 0px -5px; top: 68px; width: 270px;"></div><div class="scroller-shadow bottom" style="background-position: 0px 5px; top: 130px; width: 270px;"></div><div class="sidebar-selection-extension selectionExtension-visible" style="display: block; top: 68px; left: 261px;"></div></div>
<div></div></div></div>
        <div id="project-files-header">
            <i id="project-operations-spinner" class="fa fa-spinner fa-spin forced-hidden"></i>
            <div id="project-dropdown-toggle" class="btn-alt-quiet">
                <span id="project-title" class="title" title="challenge-amigo-secreto_esp-main/">challenge-amigo-secreto_esp-main</span>
                <span class="dropdown-arrow"></span>
            </div>
        </div>
        <div id="project-files-container" class="jstree jstree-brackets" style="overflow: auto; position: relative;">
            <!-- This will contain a dynamically generated <ul> hierarchy at runtime -->
        <div><div><ul class="jstree-brackets jstree-no-dots jstree-icons"><li class="jstree-closed" draggable="true"><ins class="jstree-icon" style="margin-left: 10px;"></ins><a href="https://phcode.dev/#" class=""><div style="display: inline-block; width: 10px;"></div><span><span class="bd-icon"><i class="fa-folder fa-solid"></i></span></span><span>assets</span></a></li><li class="jstree-leaf" draggable="true"><ins class="jstree-icon"></ins><a href="https://phcode.dev/#" class=""><div style="display: inline-block; width: 10px;"></div><span><span class="bd-icon"><i class="devicon-javascript-plain colored"></i></span></span><span>app</span><span class="extension">.js</span></a></li><li class="jstree-leaf" draggable="true"><ins class="jstree-icon"></ins><a href="https://phcode.dev/#" class=""><div style="display: inline-block; width: 10px;"></div><span><span class="bd-icon"><i class="devicon-html5-plain colored"></i></span></span><span>index</span><span class="extension">.html</span></a></li><li class="jstree-leaf" draggable="true"><ins class="jstree-icon"></ins><a href="https://phcode.dev/#" class=""><div style="display: inline-block; width: 10px;"></div><span><span class="bd-icon"><i class="devicon-css3-plain colored"></i></span></span><span>style</span><span class="extension">.css</span></a></li></ul><div class="filetree-selection" style="overflow: auto; left: 0px; display: none; top: 46.9375px;"></div><div class="filetree-context" style="overflow: auto; left: 0px; display: none;"></div><div class="filetree-selection-extension" style="display: none; top: 195.938px; height: 23px; left: 261px;" data-initial-height="23"></div><div class="filetree-context-extension" style="display: none;"></div></div></div><div class="scroller-shadow top" style="background-position: 0px -5px; top: 171px; width: 270px;"></div></div>
    </div>

    <!--
        Vertical stack of titlebar (in-browser), editor, bottom panels, status bar
            (status bar is injected later - see StatusBar.init()).
        Note: all children must be in a vertical stack with heights explicitly set in a fixed
            unit such as px (not percent/em/auto). If you change the height later, you must
            call WorkspaceManager.recomputeLayout() each time. Otherwise the layout will
            not get set correctly. Use WorkspaceManager to have this managed for you automatically.
     -->
    <div class="content" style="left: 270px; right: 512px;"><div id="notification-bar" tabindex="0">
    <div class="content-container">
    <div class="banner-notif-container"><div><b>Introducing</b> Phoenix Code <b>Desktop Apps</b> for Windows, Mac &amp; Linux. <a class="notification_ack" href="https://phcode.io/" _target="_blank"> Click here to get it now!</a></div></div></div>
    <div class="close-icon-container">
        <button type="button" class="close-icon" tabindex="0">×</button>
    </div>
</div>
        <!-- Horizontal titlebar containing menus & filename when inBrowser -->
        <div id="titlebar" class="toolbar no-focus">
            <!-- Menu bar -->
            <ul class="nav" data-dropdown="dropdown">
            <li class="dropdown" id="file-menu"><a id="file-menu-dropdown-toggle" href="https://phcode.dev/#" class="dropdown-toggle" data-toggle="dropdown">Archivo</a><ul class="dropdown-menu"><li style=""><a href="https://phcode.dev/#" class="menuAnchor" id="file-menu-file.newFile"> <span class="menu-name">Nuevo archivo</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+1</span></a></li><li style=""><a href="https://phcode.dev/#" class="menuAnchor" id="file-menu-file.newFolder"> <span class="menu-name">Nueva carpeta</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+3</span></a></li><li style=""><a href="https://phcode.dev/#" class="menuAnchor" id="file-menu-file.newProject"> <span class="menu-name">Iniciar proyecto…</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li style=""><a href="https://phcode.dev/#" class="menuAnchor" id="file-menu-file.new_window"> <span class="menu-name">Nueva ventana</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><hr class="divider" id="file-menu-brackets-menuDivider-1"></li><li style=""><a href="https://phcode.dev/#" class="menuAnchor" id="file-menu-file.openFolder"> <span class="menu-name">Abrir carpeta…</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+O</span></a></li><li style=""><a href="https://phcode.dev/#" class="menuAnchor" id="file-menu-file.close"> <span class="menu-name">Cerrar</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+`</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="file-menu-file.close_all"> <span class="menu-name">Cerrar todo</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Alt+Shift+W</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor disabled" id="file-menu-file.reopen_closed"> <span class="menu-name">Reabrir el archivo cerrado</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li style=""><a href="https://phcode.dev/#" class="menuAnchor" id="file-menu-recent-files.show"> <span class="menu-name">Archivos recientes…</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Alt+Shift+O</span></a></li><li><hr class="divider" id="file-menu-brackets-menuDivider-2"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="file-menu-file.save"> <span class="menu-name">Guardar archivo</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+S</span></a></li><li style=""><a href="https://phcode.dev/#" class="menuAnchor" id="file-menu-file.saveAll"> <span class="menu-name">Guardar todo</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Alt+S</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="file-menu-file.duplicateFile"> <span class="menu-name">Duplicar archivo</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+2</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor disabled forced-hidden" id="file-menu-file.downloadProject"> <span class="menu-name">Descargar proyecto</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><hr class="divider" id="file-menu-brackets-menuDivider-3"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="file-menu-debug.openPrefsInSplitView"> <span class="menu-name">Abrir archivo de preferencias</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li style=""><a href="https://phcode.dev/#" class="menuAnchor" id="file-menu-help.toggleShortcuts"> <span class="menu-name">Atajos de teclado…</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="file-menu-file.extensionManager"> <span class="menu-name">Gestionar extensiones…</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><hr class="divider" id="file-menu-brackets-menuDivider-42"></li><li style=""><a href="https://phcode.dev/#" class="menuAnchor checked" id="file-menu-file.liveFilePreview"> <span class="menu-name">Vista previa dinámica</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Alt+L</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="file-menu-file.liveFilePreviewSettings"> <span class="menu-name">Ajustes de la vista previa en vivo</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li></ul></li><li class="dropdown" id="edit-menu"><a id="edit-menu-dropdown-toggle" href="https://phcode.dev/#" class="dropdown-toggle" data-toggle="dropdown">Edición</a><ul class="dropdown-menu"><li><a href="https://phcode.dev/#" class="menuAnchor" id="edit-menu-edit.undo"> <span class="menu-name">Deshacer</span><span class="right-pusher"></span><span class="menu-shortcut fixed-shortcut">Ctrl+Z</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="edit-menu-edit.redo"> <span class="menu-name">Rehacer</span><span class="right-pusher"></span><span class="menu-shortcut fixed-shortcut">Ctrl+Y</span></a></li><li><hr class="divider" id="edit-menu-brackets-menuDivider-4"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="edit-menu-edit.cut"> <span class="menu-name">Cortar</span><span class="right-pusher"></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="edit-menu-edit.copy"> <span class="menu-name">Copiar</span><span class="right-pusher"></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="edit-menu-edit.paste"> <span class="menu-name">Pegar</span><span class="right-pusher"></span></a></li><li><hr class="divider" id="edit-menu-brackets-menuDivider-5"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="edit-menu-edit.selectAll"> <span class="menu-name">Seleccionar todo</span><span class="right-pusher"></span><span class="menu-shortcut fixed-shortcut">Ctrl+A</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="edit-menu-edit.selectLine"> <span class="menu-name">Seleccionar línea</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+L</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="edit-menu-edit.splitSelIntoLines"> <span class="menu-name">Dividir selección en líneas</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Shift+L</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="edit-menu-edit.addCursorToPrevLine"> <span class="menu-name">Agregar cursor a la línea anterior</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Alt+Shift+↑</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="edit-menu-edit.addCursorToNextLine"> <span class="menu-name">Agregar cursor a la siguiente línea</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Alt+Shift+↓</span></a></li><li><hr class="divider" id="edit-menu-brackets-menuDivider-6"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="edit-menu-edit.indent"> <span class="menu-name">Aumentar sangría</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+]</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="edit-menu-edit.unindent"> <span class="menu-name">Disminuir sangría</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+[</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="edit-menu-edit.duplicate"> <span class="menu-name">Duplicar</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+D</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="edit-menu-edit.deletelines"> <span class="menu-name">Eliminar línea</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Shift+D</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="edit-menu-edit.lineUp"> <span class="menu-name">Subir línea</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Shift+↑</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="edit-menu-edit.lineDown"> <span class="menu-name">Bajar línea</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Shift+↓</span></a></li><li><hr class="divider" id="edit-menu-brackets-menuDivider-7"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="edit-menu-edit.lineComment"> <span class="menu-name">Comentar/Descomentar línea</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+/</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="edit-menu-edit.blockComment"> <span class="menu-name">Comentar/Descomentar bloque</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Shift+/</span></a></li><li><hr class="divider" id="edit-menu-brackets-menuDivider-8"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="edit-menu-edit.showCodeHints"> <span class="menu-name">Mostrar sugerencias de código</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Space</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="edit-menu-showParameterHint"> <span class="menu-name">Mostrar sugerencias de parámetros</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Shift+Space</span></a></li><li><hr class="divider" id="edit-menu-brackets-menuDivider-9"></li><li><a href="https://phcode.dev/#" class="menuAnchor checked" id="edit-menu-edit.autoCloseBrackets"> <span class="menu-name">Completar paréntesis automáticamente</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor checked" id="edit-menu-edit.autoRenameTags"> <span class="menu-name">Renombrar etiquetas HTML automáticamente</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="edit-menu-edit.beautifyCode"> <span class="menu-name">Embellecer código</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+B</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="edit-menu-edit.beautifyOnSave"> <span class="menu-name">Embellecer código al guardar</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><hr class="divider" id="edit-menu-brackets-menuDivider-43"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="edit-menu-refactoring.renamereference"> <span class="menu-name">Renombrar</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">F2</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="edit-menu-refactoring.extractToVariable"> <span class="menu-name">Extraer a variable</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Alt+V</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="edit-menu-refactoring.extractToFunction"> <span class="menu-name">Extraer a función</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Alt+M</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="edit-menu-refactoring.wrapintrycatch"> <span class="menu-name">Envolver en Try Catch</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="edit-menu-refactoring.wrapincondition"> <span class="menu-name">Envolver en Condición</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="edit-menu-refactoring.converttoarrowfunction"> <span class="menu-name">Convertir a función flecha</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="edit-menu-refactoring.creategettersandsetters"> <span class="menu-name">Crear métodos de acceso (getters/setters)</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li></ul></li><li class="dropdown" id="find-menu"><a id="find-menu-dropdown-toggle" href="https://phcode.dev/#" class="dropdown-toggle" data-toggle="dropdown">Buscar</a><ul class="dropdown-menu"><li><a href="https://phcode.dev/#" class="menuAnchor" id="find-menu-cmd.find"> <span class="menu-name">Buscar</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+F</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="find-menu-cmd.findNext"> <span class="menu-name">Buscar siguiente</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">F3</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="find-menu-cmd.findPrevious"> <span class="menu-name">Buscar anterior</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Shift+F3</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="find-menu-cmd.addNextMatch"> <span class="menu-name">Añadir la siguiente ocurrencia</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Alt+F3</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="find-menu-cmd.findAllAndSelect"> <span class="menu-name">Seleccionar todas las ocurrencias</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Alt+Shift+F3</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="find-menu-cmd.skipCurrentMatch"> <span class="menu-name">Omitir y añadir la siguiente ocurrencia</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><hr class="divider" id="find-menu-brackets-menuDivider-10"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="find-menu-cmd.findInFiles"> <span class="menu-name">Buscar en archivos</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Shift+F</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor disabled" id="find-menu-cmd.findAllReferences"> <span class="menu-name">Buscar todas las referencias</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Shift+F12</span></a></li><li><hr class="divider" id="find-menu-brackets-menuDivider-11"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="find-menu-cmd.replace"> <span class="menu-name">Reemplazar</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+H</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="find-menu-cmd.replaceInFiles"> <span class="menu-name">Reemplazar en archivos</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Shift+H</span></a></li></ul></li><li class="dropdown" id="view-menu"><a id="view-menu-dropdown-toggle" href="https://phcode.dev/#" class="dropdown-toggle" data-toggle="dropdown">Ver</a><ul class="dropdown-menu"><li><a href="https://phcode.dev/#" class="menuAnchor" id="view-menu-view.themesOpenSetting"> <span class="menu-name">Temas…</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><hr class="divider" id="view-menu-brackets-menuDivider-12"></li><li><a href="https://phcode.dev/#" class="menuAnchor checked" id="view-menu-cmd.splitViewNone"> <span class="menu-name">No dividido</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="view-menu-cmd.splitViewVertical"> <span class="menu-name">División vertical</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="view-menu-cmd.splitViewHorizontal"> <span class="menu-name">División horizontal</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><hr class="divider" id="view-menu-brackets-menuDivider-13"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="view-menu-view.toggleSidebar"> <span class="menu-name">Alternar barra lateral</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Alt+H</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="view-menu-view.togglePanels"> <span class="menu-name">Alternar paneles</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Shift+~</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="view-menu-view.togglePureCode"> <span class="menu-name">Sin distracciones</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Shift+F11</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="view-menu-view.toggleFullscreen"> <span class="menu-name">Pantalla completa</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">F11</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="view-menu-view.toggleSearchAutoHide"> <span class="menu-name">Cerrar búsqueda automáticamente</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><hr class="divider" id="view-menu-brackets-menuDivider-14"></li><li><a class="sub-menu-item menuAnchor" href="https://phcode.dev/#" id="view-menu-zoom-view-submenu"> <span class="menu-name">Ajustar zoom de la interfaz y las fuentes</span><span class="right-pusher"></span><span>▸</span></a></li><li><hr class="divider" id="view-menu-brackets-menuDivider-15"></li><li><a href="https://phcode.dev/#" class="menuAnchor checked" id="view-menu-view.toggleActiveLine"> <span class="menu-name">Resaltar línea actual</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor checked" id="view-menu-view.toggleLineNumbers"> <span class="menu-name">Mostrar números de línea</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="view-menu-view.toggleWordWrap"> <span class="menu-name">Habilitar ajuste de línea</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor checked" id="view-menu-view.toggleRulers"> <span class="menu-name">Reglas</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor checked" id="view-menu-view.toggleIndentGuides"> <span class="menu-name">Líneas guía de sangría</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><hr class="divider" id="view-menu-brackets-menuDivider-16"></li><li><a href="https://phcode.dev/#" class="menuAnchor checked" id="view-menu-file.previewHighlight"> <span class="menu-name">Resaltado en Vista previa dinámica</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Shift+C</span></a></li><li><hr class="divider" id="view-menu-brackets-menuDivider-17"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="view-menu-view.toggleProblems"> <span class="menu-name">Problemas</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Shift+M</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor checked" id="view-menu-view.toggleCodeInspection"> <span class="menu-name">Inspeccionar el código al guardar</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor checked" id="view-menu-view.enableSelectionView"> <span class="menu-name">Vista de selección</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor checked" id="view-menu-view.enableQuickView"> <span class="menu-name">Vista rápida con cursor</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="view-menu-cmd.keyboardNavUI"> <span class="menu-name">Paleta de comandos visual</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+P</span></a></li><li><hr class="divider" id="view-menu-brackets-menuDivider-36"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="view-menu-codefolding.collapse.all"> <span class="menu-name">Colapsar todo</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="view-menu-codefolding.expand.all"> <span class="menu-name">Expandir todo</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="view-menu-codefolding.collapse"> <span class="menu-name">Colapsar actual</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Shift+{</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="view-menu-codefolding.expand"> <span class="menu-name">Expandir actual</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Shift+}</span></a></li></ul></li><li class="dropdown" id="navigate-menu"><a id="navigate-menu-dropdown-toggle" href="https://phcode.dev/#" class="dropdown-toggle" data-toggle="dropdown">Navegación</a><ul class="dropdown-menu"><li><a href="https://phcode.dev/#" class="menuAnchor" id="navigate-menu-navigate.quickOpen"> <span class="menu-name">Apertura rápida</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Shift+O</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="navigate-menu-navigate.gotoLine"> <span class="menu-name">Ir a la línea</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+G</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="navigate-menu-navigate.gotoDefinition"> <span class="menu-name">Búsqueda rápida de definición</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+T</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor disabled" id="navigate-menu-navigate.gotoDefinitionInProject"> <span class="menu-name">Buscar definición en el proyecto rápidamente</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="navigate-menu-navigate.jumptoDefinition"> <span class="menu-name">Saltar a la definición</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+J</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor disabled" id="navigate-menu-navigate.gotoNextProblem"> <span class="menu-name">Ir al siguiente problema</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+I</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor disabled" id="navigate-menu-navigate.gotoPrevProblem"> <span class="menu-name">Ir al problema anterior</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Shift+I</span></a></li><li><hr class="divider" id="navigate-menu-brackets-menuDivider-18"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="navigate-menu-navigate.nextDoc"> <span class="menu-name">Documento siguiente</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="navigate-menu-navigate.prevDoc"> <span class="menu-name">Documento anterior</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="navigate-menu-navigation.jump.back"> <span class="menu-name">Navegar hacia atrás</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Alt+←</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor disabled" id="navigate-menu-navigation.jump.fwd"> <span class="menu-name">Navegar hacia adelante</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Alt+→</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="navigate-menu-navigate.nextDocListOrder"> <span class="menu-name">Documento siguiente en la lista</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Alt+Page Down</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="navigate-menu-navigate.prevDocListOrder"> <span class="menu-name">Documento anterior en la lista</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Alt+Page Up</span></a></li><li><hr class="divider" id="navigate-menu-brackets-menuDivider-19"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="navigate-menu-navigate.showInFileTree"> <span class="menu-name">Mostrar en el árbol de directorios</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Shift+)</span></a></li><li><hr class="divider" id="navigate-menu-brackets-menuDivider-20"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="navigate-menu-navigate.toggleQuickEdit"> <span class="menu-name">Edición rápida</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+E</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor disabled" id="navigate-menu-navigate.previousMatch"> <span class="menu-name">Elemento anterior de edición rápida</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Alt+↑</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor disabled" id="navigate-menu-navigate.nextMatch"> <span class="menu-name">Siguiente coincidencia para edición rápida</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Alt+↓</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor disabled" id="navigate-menu-navigate.newRule"> <span class="menu-name">Nueva regla</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><hr class="divider" id="navigate-menu-brackets-menuDivider-21"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="navigate-menu-navigate.toggleQuickDocs"> <span class="menu-name">Documentación rápida</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">F1</span></a></li></ul></li><li class="dropdown" id="debug-menu"><a id="debug-menu-dropdown-toggle" href="https://phcode.dev/#" class="dropdown-toggle" data-toggle="dropdown">Desarrollo</a><ul class="dropdown-menu"><li><a href="https://phcode.dev/#" class="menuAnchor" id="debug-menu-debug.refreshWindow"> <span class="menu-name">Recargar con extensiones</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="debug-menu-debug.reloadWithoutUserExts"> <span class="menu-name">Recargar sin extensiones</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="debug-menu-debug.loadCurrentExtension"> <span class="menu-name">Cargar proyecto como extensión</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor disabled forced-hidden" id="debug-menu-debug.unloadCurrentExtension"> <span class="menu-name">Descargar proyecto como extensión</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor disabled forced-hidden" id="debug-menu-debug.openExtensionFolders"> <span class="menu-name">Abrir carpeta de extensiones…</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><hr class="divider" id="debug-menu-brackets-menuDivider-38"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="debug-menu-file.openKeyMap"> <span class="menu-name">Abrir Archivo de Mapeo de Teclas de Usuario</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a class="sub-menu-item menuAnchor" href="https://phcode.dev/#" id="debug-menu-debug-diagnostics-sub-menu"> <span class="menu-name">Herramientas de diagnóstico de Phoenix Code</span><span class="right-pusher"></span><span>▸</span></a></li></ul></li><li class="dropdown" id="help-menu"><a id="help-menu-dropdown-toggle" href="https://phcode.dev/#" class="dropdown-toggle" data-toggle="dropdown">Ayuda</a><ul class="dropdown-menu"><li><a href="https://phcode.dev/#" class="menuAnchor" id="help-menu-help.docs"> <span class="menu-name">Ayuda, introducción</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Shift+F1</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="help-menu-help.support"> <span class="menu-name">Soporte de Phoenix Code</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="help-menu-help.suggest"> <span class="menu-name">Sugerir una mejora</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="help-menu-help.getInvolved"> <span class="menu-name">Involúcrese</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><hr class="divider" id="help-menu-brackets-menuDivider-37"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="help-menu-healthData.healthDataStatistics"> <span class="menu-name">Informe de Salud…</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><hr class="divider" id="help-menu-brackets-menuDivider-22"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="help-menu-debug.switchLanguage"> <span class="menu-name">Cambiar idioma… (Switch Language)</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><hr class="divider" id="help-menu-brackets-menuDivider-41"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="help-menu-help.youtube"> <span class="menu-name">Canal de Youtube</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="help-menu-help.twitter"> <span class="menu-name">@phcodedev en Twitter</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="help-menu-help.homepage"> <span class="menu-name">Descargar Aplicaciones - Página Principal</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="help-menu-help.about"> <span class="menu-name">Acerca de Phoenix Code</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li></ul></li></ul>

            <!-- Filename label -->
            <div class="title-wrapper" style="width: 44px;">
                <span class="title" title="/mnt/challenge-amigo-secreto_esp-main/app.js">app.js</span>&nbsp;<span class="dirty-dot" style="visibility: visible;">•</span>
            </div>
        </div>

        <div id="editor-holder" style="height: 580px;">
        <!-- View Panes are programatically created here -->
        <div id="first-pane" class="view-pane active-pane" style="height: 100%; width: 100%;">
    <div class="pane-header" style="display: none;">
        <div class="pane-header-text">app.js</div>
        <div class="pane-header-flipview-btn flipview-icon-none" title="Cambiar esta vista al panel "></div>
        <div class="pane-header-close-btn file-status-icon can-close"></div>
    </div>
    <div class="pane-content editor-holder" style="height: 580px;">
        <div class="not-editor" style="display: none;"></div>
    <div class="CodeMirror cm-s-system-default folding-enabled" translate="no" style="clip-path: inset(0px); height: 580px;"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 357px; left: 311.031px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; min-height: 1em; outline: none;"></textarea></div><div class="CodeMirror-vscrollbar" tabindex="-1" cm-not-content="true" style="bottom: 12px;"><div style="min-width: 1px; height: 0px;"></div></div><div class="CodeMirror-hscrollbar" tabindex="-1" cm-not-content="true" style="display: block; right: 0px; left: 70px;"><div style="height: 100%; min-height: 1px; width: 597px;"></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true" style="height: 12px; width: 12px;"></div><div class="CodeMirror-gutter-filler" cm-not-content="true" style="display: block; height: 12px; width: 70px;"></div><div class="CodeMirror-scroll" tabindex="-1" draggable="false"><div class="CodeMirror-sizer" style="margin-left: 70px; margin-bottom: -12px; border-right-width: 38px; min-height: 444px; min-width: 596.844px; padding-right: 0px; padding-bottom: 12px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div class="CodeMirror-rulers" style="min-height: 660px;"><div class="CodeMirror-ruler" style="border-color: rgb(224, 224, 224); left: 864px;"></div></div><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre class="CodeMirror-line-like"><span>xxxxxxxxxx</span></pre><div class="CodeMirror-linenumber CodeMirror-gutter-elt"><div>23</div></div></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-cursors" style=""><div class="CodeMirror-cursor" style="left: 241.031px; top: 342px; height: 18px;">&nbsp;</div></div><div class="CodeMirror-code" role="presentation" style=""><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -70px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">1</div><div class="CodeMirror-gutter-elt" style="left: 46px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: 0px; padding-left: 0px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">let</span> <span class="cm-def">amigos_ingresados</span> <span class="cm-operator">=</span> [];</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -70px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">2</div><div class="CodeMirror-gutter-elt" style="left: 46px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: 0px; padding-left: 0px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">let</span> <span class="cm-def">lista</span> <span class="cm-operator">=</span> <span class="cm-variable">document</span>.<span class="cm-property">getElementById</span>(<span class="cm-string">"listaAmigos"</span>);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -70px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">3</div><div class="CodeMirror-gutter-elt" style="left: 46px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: 0px; padding-left: 0px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">let</span> <span class="cm-def">amigoEscogido</span> <span class="cm-operator">=</span> <span class="cm-variable">document</span>.<span class="cm-property">getElementById</span>(<span class="cm-string">"resultado"</span>);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -70px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">4</div><div class="CodeMirror-gutter-elt" style="left: 46px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: 0px; padding-left: 0px;"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -70px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">5</div><div class="CodeMirror-gutter-elt" style="left: 46px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="CodeMirror-foldgutter-open"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: 0px; padding-left: 0px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">function</span> <span class="cm-def">agregarAmigo</span>() {</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -70px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">6</div><div class="CodeMirror-gutter-elt" style="left: 46px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -28.8px; padding-left: 28.8px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-keyword">let</span> <span class="cm-def">input</span> <span class="cm-operator">=</span> <span class="cm-variable">document</span>.<span class="cm-property">getElementById</span>(<span class="cm-string">"amigo"</span>);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -70px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">7</div><div class="CodeMirror-gutter-elt" style="left: 46px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -28.8px; padding-left: 28.8px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-keyword">let</span> <span class="cm-def">nombre</span> <span class="cm-operator">=</span> <span class="cm-variable-2">input</span>.<span class="cm-property">value</span>.<span class="cm-property">trim</span>();</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -70px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">8</div><div class="CodeMirror-gutter-elt" style="left: 46px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: 0px; padding-left: 0px;"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -70px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">9</div><div class="CodeMirror-gutter-elt" style="left: 46px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="CodeMirror-foldgutter-open"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -28.8px; padding-left: 28.8px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-keyword">if</span> (<span class="cm-variable-2">nombre</span> <span class="cm-operator">!==</span> <span class="cm-string">""</span>) {</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -70px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">10</div><div class="CodeMirror-gutter-elt" style="left: 46px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -57.6px; padding-left: 57.6px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-variable">amigos_ingresados</span>.<span class="cm-property">push</span>(<span class="cm-variable-2">nombre</span>);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -70px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">11</div><div class="CodeMirror-gutter-elt" style="left: 46px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: 0px; padding-left: 0px;"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -70px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">12</div><div class="CodeMirror-gutter-elt" style="left: 46px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -57.6px; padding-left: 57.6px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-keyword">let</span> <span class="cm-def">li</span> <span class="cm-operator">=</span> <span class="cm-variable">document</span>.<span class="cm-property">createElement</span>(<span class="cm-string">"li"</span>);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -70px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">13</div><div class="CodeMirror-gutter-elt" style="left: 46px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -57.6px; padding-left: 57.6px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-variable-2">li</span>.<span class="cm-property">textContent</span> <span class="cm-operator">=</span> <span class="cm-variable-2">nombre</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -70px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">14</div><div class="CodeMirror-gutter-elt" style="left: 46px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -57.6px; padding-left: 57.6px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-variable">lista</span>.<span class="cm-property">appendChild</span>(<span class="cm-variable-2">li</span>);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -70px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">15</div><div class="CodeMirror-gutter-elt" style="left: 46px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: 0px; padding-left: 0px;"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -70px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">16</div><div class="CodeMirror-gutter-elt" style="left: 46px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -57.6px; padding-left: 57.6px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-variable-2">input</span>.<span class="cm-property">value</span> <span class="cm-operator">=</span> <span class="cm-string">""</span>; <span class="cm-comment">// limpiar input</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -70px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">17</div><div class="CodeMirror-gutter-elt" style="left: 46px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -57.6px; padding-left: 57.6px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-variable-2">input</span>.<span class="cm-property">focus</span>();    <span class="cm-comment">// opcional, enfocar de nuevo</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -70px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">18</div><div class="CodeMirror-gutter-elt" style="left: 46px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -57.6px; padding-left: 57.6px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-variable">amigoEscogido</span>.<span class="cm-property">innerHTML</span> <span class="cm-operator">=</span> <span class="cm-string">""</span>; <span class="cm-comment">// limpiar mensajes de error</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -70px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">19</div><div class="CodeMirror-gutter-elt" style="left: 46px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="CodeMirror-foldgutter-open"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -28.8px; padding-left: 28.8px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   } <span class="cm-keyword">else</span> {</span></pre></div><div style="position: relative;" class="CodeMirror-activeline"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: -70px; width: 70px;"></div><div class="CodeMirror-gutter-wrapper CodeMirror-activeline-gutter" aria-hidden="true" style="left: -70px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">20</div><div class="CodeMirror-gutter-elt" style="left: 46px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -57.6px; padding-left: 57.6px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-variable">amigoEscogido</span>.<span class="cm-property">innerHTML</span> <span class="cm-operator">=</span> <span class="cm-string">"&lt;li&gt;El nombre ingresado no es válido&lt;/li&gt;"</span>;    </span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -70px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">21</div><div class="CodeMirror-gutter-elt" style="left: 46px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -28.8px; padding-left: 28.8px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   }</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -70px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">22</div><div class="CodeMirror-gutter-elt" style="left: 46px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: 0px; padding-left: 0px;"><span role="presentation" style="padding-right: 0.1px;">}</span></pre></div><div class="" style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -70px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">23</div><div class="CodeMirror-gutter-elt" style="left: 46px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: 0px; padding-left: 0px;"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div></div></div></div></div></div><div style="position: absolute; height: 38px; width: 1px; border-bottom: 12px solid transparent; top: 444px;"></div><div class="CodeMirror-gutters" style="height: 494px; left: 0px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 46px;"></div><div class="CodeMirror-gutter code-inspection-gutter"></div><div class="CodeMirror-gutter CodeMirror-foldgutter"></div></div></div></div><div class="CodeMirror cm-s-system-default folding-enabled" translate="no" style="clip-path: inset(0px); height: 580px; display: none;"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 141.667px; left: 83.6667px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; min-height: 1em; outline: none;"></textarea></div><div class="CodeMirror-vscrollbar" tabindex="-1" cm-not-content="true" style="display: block; bottom: 12px;"><div style="min-width: 1px; height: 786px;"></div></div><div class="CodeMirror-hscrollbar" tabindex="-1" cm-not-content="true" style="display: block; right: 12px; left: 82px;"><div style="height: 100%; min-height: 1px; width: 1394px;"></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true" style="display: block; height: 12px; width: 12px;"></div><div class="CodeMirror-gutter-filler" cm-not-content="true" style="display: block; height: 12px; width: 82px;"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 82px; margin-bottom: -12px; border-right-width: 38px; min-height: 786px; min-width: 1394.36px; padding-right: 12px; padding-bottom: 12px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div class="CodeMirror-rulers" style="min-height: 660px;"><div class="CodeMirror-ruler" style="border-color: rgb(224, 224, 224); left: 864px;"></div></div><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre class="CodeMirror-line-like">x</pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"><div class="CodeMirror-selected" style="position: absolute; left: 1.66669px; top: 342px; width: 1392.7px; height: 18px;"></div><div class="CodeMirror-selected" style="position: absolute; left: 0px; top: 630px; width: 133.021px; height: 18px;"></div><div class="CodeMirror-selected" style="position: absolute; left: 0px; top: 360px; width: 1394.36px; height: 270px;"></div></div><div class="CodeMirror-cursors" style="visibility: hidden;"></div><div class="CodeMirror-code" role="presentation" style=""><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">1</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: 0px; padding-left: 0px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-meta">&lt;!DOCTYPE html&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">2</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-open"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: 0px; padding-left: 0px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">html</span> <span class="cm-attribute">lang</span>=<span class="cm-string">"es"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">3</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-open"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: 0px; padding-left: 0px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">head</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">4</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -28.8px; padding-left: 28.8px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">meta</span> <span class="cm-attribute">charset</span>=<span class="cm-string">"UTF-8"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">5</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -28.8px; padding-left: 28.8px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">meta</span> <span class="cm-attribute">name</span>=<span class="cm-string">"viewport"</span> <span class="cm-attribute">content</span>=<span class="cm-string">"width=device-width, initial-scale=1.0"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">6</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -28.8px; padding-left: 28.8px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">link</span> <span class="cm-attribute">rel</span>=<span class="cm-string">"stylesheet"</span> <span class="cm-attribute">href</span>=<span class="cm-string">"style.css"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">7</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -28.8px; padding-left: 28.8px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">link</span> <span class="cm-attribute">rel</span>=<span class="cm-string">"preconnect"</span> <span class="cm-attribute">href</span>=<span class="cm-string">"https://fonts.googleapis.com"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">8</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -28.8px; padding-left: 28.8px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">link</span> <span class="cm-attribute">rel</span>=<span class="cm-string">"preconnect"</span> <span class="cm-attribute">href</span>=<span class="cm-string">"https://fonts.gstatic.com"</span> <span class="cm-attribute">crossorigin</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">9</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -28.8px; padding-left: 28.8px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">link</span> <span class="cm-attribute">href</span>=<span class="cm-string">"https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700;900&amp;family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&amp;display=swap"</span> <span class="cm-attribute">rel</span>=<span class="cm-string">"stylesheet"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">10</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -28.8px; padding-left: 28.8px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">title</span><span class="cm-tag cm-bracket">&gt;</span>Amigo Secreto<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">title</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">11</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: 0px; padding-left: 0px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">head</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">12</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: 0px; padding-left: 0px;"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">13</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-open"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: 0px; padding-left: 0px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">body</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">14</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-open"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -28.8px; padding-left: 28.8px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">main</span> <span class="cm-attribute">class</span>=<span class="cm-string">"main-content"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">15</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-open"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -57.6px; padding-left: 57.6px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">header</span> <span class="cm-attribute">class</span>=<span class="cm-string">"header-banner"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">16</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -86.4px; padding-left: 86.4px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">h1</span> <span class="cm-attribute">class</span>=<span class="cm-string">"main-title"</span><span class="cm-tag cm-bracket">&gt;</span>Amigo Secreto<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">h1</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">17</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -86.4px; padding-left: 86.4px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">img</span> <span class="cm-attribute">src</span>=<span class="cm-string">"assets/amigo-secreto.png"</span> <span class="cm-attribute">alt</span>=<span class="cm-string">"Imagen representativa de amigo secreto"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">18</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -57.6px; padding-left: 57.6px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">header</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">19</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -57.6px; padding-left: 57.6px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   </span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">20</div><div class="CodeMirror-gutter-elt" style="left: 46px; width: 12px;"><div class="CodeMirror-colorGutter-none"></div></div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-open"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -57.6px; padding-left: 57.6px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">section</span> <span class="cm-attribute">class</span>=<span class="cm-string">"input-section"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">21</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -86.4px; padding-left: 86.4px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">h2</span> <span class="cm-attribute">class</span>=<span class="cm-string">"section-title"</span><span class="cm-tag cm-bracket">&gt;</span>Digite el nombre de sus amigos<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">h2</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">22</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-open"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -86.4px; padding-left: 86.4px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">div</span> <span class="cm-attribute">class</span>=<span class="cm-string">"input-wrapper"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">23</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -115.2px; padding-left: 115.2px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">input</span> <span class="cm-attribute">type</span>=<span class="cm-string">"text"</span> <span class="cm-attribute">id</span>=<span class="cm-string">"amigo"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"input-name"</span> <span class="cm-attribute">placeholder</span>=<span class="cm-string">"Escribe un nombre"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">24</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -115.2px; padding-left: 115.2px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">button</span> <span class="cm-attribute">id</span>=<span class="cm-string">"</span><span class="cm-string">agregar</span><span class="cm-string">"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"button-</span><span class="cm-string">add"</span> <span class="cm-attribute">onclick</span>=<span class="cm-string">"agregarAmigo()"</span><span class="cm-tag cm-bracket">&gt;</span>Añadir<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">button</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">25</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -86.4px; padding-left: 86.4px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">div</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">26</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -79.2px; padding-left: 79.2px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>  </span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">27</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -86.4px; padding-left: 86.4px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">ul</span> <span class="cm-attribute">id</span>=<span class="cm-string">"listaAmigos"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"name-list"</span> <span class="cm-attribute">aria-labelledby</span>=<span class="cm-string">"listaAmigos"</span> <span class="cm-attribute">role</span>=<span class="cm-string">"list"</span><span class="cm-tag cm-bracket">&gt;&lt;/</span><span class="cm-tag">ul</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">28</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -86.4px; padding-left: 86.4px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">ul</span> <span class="cm-attribute">id</span>=<span class="cm-string">"resultado"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"result-list"</span> <span class="cm-attribute">aria-live</span>=<span class="cm-string">"polite"</span><span class="cm-tag cm-bracket">&gt;&lt;/</span><span class="cm-tag">ul</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">29</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: 0px; padding-left: 0px;"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">30</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-open"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -86.4px; padding-left: 86.4px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">div</span> <span class="cm-attribute">class</span>=<span class="cm-string">"button-container"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">31</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-open"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -115.2px; padding-left: 115.2px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">button</span> <span class="cm-attribute">class</span>=<span class="cm-string">"button-draw"</span> <span class="cm-attribute">onclick</span>=<span class="cm-string">"sortearAmigo()"</span> <span class="cm-attribute">aria-label</span>=<span class="cm-string">"Sortear amigo secreto"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">32</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -144px; padding-left: 144px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">img</span> <span class="cm-attribute">src</span>=<span class="cm-string">"assets/play_circle_outline.png"</span> <span class="cm-attribute">alt</span>=<span class="cm-string">"Ícono para sortear"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">33</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -144px; padding-left: 144px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   Sortear amigo</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">34</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -115.2px; padding-left: 115.2px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">button</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">35</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -86.4px; padding-left: 86.4px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">div</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">36</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -57.6px; padding-left: 57.6px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">section</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">37</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -28.8px; padding-left: 28.8px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">main</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">38</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: 0px; padding-left: 0px;"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">39</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: -28.8px; padding-left: 28.8px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-overlay cm-phcode-indent-guides"> </span>   <span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">script</span> <span class="cm-attribute">src</span>=<span class="cm-string">"app.js"</span> <span class="cm-attribute">defer</span><span class="cm-tag cm-bracket">&gt;&lt;/</span><span class="cm-tag">script</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">40</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: 0px; padding-left: 0px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">body</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">41</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: 0px; padding-left: 0px;"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">html</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -82px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 31px;">42</div><div class="CodeMirror-gutter-elt" style="left: 58px; width: 12px;"><div class="code-inspection-gutter"></div></div><div class="CodeMirror-gutter-elt" style="left: 70px; width: 12px;"><div class="CodeMirror-foldgutter-blank"></div></div></div><pre class=" CodeMirror-line " role="presentation" style="text-indent: 0px; padding-left: 0px;"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div></div></div></div></div></div><div style="position: absolute; height: 38px; width: 1px; border-bottom: 12px solid transparent; top: 786px;"></div><div class="CodeMirror-gutters" style="height: 836px; left: 0px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 46px;"></div><div class="CodeMirror-gutter CodeMirror-colorGutter"></div><div class="CodeMirror-gutter code-inspection-gutter"></div><div class="CodeMirror-gutter CodeMirror-foldgutter"></div></div></div></div></div>
</div></div>
        <div id="reference-in-files-results" class="search-results bottom-panel vert-resizable top-resizer no-focus" style="display: none; box-sizing: border-box;"><div class="vert-resizer"></div>
    <div class="toolbar simple-toolbar-layout">
        <div class="title"></div>
        <a href="https://phcode.dev/#" class="close">×</a>
    </div>
    <div style="display: flex; height: calc(100% - 27px);">
<!--27 px is status bar height. If this is not set, the preview code mirror editor gives weird layout issues at times-->
        <div class="table-container" style="width: 50%; height: 100%;"></div>
        <div class="search-editor-preview" style="width: 50%; height: 100%;"></div>
    </div>
</div><div id="find-in-files-results" class="search-results bottom-panel vert-resizable top-resizer no-focus" style="display: none; box-sizing: border-box;"><div class="vert-resizer"></div>
    <div class="toolbar simple-toolbar-layout">
        <div class="title"></div>
        <a href="https://phcode.dev/#" class="close">×</a>
    </div>
    <div style="display: flex; height: calc(100% - 27px);">
<!--27 px is status bar height. If this is not set, the preview code mirror editor gives weird layout issues at times-->
        <div class="table-container" style="width: 50%; height: 100%;"></div>
        <div class="search-editor-preview" style="width: 50%; height: 100%;"></div>
    </div>
</div><div id="problems-panel" class="bottom-panel vert-resizable top-resizer" style="box-sizing: border-box; height: 200px; display: none;"><div class="vert-resizer"></div>
    <div class="toolbar simple-toolbar-layout">
        <button class="btn btn-mini primary problems-fix-all-btn forced-hidden" style="margin-right: 10px;">Fix All</button>
        <div class="title">3 JSHint Problemas - app.js</div>
        <a href="https://phcode.dev/#" class="close">×</a>
    </div>
    <div class="table-container" style="height: calc(100% - 27px); user-select: text;"><table class="bottom-panel-table table table-striped table-condensed row-highlight">
    <tbody>
        <tr class="inspector-section" style="display: none;">
            <td colspan="4">
                <span class="disclosure-triangle expanded"></span>
                <input type="hidden" value="JSHint">
                JSHint (3)
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="inspector-line">
            <td class="line-number" data-line="15" data-character="9">16</td>
            <td class="line-icon">
                <i class="line-icon-problem_type_error fa-solid fa-times-circle"></i>
            </td>
            <td class="line-text">Expected an identifier and instead saw ':'. jshint (E030)</td>
            <td>
                <button class="btn btn-mini table-copy-err-button ph-copy-problem" title="Copiar problema" data-message="Expected an identifier and instead saw &#39;:&#39;. jshint (E030)">
                    <i class="fa-solid fa-copy ph-copy-problem"></i>
                </button>
            </td>
            <td>
            </td>
            <td class="line-snippet">    else:</td>
        </tr>
        <tr class="inspector-line">
            <td class="line-number" data-line="15" data-character="9">16</td>
            <td class="line-icon">
                <i class="line-icon-problem_type_error fa-solid fa-times-circle"></i>
            </td>
            <td class="line-text">Expected an assignment or function call and instead saw an expression. jshint (W030)</td>
            <td>
                <button class="btn btn-mini table-copy-err-button ph-copy-problem" title="Copiar problema" data-message="Expected an assignment or function call and instead saw an expression. jshint (W030)">
                    <i class="fa-solid fa-copy ph-copy-problem"></i>
                </button>
            </td>
            <td>
            </td>
            <td class="line-snippet">    else:</td>
        </tr>
        <tr class="inspector-line">
            <td class="line-number" data-line="15" data-character="10">16</td>
            <td class="line-icon">
                <i class="line-icon-problem_type_error fa-solid fa-times-circle"></i>
            </td>
            <td class="line-text">Missing semicolon. jshint (W033)</td>
            <td>
                <button class="btn btn-mini table-copy-err-button ph-copy-problem" title="Copiar problema" data-message="Missing semicolon. jshint (W033)">
                    <i class="fa-solid fa-copy ph-copy-problem"></i>
                </button>
            </td>
            <td>
            </td>
            <td class="line-snippet">    else:</td>
        </tr>
    </tbody>
</table>
</div>
</div><div id="shortcuts-panel" class="bottom-panel vert-resizable top-resizer" style="display: none; box-sizing: border-box;"><div class="vert-resizer"></div>
    <div class="toolbar simple-toolbar-layout">
        <span class="title">Atajos de teclado</span>
        <a href="https://phcode.dev/#" class="close">×</a>
        <button class="btn reset-to-default" title="Restablecer atajos a los predeterminados…">Restablecer…</button>
        <input class="filter" type="search" placeholder="Filtrar…">
        <span class="presetPickerContainer forced-hidden" title="Usa atajos de teclado de editores como VSCode, WebStorm o Sublime Text"><button class="btn btn-dropdown presetPicker no-focus">Seleccionar ajustes preestablecidos de atajos de teclado</button></span>
    </div>
    <div class="resizable-content"><table id="phoenix-keyboard-shortcuts-table" class="table table-striped row-highlight table-condensed hide-third-column">
    <thead>
        <tr>
            <th class="shortcut-base sort-ascending"><a>Tecla base</a></th>
            <th class="shortcut-binding"><a>Atajo</a></th>
            <th class="shortcut-cmd-id"><a>ID del comando</a></th>
            <th class="shortcut-cmd-name"><a>Comando</a></th>
            <th class="shortcut-orig"><a>Origen</a></th>
        </tr>
    </thead>
    <tbody>
                <tr data-commandid="navigate.gotoFirstProblem" data-keybinding="Ctrl-&#39;" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">'</td>
                    <td class="shortcut-binding">Ctrl+'</td>
                    <td class="shortcut-cmd-id">
                        navigate.gotoFirstProblem
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="navigate.gotoFirstProblem"></i>
                    </td>
                    <td class="shortcut-cmd-name">Ir al primer problema</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="view.restoreFontSize" data-keybinding="Ctrl-Shift-(" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">(</td>
                    <td class="shortcut-binding">Ctrl+Shift+(</td>
                    <td class="shortcut-cmd-id">
                        view.restoreFontSize
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="view.restoreFontSize"></i>
                    </td>
                    <td class="shortcut-cmd-name">Restablecer tamaño de fuente</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="navigate.showInFileTree" data-keybinding="Ctrl-Shift-)" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">)</td>
                    <td class="shortcut-binding">Ctrl+Shift+)</td>
                    <td class="shortcut-cmd-id">
                        navigate.showInFileTree
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="navigate.showInFileTree"></i>
                    </td>
                    <td class="shortcut-cmd-name">Mostrar en el árbol de directorios</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="view.zoomIn" data-keybinding="Ctrl-+" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">+</td>
                    <td class="shortcut-binding">Ctrl++</td>
                    <td class="shortcut-cmd-id">
                        view.zoomIn
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="view.zoomIn"></i>
                    </td>
                    <td class="shortcut-cmd-name">Acercar</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="view.increaseFontSize" data-keybinding="Ctrl-Shift-+" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">+</td>
                    <td class="shortcut-binding">Ctrl+Shift++</td>
                    <td class="shortcut-cmd-id">
                        view.increaseFontSize
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="view.increaseFontSize"></i>
                    </td>
                    <td class="shortcut-cmd-name">Aumentar tamaño de fuente</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="view.zoomOut" data-keybinding="Ctrl--" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">-</td>
                    <td class="shortcut-binding">Ctrl+-</td>
                    <td class="shortcut-cmd-id">
                        view.zoomOut
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="view.zoomOut"></i>
                    </td>
                    <td class="shortcut-cmd-name">Alejar</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="view.decreaseFontSize" data-keybinding="Ctrl-Shift--" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">-</td>
                    <td class="shortcut-binding">Ctrl+Shift+-</td>
                    <td class="shortcut-cmd-id">
                        view.decreaseFontSize
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="view.decreaseFontSize"></i>
                    </td>
                    <td class="shortcut-cmd-name">Disminuir tamaño de fuente</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="edit.lineComment" data-keybinding="Ctrl-/" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">/</td>
                    <td class="shortcut-binding">Ctrl+/</td>
                    <td class="shortcut-cmd-id">
                        edit.lineComment
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="edit.lineComment"></i>
                    </td>
                    <td class="shortcut-cmd-name">Comentar/Descomentar línea</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="edit.blockComment" data-keybinding="Ctrl-Shift-/" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">/</td>
                    <td class="shortcut-binding">Ctrl+Shift+/</td>
                    <td class="shortcut-cmd-id">
                        edit.blockComment
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="edit.blockComment"></i>
                    </td>
                    <td class="shortcut-cmd-name">Comentar/Descomentar bloque</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.newFile" data-keybinding="Ctrl-1" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">1</td>
                    <td class="shortcut-binding">Ctrl+1</td>
                    <td class="shortcut-cmd-id">
                        file.newFile
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.newFile"></i>
                    </td>
                    <td class="shortcut-cmd-name">Nuevo archivo</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="view.togglePanels" data-keybinding="Ctrl-Shift-1" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">1</td>
                    <td class="shortcut-binding">Ctrl+Shift+1</td>
                    <td class="shortcut-cmd-id">
                        view.togglePanels
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="view.togglePanels"></i>
                    </td>
                    <td class="shortcut-cmd-name">Alternar paneles</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.duplicateFile" data-keybinding="Ctrl-2" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">2</td>
                    <td class="shortcut-binding">Ctrl+2</td>
                    <td class="shortcut-cmd-id">
                        file.duplicateFile
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.duplicateFile"></i>
                    </td>
                    <td class="shortcut-cmd-name">Duplicar archivo</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.newFolder" data-keybinding="Ctrl-3" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">3</td>
                    <td class="shortcut-binding">Ctrl+3</td>
                    <td class="shortcut-cmd-id">
                        file.newFolder
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.newFolder"></i>
                    </td>
                    <td class="shortcut-cmd-name">Nueva carpeta</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="view.zoomIn" data-keybinding="Ctrl-=" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">=</td>
                    <td class="shortcut-binding">Ctrl+=</td>
                    <td class="shortcut-cmd-id">
                        view.zoomIn
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="view.zoomIn"></i>
                    </td>
                    <td class="shortcut-cmd-name">Acercar</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="view.increaseFontSize" data-keybinding="Ctrl-Shift-=" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">=</td>
                    <td class="shortcut-binding">Ctrl+Shift+=</td>
                    <td class="shortcut-cmd-id">
                        view.increaseFontSize
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="view.increaseFontSize"></i>
                    </td>
                    <td class="shortcut-cmd-name">Aumentar tamaño de fuente</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="AltMenu-A" data-keybinding="Alt-A" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">A</td>
                    <td class="shortcut-binding">Alt+A</td>
                    <td class="shortcut-cmd-id">
                        AltMenu-A
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="AltMenu-A"></i>
                    </td>
                    <td class="shortcut-cmd-name">Menu Shortcut For A</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="edit.selectAll" data-keybinding="Ctrl-A" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">A</td>
                    <td class="shortcut-binding">Ctrl+A</td>
                    <td class="shortcut-cmd-id">
                        edit.selectAll
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="edit.selectAll"></i>
                    </td>
                    <td class="shortcut-cmd-name">Seleccionar todo</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="AltMenu-B" data-keybinding="Alt-B" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">B</td>
                    <td class="shortcut-binding">Alt+B</td>
                    <td class="shortcut-cmd-id">
                        AltMenu-B
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="AltMenu-B"></i>
                    </td>
                    <td class="shortcut-cmd-name">Menu Shortcut For B</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="edit.beautifyCode" data-keybinding="Ctrl-B" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">B</td>
                    <td class="shortcut-binding">Ctrl+B</td>
                    <td class="shortcut-cmd-id">
                        edit.beautifyCode
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="edit.beautifyCode"></i>
                    </td>
                    <td class="shortcut-cmd-name">Embellecer código</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.previewHighlight" data-keybinding="Ctrl-Shift-C" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">C</td>
                    <td class="shortcut-binding">Ctrl+Shift+C</td>
                    <td class="shortcut-cmd-id">
                        file.previewHighlight
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.previewHighlight"></i>
                    </td>
                    <td class="shortcut-cmd-name">Resaltado en Vista previa dinámica</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="AltMenu-D" data-keybinding="Alt-D" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">D</td>
                    <td class="shortcut-binding">Alt+D</td>
                    <td class="shortcut-cmd-id">
                        AltMenu-D
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="AltMenu-D"></i>
                    </td>
                    <td class="shortcut-cmd-name">Menu Shortcut For D</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="edit.duplicate" data-keybinding="Ctrl-D" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">D</td>
                    <td class="shortcut-binding">Ctrl+D</td>
                    <td class="shortcut-cmd-id">
                        edit.duplicate
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="edit.duplicate"></i>
                    </td>
                    <td class="shortcut-cmd-name">Duplicar</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="edit.deletelines" data-keybinding="Ctrl-Shift-D" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">D</td>
                    <td class="shortcut-binding">Ctrl+Shift+D</td>
                    <td class="shortcut-cmd-id">
                        edit.deletelines
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="edit.deletelines"></i>
                    </td>
                    <td class="shortcut-cmd-name">Eliminar línea</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="AltMenu-E" data-keybinding="Alt-E" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">E</td>
                    <td class="shortcut-binding">Alt+E</td>
                    <td class="shortcut-cmd-id">
                        AltMenu-E
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="AltMenu-E"></i>
                    </td>
                    <td class="shortcut-cmd-name">Menu Shortcut For E</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="navigate.toggleQuickEdit" data-keybinding="Ctrl-E" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">E</td>
                    <td class="shortcut-binding">Ctrl+E</td>
                    <td class="shortcut-cmd-id">
                        navigate.toggleQuickEdit
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="navigate.toggleQuickEdit"></i>
                    </td>
                    <td class="shortcut-cmd-name">Edición rápida</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="cmd.find" data-keybinding="Ctrl-F" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">F</td>
                    <td class="shortcut-binding">Ctrl+F</td>
                    <td class="shortcut-cmd-id">
                        cmd.find
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="cmd.find"></i>
                    </td>
                    <td class="shortcut-cmd-name">Buscar</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="cmd.findInFiles" data-keybinding="Ctrl-Shift-F" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">F</td>
                    <td class="shortcut-binding">Ctrl+Shift+F</td>
                    <td class="shortcut-cmd-id">
                        cmd.findInFiles
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="cmd.findInFiles"></i>
                    </td>
                    <td class="shortcut-cmd-name">Buscar en archivos</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="replace" data-keybinding="Shift-Ctrl-F" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">F</td>
                    <td class="shortcut-binding">Shift+Ctrl+F</td>
                    <td class="shortcut-cmd-id">
                        replace
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="replace"></i>
                    </td>
                    <td class="shortcut-cmd-name">replace</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="navigate.gotoLine" data-keybinding="Ctrl-G" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">G</td>
                    <td class="shortcut-binding">Ctrl+G</td>
                    <td class="shortcut-cmd-id">
                        navigate.gotoLine
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="navigate.gotoLine"></i>
                    </td>
                    <td class="shortcut-cmd-name">Ir a la línea</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="findPrev" data-keybinding="Shift-Ctrl-G" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">G</td>
                    <td class="shortcut-binding">Shift+Ctrl+G</td>
                    <td class="shortcut-cmd-id">
                        findPrev
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="findPrev"></i>
                    </td>
                    <td class="shortcut-cmd-name">findPrev</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="view.toggleSidebar" data-keybinding="Ctrl-Alt-H" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">H</td>
                    <td class="shortcut-binding">Ctrl+Alt+H</td>
                    <td class="shortcut-cmd-id">
                        view.toggleSidebar
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="view.toggleSidebar"></i>
                    </td>
                    <td class="shortcut-cmd-name">Alternar barra lateral</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="cmd.replace" data-keybinding="Ctrl-H" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">H</td>
                    <td class="shortcut-binding">Ctrl+H</td>
                    <td class="shortcut-cmd-id">
                        cmd.replace
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="cmd.replace"></i>
                    </td>
                    <td class="shortcut-cmd-name">Reemplazar</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="cmd.replaceInFiles" data-keybinding="Ctrl-Shift-H" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">H</td>
                    <td class="shortcut-binding">Ctrl+Shift+H</td>
                    <td class="shortcut-cmd-id">
                        cmd.replaceInFiles
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="cmd.replaceInFiles"></i>
                    </td>
                    <td class="shortcut-cmd-name">Reemplazar en archivos</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="navigate.gotoNextProblem" data-keybinding="Ctrl-I" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">I</td>
                    <td class="shortcut-binding">Ctrl+I</td>
                    <td class="shortcut-cmd-id">
                        navigate.gotoNextProblem
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="navigate.gotoNextProblem"></i>
                    </td>
                    <td class="shortcut-cmd-name">Ir al siguiente problema</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="navigate.gotoPrevProblem" data-keybinding="Ctrl-Shift-I" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">I</td>
                    <td class="shortcut-binding">Ctrl+Shift+I</td>
                    <td class="shortcut-cmd-id">
                        navigate.gotoPrevProblem
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="navigate.gotoPrevProblem"></i>
                    </td>
                    <td class="shortcut-cmd-name">Ir al problema anterior</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="navigate.jumptoDefinition" data-keybinding="Ctrl-J" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">J</td>
                    <td class="shortcut-binding">Ctrl+J</td>
                    <td class="shortcut-cmd-id">
                        navigate.jumptoDefinition
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="navigate.jumptoDefinition"></i>
                    </td>
                    <td class="shortcut-cmd-name">Saltar a la definición</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.liveFilePreview" data-keybinding="Ctrl-Alt-L" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">L</td>
                    <td class="shortcut-binding">Ctrl+Alt+L</td>
                    <td class="shortcut-cmd-id">
                        file.liveFilePreview
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.liveFilePreview"></i>
                    </td>
                    <td class="shortcut-cmd-name">Vista previa dinámica</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="edit.selectLine" data-keybinding="Ctrl-L" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">L</td>
                    <td class="shortcut-binding">Ctrl+L</td>
                    <td class="shortcut-cmd-id">
                        edit.selectLine
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="edit.selectLine"></i>
                    </td>
                    <td class="shortcut-cmd-name">Seleccionar línea</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="edit.splitSelIntoLines" data-keybinding="Ctrl-Shift-L" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">L</td>
                    <td class="shortcut-binding">Ctrl+Shift+L</td>
                    <td class="shortcut-cmd-id">
                        edit.splitSelIntoLines
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="edit.splitSelIntoLines"></i>
                    </td>
                    <td class="shortcut-cmd-name">Dividir selección en líneas</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="refactoring.extractToFunction" data-keybinding="Ctrl-Alt-M" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">M</td>
                    <td class="shortcut-binding">Ctrl+Alt+M</td>
                    <td class="shortcut-cmd-id">
                        refactoring.extractToFunction
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="refactoring.extractToFunction"></i>
                    </td>
                    <td class="shortcut-cmd-name">Extraer a función</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="view.toggleProblems" data-keybinding="Ctrl-Shift-M" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">M</td>
                    <td class="shortcut-binding">Ctrl+Shift+M</td>
                    <td class="shortcut-cmd-id">
                        view.toggleProblems
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="view.toggleProblems"></i>
                    </td>
                    <td class="shortcut-cmd-name">Problemas</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="AltMenu-N" data-keybinding="Alt-N" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">N</td>
                    <td class="shortcut-binding">Alt+N</td>
                    <td class="shortcut-cmd-id">
                        AltMenu-N
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="AltMenu-N"></i>
                    </td>
                    <td class="shortcut-cmd-name">Menu Shortcut For N</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="recent-files.show" data-keybinding="Ctrl-Alt-Shift-O" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">O</td>
                    <td class="shortcut-binding">Ctrl+Alt+Shift+O</td>
                    <td class="shortcut-cmd-id">
                        recent-files.show
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="recent-files.show"></i>
                    </td>
                    <td class="shortcut-cmd-name">Archivos recientes…</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.openFolder" data-keybinding="Ctrl-O" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">O</td>
                    <td class="shortcut-binding">Ctrl+O</td>
                    <td class="shortcut-cmd-id">
                        file.openFolder
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.openFolder"></i>
                    </td>
                    <td class="shortcut-cmd-name">Abrir carpeta…</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="navigate.quickOpen" data-keybinding="Ctrl-Shift-O" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">O</td>
                    <td class="shortcut-binding">Ctrl+Shift+O</td>
                    <td class="shortcut-cmd-id">
                        navigate.quickOpen
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="navigate.quickOpen"></i>
                    </td>
                    <td class="shortcut-cmd-name">Apertura rápida</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="cmd.keyboardNavUI" data-keybinding="Ctrl-P" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">P</td>
                    <td class="shortcut-binding">Ctrl+P</td>
                    <td class="shortcut-cmd-id">
                        cmd.keyboardNavUI
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="cmd.keyboardNavUI"></i>
                    </td>
                    <td class="shortcut-cmd-name">Paleta de comandos visual</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.quit" data-keybinding="Ctrl-Q" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">Q</td>
                    <td class="shortcut-binding">Ctrl+Q</td>
                    <td class="shortcut-cmd-id">
                        file.quit
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.quit"></i>
                    </td>
                    <td class="shortcut-cmd-name">Salir</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.reloadLivePreview" data-keybinding="Ctrl-Shift-R" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">R</td>
                    <td class="shortcut-binding">Ctrl+Shift+R</td>
                    <td class="shortcut-cmd-id">
                        file.reloadLivePreview
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.reloadLivePreview"></i>
                    </td>
                    <td class="shortcut-cmd-name">Recargar la Vista previa dinámica</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="replaceAll" data-keybinding="Shift-Ctrl-R" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">R</td>
                    <td class="shortcut-binding">Shift+Ctrl+R</td>
                    <td class="shortcut-cmd-id">
                        replaceAll
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="replaceAll"></i>
                    </td>
                    <td class="shortcut-cmd-name">replaceAll</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.saveAll" data-keybinding="Ctrl-Alt-S" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">S</td>
                    <td class="shortcut-binding">Ctrl+Alt+S</td>
                    <td class="shortcut-cmd-id">
                        file.saveAll
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.saveAll"></i>
                    </td>
                    <td class="shortcut-cmd-name">Guardar todo</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.save" data-keybinding="Ctrl-S" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">S</td>
                    <td class="shortcut-binding">Ctrl+S</td>
                    <td class="shortcut-cmd-id">
                        file.save
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.save"></i>
                    </td>
                    <td class="shortcut-cmd-name">Guardar archivo</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.saveAs" data-keybinding="Ctrl-Shift-S" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">S</td>
                    <td class="shortcut-binding">Ctrl+Shift+S</td>
                    <td class="shortcut-cmd-id">
                        file.saveAs
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.saveAs"></i>
                    </td>
                    <td class="shortcut-cmd-name">Guardar como…</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="navigate.gotoDefinition" data-keybinding="Ctrl-T" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">T</td>
                    <td class="shortcut-binding">Ctrl+T</td>
                    <td class="shortcut-cmd-id">
                        navigate.gotoDefinition
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="navigate.gotoDefinition"></i>
                    </td>
                    <td class="shortcut-cmd-name">Búsqueda rápida de definición</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="redoSelection" data-keybinding="Alt-U" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">U</td>
                    <td class="shortcut-binding">Alt+U</td>
                    <td class="shortcut-cmd-id">
                        redoSelection
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="redoSelection"></i>
                    </td>
                    <td class="shortcut-cmd-name">redoSelection</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="undoSelection" data-keybinding="Ctrl-U" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">U</td>
                    <td class="shortcut-binding">Ctrl+U</td>
                    <td class="shortcut-cmd-id">
                        undoSelection
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="undoSelection"></i>
                    </td>
                    <td class="shortcut-cmd-name">undoSelection</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="redoSelection" data-keybinding="Shift-Ctrl-U" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">U</td>
                    <td class="shortcut-binding">Shift+Ctrl+U</td>
                    <td class="shortcut-cmd-id">
                        redoSelection
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="redoSelection"></i>
                    </td>
                    <td class="shortcut-cmd-name">redoSelection</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="AltMenu-V" data-keybinding="Alt-V" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">V</td>
                    <td class="shortcut-binding">Alt+V</td>
                    <td class="shortcut-cmd-id">
                        AltMenu-V
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="AltMenu-V"></i>
                    </td>
                    <td class="shortcut-cmd-name">Menu Shortcut For V</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="refactoring.extractToVariable" data-keybinding="Ctrl-Alt-V" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">V</td>
                    <td class="shortcut-binding">Ctrl+Alt+V</td>
                    <td class="shortcut-cmd-id">
                        refactoring.extractToVariable
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="refactoring.extractToVariable"></i>
                    </td>
                    <td class="shortcut-cmd-name">Extraer a variable</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.close_all" data-keybinding="Ctrl-Alt-Shift-W" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">W</td>
                    <td class="shortcut-binding">Ctrl+Alt+Shift+W</td>
                    <td class="shortcut-cmd-id">
                        file.close_all
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.close_all"></i>
                    </td>
                    <td class="shortcut-cmd-name">Cerrar todo</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="AltMenu-y" data-keybinding="Alt-Y" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">Y</td>
                    <td class="shortcut-binding">Alt+Y</td>
                    <td class="shortcut-cmd-id">
                        AltMenu-y
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="AltMenu-y"></i>
                    </td>
                    <td class="shortcut-cmd-name">Menu Shortcut For y</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="edit.redo" data-keybinding="Ctrl-Y" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">Y</td>
                    <td class="shortcut-binding">Ctrl+Y</td>
                    <td class="shortcut-cmd-id">
                        edit.redo
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="edit.redo"></i>
                    </td>
                    <td class="shortcut-cmd-name">Rehacer</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="edit.undo" data-keybinding="Ctrl-Z" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">Z</td>
                    <td class="shortcut-binding">Ctrl+Z</td>
                    <td class="shortcut-cmd-id">
                        edit.undo
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="edit.undo"></i>
                    </td>
                    <td class="shortcut-cmd-name">Deshacer</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="redo" data-keybinding="Shift-Ctrl-Z" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">Z</td>
                    <td class="shortcut-binding">Shift+Ctrl+Z</td>
                    <td class="shortcut-cmd-id">
                        redo
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="redo"></i>
                    </td>
                    <td class="shortcut-cmd-name">redo</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="edit.unindent" data-keybinding="Ctrl-[" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">[</td>
                    <td class="shortcut-binding">Ctrl+[</td>
                    <td class="shortcut-cmd-id">
                        edit.unindent
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="edit.unindent"></i>
                    </td>
                    <td class="shortcut-cmd-name">Disminuir sangría</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="edit.indent" data-keybinding="Ctrl-]" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">]</td>
                    <td class="shortcut-binding">Ctrl+]</td>
                    <td class="shortcut-cmd-id">
                        edit.indent
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="edit.indent"></i>
                    </td>
                    <td class="shortcut-cmd-name">Aumentar sangría</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="view.decreaseFontSize" data-keybinding="Ctrl-Shift-_" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">_</td>
                    <td class="shortcut-binding">Ctrl+Shift+_</td>
                    <td class="shortcut-cmd-id">
                        view.decreaseFontSize
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="view.decreaseFontSize"></i>
                    </td>
                    <td class="shortcut-cmd-name">Disminuir tamaño de fuente</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.close" data-keybinding="Ctrl-`" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">`</td>
                    <td class="shortcut-binding">Ctrl+`</td>
                    <td class="shortcut-cmd-id">
                        file.close
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.close"></i>
                    </td>
                    <td class="shortcut-cmd-name">Cerrar</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="codefolding.collapse" data-keybinding="Ctrl-Shift-{" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">{</td>
                    <td class="shortcut-binding">Ctrl+Shift+{</td>
                    <td class="shortcut-cmd-id">
                        codefolding.collapse
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="codefolding.collapse"></i>
                    </td>
                    <td class="shortcut-cmd-name">Colapsar actual</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="codefolding.expand" data-keybinding="Ctrl-Shift-}" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">}</td>
                    <td class="shortcut-binding">Ctrl+Shift+}</td>
                    <td class="shortcut-cmd-id">
                        codefolding.expand
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="codefolding.expand"></i>
                    </td>
                    <td class="shortcut-cmd-name">Expandir actual</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="view.togglePanels" data-keybinding="Ctrl-Shift-~" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">~</td>
                    <td class="shortcut-binding">Ctrl+Shift+~</td>
                    <td class="shortcut-cmd-id">
                        view.togglePanels
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="view.togglePanels"></i>
                    </td>
                    <td class="shortcut-cmd-name">Alternar paneles</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.new_window" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        file.new_window
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.new_window"></i>
                    </td>
                    <td class="shortcut-cmd-name">file.new_window</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.reopen_closed" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        file.reopen_closed
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.reopen_closed"></i>
                    </td>
                    <td class="shortcut-cmd-name">file.reopen_closed</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.downloadProject" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        file.downloadProject
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.downloadProject"></i>
                    </td>
                    <td class="shortcut-cmd-name">file.downloadProject</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.extensionManager" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        file.extensionManager
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.extensionManager"></i>
                    </td>
                    <td class="shortcut-cmd-name">file.extensionManager</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="edit.cut" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        edit.cut
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="edit.cut"></i>
                    </td>
                    <td class="shortcut-cmd-name">edit.cut</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="edit.copy" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        edit.copy
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="edit.copy"></i>
                    </td>
                    <td class="shortcut-cmd-name">edit.copy</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="edit.paste" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        edit.paste
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="edit.paste"></i>
                    </td>
                    <td class="shortcut-cmd-name">edit.paste</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="edit.autoCloseBrackets" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        edit.autoCloseBrackets
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="edit.autoCloseBrackets"></i>
                    </td>
                    <td class="shortcut-cmd-name">edit.autoCloseBrackets</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="cmd.skipCurrentMatch" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        cmd.skipCurrentMatch
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="cmd.skipCurrentMatch"></i>
                    </td>
                    <td class="shortcut-cmd-name">cmd.skipCurrentMatch</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="view.themesOpenSetting" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        view.themesOpenSetting
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="view.themesOpenSetting"></i>
                    </td>
                    <td class="shortcut-cmd-name">view.themesOpenSetting</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="cmd.splitViewNone" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        cmd.splitViewNone
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="cmd.splitViewNone"></i>
                    </td>
                    <td class="shortcut-cmd-name">cmd.splitViewNone</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="cmd.splitViewVertical" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        cmd.splitViewVertical
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="cmd.splitViewVertical"></i>
                    </td>
                    <td class="shortcut-cmd-name">cmd.splitViewVertical</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="cmd.splitViewHorizontal" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        cmd.splitViewHorizontal
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="cmd.splitViewHorizontal"></i>
                    </td>
                    <td class="shortcut-cmd-name">cmd.splitViewHorizontal</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="view.toggleSearchAutoHide" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        view.toggleSearchAutoHide
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="view.toggleSearchAutoHide"></i>
                    </td>
                    <td class="shortcut-cmd-name">view.toggleSearchAutoHide</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="view.toggleActiveLine" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        view.toggleActiveLine
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="view.toggleActiveLine"></i>
                    </td>
                    <td class="shortcut-cmd-name">view.toggleActiveLine</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="view.toggleLineNumbers" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        view.toggleLineNumbers
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="view.toggleLineNumbers"></i>
                    </td>
                    <td class="shortcut-cmd-name">view.toggleLineNumbers</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="view.toggleWordWrap" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        view.toggleWordWrap
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="view.toggleWordWrap"></i>
                    </td>
                    <td class="shortcut-cmd-name">view.toggleWordWrap</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="view.toggleRulers" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        view.toggleRulers
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="view.toggleRulers"></i>
                    </td>
                    <td class="shortcut-cmd-name">view.toggleRulers</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="view.toggleCodeInspection" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        view.toggleCodeInspection
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="view.toggleCodeInspection"></i>
                    </td>
                    <td class="shortcut-cmd-name">view.toggleCodeInspection</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="navigate.gotoDefinitionInProject" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        navigate.gotoDefinitionInProject
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="navigate.gotoDefinitionInProject"></i>
                    </td>
                    <td class="shortcut-cmd-name">navigate.gotoDefinitionInProject</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="navigate.nextDoc" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        navigate.nextDoc
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="navigate.nextDoc"></i>
                    </td>
                    <td class="shortcut-cmd-name">navigate.nextDoc</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="navigate.prevDoc" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        navigate.prevDoc
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="navigate.prevDoc"></i>
                    </td>
                    <td class="shortcut-cmd-name">navigate.prevDoc</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="navigate.newRule" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        navigate.newRule
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="navigate.newRule"></i>
                    </td>
                    <td class="shortcut-cmd-name">navigate.newRule</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="help.support" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        help.support
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="help.support"></i>
                    </td>
                    <td class="shortcut-cmd-name">help.support</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="help.suggest" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        help.suggest
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="help.suggest"></i>
                    </td>
                    <td class="shortcut-cmd-name">help.suggest</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="help.getInvolved" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        help.getInvolved
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="help.getInvolved"></i>
                    </td>
                    <td class="shortcut-cmd-name">help.getInvolved</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="help.youtube" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        help.youtube
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="help.youtube"></i>
                    </td>
                    <td class="shortcut-cmd-name">help.youtube</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="help.twitter" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        help.twitter
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="help.twitter"></i>
                    </td>
                    <td class="shortcut-cmd-name">help.twitter</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="help.homepage" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        help.homepage
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="help.homepage"></i>
                    </td>
                    <td class="shortcut-cmd-name">help.homepage</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="help.about" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        help.about
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="help.about"></i>
                    </td>
                    <td class="shortcut-cmd-name">help.about</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.copy" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        file.copy
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.copy"></i>
                    </td>
                    <td class="shortcut-cmd-name">file.copy</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.copy.path" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        file.copy.path
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.copy.path"></i>
                    </td>
                    <td class="shortcut-cmd-name">file.copy.path</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.duplicate" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        file.duplicate
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.duplicate"></i>
                    </td>
                    <td class="shortcut-cmd-name">file.duplicate</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.download" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        file.download
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.download"></i>
                    </td>
                    <td class="shortcut-cmd-name">file.download</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.delete" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        file.delete
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.delete"></i>
                    </td>
                    <td class="shortcut-cmd-name">file.delete</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="cmd.findInSubtree" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        cmd.findInSubtree
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="cmd.findInSubtree"></i>
                    </td>
                    <td class="shortcut-cmd-name">cmd.findInSubtree</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="cmd.replaceInSubtree" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        cmd.replaceInSubtree
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="cmd.replaceInSubtree"></i>
                    </td>
                    <td class="shortcut-cmd-name">cmd.replaceInSubtree</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="cmd.sortWorkingSetByAdded" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        cmd.sortWorkingSetByAdded
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="cmd.sortWorkingSetByAdded"></i>
                    </td>
                    <td class="shortcut-cmd-name">cmd.sortWorkingSetByAdded</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="cmd.sortWorkingSetByName" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        cmd.sortWorkingSetByName
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="cmd.sortWorkingSetByName"></i>
                    </td>
                    <td class="shortcut-cmd-name">cmd.sortWorkingSetByName</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="cmd.sortWorkingSetByType" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        cmd.sortWorkingSetByType
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="cmd.sortWorkingSetByType"></i>
                    </td>
                    <td class="shortcut-cmd-name">cmd.sortWorkingSetByType</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="cmd.sortWorkingSetToggleAuto" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        cmd.sortWorkingSetToggleAuto
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="cmd.sortWorkingSetToggleAuto"></i>
                    </td>
                    <td class="shortcut-cmd-name">cmd.sortWorkingSetToggleAuto</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.showFolderFirst" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        file.showFolderFirst
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.showFolderFirst"></i>
                    </td>
                    <td class="shortcut-cmd-name">file.showFolderFirst</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.cut" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        file.cut
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.cut"></i>
                    </td>
                    <td class="shortcut-cmd-name">file.cut</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.paste" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        file.paste
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.paste"></i>
                    </td>
                    <td class="shortcut-cmd-name">file.paste</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.refresh" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        file.refresh
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.refresh"></i>
                    </td>
                    <td class="shortcut-cmd-name">file.refresh</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.close_below" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        file.close_below
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.close_below"></i>
                    </td>
                    <td class="shortcut-cmd-name">file.close_below</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.close_others" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        file.close_others
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.close_others"></i>
                    </td>
                    <td class="shortcut-cmd-name">file.close_others</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.close_above" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        file.close_above
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.close_above"></i>
                    </td>
                    <td class="shortcut-cmd-name">file.close_above</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="codefolding.collapse.all" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        codefolding.collapse.all
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="codefolding.collapse.all"></i>
                    </td>
                    <td class="shortcut-cmd-name">codefolding.collapse.all</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="codefolding.expand.all" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        codefolding.expand.all
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="codefolding.expand.all"></i>
                    </td>
                    <td class="shortcut-cmd-name">codefolding.expand.all</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="healthData.healthDataStatistics" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        healthData.healthDataStatistics
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="healthData.healthDataStatistics"></i>
                    </td>
                    <td class="shortcut-cmd-name">healthData.healthDataStatistics</td>
                    <td class="shortcut-orig">Extensión</td>
                </tr>
                <tr data-commandid="debug.refreshWindow" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        debug.refreshWindow
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="debug.refreshWindow"></i>
                    </td>
                    <td class="shortcut-cmd-name">debug.refreshWindow</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="debug.reloadWithoutUserExts" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        debug.reloadWithoutUserExts
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="debug.reloadWithoutUserExts"></i>
                    </td>
                    <td class="shortcut-cmd-name">debug.reloadWithoutUserExts</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="debug.loadCurrentExtension" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        debug.loadCurrentExtension
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="debug.loadCurrentExtension"></i>
                    </td>
                    <td class="shortcut-cmd-name">debug.loadCurrentExtension</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="debug.unloadCurrentExtension" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        debug.unloadCurrentExtension
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="debug.unloadCurrentExtension"></i>
                    </td>
                    <td class="shortcut-cmd-name">debug.unloadCurrentExtension</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="debug.openExtensionFolders" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        debug.openExtensionFolders
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="debug.openExtensionFolders"></i>
                    </td>
                    <td class="shortcut-cmd-name">debug.openExtensionFolders</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.openKeyMap" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        file.openKeyMap
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.openKeyMap"></i>
                    </td>
                    <td class="shortcut-cmd-name">file.openKeyMap</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="debug.runUnitTests" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        debug.runUnitTests
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="debug.runUnitTests"></i>
                    </td>
                    <td class="shortcut-cmd-name">debug.runUnitTests</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="debug.buildTests" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        debug.buildTests
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="debug.buildTests"></i>
                    </td>
                    <td class="shortcut-cmd-name">debug.buildTests</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="debug.enableLogging" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        debug.enableLogging
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="debug.enableLogging"></i>
                    </td>
                    <td class="shortcut-cmd-name">debug.enableLogging</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="debug.enablePhNodeInspector" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        debug.enablePhNodeInspector
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="debug.enablePhNodeInspector"></i>
                    </td>
                    <td class="shortcut-cmd-name">debug.enablePhNodeInspector</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="debug.getPhNodeInspectorURL" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        debug.getPhNodeInspectorURL
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="debug.getPhNodeInspectorURL"></i>
                    </td>
                    <td class="shortcut-cmd-name">debug.getPhNodeInspectorURL</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="debug.livePreviewLogging" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        debug.livePreviewLogging
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="debug.livePreviewLogging"></i>
                    </td>
                    <td class="shortcut-cmd-name">debug.livePreviewLogging</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="debug.showPerfData" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        debug.showPerfData
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="debug.showPerfData"></i>
                    </td>
                    <td class="shortcut-cmd-name">debug.showPerfData</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="debug.openVFS" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        debug.openVFS
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="debug.openVFS"></i>
                    </td>
                    <td class="shortcut-cmd-name">debug.openVFS</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="debug.openVirtualServer" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        debug.openVirtualServer
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="debug.openVirtualServer"></i>
                    </td>
                    <td class="shortcut-cmd-name">debug.openVirtualServer</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="debug.switchLanguage" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        debug.switchLanguage
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="debug.switchLanguage"></i>
                    </td>
                    <td class="shortcut-cmd-name">debug.switchLanguage</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="debug.openPrefsInSplitView" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        debug.openPrefsInSplitView
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="debug.openPrefsInSplitView"></i>
                    </td>
                    <td class="shortcut-cmd-name">debug.openPrefsInSplitView</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="edit.beautifyOnSave" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        edit.beautifyOnSave
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="edit.beautifyOnSave"></i>
                    </td>
                    <td class="shortcut-cmd-name">edit.beautifyOnSave</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="view.toggleIndentGuides" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        view.toggleIndentGuides
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="view.toggleIndentGuides"></i>
                    </td>
                    <td class="shortcut-cmd-name">view.toggleIndentGuides</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="view.enableQuickView" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        view.enableQuickView
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="view.enableQuickView"></i>
                    </td>
                    <td class="shortcut-cmd-name">view.enableQuickView</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="view.enableSelectionView" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        view.enableSelectionView
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="view.enableSelectionView"></i>
                    </td>
                    <td class="shortcut-cmd-name">view.enableSelectionView</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="edit.autoRenameTags" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        edit.autoRenameTags
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="edit.autoRenameTags"></i>
                    </td>
                    <td class="shortcut-cmd-name">edit.autoRenameTags</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.liveFilePreviewSettings" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        file.liveFilePreviewSettings
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.liveFilePreviewSettings"></i>
                    </td>
                    <td class="shortcut-cmd-name">file.liveFilePreviewSettings</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="help.toggleShortcuts" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        help.toggleShortcuts
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="help.toggleShortcuts"></i>
                    </td>
                    <td class="shortcut-cmd-name">help.toggleShortcuts</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.newProject" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        file.newProject
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.newProject"></i>
                    </td>
                    <td class="shortcut-cmd-name">file.newProject</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="refactoring.wrapintrycatch" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        refactoring.wrapintrycatch
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="refactoring.wrapintrycatch"></i>
                    </td>
                    <td class="shortcut-cmd-name">refactoring.wrapintrycatch</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="refactoring.wrapincondition" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        refactoring.wrapincondition
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="refactoring.wrapincondition"></i>
                    </td>
                    <td class="shortcut-cmd-name">refactoring.wrapincondition</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="refactoring.converttoarrowfunction" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        refactoring.converttoarrowfunction
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="refactoring.converttoarrowfunction"></i>
                    </td>
                    <td class="shortcut-cmd-name">refactoring.converttoarrowfunction</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="refactoring.creategettersandsetters" data-keybinding="" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base"></td>
                    <td class="shortcut-binding"></td>
                    <td class="shortcut-cmd-id">
                        refactoring.creategettersandsetters
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="refactoring.creategettersandsetters"></i>
                    </td>
                    <td class="shortcut-cmd-name">refactoring.creategettersandsetters</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="delGroupBefore" data-keybinding="Ctrl-Backspace" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">Backspace</td>
                    <td class="shortcut-binding">Ctrl+Backspace</td>
                    <td class="shortcut-cmd-id">
                        delGroupBefore
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="delGroupBefore"></i>
                    </td>
                    <td class="shortcut-cmd-name">delGroupBefore</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="delGroupAfter" data-keybinding="Ctrl-Delete" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">Deleteete</td>
                    <td class="shortcut-binding">Ctrl+Deleteete</td>
                    <td class="shortcut-cmd-id">
                        delGroupAfter
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="delGroupAfter"></i>
                    </td>
                    <td class="shortcut-cmd-name">delGroupAfter</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="navigate.nextMatch" data-keybinding="Alt-Down" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">Down</td>
                    <td class="shortcut-binding">Alt+Down</td>
                    <td class="shortcut-cmd-id">
                        navigate.nextMatch
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="navigate.nextMatch"></i>
                    </td>
                    <td class="shortcut-cmd-name">Siguiente coincidencia para edición rápida</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="edit.addCursorToNextLine" data-keybinding="Alt-Shift-Down" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">Down</td>
                    <td class="shortcut-binding">Alt+Shift+Down</td>
                    <td class="shortcut-cmd-id">
                        edit.addCursorToNextLine
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="edit.addCursorToNextLine"></i>
                    </td>
                    <td class="shortcut-cmd-name">Agregar cursor a la siguiente línea</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="view.scrollLineDown" data-keybinding="Ctrl-Down" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">Down</td>
                    <td class="shortcut-binding">Ctrl+Down</td>
                    <td class="shortcut-cmd-id">
                        view.scrollLineDown
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="view.scrollLineDown"></i>
                    </td>
                    <td class="shortcut-cmd-name">Desplazar hacia abajo</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="edit.lineDown" data-keybinding="Ctrl-Shift-Down" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">Down</td>
                    <td class="shortcut-binding">Ctrl+Shift+Down</td>
                    <td class="shortcut-cmd-id">
                        edit.lineDown
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="edit.lineDown"></i>
                    </td>
                    <td class="shortcut-cmd-name">Bajar línea</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="goDocEnd" data-keybinding="Ctrl-End" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">End</td>
                    <td class="shortcut-binding">Ctrl+End</td>
                    <td class="shortcut-cmd-id">
                        goDocEnd
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="goDocEnd"></i>
                    </td>
                    <td class="shortcut-cmd-name">goDocEnd</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="edit.openLineBelow" data-keybinding="Ctrl-Enter" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">Enter</td>
                    <td class="shortcut-binding">Ctrl+Enter</td>
                    <td class="shortcut-cmd-id">
                        edit.openLineBelow
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="edit.openLineBelow"></i>
                    </td>
                    <td class="shortcut-cmd-name">Crear línea abajo</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="edit.openLineAbove" data-keybinding="Ctrl-Shift-Enter" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">Enter</td>
                    <td class="shortcut-binding">Ctrl+Shift+Enter</td>
                    <td class="shortcut-cmd-id">
                        edit.openLineAbove
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="edit.openLineAbove"></i>
                    </td>
                    <td class="shortcut-cmd-name">Crear línea arriba</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="navigate.toggleQuickDocs" data-keybinding="F1" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">F1</td>
                    <td class="shortcut-binding">F1</td>
                    <td class="shortcut-cmd-id">
                        navigate.toggleQuickDocs
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="navigate.toggleQuickDocs"></i>
                    </td>
                    <td class="shortcut-cmd-name">Documentación rápida</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="help.docs" data-keybinding="Shift-F1" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">F1</td>
                    <td class="shortcut-binding">Shift+F1</td>
                    <td class="shortcut-cmd-id">
                        help.docs
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="help.docs"></i>
                    </td>
                    <td class="shortcut-cmd-name">Ayuda, introducción</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="view.toggleFullscreen" data-keybinding="F11" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">F11</td>
                    <td class="shortcut-binding">F11</td>
                    <td class="shortcut-cmd-id">
                        view.toggleFullscreen
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="view.toggleFullscreen"></i>
                    </td>
                    <td class="shortcut-cmd-name">Pantalla completa</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="view.togglePureCode" data-keybinding="Shift-F11" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">F11</td>
                    <td class="shortcut-binding">Shift+F11</td>
                    <td class="shortcut-cmd-id">
                        view.togglePureCode
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="view.togglePureCode"></i>
                    </td>
                    <td class="shortcut-cmd-name">Sin distracciones</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="cmd.findAllReferences" data-keybinding="Shift-F12" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">F12</td>
                    <td class="shortcut-binding">Shift+F12</td>
                    <td class="shortcut-cmd-id">
                        cmd.findAllReferences
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="cmd.findAllReferences"></i>
                    </td>
                    <td class="shortcut-cmd-name">Buscar todas las referencias</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="refactoring.renamereference" data-keybinding="F2" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">F2</td>
                    <td class="shortcut-binding">F2</td>
                    <td class="shortcut-cmd-id">
                        refactoring.renamereference
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="refactoring.renamereference"></i>
                    </td>
                    <td class="shortcut-cmd-name">Renombrar</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="file.rename" data-keybinding="Shift-F2" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">F2</td>
                    <td class="shortcut-binding">Shift+F2</td>
                    <td class="shortcut-cmd-id">
                        file.rename
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="file.rename"></i>
                    </td>
                    <td class="shortcut-cmd-name">Renombrar</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="cmd.addNextMatch" data-keybinding="Alt-F3" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">F3</td>
                    <td class="shortcut-binding">Alt+F3</td>
                    <td class="shortcut-cmd-id">
                        cmd.addNextMatch
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="cmd.addNextMatch"></i>
                    </td>
                    <td class="shortcut-cmd-name">Añadir la siguiente ocurrencia</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="cmd.findAllAndSelect" data-keybinding="Alt-Shift-F3" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">F3</td>
                    <td class="shortcut-binding">Alt+Shift+F3</td>
                    <td class="shortcut-cmd-id">
                        cmd.findAllAndSelect
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="cmd.findAllAndSelect"></i>
                    </td>
                    <td class="shortcut-cmd-name">Seleccionar todas las ocurrencias</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="cmd.findNext" data-keybinding="F3" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">F3</td>
                    <td class="shortcut-binding">F3</td>
                    <td class="shortcut-cmd-id">
                        cmd.findNext
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="cmd.findNext"></i>
                    </td>
                    <td class="shortcut-cmd-name">Buscar siguiente</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="cmd.findPrevious" data-keybinding="Shift-F3" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">F3</td>
                    <td class="shortcut-binding">Shift+F3</td>
                    <td class="shortcut-cmd-id">
                        cmd.findPrevious
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="cmd.findPrevious"></i>
                    </td>
                    <td class="shortcut-cmd-name">Buscar anterior</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="goDocStart" data-keybinding="Ctrl-Home" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">Home</td>
                    <td class="shortcut-binding">Ctrl+Home</td>
                    <td class="shortcut-cmd-id">
                        goDocStart
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="goDocStart"></i>
                    </td>
                    <td class="shortcut-cmd-name">goDocStart</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="navigation.jump.back" data-keybinding="Alt-Left" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">Left</td>
                    <td class="shortcut-binding">Alt+Left</td>
                    <td class="shortcut-cmd-id">
                        navigation.jump.back
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="navigation.jump.back"></i>
                    </td>
                    <td class="shortcut-cmd-name">Navegar hacia atrás</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="goGroupLeft" data-keybinding="Ctrl-Left" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">Left</td>
                    <td class="shortcut-binding">Ctrl+Left</td>
                    <td class="shortcut-cmd-id">
                        goGroupLeft
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="goGroupLeft"></i>
                    </td>
                    <td class="shortcut-cmd-name">goGroupLeft</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="navigate.nextDocListOrder" data-keybinding="Alt-PageDown" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">Page Down</td>
                    <td class="shortcut-binding">Alt+Page Down</td>
                    <td class="shortcut-cmd-id">
                        navigate.nextDocListOrder
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="navigate.nextDocListOrder"></i>
                    </td>
                    <td class="shortcut-cmd-name">Documento siguiente en la lista</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="navigate.prevDocListOrder" data-keybinding="Alt-PageUp" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">Page Up</td>
                    <td class="shortcut-binding">Alt+Page Up</td>
                    <td class="shortcut-cmd-id">
                        navigate.prevDocListOrder
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="navigate.prevDocListOrder"></i>
                    </td>
                    <td class="shortcut-cmd-name">Documento anterior en la lista</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="navigation.jump.fwd" data-keybinding="Alt-Right" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">Right</td>
                    <td class="shortcut-binding">Alt+Right</td>
                    <td class="shortcut-cmd-id">
                        navigation.jump.fwd
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="navigation.jump.fwd"></i>
                    </td>
                    <td class="shortcut-cmd-name">Navegar hacia adelante</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="goGroupRight" data-keybinding="Ctrl-Right" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">Right</td>
                    <td class="shortcut-binding">Ctrl+Right</td>
                    <td class="shortcut-cmd-id">
                        goGroupRight
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="goGroupRight"></i>
                    </td>
                    <td class="shortcut-cmd-name">goGroupRight</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="showParameterHint" data-keybinding="Ctrl-Shift-Space" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">Space</td>
                    <td class="shortcut-binding">Ctrl+Shift+Space</td>
                    <td class="shortcut-cmd-id">
                        showParameterHint
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="showParameterHint"></i>
                    </td>
                    <td class="shortcut-cmd-name">Mostrar sugerencias de parámetros</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="edit.showCodeHints" data-keybinding="Ctrl-Space" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">Space</td>
                    <td class="shortcut-binding">Ctrl+Space</td>
                    <td class="shortcut-cmd-id">
                        edit.showCodeHints
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="edit.showCodeHints"></i>
                    </td>
                    <td class="shortcut-cmd-name">Mostrar sugerencias de código</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="recent-files.prev" data-keybinding="Ctrl-Shift-Tab" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">Tab</td>
                    <td class="shortcut-binding">Ctrl+Shift+Tab</td>
                    <td class="shortcut-cmd-id">
                        recent-files.prev
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="recent-files.prev"></i>
                    </td>
                    <td class="shortcut-cmd-name">Documento anterior</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="recent-files.next" data-keybinding="Ctrl-Tab" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">Tab</td>
                    <td class="shortcut-binding">Ctrl+Tab</td>
                    <td class="shortcut-cmd-id">
                        recent-files.next
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="recent-files.next"></i>
                    </td>
                    <td class="shortcut-cmd-name">Documento siguiente</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="edit.addCursorToPrevLine" data-keybinding="Alt-Shift-Up" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">Up</td>
                    <td class="shortcut-binding">Alt+Shift+Up</td>
                    <td class="shortcut-cmd-id">
                        edit.addCursorToPrevLine
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="edit.addCursorToPrevLine"></i>
                    </td>
                    <td class="shortcut-cmd-name">Agregar cursor a la línea anterior</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="navigate.previousMatch" data-keybinding="Alt-Up" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">Up</td>
                    <td class="shortcut-binding">Alt+Up</td>
                    <td class="shortcut-cmd-id">
                        navigate.previousMatch
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="navigate.previousMatch"></i>
                    </td>
                    <td class="shortcut-cmd-name">Elemento anterior de edición rápida</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="edit.lineUp" data-keybinding="Ctrl-Shift-Up" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">Up</td>
                    <td class="shortcut-binding">Ctrl+Shift+Up</td>
                    <td class="shortcut-cmd-id">
                        edit.lineUp
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="edit.lineUp"></i>
                    </td>
                    <td class="shortcut-cmd-name">Subir línea</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
                <tr data-commandid="view.scrollLineUp" data-keybinding="Ctrl-Up" title="Doble clic para cambiar el atajo">
                    <td class="shortcut-base">Up</td>
                    <td class="shortcut-binding">Ctrl+Up</td>
                    <td class="shortcut-cmd-id">
                        view.scrollLineUp
                        <i class="copy-command fa-regular fa-copy" style="float: right; cursor: pointer;" title="Copiar" data-commandid="view.scrollLineUp"></i>
                    </td>
                    <td class="shortcut-cmd-name">Desplazar hacia arriba</td>
                    <td class="shortcut-orig">Phoenix Code</td>
                </tr>
    </tbody>
</table>
</div>
</div><div id="test-builder-panel-phcode" class="bottom-panel vert-resizable top-resizer" style="display: none; box-sizing: border-box;"><div class="vert-resizer"></div>
    <div class="toolbar" style="display: flex; justify-content: space-between;">
      <div style="display: flex">
         <div class="title">Test Builder</div>
         <button class="btn btn-mini no-focus save-test-builder">Save</button>
         <button class="btn btn-mini primary no-focus run-test-builder">Run</button>
         <button class="btn btn-mini no-focus run-selected">Run Selected</button>
      </div>
      <div>
         <button class="btn btn-mini no-focus mark-validate" title="Validate marks at cursor">Marks</button>
         <button class="btn btn-mini no-focus cursor-locate">cursor</button>
         <button class="btn btn-mini no-focus text-validate" title="validate text" style="margin-right: 20px;">
            Text</button>
         <a href="https://phcode.dev/#" class="close" style="right: 0;margin-right: 10px;">×</a>
      </div>  
    </div>
    <div style="display: flex; height: 100%; overflow: scroll;">
<!--27 px is status bar height. If this is not set, the preview code mirror editor gives weird layout issues at times-->
        <div class="test_builder-editor editor-holder" style="width: 100%; height: 100%;"><div class="CodeMirror cm-s-system-default" translate="no" style="clip-path: inset(0px); height: 100px;"><div style="overflow: hidden; position: relative; width: 3px; height: 0px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; min-height: 1em; outline: none;"></textarea></div><div class="CodeMirror-vscrollbar" tabindex="-1" cm-not-content="true"><div style="min-width: 1px;"></div></div><div class="CodeMirror-hscrollbar" tabindex="-1" cm-not-content="true"><div style="height: 100%; min-height: 1px;"></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; min-width: 3px;"><div style="position: relative;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre class="CodeMirror-line-like"><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"><pre class="CodeMirror-line" role="presentation" style="text-indent: 0px; padding-left: 0px;"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-cursors"></div><div class="CodeMirror-code" role="presentation"></div></div></div></div></div><div style="position: absolute; height: 50px; width: 1px;"></div><div class="CodeMirror-gutters" style="left: 0px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 1px;"></div><div class="CodeMirror-gutter code-inspection-gutter"></div><div class="CodeMirror-gutter CodeMirror-foldgutter"></div></div></div></div></div>
    </div>
</div><div id="status-bar" class="statusbar no-focus" style="display: block;">
            <div id="status-phoenix">
                <div id="status-info" class="info" title="Línea 20, Columna 34 — 23 líneas
Clic para ir a otra línea" style="">
                    <div id="status-cursor">20 : 34</div>
                    <div id="status-file">— 23 líneas</div>
                </div>
            </div>
            <div id="status-indicators" class="indicators">
                <div id="status-indent">
                    <div id="indent-type" title="Haz clic para usar tabulaciones en la sangría">Espacios:</div>
                    <div id="indent-width-label" title="Haz clic para cambiar el número de espacios usados en la sangría">4</div>
                    <input id="indent-width-input" type="number" min="1" max="10" maxlength="2" size="2" class="hidden">
                    <div id="indent-auto"><span title="Hacer clic para cambiar a sangrías fijas. Actualmente configurado para detectar y aplicar sangrías automáticamente según el archivo actual.">Auto</span></div>
                </div><div id="status-inspection" title="No se encontraron problemas de JSHint - ¡Buen trabajo!" class="inspection-valid" style="display: block;">&nbsp;</div>
                <div id="status-language"><button class="btn btn-dropdown  btn-status-bar" title="Haz clic para cambiar el tipo de archivo">JavaScript</button></div>
                <div id="status-encoding"><button class="btn btn-dropdown  btn-status-bar" title="Seleccione la codificación">utf8</button></div>
                <div id="status-overwrite" title="Haz clic para intercambiar entre el modo insertar (INS) y el modo sobrescribir (SOB)">INS</div>
                <div id="status-tasks" class="forced-hidden global-indicator">
                    <div class="spinner spin forced-hidden"></div>
                <button class="btn btn-dropdown  btn-status-bar" title="Administrar tareas activas">Tareas</button></div>
            </div>
        </div>
    <!-- Bottom panels and status bar are programmatically created here -->

    </div>

<!-- Vertical toolbar docked to right -->
<div id="main-toolbar" class="toolbar no-focus collapsible" style="width: 512px; box-sizing: border-box;"><div class="horz-resizer"></div>
    <!-- Top-aligned buttons -->
    <div id="main-plugin-panel" class="plugin-panel" style="width: 482px;">
    <div id="panel-live-preview" style="display: block;">
    <div id="live-preview-plugin-toolbar" class="plugin-toolbar" style="display: flex; align-items: center; flex-direction: row;">
        <div style="width: 20%;display: flex;">
            <button id="reloadLivePreviewButton" title="Recargar página" class="btn-alt-quiet toolbar-button reload-icon"></button>
            <button id="highlightLPButton" title="Alternar resaltado de vista previa en vivo" class="btn-alt-quiet toolbar-button pointer-fill-icon"></button>
        </div>
        <div style="width: fit-content;min-width: 60%;display: flex;justify-content: center; align-items: center;">
<!--            these are buttons that are always invisible to help central align the panel title-->
            <button id="safariButtonBallast" title="Abrir en Safari…" class="btn-alt-quiet toolbar-button live-preview-browser-btn forced-hidden">
                <img src="./challenge-amigo-secreto_files/safari-original.svg">
            </button>
            <button id="chromeButtonBallast" title="Abrir en Chrome…" class="btn-alt-quiet toolbar-button live-preview-browser-btn forced-hidden">
                <img src="./challenge-amigo-secreto_files/chrome-original.svg">
            </button>
            <button id="edgeButtonBallast" title="Abrir en Edge…" class="btn-alt-quiet toolbar-button live-preview-browser-btn forced-hidden">
                <img src="./challenge-amigo-secreto_files/edge-logo.svg">
            </button>
            <button id="firefoxButtonBallast" title="Abrir en Firefox…" class="btn-alt-quiet toolbar-button live-preview-browser-btn forced-hidden">
                <img src="./challenge-amigo-secreto_files/firefox-original.svg">
            </button>
<!--            these are buttons that are always invisible to help central align the panel title-->
            <button id="pinURLButton" title="Fijar o Desfijar la página de vista previa" class="btn-alt-quiet toolbar-button unpin-icon"></button>
            <span id="panel-live-preview-title" title="index.html - Mostrar en el editor…" data-fullpath="/mnt/challenge-amigo-secreto_esp-main/index.html">index.html - Vista previa dinámica</span>
            <button id="livePreviewPopoutButton" title="Desplegar vista previa en vivo en una nueva ventana" class="btn-alt-quiet toolbar-button open-icon"></button>
            <button id="safariButton" title="Abrir en Safari…" class="btn-alt-quiet toolbar-button live-preview-browser-btn forced-hidden">
                <img src="./challenge-amigo-secreto_files/safari-original.svg">
            </button>
            <button id="chromeButton" title="Abrir en Chrome…" class="btn-alt-quiet toolbar-button live-preview-browser-btn forced-hidden">
                <img src="./challenge-amigo-secreto_files/chrome-original.svg">
            </button>
            <button id="edgeButton" title="Abrir en Edge…" class="btn-alt-quiet toolbar-button live-preview-browser-btn forced-hidden">
                <img src="./challenge-amigo-secreto_files/edge-logo.svg">
            </button>
            <button id="firefoxButton" title="Abrir en Firefox…" class="btn-alt-quiet toolbar-button live-preview-browser-btn forced-hidden">
                <img src="./challenge-amigo-secreto_files/firefox-original.svg">
            </button>
        </div>
        <div style="width: 20%;display: flex;align-items: center; justify-content: flex-end">
            <button id="livePreviewSettingsBtn" title="Configuración de la vista previa en vivo…" class="btn-alt-quiet toolbar-button lp-settings-icon"><i class="fa-solid fa-gear"></i></button>
        </div>
        <iframe id="live-preview-server-iframe" title="live preview server" src="./challenge-amigo-secreto_files/saved_resource.html" style="width:100%;" sandbox="allow-same-origin allow-scripts" hidden="">
        </iframe>
    </div>
    <div class="live-preview-custom-banner forced-hidden">
        <span class="live-preview-banner-message">Obteniendo vista previa desde tu servidor personalizado {0}</span>
        <button class="live-preview-settings-banner-btn btn btn-mini primary" style="margin-left: 10px;">Configuración de la vista previa en vivo…</button>
        <i class="fa fa-close custom-server-banner-close-icon" style="margin-left: 10px;margin-right: 10px;cursor: pointer;" title="Cerrar"></i>
    </div>
    <div class="frame-container">
        <div style="width: 3px;"></div>
        <iframe id="panel-live-preview-frame" title="Live Preview" style="border: none" width="100%" height="100%" seamless="true" src="./challenge-amigo-secreto_files/index.html" sandbox="allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-modals allow-pointer-lock" data-original-src="https://phcode.live/vfs/PHOENIX_LIVE_PREVIEW_PH-438050498694/mnt/challenge-amigo-secreto_esp-main/index.html" data-original-path="/mnt/challenge-amigo-secreto_esp-main/index.html">
    </iframe>
    </div>
</div></div>
    <div id="plugin-icons-bar">
        <div class="buttons">
            <a id="toolbar-go-live" href="https://phcode.dev/#" title="Servidor de vista previa en vivo activo" class="active selected-button success"></a> <!-- tooltip for this is set in JS -->
            <a id="toolbar-extension-manager" href="https://phcode.dev/#" title="Gestor de extensiones"></a>
            <a id="update-notification" href="https://phcode.dev/#" class="forced-hidden" title="¡Hay una nueva versión de Phoenix Code disponible! Haz clic aquí para ver más detalles."></a>
        <a id="sync-button" href="https://phcode.dev/#" class="preview" title="Haz clic para publicar y compartir este sitio"></a></div>
        <div class="bottom-buttons">
        <a id="help-button" href="https://phcode.dev/#" class="help" title="Soporte de Phoenix Code"></a></div>
    </div>
</div>

<!-- Hack to ensure that the code editor's web font is loaded early. -->
<!-- For more info, see note in brackets.less for class .dummy-text, or issue 76 -->
<div class="dummy-text">x</div>
</div>

<!-- Modal Windows -->
<div id="context-menu-bar">
    <ul data-dropdown="dropdown"><li class="dropdown context-menu" id="zoom-view-submenu"><a href="https://phcode.dev/#" class="dropdown-toggle" data-toggle="dropdown" style="display: none;"></a><ul class="dropdown-menu"><li><a href="https://phcode.dev/#" class="menuAnchor" id="zoom-view-submenu-view.zoomIn"> <span class="menu-name">Acercar</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl++</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="zoom-view-submenu-view.zoomOut"> <span class="menu-name">Alejar</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+−</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="zoom-view-submenu-view.increaseFontSize"> <span class="menu-name">Aumentar tamaño de fuente</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Shift++</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="zoom-view-submenu-view.decreaseFontSize"> <span class="menu-name">Disminuir tamaño de fuente</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Shift+_</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="zoom-view-submenu-view.restoreFontSize"> <span class="menu-name">Restablecer tamaño de fuente</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Shift+(</span></a></li></ul></li><li class="dropdown context-menu" id="workingset-context-menu"><a href="https://phcode.dev/#" class="dropdown-toggle" data-toggle="dropdown" style="display: none;"></a><ul class="dropdown-menu"><li><a href="https://phcode.dev/#" class="menuAnchor" id="workingset-context-menu-file.save"> <span class="menu-name">Guardar archivo</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+S</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="workingset-context-menu-navigate.showInFileTree"> <span class="menu-name">Mostrar en el árbol de directorios</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Shift+)</span></a></li><li><hr class="divider" id="workingset-context-menu-brackets-menuDivider-23"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="workingset-context-menu-file.copy"> <span class="menu-name">Copiar</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="workingset-context-menu-file.copy.path"> <span class="menu-name">Copiar ruta</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="workingset-context-menu-file.duplicate"> <span class="menu-name">Duplicar</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor disabled forced-hidden" id="workingset-context-menu-file.download"> <span class="menu-name">Descargar</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><hr class="divider" id="workingset-context-menu-brackets-menuDivider-24"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="workingset-context-menu-file.rename"> <span class="menu-name">Renombrar</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Shift+F2</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="workingset-context-menu-file.delete"> <span class="menu-name">Eliminar</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><hr class="divider" id="workingset-context-menu-brackets-menuDivider-25"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="workingset-context-menu-cmd.findInSubtree"> <span class="menu-name">Buscar en…</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="workingset-context-menu-cmd.replaceInSubtree"> <span class="menu-name">Reemplazar en…</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><hr class="divider" id="workingset-context-menu-brackets-menuDivider-26"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="workingset-context-menu-file.close"> <span class="menu-name">Cerrar</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+`</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="workingset-context-menu-file.close_above"> <span class="menu-name">Cerrar otros por encima</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="workingset-context-menu-file.close_others"> <span class="menu-name">Cerrar otros</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="workingset-context-menu-file.close_below"> <span class="menu-name">Cerrar otros por debajo</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li></ul></li><li class="dropdown context-menu" id="splitview-menu"><a href="https://phcode.dev/#" class="dropdown-toggle" data-toggle="dropdown" style="display: none;"></a><ul class="dropdown-menu"><li><a href="https://phcode.dev/#" class="menuAnchor checked" id="splitview-menu-cmd.splitViewNone"> <span class="menu-name">No dividido</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="splitview-menu-cmd.splitViewVertical"> <span class="menu-name">División vertical</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="splitview-menu-cmd.splitViewHorizontal"> <span class="menu-name">División horizontal</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><hr class="divider" id="splitview-menu-brackets-menuDivider-27"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="splitview-menu-cmd.sortWorkingSetByAdded"> <span class="menu-name">Ordenar por Añadido</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="splitview-menu-cmd.sortWorkingSetByName"> <span class="menu-name">Ordenar por Nombre</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="splitview-menu-cmd.sortWorkingSetByType"> <span class="menu-name">Ordenar por Tipo</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><hr class="divider" id="splitview-menu-brackets-menuDivider-28"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="splitview-menu-cmd.sortWorkingSetToggleAuto"> <span class="menu-name">Ordenación automática</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor checked" id="splitview-menu-file.showFolderFirst"> <span class="menu-name">Ordenar carpetas primero</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li></ul></li><li class="dropdown context-menu" id="project-context-menu"><a href="https://phcode.dev/#" class="dropdown-toggle" data-toggle="dropdown" style="display: none;"></a><ul class="dropdown-menu"><li><a href="https://phcode.dev/#" class="menuAnchor" id="project-context-menu-file.newFile"> <span class="menu-name">Nuevo archivo</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+1</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="project-context-menu-file.newFolder"> <span class="menu-name">Nueva carpeta</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+3</span></a></li><li><hr class="divider" id="project-context-menu-brackets-menuDivider-29"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="project-context-menu-file.cut"> <span class="menu-name">Cortar</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="project-context-menu-file.copy"> <span class="menu-name">Copiar</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="project-context-menu-file.copy.path"> <span class="menu-name">Copiar ruta</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="project-context-menu-file.duplicate"> <span class="menu-name">Duplicar</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="project-context-menu-file.paste"> <span class="menu-name">Pegar</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor disabled forced-hidden" id="project-context-menu-file.download"> <span class="menu-name">Descargar</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><hr class="divider" id="project-context-menu-brackets-menuDivider-30"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="project-context-menu-file.rename"> <span class="menu-name">Renombrar</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Shift+F2</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="project-context-menu-file.delete"> <span class="menu-name">Eliminar</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><hr class="divider" id="project-context-menu-brackets-menuDivider-31"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="project-context-menu-cmd.findInSubtree"> <span class="menu-name">Buscar en…</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="project-context-menu-cmd.replaceInSubtree"> <span class="menu-name">Reemplazar en…</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><hr class="divider" id="project-context-menu-brackets-menuDivider-32"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="project-context-menu-file.refresh"> <span class="menu-name">Actualizar árbol de archivos</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li></ul></li><li class="dropdown context-menu" id="editor-context-menu" style="left: 405px; top: 331px;"><a href="https://phcode.dev/#" class="dropdown-toggle" data-toggle="dropdown" style="display: none;"></a><ul class="dropdown-menu" style=""><li><a href="https://phcode.dev/#" class="menuAnchor" id="editor-context-menu-navigate.toggleQuickEdit"> <span class="menu-name">Edición rápida</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+E</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="editor-context-menu-navigate.toggleQuickDocs"> <span class="menu-name">Documentación rápida</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">F1</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="editor-context-menu-navigate.jumptoDefinition"> <span class="menu-name">Saltar a la definición</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+J</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor disabled" id="editor-context-menu-cmd.findAllReferences"> <span class="menu-name">Buscar todas las referencias</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Shift+F12</span></a></li><li><hr class="divider" id="editor-context-menu-brackets-menuDivider-33"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="editor-context-menu-edit.cut"> <span class="menu-name">Cortar</span><span class="right-pusher"></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="editor-context-menu-edit.copy"> <span class="menu-name">Copiar</span><span class="right-pusher"></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="editor-context-menu-edit.paste"> <span class="menu-name">Pegar</span><span class="right-pusher"></span></a></li><li><hr class="divider" id="editor-context-menu-brackets-menuDivider-34"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="editor-context-menu-edit.selectAll"> <span class="menu-name">Seleccionar todo</span><span class="right-pusher"></span><span class="menu-shortcut fixed-shortcut">Ctrl+A</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="editor-context-menu-edit.beautifyCode"> <span class="menu-name">Embellecer código</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+B</span></a></li><li><a class="sub-menu-item menuAnchor" href="https://phcode.dev/#" id="editor-context-menu-refactor-submenu"> <span class="menu-name">Refactorizar</span><span class="right-pusher"></span><span>▸</span></a></li></ul></li><li class="dropdown context-menu" id="inline-editor-context-menu"><a href="https://phcode.dev/#" class="dropdown-toggle" data-toggle="dropdown" style="display: none;"></a><ul class="dropdown-menu"><li><a href="https://phcode.dev/#" class="menuAnchor" id="inline-editor-context-menu-navigate.toggleQuickEdit"> <span class="menu-name">Edición rápida</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+E</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="inline-editor-context-menu-edit.selectAll"> <span class="menu-name">Seleccionar todo</span><span class="right-pusher"></span><span class="menu-shortcut fixed-shortcut">Ctrl+A</span></a></li><li><hr class="divider" id="inline-editor-context-menu-brackets-menuDivider-35"></li><li><a href="https://phcode.dev/#" class="menuAnchor disabled" id="inline-editor-context-menu-navigate.previousMatch"> <span class="menu-name">Elemento anterior de edición rápida</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Alt+↑</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor disabled" id="inline-editor-context-menu-navigate.nextMatch"> <span class="menu-name">Siguiente coincidencia para edición rápida</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Alt+↓</span></a></li></ul></li><li class="dropdown context-menu" id="debug-diagnostics-sub-menu"><a href="https://phcode.dev/#" class="dropdown-toggle" data-toggle="dropdown" style="display: none;"></a><ul class="dropdown-menu"><li><a href="https://phcode.dev/#" class="menuAnchor" id="debug-diagnostics-sub-menu-debug.runUnitTests"> <span class="menu-name">Ejecutar pruebas de Phoenix Code</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="debug-diagnostics-sub-menu-debug.buildTests"> <span class="menu-name">Generar pruebas del editor</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><hr class="divider" id="debug-diagnostics-sub-menu-brackets-menuDivider-39"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="debug-diagnostics-sub-menu-debug.enableLogging"> <span class="menu-name">Habilitar registros detallados</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor disabled forced-hidden" id="debug-diagnostics-sub-menu-debug.enablePhNodeInspector"> <span class="menu-name">Habilitar inspector de PhNode</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor disabled forced-hidden" id="debug-diagnostics-sub-menu-debug.getPhNodeInspectorURL"> <span class="menu-name">Cómo inspeccionar PhNode</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor disabled" id="debug-diagnostics-sub-menu-debug.livePreviewLogging"> <span class="menu-name">Registros de vista previa en vivo</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><hr class="divider" id="debug-diagnostics-sub-menu-brackets-menuDivider-40"></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="debug-diagnostics-sub-menu-debug.showPerfData"> <span class="menu-name">Mostrar información de rendimiento</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="debug-diagnostics-sub-menu-debug.openVFS"> <span class="menu-name">Abrir sistema de archivos virtual</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="debug-diagnostics-sub-menu-debug.openVirtualServer"> <span class="menu-name">Abrir servidor virtual</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li></ul></li><li class="dropdown context-menu" id="refactor-submenu"><a href="https://phcode.dev/#" class="dropdown-toggle" data-toggle="dropdown" style="display: none;"></a><ul class="dropdown-menu"><li><a href="https://phcode.dev/#" class="menuAnchor" id="refactor-submenu-refactoring.renamereference"> <span class="menu-name">Renombrar</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">F2</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="refactor-submenu-refactoring.extractToVariable"> <span class="menu-name">Extraer a variable</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Alt+V</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="refactor-submenu-refactoring.extractToFunction"> <span class="menu-name">Extraer a función</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span><span class="menu-shortcut">Ctrl+Alt+M</span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="refactor-submenu-refactoring.wrapintrycatch"> <span class="menu-name">Envolver en Try Catch</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="refactor-submenu-refactoring.wrapincondition"> <span class="menu-name">Envolver en Condición</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="refactor-submenu-refactoring.converttoarrowfunction"> <span class="menu-name">Convertir a función flecha</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li><li><a href="https://phcode.dev/#" class="menuAnchor" id="refactor-submenu-refactoring.creategettersandsetters"> <span class="menu-name">Crear métodos de acceso (getters/setters)</span><span class="right-pusher"></span><span class="keyboard-icon" title="Cambiar método abreviado de teclado…"><i class="fa-regular fa-keyboard"></i></span></a></li></ul></li></ul>
</div>
<div id="codehint-menu-bar">
    <ul data-dropdown="dropdown"></ul>
</div>
<div id="inlinemenu-menu-bar">
    <ul data-dropdown="dropdown"></ul>
</div>
<div id="hidden-editors"></div>
<!-- Notification bar -->
<div id="toast-notification-container">
</div>

<div id="ctrl-nav-overlay" class="forced-hidden">
    <div class="arrowDivs">
        <i class="fa-solid fa-arrows-up-down-left-right"></i>
    </div>
    <div id="overlay-instruction-text" class="instruction-text">Usa las flechas para navegar o escribe para seleccionar elementos de la interfaz de usuario.</div>
</div>
<div id="alwaysHiddenElements">
<!--    absoluteley positioned hidden elements go here.-->
</div>
<!-- HTML content is dynamically loaded and rendered by brackets.js after _loadPhoenixAfterSplashScreen.
     Any modules that depend on or modify HTML during load should
     require the "utils/AppInit" module and install a callback for
     "htmlReady" (e.g. AppInit.htmlReady(handler)) before touching the DOM.
-->



<script data-main="main" src="./challenge-amigo-secreto_files/require.js.descarga"></script><script src="./challenge-amigo-secreto_files/verify-dependencies-loaded.js.descarga"></script><div id="function-hint-container-new" class="preview-bubble-above" style="display: none; top: 270.334px; left: 506.76px;">
    <div class="function-hint-content-new brackets-hints"></div>
</div><div id="quick-view-container" class="preview-bubble-below" style="display: none; left: 493.938px; top: 175px;">
    <div class="preview-content"></div>
</div><div id="selection-view-container">
    <div class="preview-content">
    </div>
</div></body></html>