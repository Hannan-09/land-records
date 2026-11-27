/**
 * Land Survey Records Portal - Application Logic
 */

// Mapping of Survey Numbers to Local Land Names
const SURVEY_NAMES = {
  '635': 'META WALU KAKA NU',
  '636': 'META WALU AAPDU',
  '909': '5 MANYU AAPDU',
  '910': 'SAMANYU KAKA WALU',
  '911': 'RASUL PIRA WALU',
  '912': 'KUWA WALI KAAPLI',
  '914': '5 MANYU BAAJU NI KAAPLI'
};

// 1. Certified Land Records Catalog
const LAND_RECORDS = [
  // --- NEW RECORDS ---
  {
    id: 'new-635',
    surveyNo: '635',
    landName: 'META WALU KAKA NU',
    title: '635 - META WALU KAKA NU',
    category: 'NEW',
    categoryLabel: 'NEW RECORD',
    fileName: '635.pdf',
    filePath: 'NEW RECORD/635.pdf',
    sizeFormatted: '451 KB'
  },
  {
    id: 'new-636',
    surveyNo: '636',
    landName: 'META WALU AAPDU',
    title: '636 - META WALU AAPDU',
    category: 'NEW',
    categoryLabel: 'NEW RECORD',
    fileName: '636.pdf',
    filePath: 'NEW RECORD/636.pdf',
    sizeFormatted: '597 KB'
  },
  {
    id: 'new-909',
    surveyNo: '909',
    landName: '5 MANYU AAPDU',
    title: '909 - 5 MANYU AAPDU',
    category: 'NEW',
    categoryLabel: 'NEW RECORD',
    fileName: '909.pdf',
    filePath: 'NEW RECORD/909.pdf',
    sizeFormatted: '351 KB'
  },
  {
    id: 'new-910',
    surveyNo: '910',
    landName: 'SAMANYU KAKA WALU',
    title: '910 - SAMANYU KAKA WALU',
    category: 'NEW',
    categoryLabel: 'NEW RECORD',
    fileName: '910.pdf',
    filePath: 'NEW RECORD/910.pdf',
    sizeFormatted: '610 KB'
  },
  {
    id: 'new-911',
    surveyNo: '911',
    landName: 'RASUL PIRA WALU',
    title: '911 - RASUL PIRA WALU',
    category: 'NEW',
    categoryLabel: 'NEW RECORD',
    fileName: '911.pdf',
    filePath: 'NEW RECORD/911.pdf',
    sizeFormatted: '655 KB'
  },
  {
    id: 'new-912',
    surveyNo: '912',
    landName: 'KUWA WALI KAAPLI',
    title: '912 - KUWA WALI KAAPLI',
    category: 'NEW',
    categoryLabel: 'NEW RECORD',
    fileName: '912.pdf',
    filePath: 'NEW RECORD/912.pdf',
    sizeFormatted: '675 KB'
  },
  {
    id: 'new-914',
    surveyNo: '914',
    landName: '5 MANYU BAAJU NI KAAPLI',
    title: '914 - 5 MANYU BAAJU NI KAAPLI',
    category: 'NEW',
    categoryLabel: 'NEW RECORD',
    fileName: '914.pdf',
    filePath: 'NEW RECORD/914.pdf',
    sizeFormatted: '432 KB'
  },

  // --- OLD RECORDS ---
  {
    id: 'old-635',
    surveyNo: '635',
    landName: 'META WALU KAKA NU',
    title: '635 - META WALU KAKA NU (Old)',
    category: 'OLD',
    categoryLabel: 'OLD RECORD',
    fileName: '635 OLD RECORD.pdf',
    filePath: 'OLD RECORD/635 OLD RECORD.pdf',
    sizeFormatted: '508 KB'
  },
  {
    id: 'old-636',
    surveyNo: '636',
    landName: 'META WALU AAPDU',
    title: '636 - META WALU AAPDU (Old)',
    category: 'OLD',
    categoryLabel: 'OLD RECORD',
    fileName: '636 OLD RECORD.pdf',
    filePath: 'OLD RECORD/636 OLD RECORD.pdf',
    sizeFormatted: '501 KB'
  },
  {
    id: 'old-909',
    surveyNo: '909',
    landName: '5 MANYU AAPDU',
    title: '909 - 5 MANYU AAPDU (Old)',
    category: 'OLD',
    categoryLabel: 'OLD RECORD',
    fileName: '909 OLD RECORD.pdf',
    filePath: 'OLD RECORD/909 OLD RECORD.pdf',
    sizeFormatted: '465 KB'
  },
  {
    id: 'old-910',
    surveyNo: '910',
    landName: 'SAMANYU KAKA WALU',
    title: '910 - SAMANYU KAKA WALU (Old)',
    category: 'OLD',
    categoryLabel: 'OLD RECORD',
    fileName: '910 OLD RECORD.pdf',
    filePath: 'OLD RECORD/910 OLD RECORD.pdf',
    sizeFormatted: '453 KB'
  },
  {
    id: 'old-911',
    surveyNo: '911',
    landName: 'RASUL PIRA WALU',
    title: '911 - RASUL PIRA WALU (Old)',
    category: 'OLD',
    categoryLabel: 'OLD RECORD',
    fileName: '911 OLD RECORD.pdf',
    filePath: 'OLD RECORD/911 OLD RECORD.pdf',
    sizeFormatted: '496 KB'
  },
  {
    id: 'old-912',
    surveyNo: '912',
    landName: 'KUWA WALI KAAPLI',
    title: '912 - KUWA WALI KAAPLI (Old)',
    category: 'OLD',
    categoryLabel: 'OLD RECORD',
    fileName: '912 OLD RECORD.pdf',
    filePath: 'OLD RECORD/912 OLD RECORD.pdf',
    sizeFormatted: '486 KB'
  },
  {
    id: 'old-914',
    surveyNo: '914',
    landName: '5 MANYU BAAJU NI KAAPLI',
    title: '914 - 5 MANYU BAAJU NI KAAPLI (Old)',
    category: 'OLD',
    categoryLabel: 'OLD RECORD',
    fileName: '914 OLD RECORD.pdf',
    filePath: 'OLD RECORD/914 OLD RECORD.pdf',
    sizeFormatted: '463 KB'
  }
];

