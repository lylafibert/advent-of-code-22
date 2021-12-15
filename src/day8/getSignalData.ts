interface SignalData {
  signals: string[];
  outputs: string[];
}
export const getSignalData = (signal: string): SignalData => {
  const [signalsString, outputsString] = signal.split(" | ");
  return {
    signals: signalsString.split(" "),
    outputs: outputsString.split(" "),
  };
};
