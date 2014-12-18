'use strict';

var CARD = {
    audio: {},
    paused: true,
    player: {},
    playerElement: '',

    /**
     * Initialize function
     * @return {object} This
     */
    init: function() {
        // If we can't autoplay, we're probably on a mobile
        // console.log(typeof Modernizr.videoautoplay);
        // device. Initialize the fallback video and exit.
        if ( typeof Modernizr.videoautoplay === 'boolean' && ! Modernizr.videoautoplay ) {
            return;
        }

        // Sometimes it takes a while. Try the test again in one second
        if ( typeof Modernizr.videoautoplay === 'undefined' ) {
            setTimeout( this.init.bind(this), 100 );

            return;
        }

        this.audioElement = '[data-audio-player]';
        this.playerElement = '[data-video-player]';
        this.initPlayers();

        $('body').fitVids();

        // Listen for clip clicks
        $('[data-video-mp4]').on('click', function(e) {
            e.preventDefault();

            var videoMp4 = $(e.currentTarget).data('video-mp4'),
                videoWebm = $(e.currentTarget).data('video-webm');

            // Show active state
            $('.people li').removeClass('active');
            $(e.currentTarget).parent().addClass('active');

            this.swapVideo(videoMp4, videoWebm);
        }.bind(this));

        $(this.playerElement).on('pause', function() {
            this.pauseAudio();
        }.bind(this));

        $(this.playerElement).on('playing', function() {
            this.startAudio();
        }.bind(this));

        return this;
    },

    /**
     * Initialize the audio and video players
     * @return {object} this
     */
    initPlayers: function() {
        this.player = new MediaElementPlayer(this.playerElement, {
            features: [],
            pauseOtherPlayers: false
        });
        this.audio = new MediaElementPlayer(this.audioElement, {
            features: [],
            pauseOtherPlayers: false
        });
        new MediaElementPlayer('[data-fallback-video]');

        return this;
    },

    /**
     * Pause the audio player
     * @return {object} this
     */
    pauseAudio: function() {
        this.audio.pause();

        return this;
    },

    /**
     * Restart a player
     * @return {object} this
     */
    restartPlayer: function() {
        this.player.setCurrentTime(0);
        this.player.play();

        return this;
    },

    /**
     * Start the audio
     * @return {object} this
     */
    startAudio: function() {
        this.audio.play();

        return this;
    },

    /**
     * Switch out the video with the selected one
     * @param  {string} video Video URL
     * @return {object}       this
     */
    swapVideo: function( videoMp4, videoWebm ) {
        // Set the new video source
        this.player.setSrc([
            { src: videoMp4, type:'video/mp4' },
            { src: videoWebm, type:'video/webm' }
        ]);
        this.player.play();

        return this;
    },
};

// Kick it off when we're loaded
$(document).ready(function() {
    CARD.init();
});