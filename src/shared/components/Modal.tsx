import { ReactNode, useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { closeModal } from "../../store/ui/uiSlice";

interface ModalProps {
  onClose?: () => void;
  children: ReactNode;
}

export function Modal({ onClose, children }: ModalProps) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const onEsc = (e: KeyboardEvent) => e.key === "Escape" && handleClose();
        window.addEventListener("keydown", onEsc);
        return () => window.removeEventListener("keydown", onEsc);
    }, []);

    const handleClose = () => {
        onClose?.();
        dispatch(closeModal())
    }

    return (
        <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
        >
        <div
            className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
        >
            {children}
        </div>
        </div>
    );
}