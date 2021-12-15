export const getOutputValues = (signals: string[]): string[] => {
  const outputs: string[] = [];

  signals.forEach((signal) => {
    const outputsString = signal.split(" | ")[1];
    outputs.push(...outputsString.split(" "));
  });

  return outputs;
};
