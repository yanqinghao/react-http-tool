import sio from "./sio";

export function realtimeInput(fn: Function): void {
  sio.on("realtime.input", fn);
}

export function realtimeOutput(fn: Function): void {
  sio.on("realtime.output", fn);
}
