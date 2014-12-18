<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta property="og:title" content="Happy Holidays from Happy Medium: 2014" />
    <meta name="description" content="Happy Medium is here to wish you a happy holiday season." />
    <meta property="og:description" content="Happy Medium is here to wish you a happy holiday season." />
    <meta property="og:url" content="http://holidaycard.itsahappymedium.com/"/>
    <link rel="image_src" href="http://holidaycard.itsahappymedium.com/img/holiday_card_share.jpg" />
    <meta property="og:image" content="http://holidaycard.itsahappymedium.com/img/holiday_card_share.jpg" />
    <meta property="og:site_name" content="Happy Medium Holiday Card" />
    <meta property="og:type" content="website" />
    <title>Happy Holidays from Happy Medium: 2014</title>
    <script src="js/modernizr.custom.67971.js"></script>
    <link rel="stylesheet" href="bower_components/normalize.css/normalize.css">
    <link rel="stylesheet" href="bower_components/mediaelement/build/mediaelementplayer.css">
    <link href='http://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div id="fb-root"></div>
    <script>(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));</script>
    <h1>Happy Holidays from <a href="http://www.itsahappymedium.com">Happy Medium</a></h1>
    <div class="wrapper">

        <div class="mobile-video">
            <video data-fallback-video>
                <source type="video/mp4" src="media/group_combo.mp4" />
                <source type="video/webm" src="media/group_combo.webmsd.webm" />
            </video>
        </div>

        <?php
        $team_members = array(
            'Angela',
            'Doug',
            'Jill',
            'Josh',
            'Julie',
            'Katie',
            'Kristen',
            'Lauren',
            'Nick',
            'Sara',
            'Sarah',
            'Tony',
            'Georgia'
        );
        ?>

        <div class="ball">
            <ul class="people">
                <?php foreach ($team_members as $team_member) : ?>
                    <li>
                        <a href="#" title="<?php echo $team_member; ?>"
                        data-video-mp4="media/<?php echo $team_member; ?>.mp4"
                        data-video-webm="media/<?php echo $team_member; ?>.webmsd.webm">
                            <img src="img/<?php echo $team_member; ?>.png" alt="<?php echo $team_member; ?>">
                        </a>
                    </li>
                <?php endforeach; ?>
            </ul>

            <video loop data-video-player>
                <source type="video/mp4" src="media/Sarah.mp4" />
                <source type="video/webm" src="media/Sarah.webmsd.webm" />
            </video>
        </div>

        <div class="share">
            <div class="fb-share-button" data-href="http://holidaycard.itsahappymedium.com/" data-layout="button_count"></div>
            <a href="https://twitter.com/share" class="twitter-share-button" data-via="itsahappymedium">Tweet</a>
            <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
        </div>

        <audio src="media/Music.mp3" loop data-audio-player height="0" width="0"></audio>
    </div>

    <script src="bower_components/mediaelement/build/jquery.js"></script>
    <script src="bower_components/mediaelement/build/mediaelement-and-player.min.js"></script>
    <script src="bower_components/fitvids/jquery.fitvids.js"></script>
    <script src="js/main.js"></script>

    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-26123542-5', 'auto');
        ga('send', 'pageview');
    </script>
</body>
</html>