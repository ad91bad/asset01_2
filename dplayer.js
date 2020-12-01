

document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ad91bad/asset01_2@1.0/DPlayer.min.css"><script type="text/javascript" src="https://cdn.jsdelivr.net/gh/ad91bad/asset01_2@1.0/flv.min.js"></script><script type="text/javascript" src="https://cdn.jsdelivr.net/gh/ad91bad/asset01_2@1.0/hls.min.js"></script><script type="text/javascript" src="https://cdn.jsdelivr.net/gh/ad91bad/asset01_2@1.0/dash.all.min.js"></script><script type="text/javascript" src="https://cdn.jsdelivr.net/gh/ad91bad/asset01_2@1.0/webtorrent.min.js"></script><script type="text/javascript" src="https://cdn.jsdelivr.net/gh/ad91bad/asset01_2@1.0/DPlayer.min.js"></script>');

MacPlayer.Html = '';
MacPlayer.Show();

setTimeout(function(){
    var type='normal';
    var live=false;
    if(MacPlayer.PlayUrl.indexOf('.m3u8')>-1){
        type='hls';
        live=true;
    }
    else if(MacPlayer.PlayUrl.indexOf('magnet:')>-1){
        type='webtorrent';
    }
    else if(MacPlayer.PlayUrl.indexOf('.flv')>-1){
        type='flv';
    }
    else if(MacPlayer.PlayUrl.indexOf('.mpd')>-1){
        type='dash';
    }

    const dp = new DPlayer({
        container: document.getElementById('playleft'),
        autoplay: true,
        screenshot: false,
        video: {
            url: MacPlayer.PlayUrl,
            live: live,
            type:type
        },
        contextmenu: [

        ]
    });
}, MacPlayer.Second * 1000 + 1000);





