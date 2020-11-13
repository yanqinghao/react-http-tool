import sio from "./sio";

export async function getConfigs(): Promise<any> {
  return sio.request({ event: "get.configs" });
}

export async function getTestResult(): Promise<any> {
  return sio.request({ event: "get.result" });
}
