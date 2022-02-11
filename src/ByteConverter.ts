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

    public static encodeString(message: string, base64Encoded: boolean = false): Uint8Array {
        return ByteConverter.stringToUint8Array(message, base64Encoded)
    }

    public static stringToUint8Array(text: string, base64Encoded: boolean = false): Uint8Array {
        if(base64Encoded) {
            return this.base64StringToUint8Array(text)
        } else {
            return new TextEncoder().encode(text)
        }
    }

    public static byteArrayToString(byteArray: ArrayBuffer | Uint8Array, base64Encoded:boolean = false): string {
        if(base64Encoded) {
            // @ts-ignore
            if(byteArray[Symbol.toStringTag] === 'ArrayBuffer') {
                byteArray = new Uint8Array(byteArray)
            }
            return this.Uint8ArrayToBase64String(byteArray as Uint8Array)
        }
        return new TextDecoder().decode(byteArray)
    }
}