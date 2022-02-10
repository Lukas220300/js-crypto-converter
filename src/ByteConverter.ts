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

    public static encodeString(message: string, jsonEncoded: boolean = false): Uint8Array {
        return ByteConverter.stringToUint8Array(message, jsonEncoded)
    }

    public static stringToUint8Array(text: string, jsonEncoded: boolean = false): Uint8Array {
        if(jsonEncoded) {
            const decoded = JSON.parse(text)
            // @ts-ignore
            return Uint8Array.from([...Object.values(decoded)])
        } else {
            return new TextEncoder().encode(text)
        }
    }

    public static byteArrayToString(byteArray: ArrayBuffer | Uint8Array): string {
        // @ts-ignore
        if(byteArray[Symbol.toStringTag] === 'ArrayBuffer') {
            byteArray = new Uint8Array(byteArray)
        }
        return JSON.stringify(byteArray)
    }
}