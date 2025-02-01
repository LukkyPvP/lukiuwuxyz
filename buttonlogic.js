document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', function () {
        let url;
        switch (this.textContent) {
            case 'GitHub':
                url = 'https://github.com/LukkyPvP';
                break;
            case 'Twitch':
                url = 'https://www.twitch.tv/luki_twitchofficial';
                break;
            case 'TG':
                url = 'https://t.me/podvalluky';
                break;
            case 'Status':
                url = 'https://status.lukiuwu.xyz';
                break;
            default:
                url = '#';
        }
        window.open(url, '_blank');
    });
});