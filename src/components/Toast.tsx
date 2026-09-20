import React from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';
import { ToastNotification } from '../types';

interface ToastProps {
  toasts: ToastNotification[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center justify-between gap-3 p-4 rounded-2xl bg-[#172033] text-white shadow-2xl border border-gray-700 animate-in slide-in-from-bottom-5 duration-200"
        >
          <div className="flex items-center gap-3">
            {toast.type === 'info' ? (
              <Info className="w-5 h-5 text-[#7B63F7] shrink-0" />
            ) : (
              <CheckCircle2 className="w-5 h-5 text-[#16B979] shrink-0" />
            )}
            <span className="text-xs sm:text-sm font-medium leading-snug">
              {toast.message}
            </span>
          </div>

          <button
            onClick={() => onDismiss(toast.id)}
            className="p-1 text-gray-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            aria-label="Dismiss toast"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
