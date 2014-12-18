'use strict';

var CARD = {
    audio: {},
    // clipLength: 30,
    paused: true,
    player: {},
    playerElement: '',
    // timecode: 0,
    // timer: 0,

    init: function() {
        // this.timecode = 0;

        // If we can't autoplay, we're probably on a mobile
        // device. Initialize the fallback video and exit.
        if ( ! Modernizr.videoautoplay ) {
            this.player = new MediaElementPlayer('[data-fallback-video]');

            return;
        }

        this.audioElement = '[data-audio-player]';
        this.playerElement = '[data-video-player]';
        this.initPlayers();

        $('body').fitVids();

        // Listen for clip clicks
        $('[data-video]').on('click', function(e) {
            e.preventDefault();

            var video = $(e.currentTarget).data('video');

            this.swapVideo(video);
        }.bind(this));

        $(this.playerElement).on('pause', function() {
            // this.pauseTimer();
            this.pauseAudio();
        }.bind(this));

        $(this.playerElement).on('playing', function() {
            // console.log('playing');
            // this.startTimer();
            this.startAudio();
        }.bind(this));
    },

    initPlayers: function() {
        this.player = new MediaElementPlayer(this.playerElement, {
            features: [],
            pauseOtherPlayers: false
        });
        this.audio = new MediaElementPlayer(this.audioElement, {
            features: [],
            pauseOtherPlayers: false
        });
    },

    pauseAudio: function() {
        this.audio.pause();
    },

    pauseTimer: function() {
        window.clearInterval(this.timer);

        this.paused = true;

        console.log('Timer paused');

        return this.timer;
    },

    restartPlayer: function() {
        this.player.setCurrentTime(0);
        this.player.play();
    },

    startAudio: function() {
        this.audio.play();
    },

    startTimer: function() {
        // Bail if there's already a timer running
        if ( ! this.paused ) {
            return;
        }

        this.timer = window.setInterval( this.updateTimecode.bind(this), 1000 );

        this.paused = false;

        console.log('Timer started');

        return this.timer;
    },

    swapVideo: function( video ) {
        // Set the new video source
        // console.log(video);
        this.player.setSrc(video);

        // Pick up where we are in the current timecode
        // this.player.setCurrentTime( this.timecode );
        this.player.play();
    },

    updateTimecode: function() {

        if ( ++this.timecode > this.clipLength ) {
            this.timecode = 0;

            // Set video to beginning, too.
            this.restartPlayer();
        }

        console.log(this.timecode);

        return this.timecode;
    }
};

$(document).ready(function() {
    CARD.init();
});