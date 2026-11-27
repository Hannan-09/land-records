/**
 * Land Survey Records Portal - Application Logic (v3.0)
 */

// 1. Core Data: 7 Dedicated Land Plots with NEW & OLD Records
const LAND_PLOTS = [
  {
    surveyNo: '636',
    landName: 'META WALU AAPDU',
    newRecord: {
      id: 'new-636',
      surveyNo: '636',
      landName: 'META WALU AAPDU',
      category: 'NEW',
      categoryLabel: 'NEW RECORD',
      title: 'Survey #636 - META WALU AAPDU (NEW)',
      fileName: '636.pdf',
      filePath: 'NEW RECORD/636.pdf',
      sizeFormatted: '597 KB'
    },
    oldRecord: {
      id: 'old-636',
      surveyNo: '636',
      landName: 'META WALU AAPDU',
      category: 'OLD',
      categoryLabel: 'OLD RECORD',
      title: 'Survey #636 - META WALU AAPDU (OLD)',
      fileName: '636 OLD RECORD.pdf',
      filePath: 'OLD RECORD/636 OLD RECORD.pdf',
      sizeFormatted: '501 KB'
    }
  },
  {
    surveyNo: '635',
    landName: 'META WALU KAKA NU',
    newRecord: {
      id: 'new-635',
      surveyNo: '635',
      landName: 'META WALU KAKA NU',
      category: 'NEW',
      categoryLabel: 'NEW RECORD',
      title: 'Survey #635 - META WALU KAKA NU (NEW)',
      fileName: '635.pdf',
      filePath: 'NEW RECORD/635.pdf',
      sizeFormatted: '451 KB'
    },
    oldRecord: {
      id: 'old-635',
      surveyNo: '635',
      landName: 'META WALU KAKA NU',
      category: 'OLD',
      categoryLabel: 'OLD RECORD',
      title: 'Survey #635 - META WALU KAKA NU (OLD)',
      fileName: '635 OLD RECORD.pdf',
      filePath: 'OLD RECORD/635 OLD RECORD.pdf',
      sizeFormatted: '508 KB'
    }
  },
  {
    surveyNo: '909',
    landName: '5 MANYU AAPDU',
    newRecord: {
      id: 'new-909',
      surveyNo: '909',
      landName: '5 MANYU AAPDU',
      category: 'NEW',
      categoryLabel: 'NEW RECORD',
      title: 'Survey #909 - 5 MANYU AAPDU (NEW)',
      fileName: '909.pdf',
      filePath: 'NEW RECORD/909.pdf',
      sizeFormatted: '351 KB'
    },
    oldRecord: {
      id: 'old-909',
      surveyNo: '909',
      landName: '5 MANYU AAPDU',
      category: 'OLD',
      categoryLabel: 'OLD RECORD',
      title: 'Survey #909 - 5 MANYU AAPDU (OLD)',
      fileName: '909 OLD RECORD.pdf',
      filePath: 'OLD RECORD/909 OLD RECORD.pdf',
      sizeFormatted: '465 KB'
    }
  },
  {
    surveyNo: '910',
    landName: 'SAMANYU KAKA WALU',
    newRecord: {
      id: 'new-910',
      surveyNo: '910',
      landName: 'SAMANYU KAKA WALU',
      category: 'NEW',
      categoryLabel: 'NEW RECORD',
      title: 'Survey #910 - SAMANYU KAKA WALU (NEW)',
      fileName: '910.pdf',
      filePath: 'NEW RECORD/910.pdf',
      sizeFormatted: '610 KB'
    },
    oldRecord: {
      id: 'old-910',
      surveyNo: '910',
      landName: 'SAMANYU KAKA WALU',
      category: 'OLD',
      categoryLabel: 'OLD RECORD',
      title: 'Survey #910 - SAMANYU KAKA WALU (OLD)',
      fileName: '910 OLD RECORD.pdf',
      filePath: 'OLD RECORD/910 OLD RECORD.pdf',
      sizeFormatted: '453 KB'
    }
  },
  {
    surveyNo: '911',
    landName: 'RASUL PIRA WALU',
    newRecord: {
      id: 'new-911',
      surveyNo: '911',
      landName: 'RASUL PIRA WALU',
      category: 'NEW',
      categoryLabel: 'NEW RECORD',
      title: 'Survey #911 - RASUL PIRA WALU (NEW)',
      fileName: '911.pdf',
      filePath: 'NEW RECORD/911.pdf',
      sizeFormatted: '655 KB'
    },
    oldRecord: {
      id: 'old-911',
      surveyNo: '911',
      landName: 'RASUL PIRA WALU',
      category: 'OLD',
      categoryLabel: 'OLD RECORD',
      title: 'Survey #911 - RASUL PIRA WALU (OLD)',
      fileName: '911 OLD RECORD.pdf',
      filePath: 'OLD RECORD/911 OLD RECORD.pdf',
      sizeFormatted: '496 KB'
    }
  },
  {
    surveyNo: '912',
    landName: 'KUWA WALI KAAPLI',
    newRecord: {
      id: 'new-912',
      surveyNo: '912',
      landName: 'KUWA WALI KAAPLI',
      category: 'NEW',
      categoryLabel: 'NEW RECORD',
      title: 'Survey #912 - KUWA WALI KAAPLI (NEW)',
      fileName: '912.pdf',
      filePath: 'NEW RECORD/912.pdf',
      sizeFormatted: '675 KB'
    },
    oldRecord: {
      id: 'old-912',
      surveyNo: '912',
      landName: 'KUWA WALI KAAPLI',
      category: 'OLD',
      categoryLabel: 'OLD RECORD',
      title: 'Survey #912 - KUWA WALI KAAPLI (OLD)',
      fileName: '912 OLD RECORD.pdf',
      filePath: 'OLD RECORD/912 OLD RECORD.pdf',
      sizeFormatted: '486 KB'
    }
  },
  {
    surveyNo: '914',
    landName: '5 MANYU BAAJU NI KAAPLI',
    newRecord: {
      id: 'new-914',
      surveyNo: '914',
      landName: '5 MANYU BAAJU NI KAAPLI',
      category: 'NEW',
      categoryLabel: 'NEW RECORD',
      title: 'Survey #914 - 5 MANYU BAAJU NI KAAPLI (NEW)',
      fileName: '914.pdf',
      filePath: 'NEW RECORD/914.pdf',
      sizeFormatted: '432 KB'
    },
    oldRecord: {
      id: 'old-914',
      surveyNo: '914',
      landName: '5 MANYU BAAJU NI KAAPLI',
      category: 'OLD',
      categoryLabel: 'OLD RECORD',
      title: 'Survey #914 - 5 MANYU BAAJU NI KAAPLI (OLD)',
      fileName: '914 OLD RECORD.pdf',
      filePath: 'OLD RECORD/914 OLD RECORD.pdf',
      sizeFormatted: '463 KB'
    }
  }
];

