import React from 'react'

export default function Footer(props) {
    let footerStyle = {
        width: '100%',
        position: "static",
        minheight: "100vh"
    }
    return (
        <div style={footerStyle}>
            <footer className={`bg-${props.mode} text-${props.mode === 'light' ? "dark" : "light"} py-2`} >
                <p className="text-center">
                    Copyright &copy; www.Text_Utils.com
                </p>
            </footer>
        </div>
    )
}
