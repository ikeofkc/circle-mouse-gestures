/// Supports Unicode symbols or SVG path values
var actionIcons = {
    'goBack': '❮',
    'goForward': '❯',
    'newTab': 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z',
    'closeCurrentTab': 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z',
    'reloadTab': 'M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z',
    'copyUrl': 'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z',
    'copyLinkText': 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z',
    'copyText': 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z',
    'openInFgTab': 'M19 19H5V5h7V3H3v18h18v-9h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z',
    'openInBgTab': 'M 5,19 V 5 l 14,0 v 7 h 2 V 5 C 21,3.89 20.1,3 19,3 L 5,3 C 3.9,3 3,3.89 3,5 v 14 c 0,1.1 0.9,2 2,2 h 7 v -2 z m 16,-5 h -2 v 3.59 L 9.17,7.76 7.76,9.17 17.59,19 H 14 v 2 h 7 z',
    'downloadUrlAs': 'M19 12v7H5v-7H3v9h18v-9h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z',
    'searchImageOnGoogle': `M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z`,
    'searchText': `M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z`,
    'translate': `M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z`,
    'scrollToTop': 'M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z',
    'scrollToBottom': 'M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z',
    'restoreClosedTab': 'M13 3c-4.97 0-9 4.03-9 9H1l4 3.99L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8z',
    'switchToPreviousTab': 'M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z',
    'switchToNextTab': 'M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6-1.41 1.41zM16 6h2v12h-2V6z',
    'scrollPageUp': 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z',
    'scrollPageDown': 'M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z',
    'pageZoomIn': 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm.5-7H9v2H7v1h2v2h1v-2h2V9h-2z',
    'pageZoomOut': 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z',
    'toggleFullscreen': 'M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3v6zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6h6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6v-6z',
    'addToBookmarks': '☆',
    'noAction': ' '

    /// Old Unicode icons
    // 'scrollPageUp': '↑',
    // 'scrollPageDown': '↓',
    // 'scrollToBottom': '↓',
    // 'downloadUrl': '⇩',
    // 'translatePage': 'T',
    // 'searchImageOnGoogle': '𝖦',
    // 'closeCurrentTab': '✕',
    // 'newTab': '＋',
    // 'reloadTab': '🗘',
    // 'copyUrl': '🗎',
    // 'openInFgTab': '🡕',
    // 'scrollToTop': '↑',
};


/// Map of actions available to be selected from dropdown
var sortedActionButtons = {
    'regularMenu': {
        'navigation': [
            'goBack',
            'goForward',
            'switchToPreviousTab',
            'switchToNextTab',
        ],
        'tab': [
            'newTab',
            'closeCurrentTab',
            'reloadTab',
            'restoreClosedTab',
            'toggleFullscreen',
        ],
        'page': [
            'pageZoomIn',
            'pageZoomOut',
            'copyUrl',
            'translate',
        ],
        'scroll': [
            'scrollToTop',
            'scrollToBottom',
            'scrollPageUp',
            'scrollPageDown',
        ],
        '—': [
            'noAction'
        ]
    },


    'linkMenu':
    {
        'linkMenu': [
            'openInFgTab',
            'copyLinkText',
            'openInBgTab',
            'copyUrl',
        ],
        '—': [
            'noAction'
        ]
    },

    'selectionMenu':
    {
        'selectionMenu': [
            'copyText',
            'searchText',
            'translate',
        ],
        '—': [
            'noAction'
        ]
    },

    'imageMenu':
    {
        'imageMenu': [
            'openInFgTab',
            'downloadUrlAs',
            'openInBgTab',
            'searchImageOnGoogle',
            'copyUrl',
        ],
        '—': [
            'noAction'
        ]
    },
};