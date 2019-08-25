var Ring = function(opt){
    this.init(opt);
};

Ring.prototype.init = function(opt) {
    this._opt = $.extend({
        playerId: '',
        media: ''
    }, opt);
};

Ring.prototype.play = function() {
	this._playRing();
};

Ring.prototype._playRing = function() {
    if (this._opt.media.length == 0) return;
    var ua = navigator.userAgent.toLowerCase();
    var ring = this._opt.media;
    var c = $('#' + this._opt.playerId + '');
    if (ua.match(/msie ([\d.]+)/)) { //ie
        c.html('<object classid="clsid:22D6F312-B0F6-11D0-94AB-0080C74C7E95"><param name="AutoStart" value="1" /><param name="Src" value="' + ring + '" /></object>');
    } else if (ua.match(/opera.([\d.]+)/)) {
        c.html('<embed src=' + ring + ' hidden="true" loop="false"><noembed><bgsounds src=' + ring + '></noembed>');
    } else {
        c.html('<audio src=' + ring + ' type="audio/mp3" autoplay=”autoplay” hidden="true"></audio>');
    }
};
export default Ring;
