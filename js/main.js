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
    swapVideo: function( video ) {
        // Set the new video source
        this.player.setSrc(video);
        this.player.play();

        return this;
    },
};

// Kick it off when we're loaded
$(document).ready(function() {
    CARD.init();
});