// 2. Application State
const state = {
  currentView: 'home', // 'home' | 'records'
  currentFilter: 'ALL', // 'ALL' | 'NEW' | 'OLD'
  searchQuery: '',
  activeModalRecord: null
};

// 3. DOM Elements
const elements = {
  homeView: document.getElementById('homeView'),
  recordsView: document.getElementById('recordsView'),
  recordsContainer: document.getElementById('recordsContainer'),
  emptyState: document.getElementById('emptyState'),
  
  // Header / Search
  searchInput: document.getElementById('surveySearchInput'),
  clearSearchBtn: document.getElementById('clearSearchBtn'),
  totalRecordsBadge: document.getElementById('totalRecordsBadge'),

  // Home buttons
  btnSelectNew: document.getElementById('btnSelectNew'),
  btnSelectOld: document.getElementById('btnSelectOld'),
  btnDownloadAllGlobal: document.getElementById('btnDownloadAllGlobal'),
  btnViewAllRecords: document.getElementById('btnViewAllRecords'),
  pills: document.querySelectorAll('.pill'),

  // Records view nav & filters
  btnBackToHome: document.getElementById('btnBackToHome'),
  currentCategoryHeading: document.getElementById('currentCategoryHeading'),
  filteredCountBadge: document.getElementById('filteredCountBadge'),
  filterTabs: document.querySelectorAll('.tab-btn'),
  toolbarStatusText: document.getElementById('toolbarStatusText'),
  btnDownloadCurrentZip: document.getElementById('btnDownloadCurrentZip'),
  btnResetSearch: document.getElementById('btnResetSearch'),

  // PDF Preview Modal
  pdfModal: document.getElementById('pdfModal'),
  modalTypeBadge: document.getElementById('modalTypeBadge'),
  modalPdfTitle: document.getElementById('modalPdfTitle'),
  modalIframe: document.getElementById('pdfIframe'),
  pdfLoadingSpinner: document.getElementById('pdfLoadingSpinner'),
  modalCloseBtn: document.getElementById('modalCloseBtn'),
  modalOpenExternalBtn: document.getElementById('modalOpenExternalBtn'),
  modalDownloadBtn: document.getElementById('modalDownloadBtn'),
  mobileDirectOpenBtn: document.getElementById('mobileDirectOpenBtn'),

  // ZIP Progress Modal
  zipProgressModal: document.getElementById('zipProgressModal'),
  zipProgressTitle: document.getElementById('zipProgressTitle'),
  zipProgressText: document.getElementById('zipProgressText'),
  zipProgressBar: document.getElementById('zipProgressBar')
};

