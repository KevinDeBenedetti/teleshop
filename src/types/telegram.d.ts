// src/types/telegram.d.ts
interface TelegramWebApp {
    initData: string;
    initDataUnsafe: any;
    MainButton: {
        text: string;
        setText: (text: string) => void;
        show: () => void;
        hide: () => void;
        enable: () => void;
        disable: () => void;
        isVisible: boolean;
        isActive: boolean;
    };
    BackButton: {
        show: () => void;
        hide: () => void;
        onClick: (callback: () => void) => void;
    };
    onEvent: (event: string, callback: () => void) => void;
    sendData: (data: string) => void;
    close: () => void;
}

interface Window {
    Telegram?: {
        WebApp: TelegramWebApp;
    };
}