import {ByteConverter} from "./ByteConverter";

export class KeyConverter {
    public static JWKToString(jwk: JsonWebKey): string {
        return JSON.stringify(jwk)
    }

    public static stringToJWK(jwkString: string): JsonWebKey {
        return JSON.parse(jwkString)
    }

    public static JWKToByte(jwk: JsonWebKey): Uint8Array {
        const serializedKey = JSON.stringify(jwk)
        return ByteConverter.encodeString(serializedKey, false)
    }

    public static ByteToJWK(jwkByteArray: Uint8Array): JsonWebKey {
        const decodedKey = ByteConverter.byteArrayToString(jwkByteArray, false)
        return JSON.parse(decodedKey)
    }
}