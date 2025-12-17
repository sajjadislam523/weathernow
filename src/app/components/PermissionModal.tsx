interface Props {
    onAllow: () => void;
    onDeny: () => void;
}

export default function PermissionModal({ onAllow, onDeny }: Props) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl text-center">
                <h2 className="font-semibold mb-3">Allow location?</h2>
                <p className="text-sm mb-4">
                    We use location only to show your local weather.
                </p>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={onAllow}
                        className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        Allow
                    </button>
                    <button
                        onClick={onDeny}
                        className="border px-4 py-2 rounded"
                    >
                        Deny
                    </button>
                </div>
            </div>
        </div>
    );
}