// Flat List for fast global operations
const ALL_DOCUMENTS = [];
LAND_PLOTS.forEach(plot => {
  ALL_DOCUMENTS.push(plot.newRecord);
  ALL_DOCUMENTS.push(plot.oldRecord);
});

// 2. Application State
const appState = {
  currentView: 'PLOTS', // 'PLOTS' (By Land) | 'NEW' | 'OLD'
  selectedSurveyChip: 'ALL',
  searchQuery: '',
  activeModalDoc: null
};

// 3. DOM Elements
const el = {
  searchInput: document.getElementById('searchInput'),
  clearSearchBtn: document.getElementById('clearSearchBtn'),
  tabItems: document.querySelectorAll('.tab-item'),
  chipButtons: document.querySelectorAll('.chip-btn'),
  cardsGrid: document.getElementById('cardsGrid'),
  noResultsBox: document.getElementById('noResultsBox'),
  resultsCountText: document.getElementById('resultsCountText'),
  btnResetFilter: document.getElementById('btnResetFilter'),
  btnHeaderZip: document.getElementById('btnHeaderZip'),
  btnQuickZipCurrent: document.getElementById('btnQuickZipCurrent'),

  // PDF Preview Modal
  pdfModal: document.getElementById('pdfModal'),
  modalTypeBadge: document.getElementById('modalTypeBadge'),
  modalTitle: document.getElementById('modalTitle'),
  pdfFrame: document.getElementById('pdfFrame'),
  pdfSpinner: document.getElementById('pdfSpinner'),
  modalCloseBtn: document.getElementById('modalCloseBtn'),
  modalExternalBtn: document.getElementById('modalExternalBtn'),
  modalDownloadBtn: document.getElementById('modalDownloadBtn'),
  modalDirectOpenLink: document.getElementById('modalDirectOpenLink'),

  // ZIP Modal
  zipModal: document.getElementById('zipModal'),
  zipTitle: document.getElementById('zipTitle'),
  zipStatusText: document.getElementById('zipStatusText'),
  zipProgressBar: document.getElementById('zipProgressBar')
};

