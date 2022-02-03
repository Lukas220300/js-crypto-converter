export class KeyConverter {
    public static JWKToString(jwk: JsonWebKey): string {
        return JSON.stringify(jwk)
    }

    public static stringToJWK(jwkString: string): JsonWebKey {
        return JSON.parse(jwkString)
    }
}