import { useState, useCallback, useRef } from 'react';

interface UseSupabaseRpcOptions<T> {
    onSuccess?: (data: T) => void;
    onError?: (error: Error) => void;
}

export function useSupabaseRpc<T>(
    rpcFunction: () => Promise<T>,
    options?: UseSupabaseRpcOptions<T>
) {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Use ref to store the latest options to avoid re-creating execute function
    const optionsRef = useRef(options);
    optionsRef.current = options;

    // Use ref to store the RPC function to avoid recreating execute
    const rpcFunctionRef = useRef(rpcFunction);
    rpcFunctionRef.current = rpcFunction;

    const execute = useCallback(async () => {
        // Prevent multiple simultaneous calls
        if (isLoading) {
            console.log('RPC call already in progress, skipping...');
            return;
        }

        try {
            setIsLoading(true);
            setError(null);
            const result = await rpcFunctionRef.current();
            setData(result);
            optionsRef.current?.onSuccess?.(result);
            return result;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An error occurred';
            setError(errorMessage);
            optionsRef.current?.onError?.(err as Error);
            throw err;
        } finally {
            setIsLoading(false);
        }
    }, [isLoading]); // Only depend on isLoading

    const reset = useCallback(() => {
        setData(null);
        setError(null);
        setIsLoading(false);
    }, []);

    return {
        data,
        isLoading,
        error,
        execute,
        reset,
    };
}