// 4. Initialization
function initialize() {
  bindEventListeners();
  renderApp();
}

// 5. Event Listeners
function bindEventListeners() {
  // Search Input
  el.searchInput.addEventListener('input', (e) => {
    appState.searchQuery = e.target.value.trim().toLowerCase();
    el.clearSearchBtn.style.display = appState.searchQuery ? 'flex' : 'none';
    renderApp();
  });

  el.clearSearchBtn.addEventListener('click', () => {
    appState.searchQuery = '';
    el.searchInput.value = '';
    el.clearSearchBtn.style.display = 'none';
    el.searchInput.focus();
    renderApp();
  });

  if (el.btnResetFilter) {
    el.btnResetFilter.addEventListener('click', () => {
      appState.searchQuery = '';
      appState.selectedSurveyChip = 'ALL';
      el.searchInput.value = '';
      el.clearSearchBtn.style.display = 'none';
      updateActiveChipUI('ALL');
      renderApp();
    });
  }

  // Segmented Tabs ('PLOTS', 'NEW', 'OLD')
  el.tabItems.forEach(tab => {
    tab.addEventListener('click', () => {
      const view = tab.getAttribute('data-view');
      appState.currentView = view;
      
      el.tabItems.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      renderApp();
    });
  });

  // Land Selector Strip Chips
  el.chipButtons.forEach(chip => {
    chip.addEventListener('click', () => {
      const survey = chip.getAttribute('data-survey');
      appState.selectedSurveyChip = survey;
      updateActiveChipUI(survey);
      renderApp();
    });
  });

  // Bulk ZIP Download from Header (All 14 PDFs)
  el.btnHeaderZip.addEventListener('click', () => {
    triggerZipDownload(ALL_DOCUMENTS, 'All_Land_Records_14_PDFs.zip');
  });

  // Bulk ZIP Download from Section Toolbar (Current filter)
  el.btnQuickZipCurrent.addEventListener('click', () => {
    const docs = getCurrentlyVisibleDocs();
    if (docs.length === 0) {
      alert('No documents available to download.');
      return;
    }
    const zipName = appState.currentView === 'NEW' ? 'New_Land_Records.zip' :
                    appState.currentView === 'OLD' ? 'Old_Land_Records.zip' : 'Filtered_Land_Records.zip';
    triggerZipDownload(docs, zipName);
  });

  // Modal Close Events
  el.modalCloseBtn.addEventListener('click', closePdfModal);
  el.pdfModal.addEventListener('click', (e) => {
    if (e.target === el.pdfModal) closePdfModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePdfModal();
  });

  // Modal External Open
  el.modalExternalBtn.addEventListener('click', () => {
    if (appState.activeModalDoc) {
      window.open(encodeURI(appState.activeModalDoc.filePath), '_blank');
    }
  });

  // Modal Download
  el.modalDownloadBtn.addEventListener('click', () => {
    if (appState.activeModalDoc) {
      downloadSingleFile(appState.activeModalDoc.filePath, appState.activeModalDoc.fileName);
    }
  });

  // Iframe load spinner hide
  el.pdfFrame.addEventListener('load', () => {
    el.pdfSpinner.classList.add('hidden');
  });
}