// 4. Initialization
function initApp() {
  bindEvents();
  render();
}

// 5. Event Binding
function bindEvents() {
  // Search input events (supports survey number or land name)
  elements.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    elements.clearSearchBtn.style.display = state.searchQuery ? 'flex' : 'none';
    
    // Automatically switch to records view if typing search
    if (state.searchQuery && state.currentView !== 'records') {
      state.currentView = 'records';
    }
    render();
  });

  elements.clearSearchBtn.addEventListener('click', () => {
    state.searchQuery = '';
    elements.searchInput.value = '';
    elements.clearSearchBtn.style.display = 'none';
    elements.searchInput.focus();
    render();
  });

  if (elements.btnResetSearch) {
    elements.btnResetSearch.addEventListener('click', () => {
      state.searchQuery = '';
      elements.searchInput.value = '';
      elements.clearSearchBtn.style.display = 'none';
      state.currentFilter = 'ALL';
      render();
    });
  }

  // Home Category Buttons
  elements.btnSelectNew.addEventListener('click', () => {
    switchView('records', 'NEW');
  });

  elements.btnSelectOld.addEventListener('click', () => {
    switchView('records', 'OLD');
  });

  elements.btnViewAllRecords.addEventListener('click', () => {
    switchView('records', 'ALL');
  });

  // Survey Pills (Search by specific survey number or name)
  elements.pills.forEach(pill => {
    pill.addEventListener('click', () => {
      const survey = pill.getAttribute('data-survey');
      state.searchQuery = survey;
      elements.searchInput.value = survey;
      elements.clearSearchBtn.style.display = 'flex';
      switchView('records', 'ALL');
    });
  });

  // Back to home
  elements.btnBackToHome.addEventListener('click', () => {
    state.currentView = 'home';
    render();
  });

  // Filter Tabs
  elements.filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-filter');
      state.currentFilter = filter;
      render();
    });
  });

  // Bulk ZIP Download from Home
  elements.btnDownloadAllGlobal.addEventListener('click', () => {
    downloadRecordsAsZip(LAND_RECORDS, 'All_Land_Records_14_PDFs.zip');
  });

  // Bulk ZIP Download from Section Toolbar
  elements.btnDownloadCurrentZip.addEventListener('click', () => {
    const recordsToDownload = getFilteredRecords();
    if (recordsToDownload.length === 0) {
      alert('No records available to download.');
      return;
    }
    const zipName = state.currentFilter === 'NEW' ? 'New_Land_Records.zip' :
                    state.currentFilter === 'OLD' ? 'Old_Land_Records.zip' : 'Filtered_Land_Records.zip';
    downloadRecordsAsZip(recordsToDownload, zipName);
  });

  // Modal Close
  elements.modalCloseBtn.addEventListener('click', closePdfModal);
  elements.pdfModal.addEventListener('click', (e) => {
    if (e.target === elements.pdfModal) {
      closePdfModal();
    }
  });

  // Keyboard escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePdfModal();
    }
  });

  // Modal External Open
  elements.modalOpenExternalBtn.addEventListener('click', () => {
    if (state.activeModalRecord) {
      window.open(encodeURI(state.activeModalRecord.filePath), '_blank');
    }
  });

  // Modal Download
  elements.modalDownloadBtn.addEventListener('click', () => {
    if (state.activeModalRecord) {
      triggerDownload(state.activeModalRecord.filePath, state.activeModalRecord.fileName);
    }
  });

  // Modal Iframe load event
  elements.modalIframe.addEventListener('load', () => {
    elements.pdfLoadingSpinner.classList.add('hidden');
  });
}

