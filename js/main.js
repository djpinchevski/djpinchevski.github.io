document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('updateMsg').style.display = 'none';
    const stanzas = [
        { id: '989', keyword: 'FLAME', text: 'Your flame brightens the path I walk,' },
        { id: '767', keyword: 'HEART', text: 'Your heart, a beat that guides.' },
        { id: '440', keyword: 'CHARM', text: 'In your charm,' },
        { id: '16', keyword: 'QUIET', text: 'I find the quiet strength' },
        { id: '596', keyword: 'DANCE', text: 'To dance,' },
        { id: '1174', keyword: 'WIDEN', text: 'To widen my world,' },
        { id: '880', keyword: 'TRUST', text: 'To trust.' },
        { id: '808', keyword: 'BIRCH', text: 'Through the winding roads towards birch,' },
        { id: '793', keyword: 'BEACH', text: 'And beach,' },
        { id: '319', keyword: 'TRAIN', text: 'Like a train, we travel onward—' },
        { id: '1133', keyword: 'AWASH', text: 'A journey awash' },
        { id: '262', keyword: 'SWEET', text: 'With sweet moments,' },
        { id: '781', keyword: 'LOVER', text: 'Where every step whispers lover.' },
        { id: '631', keyword: 'BIRTH', text: 'In the light of this special birthday, I celebrate you.' },
        { id: '918', keyword: 'GRACE', text: 'Your grace,' },
        { id: '842', keyword: 'TRUTH', text: 'Your truth,' },
        { id: '526', keyword: 'HAPPY', text: 'Each happy memory we create,' },
        { id: '977', keyword: 'BUILD', text: 'A reminder of what we build together—' },
        { id: '504', keyword: 'DREAM', text: 'A dream shared.' }
    ];

    let keywordIndex = 0;
    const keywordInput = document.getElementById('keywordInput');
    const poemContainer = document.getElementById('poemContainer');
    const skipToEnd = document.getElementById('skipToEnd');
    const skipToNext = document.getElementById('skipToNext');

    keywordInput.addEventListener('input', () => {
        const keyword = keywordInput.value.trim().toUpperCase();
        const stanza = stanzas[keywordIndex].keyword === keyword ? stanzas[keywordIndex] : null;

        if (stanza) {
            keywordIndex++;
            const stanzaElement = document.createElement('p');
            stanzaElement.textContent = stanza.text;
            poemContainer.appendChild(stanzaElement);
            // if the keyword is TRUST or LOVER, add a paragraph break
            if (stanza.keyword === 'TRUST' || stanza.keyword === 'LOVER') {
                const breakElement = document.createElement('br');
                poemContainer.appendChild(breakElement);
            }
            if (stanza.keyword === 'DREAM') {
                keywordInput.disabled = true;
                keywordInput.style.display = 'none';
                document.getElementById('skipToEnd').disabled = true;
                document.getElementById('skipToEnd').style.display = 'none';
                document.getElementById('skipToNext').disabled = true;
                document.getElementById('skipToNext').style.display = 'none';
                document.getElementById('wordleArchiveLink').style.display = 'none';
                document.getElementById('updateMsg').style.display = 'none';
                document.getElementById('instructions').style.display = 'none';
                document.getElementById('video').style.display = 'block';
                
            }
            keywordInput.value = ''; 
            if (stanzas[keywordIndex].id) { document.getElementById('wordleArchiveLink').href = `https://wordlearchive.com/${stanzas[keywordIndex].id}`; }
            document.getElementById('updateMsg').style.fontStyle = 'italic';
            document.getElementById('updateMsg').style.display = 'block';
        }
    });

    skipToEnd.addEventListener('click', () => {
        stanzas.forEach((stanza, index) => {
            if (index >= keywordIndex) {
                const stanzaElement = document.createElement('p');
                stanzaElement.textContent = stanza.text;
                poemContainer.appendChild(stanzaElement);
                // if the keyword is TRUST or LOVER, add a paragraph break
                if (stanza.keyword === 'TRUST' || stanza.keyword === 'LOVER') {
                    const breakElement = document.createElement('br');
                    poemContainer.appendChild(breakElement);
                }
                keywordIndex++;
            }
        });
        keywordInput.disabled = true;
        keywordInput.style.display = 'none';
        document.getElementById('skipToEnd').disabled = true;
        document.getElementById('skipToEnd').style.display = 'none';
        document.getElementById('skipToNext').disabled = true;
        document.getElementById('skipToNext').style.display = 'none';
        document.getElementById('wordleArchiveLink').style.display = 'none';
        document.getElementById('updateMsg').style.display = 'none';
        document.getElementById('instructions').style.display = 'none';
        document.getElementById('video').style.display = 'block';
    });

    skipToNext.addEventListener('click', () => {
        const stanza = stanzas[keywordIndex];
        keywordIndex++;
        if (keywordIndex >= stanzas.length) {
            keywordInput.disabled = true;
            keywordInput.style.display = 'none';
            document.getElementById('skipToEnd').disabled = true;
            document.getElementById('skipToEnd').style.display = 'none';
            document.getElementById('skipToNext').disabled = true;
            document.getElementById('skipToNext').style.display = 'none';
            document.getElementById('wordleArchiveLink').style.display = 'none';
            document.getElementById('updateMsg').style.display = 'none';
            document.getElementById('instructions').style.display = 'none';
            document.getElementById('video').style.display = 'block';
        }
        const stanzaElement = document.createElement('p');
        stanzaElement.textContent = stanza.text;
        poemContainer.appendChild(stanzaElement);
        // if the keyword is TRUST or LOVER, add a paragraph break
        if (stanza.keyword === 'TRUST' || stanza.keyword === 'LOVER') {
            const breakElement = document.createElement('br');
            poemContainer.appendChild(breakElement);
        }
        keywordInput.value = ''; 
        if (keywordIndex < stanzas.length) { document.getElementById('wordleArchiveLink').href = `https://wordlearchive.com/${stanzas[keywordIndex].id}`; }
        document.getElementById('updateMsg').style.fontStyle = 'italic';
        document.getElementById('updateMsg').style.display = 'block';
        if (stanza.keyword === 'DREAM') {
            console.log('Arrived at Next button dream')
            keywordInput.disabled = true;
            keywordInput.style.display = 'none';
            document.getElementById('skipToEnd').disabled = true;
            document.getElementById('skipToEnd').style.display = 'none';
            document.getElementById('skipToNext').disabled = true;
            document.getElementById('skipToNext').style.display = 'none';
            document.getElementById('wordleArchiveLink').style.display = 'none';
            document.getElementById('updateMsg').style.display = 'none';
            document.getElementById('instructions').style.display = 'none';
            document.getElementById('video').style.display = 'block';
        }
    }); 


});
