import { cn } from "@/lib/utils";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{ background: "#050505", color: "#f1f0ec" }}
          className="flex items-center justify-center min-h-screen p-8"
        >
          <div className="flex flex-col items-center w-full max-w-2xl p-8">
            <AlertTriangle
              size={48}
              style={{ color: "#ff5a5a" }}
              className="mb-6 flex-shrink-0"
            />
            <h2
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              className="text-xl mb-4"
            >
              An unexpected error occurred.
            </h2>
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
              className="p-4 w-full rounded overflow-auto mb-6"
            >
              <pre
                style={{ color: "rgba(241,240,236,0.52)" }}
                className="text-sm whitespace-pre-wrap"
              >
                {this.state.error?.stack}
              </pre>
            </div>
            <button
              onClick={() => window.location.reload()}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer",
                "transition-opacity hover:opacity-80"
              )}
              style={{
                background: "#8b7cff",
                color: "#fff",
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              <RotateCcw size={16} />
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
