import { convertHexToBinary } from "./convertHexToBinary";

export const getVersionSum = (hexadecimal: string): number => {
  const binary = convertHexToBinary(hexadecimal);
  let versionSum = 0;
  const processPacket = (packet: string) => {
    const version = parseInt(packet.slice(0, 3), 2);
    versionSum += version;

    const typeId = parseInt(packet.slice(3, 6), 2);

    if (typeId !== 4) {
      const lengthTypeId = packet[7];
      if (lengthTypeId === "0") {
        const subPacketLength = parseInt(packet.slice(8, 23), 2);
        const subPackets = packet.slice(23, 23 + subPacketLength);
      } else {
      }
    }
  };
  return versionSum;
};
