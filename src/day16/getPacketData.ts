import { getLiteralValue } from "./getLiteralValue";

interface PacketData {
  version: number;
  typeId: number;
  value?: number;
  lengthTypeId?: number;
}

export const getPacketData = (binaryString: string): PacketData => {
  const versionBinary = binaryString.slice(0, 3);
  const version = parseInt(versionBinary, 2);

  const typeIdBinary = binaryString.slice(3, 6);
  const typeId = parseInt(typeIdBinary, 2);

  const packetData: PacketData = { version, typeId };

  if (typeId === 4) {
    packetData.value = getLiteralValue(binaryString);
  } else {
    packetData.lengthTypeId = parseInt(binaryString[7]);
  }

  return packetData;
};
