            let projectDatabase = JSON.parse(localStorage.getItem('matrix_code_db')) || [
            { id: 'matrix-default', name: 'QuantumRender_Core', lang: 'hybrid', created: 'System Core', codeHTML: '<h1>MatrixCode Framework Active</h1>\n<p>Horizontal view me split perfectly 50-50 automatic active ho jayega.</p>\n<button id="matrixGlow">Execute Logic Stream</button>', codeCSS: 'body { background: #060101; color: #fff; text-align: center; padding-top: 40px; font-family: sans-serif; }\nbutton { background: transparent; border: 1px solid #ff2a2a; color: #fff; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: bold; box-shadow: 0 0 15px rgba(255,42,42,0.4); text-transform: uppercase; }', codeJS: 'document.getElementById("matrixGlow").onclick = () => {\n  alert("Logic stream compiled inside MatrixCode Core.");\n};', currentTab: 'html' }
        ];

        let activeProject = null;

        const splashNode = document.getElementById("splash-node");
        const dashNode = document.getElementById("dashboard-node");
        const modalNode = document.getElementById("modal-node");
        const appShellNode = document.getElementById("app-shell-node");
        const gridContainer = document.getElementById("project-grid-container");
        const mainEditor = document.getElementById("main-editor");
        const highlightLayer = document.getElementById("editor-highlight-layer");
        const previewIframe = document.getElementById("preview");
        const terminalConsole = document.getElementById("terminal-console");
        const lineCounter = document.getElementById("line-counter");
        const tabBar = document.getElementById("tab-bar-container");
        const searchBar = document.getElementById("code-search-bar");
        const searchBadge = document.getElementById("search-results-badge");
        const suggestionBox = document.getElementById("suggestion-box");

        window.onload = () => {
            generateBinaryRainMatrix();
            runHackerProgressSequence();
        };

        function generateBinaryRainMatrix() {
            const rainBox = document.getElementById("binary-rain-box");
            const columnsCount = Math.floor(window.innerWidth / 15);
            for(let i=0; i<columnsCount; i++) {
                let col = document.createElement("div");
                col.className = "binary-column";
                let textStr = "";
                for(let j=0; j<25; j++) { textStr += Math.round(Math.random()) + "<br>"; }
                col.innerHTML = textStr;
                col.style.animationDelay = (Math.random() * 2) + "s";
                rainBox.appendChild(col);
            }
        }

        function runHackerProgressSequence() {
            const logsBox = document.getElementById("hacker-logs-box");
            const percentageCounter = document.getElementById("progress-percent-node");
            const blockElements = document.querySelectorAll(".progress-block");
            
            const hackerLogs = [
                "> INITIALIZING MATRIX_CORE MATRIX...",
                "> OVERRIDING SANDBOX SECURITY WALLS...",
                "> INJECTING DYNAMIC RUNTIME ECOSYSTEMS...",
                "> MEMORY ALLOCATION STACK BUFFER: CLEAR",
                "> PIPELINE INTERNET CACHE CLEARED SUCCESSFULLY.",
                "> DEVICE CODES STREAM COMPILED READY."
            ];

            let progressCount = 0;
            let logStepIndex = 0;

            let matrixInterval = setInterval(() => {
                progressCount += 2;
                if(progressCount > 100) progressCount = 100;

                percentageCounter.innerHTML = progressCount + "%";

                let activeBlocksLimit = Math.floor(progressCount / 10);
                for(let i=0; i<activeBlocksLimit; i++) {
                    if(blockElements[i]) blockElements[i].classList.add("filled");
                }

                if(progressCount % 16 === 0 && logStepIndex < hackerLogs.length) {
                    logsBox.innerHTML = hackerLogs[logStepIndex];
                    logStepIndex++;
                }

                if(progressCount >= 100) {
                    clearInterval(matrixInterval);
                    setTimeout(() => {
                        splashNode.style.opacity = 0;
                        setTimeout(() => {
                            splashNode.style.display = "none";
                            dashNode.style.display = "flex";
                            renderDashboardGrid();
                        }, 500);
                    }, 400);
                }
            }, 50);
        }

        function renderDashboardGrid() {
            gridContainer.innerHTML = '';
            projectDatabase.forEach(project => {
                const card = document.createElement('div');
                card.className = `project-card`;
                card.setAttribute('onclick', `launchWorkspace('${project.id}')`);
                
                let isHybrid = project.lang === 'hybrid';
                let badgeClass = isHybrid ? 'badge-hybrid' : 'badge-standalone';
                let badgeLabel = isHybrid ? 'hybrid matrix' : `${project.lang.toUpperCase()} source`;

                card.innerHTML = `
                    <div class="project-details">
                        <div class="project-name">${project.name}</div>
                        <div class="project-date">Node Spawned: ${project.created}</div>
                    </div>
                    <div class="card-top-right" onclick="event.stopPropagation();">
                        <span class="project-badge ${badgeClass}">${badgeLabel}</span>
                        <button class="delete-btn" onclick="deleteProjectRecord('${project.id}')">✕</button>
                    </div>
                `;
                gridContainer.appendChild(card);
            });
            localStorage.setItem('matrix_code_db', JSON.stringify(projectDatabase));
        }

        function deleteProjectRecord(id) {
            if(confirm("Wipe out this specific project state sequence from device storage?")) {
                projectDatabase = projectDatabase.filter(p => p.id !== id);
                renderDashboardGrid();
            }
        }

        function openCreateModal() { modalNode.style.display = 'flex'; }
        function closeCreateModal() { modalNode.style.display = 'none'; }

        function createProjectPipeline() {
            const name = document.getElementById("modal-project-name").value.trim();
            const lang = document.getElementById("modal-project-lang").value;
            if(!name) return alert("System cannot initialize null-string pipeline name!");

            let timestamp = new Date().toLocaleDateString();
            let newProj = { id: 'node-' + Date.now(), name: name, lang: lang, created: timestamp };

            if(lang === 'hybrid') {
                newProj.codeHTML = `<h3>${name} Dom Online</h3>`;
                newProj.codeCSS = `body { background: #040000; color: #ff2a2a; }`;
                newProj.codeJS = `// Application Log Trace Array`;
                newProj.currentTab = 'html';
            } else if(lang === 'py') {
                newProj.code = `print("Python 3 Execution Stack Bound")\nprint("Hello World Matrix")`;
            } else if(lang === 'js') {
                newProj.code = `console.log("Standalone JS runtime running...");`;
            } else if(lang === 'cs') {
                newProj.code = `using System;\n\nclass MatrixCode {\n    static void Main() {\n        Console.WriteLine("C# Stream Ready");\n    }\n}`;
            } else if(lang === 'cpp') {
                newProj.code = `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "C++ Engine Live";\n    return 0;\n}`;
            }

            projectDatabase.push(newProj);
            closeCreateModal();
            renderDashboardGrid();
            launchWorkspace(newProj.id);
            document.getElementById("modal-project-name").value = "";
        }

        function triggerFileInput() { document.getElementById("file-input").click(); }
        function handleFileInput(e) {
            const file = e.target.files[0];
            if(!file) return;
            const r = new FileReader();
            r.onload = function(evt) {
                let ext = file.name.split('.').pop().toLowerCase();
                let lang = ext === 'py' ? 'py' : ext === 'js' ? 'js' : ext === 'cs' ? 'cs' : ext === 'cpp' ? 'cpp' : 'hybrid';
                
                const imported = {
                    id: 'inj-' + Date.now(),
                    name: file.name.split('.')[0],
                    lang: lang,
                    created: new Date().toLocaleDateString(),
                };
                
                if(lang === 'hybrid') {
                    imported.codeHTML = evt.target.result;
                    imported.codeCSS = ''; imported.codeJS = ''; imported.currentTab = 'html';
                } else {
                    imported.code = evt.target.result;
                }
                
                projectDatabase.push(imported);
                renderDashboardGrid();
                launchWorkspace(imported.id);
            };
            r.readAsText(file);
        }

        function launchWorkspace(id) {
            activeProject = projectDatabase.find(p => p.id === id);
            dashNode.style.display = "none";
            appShellNode.style.display = "flex";
            document.getElementById("active-project-title").innerHTML = `MATRIXCODE // <span>${activeProject.name.toUpperCase()}</span>`;
            
            searchBar.value = "";
            searchBadge.style.display = "none";
            highlightLayer.innerHTML = "";
            
            setupWorkspaceTabsAndEditors();
            liveExecutionEngine();
        }

        function setupWorkspaceTabsAndEditors() {
            tabBar.innerHTML = '';
            if(activeProject.lang === 'hybrid') {
                previewIframe.classList.add("active");
                terminalConsole.classList.remove("active");
                
                const modules = [{id:'html', n:'HTML5'}, {id:'css', n:'CSS3'}, {id:'js', n:'JS CORE'}];
                modules.forEach(m => {
                    let act = activeProject.currentTab === m.id ? 'active' : '';
                    tabBar.innerHTML += `<div class="tab ${act}" onclick="switchHybridTab('${m.id}')">${m.n}</div>`;
                });
                mainEditor.value = activeProject[activeProject.currentTab === 'html' ? 'codeHTML' : activeProject.currentTab === 'css' ? 'codeCSS' : 'codeJS'];
            } else {
                previewIframe.classList.remove("active");
                terminalConsole.classList.add("active");
                
                let extLabel = activeProject.lang.toUpperCase();
                tabBar.innerHTML = `<div class="tab active">SOURCE.${extLabel}</div>`;
                mainEditor.value = activeProject.code;
            }
            searchWordLineTrace(false); 
        }

        function switchHybridTab(tabId) {
            if(activeProject.currentTab === 'html') activeProject.codeHTML = mainEditor.value;
            else if(activeProject.currentTab === 'css') activeProject.codeCSS = mainEditor.value;
            else activeProject.codeJS = mainEditor.value;

            activeProject.currentTab = tabId;
            searchBar.value = ""; 
            searchBadge.style.display = "none";
            highlightLayer.innerHTML = "";
            setupWorkspaceTabsAndEditors();
        }

        function escapeHtmlTokens(text) {
            return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }

        function searchWordLineTrace(shouldScroll = false) {
            const query = searchBar.value;
            const editorText = mainEditor.value;

            if (!query.trim()) {
                searchBadge.style.display = "none";
                highlightLayer.innerHTML = escapeHtmlTokens(editorText);
                return;
            }

            const lines = editorText.split('\n');
            let matchingLines = [];
            let firstMatchLineIndex = -1;
            let processedLines = [];

            for (let i = 0; i < lines.length; i++) {
                let currentLineText = lines[i];
                
                if (currentLineText.toLowerCase().includes(query.toLowerCase())) {
                    matchingLines.push(i + 1); 
                    if (firstMatchLineIndex === -1) {
                        firstMatchLineIndex = i;
                    }
                    
                    if(currentLineText.trim() !== "") {
                        let escapedLine = escapeHtmlTokens(currentLineText);
                        processedLines.push(`<span class="line-match-highlight">${escapedLine}</span>`);
                    } else {
                        processedLines.push(escapeHtmlTokens(currentLineText));
                    }
                } else {
                    processedLines.push(escapeHtmlTokens(currentLineText));
                }
            }

            searchBadge.style.display = "block";
            if (matchingLines.length > 0) {
                searchBadge.style.color = "var(--neon-gold)";
                searchBadge.innerHTML = `Found on lines: ${matchingLines.join(', ')}`;
                
                if (shouldScroll && firstMatchLineIndex !== -1) {
                    const approximateLineHeight = 16.7; 
                    mainEditor.scrollTop = firstMatchLineIndex * approximateLineHeight;
                }
            } else {
                searchBadge.style.color = "var(--neon-red)";
                searchBadge.innerHTML = "No matches found";
            }

            highlightLayer.innerHTML = processedLines.join('\n');
        }

        function syncHighlightScrollLayer() {
            highlightLayer.scrollTop = mainEditor.scrollTop;
            highlightLayer.scrollLeft = mainEditor.scrollLeft;
            lineCounter.scrollTop = mainEditor.scrollTop; 
        }

        function liveExecutionEngine() {
            updateLineNumbers();
            searchWordLineTrace(false); 
            syncHighlightScrollLayer();
            if(!activeProject) return;

            if(activeProject.lang === 'hybrid') {
                if(activeProject.currentTab === 'html') activeProject.codeHTML = mainEditor.value;
                else if(activeProject.currentTab === 'css') activeProject.codeCSS = mainEditor.value;
                else activeProject.codeJS = mainEditor.value;

                const doc = previewIframe.contentWindow.document;
                doc.open();
                let compoundCode = `<!DOCTYPE html><html><head><style>${activeProject.codeCSS}</style></head><body>${activeProject.codeHTML}<script>try{${activeProject.codeJS}}catch(e){}</<\/script></body></html>`;
                doc.write(compoundCode);
                doc.close();
            } else {
                activeProject.code = mainEditor.value;
                let codeBody = mainEditor.value;
                let virtualLog = "";

                if(activeProject.lang === 'py') {
                    if(codeBody.includes("print(")) {
                        let matches = codeBody.match(/print\((['"])(.*?)\1\)/g);
                        if(matches) matches.forEach(m => { virtualLog += m.replace(/print\((['"])/, '').replace(/(['"])\)/, '') + "\n"; });
                    } else { virtualLog = `[Python Engine Compiled Clean: 0 Errors]\nRun execution bound inside pipeline container successfully.`; }
                } else if(activeProject.lang === 'js') {
                    if(codeBody.includes("console.log(")) {
                        let matches = codeBody.match(/console\.log\((['"])(.*?)\1\)/g);
                        if(matches) matches.forEach(m => { virtualLog += m.replace(/console\.log\((['"])/, '').replace(/(['"])\)/, '') + "\n"; });
                    } else { virtualLog = `[V8 Sandbox Terminal Sequence Active]`; }
                } else if(activeProject.lang === 'cs') {
                    if(codeBody.includes("Console.WriteLine(")) {
                        let matches = codeBody.match(/Console\.WriteLine\((['"])(.*?)\1\)/g);
                        if(matches) matches.forEach(m => { virtualLog += m.replace(/Console\.WriteLine\((['"])/, '').replace(/(['"])\)/, '') + "\n"; });
                    } else { virtualLog = `[.NET Core Matrix Runtime Initialized]`; }
                } else if(activeProject.lang === 'cpp') {
                    if(codeBody.includes("cout <<")) {
                        let matches = codeBody.match(/cout\s*<<\s*(['"])(.*?)\1/g);
                        if(matches) matches.forEach(m => { virtualLog += m.replace(/cout\s*<<\s*(['"])/, '').replace(/(['"])/, '') + "\n"; });
                    } else { virtualLog = `[G++ Compiler Build Stream Clear]`; }
                }
                
                terminalConsole.innerHTML = virtualLog ? virtualLog : `[${activeProject.name}] Compiled Array Matrix Output Clear.`;
            }
        }

        function toggleZenFocusMode(activateMode) {
            if(activateMode) {
                appShellNode.classList.add("zen-mode-active");
            } else {
                appShellNode.classList.remove("zen-mode-active");
            }
            setTimeout(() => { window.dispatchEvent(new Event('resize')); }, 50);
        }

        function returnToDashboardAndSave() {
            if(!activeProject) return;
            toggleZenFocusMode(false);

            if(activeProject.lang === 'hybrid') {
                let compound = `<!DOCTYPE html><html><head><style>${activeProject.codeCSS}</style></head><body>${activeProject.codeHTML}<script>${activeProject.codeJS}<\/script></body></html>`;
                triggerSystemDownloadBlob(compound, `${activeProject.name}_matrix.html`);
            } else {
                let ext = activeProject.lang;
                triggerSystemDownloadBlob(mainEditor.value, `${activeProject.name}.${ext}`);
            }

            appShellNode.style.display = "none";
            dashNode.style.display = "flex";
            renderDashboardGrid();
            activeProject = null;
        }

        function triggerSystemDownloadBlob(content, filename) {
            const blob = new Blob([content], { type: 'text/plain' });
            const link = document.createElement('a');
            link.download = filename.replace(/\s+/g, '_');
            link.href = window.URL.createObjectURL(blob);
            link.click();
        }

        function updateLineNumbers() {
            const lines = mainEditor.value.split('\n').length;
            let nums = '';
            for(let i=1; i<=lines; i++) { nums += (i < 10 ? '0' + i : i) + '<br>'; }
            lineCounter.innerHTML = nums;
        }

        /* ==================================
           MATRIX SMART TEMPLATE ENGINE
        ================================== */
        const smartTemplates = {
            html:{
                html:`<!DOCTYPE html>\n<html>\n<head>\n    <title>My Website</title>\n</head>\n<body>\n\n</body>\n</html>`,
                div:`<div>\n    \n</div>`,
                button:`<button>Click Me</button>`,
                ul:`<ul>\n    <li></li>\n</ul>`,
                img:`<img src="" alt="">`,
                a:`<a href=""></a>`,
                input:`<input type="text" placeholder="">`,
                form:`<form>\n\n</form>`,
                script:`<script>\n\n<\/script>`,
                style:`<style>\n\n</style>`,
                canvas:`<canvas id="game"></canvas>`
            },
            css:{
                display:`display: flex;`,
                position:`position: relative;`,
                background:`background: #111;`,
                color:`color: white;`,
                width:`width: 100%;`,
                height:`height: 100vh;`,
                margin:`margin: 0;`,
                padding:`padding: 0;`,
                border:`border: 1px solid #fff;`,
                animation:`animation: glow 1s infinite;`,
                transform:`transform: scale(1);`,
                flex:`display:flex;\njustify-content:center;\nalign-items:center;`
            },
            js:{
                function:`function myFunction(){\n\n}`,
                const:`const element = document.getElementById("");`,
                let:`let value = 0;`,
                queryselector:`document.querySelector("");`,
                addevent:`element.addEventListener("click", ()=>{\n\n});`,
                timeout:`setTimeout(()=>{

},1000);`,
                interval:`setInterval(()=>{\n\n},1000);`,
                fetch:`fetch("")\n.then(res => res.json())\n.then(data => {\n    \n});`,
                log:`console.log("");`
            }
        };

        mainEditor.addEventListener("input", handleSuggestionEngine);

        mainEditor.addEventListener("keydown", function(e){
            const items = document.querySelectorAll(".suggestion-item");

            if(suggestionBox.style.display === "block"){
                if(e.key === "ArrowDown"){
                    e.preventDefault();
                    selectedSuggestionIndex++;
                    if(selectedSuggestionIndex >= items.length) selectedSuggestionIndex = 0;
                    updateSuggestionSelection(items);
                }
                if(e.key === "ArrowUp"){
                    e.preventDefault();
                    selectedSuggestionIndex--;
                    if(selectedSuggestionIndex < 0) selectedSuggestionIndex = items.length - 1;
                    updateSuggestionSelection(items);
                }
                if(e.key === "Enter" && items.length > 0){
                    e.preventDefault();
                    items[selectedSuggestionIndex].click();
                    return;
                }
                if(e.key === "Escape"){
                    suggestionBox.style.display = "none";
                }
            }
            if (e.key !== "Enter") {
                autoPairSystem(e);
            }
        });

        function autoPairSystem(e){
            const pairs = { "(": ")", "{": "}", "[": "]", '"': '"', "'": "'" };
            
            // Fixed Backspace crash handler
            if (e.key === "Backspace") {
                const start = mainEditor.selectionStart;
                const charBefore = mainEditor.value.charAt(start - 1);
                const charAfter = mainEditor.value.charAt(start);
                if (pairs[charBefore] && pairs[charBefore] === charAfter) {
                    e.preventDefault();
                    mainEditor.value = mainEditor.value.substring(0, start - 1) + mainEditor.value.substring(start + 1);
                    mainEditor.selectionStart = start - 1;
                    mainEditor.selectionEnd = start - 1;
                    liveExecutionEngine();
                }
                return;
            }

            if(pairs[e.key]){
                e.preventDefault();
                const start = mainEditor.selectionStart;
                const end = mainEditor.selectionEnd;
                const before = mainEditor.value.substring(0,start);
                const after = mainEditor.value.substring(end);

                mainEditor.value = before + e.key + pairs[e.key] + after;
                mainEditor.selectionStart = start + 1;
                mainEditor.selectionEnd = start + 1;
                liveExecutionEngine();
            }
        }

        function getCurrentEditorType(){
            if(!activeProject || activeProject.lang !== "hybrid") return "js";
            return activeProject.currentTab;
        }

        function handleSuggestionEngine(){
            const cursorPos = mainEditor.selectionStart;
            const textBefore = mainEditor.value.substring(0, cursorPos);
            const currentWord = textBefore.split(/[^a-zA-Z0-9_-]+/).pop().toLowerCase();

            if(currentWord.length < 1){
                suggestionBox.style.display = "none";
                return;
            }

            const currentType = getCurrentEditorType();
            const templateSet = smartTemplates[currentType] || {};
            const matched = Object.keys(templateSet).filter(word => word.startsWith(currentWord));

            renderSuggestions(matched, currentWord);
        }

        function renderSuggestions(list, currentWord){
            suggestionBox.innerHTML = "";
            selectedSuggestionIndex = 0;

            if(list.length === 0){
                suggestionBox.style.display = "none";
                return;
            }

            // DYNAMIC POSITIONING FIX
            const caretPos = getCaretCoordinates(mainEditor, mainEditor.selectionStart);
            suggestionBox.style.top = (caretPos.top + 20) + "px";
            suggestionBox.style.left = (caretPos.left + 30) + "px";
            suggestionBox.style.display = "block";

            list.slice(0,8).forEach((item,index) => {
                const div = document.createElement("div");
                div.className = "suggestion-item";
                if(index === 0) div.style.background = "rgba(255,42,42,0.25)";
                div.innerText = item;
                div.onclick = () => insertSuggestion(item, currentWord);
                suggestionBox.appendChild(div);
            });
        }

        function updateSuggestionSelection(items){
            items.forEach(item=> { item.style.background = ""; });
            if(items[selectedSuggestionIndex]){
                items[selectedSuggestionIndex].style.background = "rgba(255,42,42,0.25)";
            }
        }

        function insertSuggestion(text, currentWord){
            const currentType = getCurrentEditorType();
            const templateSet = smartTemplates[currentType] || {};
            const finalCode = templateSet[text] || text;
            const cursorPos = mainEditor.selectionStart;

            const before = mainEditor.value.substring(0, cursorPos - currentWord.length);
            const after = mainEditor.value.substring(cursorPos);

            mainEditor.value = before + finalCode + after;
            mainEditor.focus();

            const emptyLineIndex = finalCode.indexOf("\n");
            let newCursorPosition;
            if(emptyLineIndex !== -1){
                newCursorPosition = before.length + emptyLineIndex + 1;
            }else{
                newCursorPosition = before.length + finalCode.length;
            }

            mainEditor.selectionStart = newCursorPosition;
            mainEditor.selectionEnd = newCursorPosition;
            suggestionBox.style.display = "none";
            liveExecutionEngine();
        }

        // DYNAMIC POSITION CALCULATOR ENGINE
        function getCaretCoordinates(element, position) {
            const clone = document.createElement('div');
            const styles = window.getComputedStyle(element);
            for (let prop of styles) { clone.style[prop] = styles[prop]; }
            clone.style.position = 'absolute';
            clone.style.visibility = 'hidden';
            clone.style.whiteSpace = 'pre-wrap';
            clone.style.wordWrap = 'break-word';
            
            const text = element.value.substring(0, position);
            clone.textContent = text;
            
            const span = document.createElement('span');
            span.textContent = element.value.substring(position) || '.';
            clone.appendChild(span);
            
            document.body.appendChild(clone);
            const { offsetTop: top, offsetLeft: left } = span;
            document.body.removeChild(clone);
            
            return { top: top - element.scrollTop, left: left - element.scrollLeft };
        }

        mainEditor.addEventListener('scroll', syncHighlightScrollLayer);
   function manualRunCode() {

    if(!activeProject) return;

    // Latest editor code save karo
    if(activeProject.lang === 'hybrid') {

        if(activeProject.currentTab === 'html') {
            activeProject.codeHTML = mainEditor.value;
        }

        else if(activeProject.currentTab === 'css') {
            activeProject.codeCSS = mainEditor.value;
        }

        else {
            activeProject.codeJS = mainEditor.value;
        }

    } else {
        activeProject.code = mainEditor.value;
    }

    // Ab run karo
    liveExecutionEngine();
}