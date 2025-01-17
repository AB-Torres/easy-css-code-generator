document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const previewButton = document.getElementById('preview-button');
    const previewText = document.getElementById('preview-text');
    const buttonBgColor = document.getElementById('button-bg-color');
    const buttonTextColor = document.getElementById('button-text-color');
    const buttonBorderRadius = document.getElementById('button-border-radius');
    const buttonHoverBgColor = document.getElementById('button-hover-bg-color');
    const fontSize = document.getElementById('font-size');
    const fontWeight = document.getElementById('font-weight');
    const lineHeight = document.getElementById('line-height');
    const textColor = document.getElementById('text-color');
    const gridToggle = document.getElementById('grid-toggle');
    const previewContainer = document.getElementById('preview-container');
    const downloadButton = document.getElementById('download-css');
    const cssPreview = document.getElementById('css-preview');
    const copyCssButton = document.getElementById('copy-css');
    const generateButton = document.getElementById('generate-css'); // Referencia al botón "Generar CSS"

    const hoverStyleElement = document.createElement('style');
    document.head.appendChild(hoverStyleElement);
    let hoverStyleRule;

    function updateButtonPreview() {
        previewButton.style.backgroundColor = buttonBgColor.value;
        previewButton.style.color = buttonTextColor.value;
        previewButton.style.borderRadius = `${buttonBorderRadius.value}px`;
    }

    function updateHoverStyle() {
        const hoverStyle = `#preview-button:hover { background-color: ${buttonHoverBgColor.value}; }`;
        if (hoverStyleRule) {
            hoverStyleElement.sheet.deleteRule(findRuleIndex(hoverStyleElement.sheet, hoverStyleRule));
        }
        hoverStyleElement.sheet.insertRule(hoverStyle, hoverStyleElement.sheet.cssRules.length);
        hoverStyleRule = hoverStyle;
    }

    function findRuleIndex(sheet, rule) {
        for (let i = 0; i < sheet.cssRules.length; i++) {
            if (sheet.cssRules[i].cssText === rule) {
                return i;
            }
        }
        return -1;
    }

    function updateTextPreview() {
        previewText.style.fontSize = `${fontSize.value}px`;
        previewText.style.fontWeight = fontWeight.value;
        previewText.style.lineHeight = lineHeight.value;
        previewText.style.color = textColor.value;
    }

    function generateCSS() {
        const buttonConfig = {
            bgColor: buttonBgColor.value,
            textColor: buttonTextColor.value,
            borderRadius: buttonBorderRadius.value,
            hoverBgColor: buttonHoverBgColor.value,
        };
        const typographyConfig = {
            fontSize: fontSize.value,
            fontWeight: fontWeight.value,
            lineHeight: lineHeight.value,
            textColor: textColor.value,
        };

        const buttonCSS = generateButtonCSS(buttonConfig);
        const typographyCSS = generateTypographyCSS(typographyConfig);

        return `${buttonCSS}\n${typographyCSS}`;
    }

    function updateCssPreview() {
        const css = generateCSS();
        cssPreview.value = css;
    }

    buttonBgColor.addEventListener('input', () => {
        updateButtonPreview();
        updateCssPreview();
    });

    buttonTextColor.addEventListener('input', () => {
        updateButtonPreview();
        updateCssPreview();
    });

    buttonBorderRadius.addEventListener('input', () => {
        updateButtonPreview();
        updateCssPreview();
    });

    buttonHoverBgColor.addEventListener('input', () => {
        updateHoverStyle();
        updateCssPreview();
    });

    fontSize.addEventListener('input', () => {
        updateTextPreview();
        updateCssPreview();
    });

    fontWeight.addEventListener('change', () => {
        updateTextPreview();
        updateCssPreview();
    });

    lineHeight.addEventListener('input', () => {
        updateTextPreview();
        updateCssPreview();
    });

    textColor.addEventListener('input', () => {
        updateTextPreview();
        updateCssPreview();
    });

    gridToggle.addEventListener('change', () => {
        previewContainer.classList.toggle('show-grid', gridToggle.checked);
    });

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    generateButton.addEventListener('click', (e) => {
        e.preventDefault(); // Evita que el formulario se envíe y la página se recargue
        updateCssPreview(); // Asegura que el código CSS esté actualizado
    });

    downloadButton.addEventListener('click', () => {
        const css = generateCSS();
        const blob = new Blob([css], { type: 'text/css' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'styles.css';
        link.click();
        URL.revokeObjectURL(url);
    });

    copyCssButton.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(cssPreview.value);
            alert('CSS copiado al portapapeles!');
        } catch (err) {
            console.error('Fallo al copiar CSS al portapapeles: ', err);
            alert('La API de portapapeles no está disponible, por favor copie manualmente el texto');
        }
    });

    updateButtonPreview();
    updateHoverStyle();
    updateTextPreview();
    updateCssPreview();
});
