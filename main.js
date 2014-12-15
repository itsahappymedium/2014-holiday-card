'use strict';

var CARD = {
    clipLength: 30,
    paused: true,
    player: {},
    playerElement: '',
    timecode: 0,
    timer: 0,

    init: function() {
        this.timecode = 0;

        this.playerElement = '[data-video-player]';
        this.initVideo();

        $('body').fitVids();

        // Listen for clip clicks
        $('[data-video]').on('click', function(e) {
            e.preventDefault();

            var video = $(e.currentTarget).data('video');

            this.swapVideo(video);
        }.bind(this));

        $(this.playerElement).on('pause', function() {
            this.pauseTimer();
        }.bind(this));

        $(this.playerElement).on('playing', function() {
            this.startTimer();
        }.bind(this));
    },

    initVideo: function() {
        this.player = new MediaElementPlayer(this.playerElement);
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
        console.log(video);
        this.player.setSrc(video);

        // Pick up where we are in the current timecode
        this.player.setCurrentTime( this.timecode );
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