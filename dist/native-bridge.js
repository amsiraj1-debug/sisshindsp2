// Native bridge, loaded both on the website and inside the JUCE VST3/Standalone WebView.
// In a normal browser this file does not change the original audio implementation.
window.SISHHIN_NATIVE=!!(window.__JUCE__&&window.__JUCE__.backend);
window.sishhinNativeEmit=(event,data={})=>{
  if(window.SISHHIN_NATIVE)window.__JUCE__.backend.emitEvent(event,data);
};
class SishhinNativeAudio {
  constructor(){this.ctx={sampleRate:48000};this.sourceMode='native';this.muted=false;
    this.nativeLevel=0;this.nativePitch=0}
  update(settings){window.sishhinNativeEmit('sishhinState',JSON.stringify(settings))}
  level(){return this.nativeLevel}
  pitch(){return this.nativePitch||null}
  async start(){throw Error('Audio is supplied by your DAW or the standalone audio device')}
  stop(){}
}
