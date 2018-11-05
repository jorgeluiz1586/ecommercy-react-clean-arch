import React from "react";
import "../styles/layouts/MainLayout.css";

export class MainLayout extends React.Component {
    render() {
        return (
            <>
                <header className="ecommercy-main-header"></header>
                <main className="ecommercy-content">{this.props.children}</main>
                <footer className="ecommercy-main-footer"></footer>
            </>
        );
    }
}