// 6. Navigation Helpers
function switchView(viewName, filterName) {
  state.currentView = viewName;
  if (filterName) {
    state.currentFilter = filterName;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  render();
}

// 7. Filter & Search Logic (searches by survey number, land name, title, or filename)
function getFilteredRecords() {
  return LAND_RECORDS.filter(record => {
    // Category match
    const categoryMatches = (state.currentFilter === 'ALL') || (record.category === state.currentFilter);
    if (!categoryMatches) return false;

    // Search query match
    if (!state.searchQuery) return true;
    const query = state.searchQuery.toLowerCase();
    return record.surveyNo.toLowerCase().includes(query) || 
           record.landName.toLowerCase().includes(query) ||
           record.title.toLowerCase().includes(query) ||
           record.fileName.toLowerCase().includes(query);
  });
}

// 8. Main Render Function
function render() {
  // Toggle Views
  if (state.currentView === 'home') {
    elements.homeView.classList.add('active');
    elements.recordsView.classList.remove('active');
  } else {
    elements.homeView.classList.remove('active');
    elements.recordsView.classList.add('active');
  }

  // Update Tabs
  elements.filterTabs.forEach(tab => {
    const filter = tab.getAttribute('data-filter');
    if (filter === state.currentFilter) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  // Update Headings
  const filterTitles = {
    'ALL': 'All Land Records',
    'NEW': 'NEW RECORDS',
    'OLD': 'OLD RECORDS'
  };
  elements.currentCategoryHeading.textContent = filterTitles[state.currentFilter] || 'Records';

  // Get matching items
  const matchedRecords = getFilteredRecords();
  elements.filteredCountBadge.textContent = `${matchedRecords.length} files`;
  elements.toolbarStatusText.textContent = `Showing ${matchedRecords.length} document${matchedRecords.length === 1 ? '' : 's'}`;

  // Render cards
  elements.recordsContainer.innerHTML = '';

  if (matchedRecords.length === 0) {
    elements.emptyState.style.display = 'block';
  } else {
    elements.emptyState.style.display = 'none';
    
    matchedRecords.forEach(record => {
      const card = createRecordCard(record);
      elements.recordsContainer.appendChild(card);
    });
  }
}

// 9. Card Component Factory
function createRecordCard(record) {
  const card = document.createElement('div');
  card.className = 'record-card';
  
  const isNew = record.category === 'NEW';
  const typeTagClass = isNew ? 'type-new' : 'type-old';

  card.innerHTML = `
    <div class="record-card-top">
      <div class="survey-badge" title="Survey #${record.surveyNo} - ${record.landName}">
        <span class="badge-num">#${record.surveyNo}</span>
        <span class="badge-land-name">${record.landName}</span>
      </div>
      <span class="record-type-badge ${typeTagClass}">${record.categoryLabel}</span>
    </div>
    
    <h3 class="record-title">${record.title}</h3>
    
    <div class="record-meta">
      <span class="meta-item">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
        ${record.fileName}
      </span>
      <span class="meta-item">
        &bull; ${record.sizeFormatted}
      </span>
    </div>

    <div class="card-actions-row">
      <button class="btn-card btn-preview" data-id="${record.id}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
        <span>Preview</span>
      </button>

      <button class="btn-card btn-download-single" data-id="${record.id}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        <span>Download</span>
      </button>
    </div>
  `;

  // Attach card button listeners
  const previewBtn = card.querySelector('.btn-preview');
  previewBtn.addEventListener('click', () => openPdfModal(record));

  const downloadBtn = card.querySelector('.btn-download-single');
  downloadBtn.addEventListener('click', () => {
    triggerDownload(record.filePath, record.fileName);
  });

  return card;
}

// 10. PDF In-App Modal Preview
function openPdfModal(record) {
  state.activeModalRecord = record;
  
  elements.modalPdfTitle.textContent = `${record.title} (${record.fileName})`;
  elements.modalTypeBadge.textContent = record.categoryLabel;
  elements.modalTypeBadge.className = `modal-badge ${record.category === 'NEW' ? 'tag-new' : 'tag-old'}`;

  // Safe encoded URL
  const encodedPath = encodeURI(record.filePath);
  
  elements.pdfLoadingSpinner.classList.remove('hidden');
  elements.modalIframe.src = encodedPath;
  elements.mobileDirectOpenBtn.href = encodedPath;

  elements.pdfModal.classList.add('active');
  elements.pdfModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closePdfModal() {
  elements.pdfModal.classList.remove('active');
  elements.pdfModal.setAttribute('aria-hidden', 'true');
  elements.modalIframe.src = '';
  document.body.style.overflow = '';
  state.activeModalRecord = null;
}

// 11. Single PDF Download Trigger
function triggerDownload(filePath, fileName) {
  const link = document.createElement('a');
  link.href = encodeURI(filePath);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// 12. Client-Side Bulk ZIP Download with JSZip
async function downloadRecordsAsZip(recordList, zipFileName) {
  if (!window.JSZip) {
    alert('ZIP compression library is still loading. Please check your connection.');
    return;
  }

  // Open Progress Modal
  elements.zipProgressTitle.textContent = 'Preparing ZIP Archive';
  elements.zipProgressText.textContent = `Gathering 0 of ${recordList.length} documents...`;
  elements.zipProgressBar.style.width = '0%';
  elements.zipProgressModal.classList.add('active');

  const zip = new window.JSZip();
  let completed = 0;

  try {
    const fetchPromises = recordList.map(async (record) => {
      try {
        const response = await fetch(encodeURI(record.filePath));
        if (!response.ok) {
          throw new Error(`Failed to load ${record.filePath} (${response.status})`);
        }
        const blob = await response.blob();
        
        // Put files in clean subfolders inside the zip
        const folderName = record.category === 'NEW' ? 'NEW_RECORDS' : 'OLD_RECORDS';
        zip.folder(folderName).file(record.fileName, blob);

        completed++;
        const percent = Math.round((completed / recordList.length) * 80); // first 80% is fetching
        elements.zipProgressText.textContent = `Gathering ${completed} of ${recordList.length} documents...`;
        elements.zipProgressBar.style.width = `${percent}%`;
      } catch (err) {
        console.error(`Error packing ${record.fileName}:`, err);
      }
    });

    await Promise.all(fetchPromises);

    // Compress & build zip
    elements.zipProgressTitle.textContent = 'Compressing Files';
    elements.zipProgressText.textContent = 'Generating .zip package...';
    elements.zipProgressBar.style.width = '90%';

    const content = await zip.generateAsync(
      { type: 'blob', compression: 'DEFLATE', compressionOptions: { level: 6 } },
      (metadata) => {
        const finalPercent = 80 + Math.round(metadata.percent * 0.2);
        elements.zipProgressBar.style.width = `${finalPercent}%`;
      }
    );

    elements.zipProgressBar.style.width = '100%';
    elements.zipProgressText.textContent = 'Download starting!';

    // Trigger download
    const url = URL.createObjectURL(content);
    const link = document.createElement('a');
    link.href = url;
    link.download = zipFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up
    setTimeout(() => {
      URL.revokeObjectURL(url);
      elements.zipProgressModal.classList.remove('active');
    }, 1000);

  } catch (error) {
    console.error('ZIP generation failed:', error);
    alert('Could not generate ZIP: ' + error.message);
    elements.zipProgressModal.classList.remove('active');
  }
}

// Run on page load
document.addEventListener('DOMContentLoaded', initApp);
