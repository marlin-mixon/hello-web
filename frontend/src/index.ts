const button = document.getElementById('fetch-btn') as HTMLButtonElement | null;
const responseText = document.getElementById('response-text') as HTMLParagraphElement | null;

if (button && responseText) {
    button.addEventListener('click', async () => {
        try {
            const response = await fetch('/api/hello');
            const data: { message: string } = await response.json();
            responseText.innerText = data.message;
        } catch (error) {
            responseText.innerText = 'Error connecting to API';
            responseText.classList.add('text-red-500');
            console.error(error);
        }
    });
}