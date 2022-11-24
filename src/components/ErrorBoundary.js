import React, { Component } from 'react';
import { StyleLink } from '../styles/style';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
      static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }
      componentDidCatch(error, errorInfo) {
        return alert(error, errorInfo);
       
      }
    render() {
        if(this.state.hasError) {
            return <StyleLink to="/">Accueil</StyleLink>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;