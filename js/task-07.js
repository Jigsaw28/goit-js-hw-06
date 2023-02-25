    const inputRange = document.querySelector('#font-size-control');
    const spanText = document.querySelector('#text');

    inputRange.addEventListener('input', (event) => {
        const currentValue = event.currentTarget.value
        spanText.style.fontSize = `${currentValue}px`;
    });