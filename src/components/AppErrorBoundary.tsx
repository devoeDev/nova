import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  message: string;
}

export class AppErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    message: "",
  };

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      message: error.message || "Erro desconhecido",
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Erro ao carregar o site:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="app-error-screen">
          <div>
            <span>ERRO DE INICIALIZAÇÃO</span>
            <h1>O site não conseguiu carregar.</h1>
            <p>{this.state.message}</p>
            <button type="button" onClick={() => window.location.reload()}>
              Recarregar página
            </button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
