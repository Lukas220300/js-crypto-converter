export class ByteConverter {
    public static ArrayBufferToBase64String(byteArray: ArrayBuffer): string {
        // @ts-ignore
        return btoa(String.fromCharCode(...new Uint8Array(byteArray)))
    }

    public static Uint8ArrayToBase64String(byteArray: Uint8Array): string {
        // @ts-ignore
        return btoa(String.fromCharCode(...byteArray))
    }

    public static base64StringToUint8Array(message: string): Uint8Array {
        const encrypted = atob(message)
        const messageValue = []
        for (let i = 0; i < encrypted.length; i++) {
            messageValue.push(encrypted.charCodeAt(i))
        }
        return new Uint8Array(messageValue)
    }

    public static encodeString(message: string): Uint8Array {
        return ByteConverter.stringToUint8Array(message)
    }

    public static stringToUint8Array(text: string): Uint8Array {
        return new TextEncoder().encode(text)
    }

    public byteArrayToString(byteArray: ArrayBuffer | Uint8Array): string {
        return new TextDecoder().decode(byteArray)
    }
}