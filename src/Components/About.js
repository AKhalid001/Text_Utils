import React from 'react'

export default function About(props) {

    return (
        <div className={`container my-3 text-${props.mode === 'light' ? "dark" : "light"} `} >
            <h2> **About TextUtils**</h2>
            <p>TextUtils is a versatile and user-friendly text processing tool designed to streamline various text-related
                tasks with efficiency and ease. Whether you're a professional writer, a student, or simply someone who deals
                with text on a regular basis, TextUtils offers a comprehensive set of features to enhance your productivity.</p>

            <p>With TextUtils, you can perform a wide range of operations on your text, including but not limited to:</p>

            <p>1. **Text Analysis**: Gain insights into your text by analyzing its readability, sentiment, word frequency,
                and more. TextUtils provides valuable metrics to help you understand and improve your writing.</p>

            <p>2. **Formatting**: Quickly format your text according to different styles and standards.
                Whether you need to convert text to uppercase, lowercase, title case, or apply specific formatting rules, TextUtils has you covered.</p>

            <p>3. **Text Manipulation**: Manipulate your text effortlessly with TextUtils' powerful tools.
                Replace words or phrases, remove duplicates, extract specific information, and perform various other text
                transformations with ease.</p>

            <p>4. **Language Support**: TextUtils supports multiple languages, allowing users from diverse linguistic
                backgrounds to utilize its features effectively. Whether you're working with English, Spanish, French, or
                any other language, TextUtils can accommodate your needs.</p>

            <p>5. **Integration and Accessibility**: Seamlessly integrate TextUtils into your workflow with its intuitive
                interface and accessibility features. Whether you prefer using the web application, desktop version, or mobile
                app, TextUtils ensures a smooth user experience across different platforms.</p>

            <p>6. **Privacy and Security**: Your privacy and security are our top priorities. TextUtils employs robust encryption
                and data protection measures to safeguard your sensitive information, ensuring that your text remains confidential
                and secure at all times.</p>

            <p>TextUtils is more than just a text processing tool; it's a companion that empowers you to work smarter and
                achieve your text-related goals efficiently. Whether you're crafting a compelling story, conducting research,
                or simply communicating effectively, TextUtils is here to support you every step of the way. Experience the
                convenience and power of TextUtils today and elevate your text processing capabilities to new heights.</p>
        </div>

    )
}
