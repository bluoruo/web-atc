/* app01 */
const app01MeterElement = document.getElementById('app01-meter');
const app01Audio = document.getElementById('app01-audio');
const app01AudioCtx = new window.AudioContext();
const app01SourceNode = app01AudioCtx.createMediaElementSource(app01Audio);
app01SourceNode.connect(app01AudioCtx.destination);
const app01Meter = new webAudioPeakMeter.WebAudioPeakMeter(app01SourceNode, app01MeterElement);
app01Audio.addEventListener('play', function () {
	app01AudioCtx.resume();
});
/* app02 */
const app02MeterElement = document.getElementById('app02-meter');
const app02Audio = document.getElementById('app02-audio');
const app02AudioCtx = new window.AudioContext();
const app02SourceNode = app02AudioCtx.createMediaElementSource(app02Audio);
app02SourceNode.connect(app02AudioCtx.destination);
const app02Meter = new webAudioPeakMeter.WebAudioPeakMeter(app02SourceNode, app02MeterElement);
app02Audio.addEventListener('play', function () {
	app02AudioCtx.resume();
});
/* tower */
const towerMeterElement = document.getElementById('tower-meter');
const towerAudio = document.getElementById('tower-audio');
const towerAudioCtx = new window.AudioContext();
const towerSourceNode = towerAudioCtx.createMediaElementSource(towerAudio);
towerSourceNode.connect(towerAudioCtx.destination);
const towerMeter = new webAudioPeakMeter.WebAudioPeakMeter(towerSourceNode, towerMeterElement);
towerAudio.addEventListener('play', function () {
	towerAudioCtx.resume();
});
/* ground */
const groundMeterElement = document.getElementById('ground-meter');
const groundAudio = document.getElementById('ground-audio');
const groundAudioCtx = new window.AudioContext();
const groundSourceNode = groundAudioCtx.createMediaElementSource(groundAudio);
groundSourceNode.connect(groundAudioCtx.destination);
const groundMeter = new webAudioPeakMeter.WebAudioPeakMeter(groundSourceNode, groundMeterElement);
groundAudio.addEventListener('play', function () {
	groundAudioCtx.resume();
});
/* terminal3 */
const terminal3MeterElement = document.getElementById('terminal3-meter');
const terminal3Audio = document.getElementById('terminal3-audio');
const terminal3AudioCtx = new window.AudioContext();
const terminal3SourceNode = terminal3AudioCtx.createMediaElementSource(terminal3Audio);
terminal3SourceNode.connect(terminal3AudioCtx.destination);
const terminal3Meter = new webAudioPeakMeter.WebAudioPeakMeter(terminal3SourceNode, terminal3MeterElement);
terminal3Audio.addEventListener('play', function () {
	terminal3AudioCtx.resume();
});
/* terminal4 */
const terminal4MeterElement = document.getElementById('terminal4-meter');
const terminal4Audio = document.getElementById('terminal4-audio');
const terminal4AudioCtx = new window.AudioContext();
const terminal4SourceNode = terminal4AudioCtx.createMediaElementSource(terminal4Audio);
terminal4SourceNode.connect(terminal4AudioCtx.destination);
const terminal4Meter = new webAudioPeakMeter.WebAudioPeakMeter(terminal4SourceNode, terminal4MeterElement);
terminal4Audio.addEventListener('play', function () {
	terminal4AudioCtx.resume();
});
/* delivery */
const deliveryMeterElement = document.getElementById('delivery-meter');
const deliveryAudio = document.getElementById('delivery-audio');
const deliveryAudioCtx = new window.AudioContext();
const deliverySourceNode = deliveryAudioCtx.createMediaElementSource(deliveryAudio);
deliverySourceNode.connect(deliveryAudioCtx.destination);
const deliveryMeter = new webAudioPeakMeter.WebAudioPeakMeter(deliverySourceNode, deliveryMeterElement);
deliveryAudio.addEventListener('play', function () {
	deliveryAudioCtx.resume();
});
/* all */
const allMeterElement = document.getElementById('all-meter');
const allAudio = document.getElementById('all-audio');
const allAudioCtx = new window.AudioContext();
const allSourceNode = allAudioCtx.createMediaElementSource(allAudio);
allSourceNode.connect(allAudioCtx.destination);
const allMeter = new webAudioPeakMeter.WebAudioPeakMeter(allSourceNode, allMeterElement);
allAudio.addEventListener('play', function () {
	allAudioCtx.resume();
});