function updateActiveChipUI(survey) {
  el.chipButtons.forEach(btn => {
    if (btn.getAttribute('data-survey') === survey) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// 6. Filtering Logic
function getFilteredPlots() {
  return LAND_PLOTS.filter(plot => {
    // Chip filter
    if (appState.selectedSurveyChip !== 'ALL' && plot.surveyNo !== appState.selectedSurveyChip) {
      return false;
    }

    // Search query filter
    if (!appState.searchQuery) return true;
    const q = appState.searchQuery;
    return plot.surveyNo.includes(q) ||
           plot.landName.toLowerCase().includes(q) ||
           plot.newRecord.fileName.toLowerCase().includes(q) ||
           plot.oldRecord.fileName.toLowerCase().includes(q);
  });
}

function getFilteredSingleDocs(category) {
  return ALL_DOCUMENTS.filter(doc => {
    if (doc.category !== category) return false;

    // Chip filter
    if (appState.selectedSurveyChip !== 'ALL' && doc.surveyNo !== appState.selectedSurveyChip) {
      return false;
    }

    // Search query filter
    if (!appState.searchQuery) return true;
    const q = appState.searchQuery;
    return doc.surveyNo.includes(q) ||
           doc.landName.toLowerCase().includes(q) ||
           doc.fileName.toLowerCase().includes(q);
  });
}

function getCurrentlyVisibleDocs() {
  if (appState.currentView === 'NEW') {
    return getFilteredSingleDocs('NEW');
  } else if (appState.currentView === 'OLD') {
    return getFilteredSingleDocs('OLD');
  } else {
    // Collect from matching plots
    const plots = getFilteredPlots();
    const docs = [];
    plots.forEach(p => {
      docs.push(p.newRecord);
      docs.push(p.oldRecord);
    });
    return docs;
  }
}

// 7. Main Rendering
function renderApp() {
  el.cardsGrid.innerHTML = '';

  if (appState.currentView === 'PLOTS') {
    renderPlotsView();
  } else {
    renderCategoryView(appState.currentView);
  }
}

// 7A. Render Dedicated Plot Cards (By Land)
function renderPlotsView() {
  const plots = getFilteredPlots();
  
  el.resultsCountText.textContent = `Showing ${plots.length} of 7 Land Plots`;

  if (plots.length === 0) {
    el.noResultsBox.style.display = 'block';
    return;
  }
  el.noResultsBox.style.display = 'none';

  plots.forEach(plot => {
    const card = document.createElement('div');
    card.className = 'plot-card';

    card.innerHTML = `
      <div class="plot-header">
        <div class="plot-identity">
          <div class="plot-badge-row">
            <span class="survey-tag">Survey #${plot.surveyNo}</span>
          </div>
          <h2 class="plot-name-title">${plot.landName}</h2>
        </div>
        <span class="doc-count-pill">2 Records</span>
      </div>

      <div class="plot-records-stack">
        <!-- New Record Row -->
        <div class="record-row row-new">
          <div class="row-left">
            <span class="row-tag tag-new-style">NEW</span>
            <div class="row-details">
              <span class="row-filename">${plot.newRecord.fileName}</span>
              <span class="row-size">Certified &bull; ${plot.newRecord.sizeFormatted}</span>
            </div>
          </div>
          <div class="row-actions">
            <button class="btn-row-action btn-row-preview" data-id="${plot.newRecord.id}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span>View</span>
            </button>
            <button class="btn-row-action btn-row-download" data-id="${plot.newRecord.id}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </button>
          </div>
        </div>

        <!-- Old Record Row -->
        <div class="record-row row-old">
          <div class="row-left">
            <span class="row-tag tag-old-style">OLD</span>
            <div class="row-details">
              <span class="row-filename">${plot.oldRecord.fileName}</span>
              <span class="row-size">Archived &bull; ${plot.oldRecord.sizeFormatted}</span>
            </div>
          </div>
          <div class="row-actions">
            <button class="btn-row-action btn-row-preview" data-id="${plot.oldRecord.id}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span>View</span>
            </button>
            <button class="btn-row-action btn-row-download" data-id="${plot.oldRecord.id}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;

    // Button event attachments
    const newPreviewBtn = card.querySelector(`.btn-row-preview[data-id="${plot.newRecord.id}"]`);
    newPreviewBtn.addEventListener('click', () => openPdfModal(plot.newRecord));

    const newDownloadBtn = card.querySelector(`.btn-row-download[data-id="${plot.newRecord.id}"]`);
    newDownloadBtn.addEventListener('click', () => downloadSingleFile(plot.newRecord.filePath, plot.newRecord.fileName));

    const oldPreviewBtn = card.querySelector(`.btn-row-preview[data-id="${plot.oldRecord.id}"]`);
    oldPreviewBtn.addEventListener('click', () => openPdfModal(plot.oldRecord));

    const oldDownloadBtn = card.querySelector(`.btn-row-download[data-id="${plot.oldRecord.id}"]`);
    oldDownloadBtn.addEventListener('click', () => downloadSingleFile(plot.oldRecord.filePath, plot.oldRecord.fileName));

    el.cardsGrid.appendChild(card);
  });
}

// 7B. Render Filtered Category View (NEW or OLD)
function renderCategoryView(category) {
  const docs = getFilteredSingleDocs(category);
  const label = category === 'NEW' ? 'New Records' : 'Old Records';
  
  el.resultsCountText.textContent = `Showing ${docs.length} ${label}`;

  if (docs.length === 0) {
    el.noResultsBox.style.display = 'block';
    return;
  }
  el.noResultsBox.style.display = 'none';

  docs.forEach(doc => {
    const card = document.createElement('div');
    card.className = 'single-record-card';

    const isNew = doc.category === 'NEW';
    const tagClass = isNew ? 'pill-new' : 'pill-old';

    card.innerHTML = `
      <div class="single-card-top">
        <span class="survey-tag">Survey #${doc.surveyNo}</span>
        <span class="type-pill ${tagClass}">${doc.categoryLabel}</span>
      </div>

      <h2 class="single-card-title">${doc.landName}</h2>
      
      <div style="font-size: 0.8rem; color: #64748b; display: flex; align-items: center; gap: 8px;">
        <span>${doc.fileName}</span>
        <span>&bull;</span>
        <span>${doc.sizeFormatted}</span>
      </div>

      <div class="single-card-actions">
        <button class="btn-card-large btn-preview-large">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <span>Preview PDF</span>
        </button>

        <button class="btn-card-large btn-download-large">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span>Download</span>
        </button>
      </div>
    `;

    const previewBtn = card.querySelector('.btn-preview-large');
    previewBtn.addEventListener('click', () => openPdfModal(doc));

    const downloadBtn = card.querySelector('.btn-download-large');
    downloadBtn.addEventListener('click', () => downloadSingleFile(doc.filePath, doc.fileName));

    el.cardsGrid.appendChild(card);
  });
}

// 8. In-App PDF Preview Modal
function openPdfModal(doc) {
  appState.activeModalDoc = doc;

  el.modalTitle.textContent = `${doc.landName} (#${doc.surveyNo})`;
  el.modalTypeBadge.textContent = doc.categoryLabel;
  el.modalTypeBadge.className = `type-pill ${doc.category === 'NEW' ? 'pill-new' : 'pill-old'}`;

  const encodedPath = encodeURI(doc.filePath);
  el.pdfSpinner.classList.remove('hidden');
  el.pdfFrame.src = encodedPath;
  el.modalDirectOpenLink.href = encodedPath;

  el.pdfModal.classList.add('active');
  el.pdfModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closePdfModal() {
  el.pdfModal.classList.remove('active');
  el.pdfModal.setAttribute('aria-hidden', 'true');
  el.pdfFrame.src = '';
  document.body.style.overflow = '';
  appState.activeModalDoc = null;
}

// 9. Single File Download
function downloadSingleFile(filePath, fileName) {
  const link = document.createElement('a');
  link.href = encodeURI(filePath);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// 10. Client-Side Bulk ZIP Download with JSZip
async function triggerZipDownload(docList, zipFileName) {
  if (!window.JSZip) {
    alert('ZIP compression library is still loading. Please check your internet connection.');
    return;
  }

  el.zipTitle.textContent = 'Preparing ZIP Archive';
  el.zipStatusText.textContent = `Gathering 0 of ${docList.length} documents...`;
  el.zipProgressBar.style.width = '0%';
  el.zipModal.classList.add('active');

  const zip = new window.JSZip();
  let completed = 0;

  try {
    const fetchPromises = docList.map(async (doc) => {
      try {
        const res = await fetch(encodeURI(doc.filePath));
        if (!res.ok) throw new Error(`Could not fetch ${doc.filePath}`);
        const blob = await res.blob();
        
        const folderName = doc.category === 'NEW' ? 'NEW_RECORDS' : 'OLD_RECORDS';
        zip.folder(folderName).file(doc.fileName, blob);

        completed++;
        const percent = Math.round((completed / docList.length) * 80);
        el.zipStatusText.textContent = `Gathering ${completed} of ${docList.length} documents...`;
        el.zipProgressBar.style.width = `${percent}%`;
      } catch (err) {
        console.error('Error fetching file for ZIP:', err);
      }
    });

    await Promise.all(fetchPromises);

    el.zipTitle.textContent = 'Compressing Files';
    el.zipStatusText.textContent = 'Creating .zip package...';
    el.zipProgressBar.style.width = '90%';

    const zipContent = await zip.generateAsync(
      { type: 'blob', compression: 'DEFLATE', compressionOptions: { level: 6 } },
      (meta) => {
        const p = 80 + Math.round(meta.percent * 0.2);
        el.zipProgressBar.style.width = `${p}%`;
      }
    );

    el.zipProgressBar.style.width = '100%';
    el.zipStatusText.textContent = 'Download starting!';

    const url = URL.createObjectURL(zipContent);
    const a = document.createElement('a');
    a.href = url;
    a.download = zipFileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setTimeout(() => {
      URL.revokeObjectURL(url);
      el.zipModal.classList.remove('active');
    }, 1200);

  } catch (error) {
    console.error('ZIP failed:', error);
    alert('Failed to generate ZIP archive: ' + error.message);
    el.zipModal.classList.remove('active');
  }
}

// Start application
document.addEventListener('DOMContentLoaded', initialize);
