function copyToClipboard(copyText = '', callback) {
    try {
        navigator.clipboard.writeText(copyText);
        callback(true)
    } catch (err) {
        callback(false, err)
    }
}

export default copyToClipboard;