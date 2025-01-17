function generateButtonCSS(config) {
    return `
        button {
            background-color: ${config.bgColor};
            color: ${config.textColor};
            border-radius: ${config.borderRadius}px;
            transition: all 0.3s ease;
        }
        
        button:hover {
            background-color: ${config.hoverBgColor};
        }
    `;
}

function generateTypographyCSS(config) {
    return `
        p {
            font-size: ${config.fontSize}px;
            font-weight: ${config.fontWeight};
            line-height: ${config.lineHeight};
            color: ${config.textColor};
        }
    `;
}