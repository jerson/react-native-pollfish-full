import { NativeModules, NativeEventEmitter } from "react-native";

const { RNPollfish } = NativeModules;

const TAG = "[Pollfish]";
export default class Pollfish {
  static emitter = new NativeEventEmitter(RNPollfish);

  static eventHandlers = {
    surveyReceived: new Map(),
    surveyCompleted: new Map(),
    userNotEligible: new Map(),
    surveyNotAvailable: new Map(),
    surveyOpened: new Map(),
    surveyClosed: new Map()
  };

  static initialize(key, releaseMode, customMode, format, userId) {
    __DEV__ &&
      console.debug(
        TAG,
        "initialize",
        key,
        releaseMode,
        customMode,
        format,
        userId
      );
    return RNPollfish.initialize(
      key,
      releaseMode,
      customMode,
      format || "RANDOM",
      userId
    );
  }

  static show() {
    __DEV__ && console.debug(TAG, "show");
    return RNPollfish.show();
  }

  static hide() {
    __DEV__ && console.debug(TAG, "hide");
    return RNPollfish.hide();
  }

  static destroy() {
    __DEV__ && console.debug(TAG, "destroy");
    return RNPollfish.destroy();
  }

  static addEventListener(type, handler) {
    if (this.eventHandlers[type]) {
      this.emitter &&
        this.eventHandlers[type].set(
          handler,
          this.emitter.addListener(type, handler)
        );
    } else {
      console.warn(`Event with type ${type} does not exist.`);
    }
  }

  static removeEventListener(type, handler) {
    if (!this.eventHandlers[type].has(handler)) {
      return;
    }
    this.eventHandlers[type].get(handler).remove();
    this.eventHandlers[type].delete(handler);
  }

  static removeAllListeners() {
    let names = Object.keys(eventHandlers);
    for (const name of names) {
      this.emitter && this.emitter.removeAllListeners(name);
    }
  }
}
