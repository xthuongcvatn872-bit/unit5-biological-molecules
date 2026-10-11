// Dán link Web App URL Google Script của thầy/cô vào đây (nếu có):
const GOOGLE_SHEET_API_URL = "https://script.google.com/macros/s/AKfycby_SAMPLE_CODE/exec";

// 23 Thuật ngữ Unit 5: Khớp 100% với tên file gạch dưới trên GitHub
const VOCABULARY_DATA = [
  { id: 1, code: "001_Ribonucleic_acid", word: "Ribonucleic acid", ipa: "/ˌraɪbəʊnjuːˌkliːɪk ˈæsɪd/", defEn: "A nucleic acid essential for protein synthesis.", defVi: "Nucleic acid cần cho quá trình tổng hợp protein." },
  { id: 2, code: "002_DNA", word: "DNA", ipa: "/ˌdiː.enˈeɪ/", defEn: "Molecule carrying genetic instructions for living organisms.", defVi: "Phân tử mang thông tin di truyền của sinh vật." },
  { id: 3, code: "003_RNA", word: "RNA", ipa: "/ˌɑː.enˈeɪ/", defEn: "Single-stranded nucleic acid involved in protein synthesis.", defVi: "Nucleic acid mạch đơn tham gia tổng hợp protein." },
  { id: 4, code: "004_Polynucleotide", word: "Polynucleotide", ipa: "/ˌpɒlinjuːkliətaɪd/", defEn: "A chain of linked nucleotide units.", defVi: "Chuỗi gồm nhiều nucleotide liên kết với nhau." },
  { id: 5, code: "005_Nitrogenous_base", word: "Nitrogenous base", ipa: "/naɪˈtrɒdʒɪnəs beɪs/", defEn: "A nitrogen-containing building block of nucleic acids.", defVi: "Base chứa nitrogen cấu tạo nên nucleic acid." },
  { id: 6, code: "006_Ribose", word: "Ribose", ipa: "/ˈraɪbəʊs/", defEn: "A five-carbon sugar found in RNA.", defVi: "Loại đường 5 carbon cấu tạo nên RNA." },
  { id: 7, code: "007_Carbon", word: "Carbon", ipa: "/ˈkɑːbən/", defEn: "The primary element forming organic molecules.", defVi: "Nguyên tố chính tạo nên các phân tử hữu cơ." },
  { id: 8, code: "008_Phosphate", word: "Phosphate", ipa: "/ˈfɒsfeɪt/", defEn: "Chemical group forming the nucleic acid backbone.", defVi: "Nhóm hóa học tạo nên khung của nucleic acid." },
  { id: 9, code: "009_Adenine", word: "Adenine", ipa: "/ˈædəniːn/", defEn: "Purine base pairing with thymine or uracil.", defVi: "Base nhóm purine bắt cặp với thymine hoặc uracil." },
  { id: 10, code: "010_Guanine", word: "Guanine", ipa: "/ˈɡwɑːniːn/", defEn: "Purine base pairing with cytosine.", defVi: "Base nhóm purine bắt cặp với cytosine." },
  { id: 11, code: "011_Cytosine", word: "Cytosine", ipa: "/ˈsaɪtəsiːn/", defEn: "Pyrimidine base pairing with guanine.", defVi: "Base nhóm pyrimidine bắt cặp với guanine." },
  { id: 12, code: "012_Uracil", word: "Uracil", ipa: "/ˈjʊərəsɪl/", defEn: "Pyrimidine base unique to RNA.", defVi: "Base nhóm pyrimidine chỉ có trong RNA." },
  { id: 13, code: "013_Thymine", word: "Thymine", ipa: "/ˈθaɪmiːn/", defEn: "Pyrimidine base unique to DNA.", defVi: "Base nhóm pyrimidine chỉ có trong DNA." },
  { id: 14, code: "014_Hydrogen", word: "Hydrogen", ipa: "/ˈhaɪdrədʒən/", defEn: "Chemical element forming stabilizing bonds in biomolecules.", defVi: "Nguyên tố tạo liên kết làm bền phân tử sinh học." },
  { id: 15, code: "015_Ribosome", word: "Ribosome", ipa: "/ˈraɪbəsəʊm/", defEn: "Cellular structure that synthesizes proteins.", defVi: "Cấu trúc tế bào thực hiện tổng hợp protein." },
  { id: 16, code: "016_Amino_acid", word: "Amino acid", ipa: "/əˌmiːnəʊ ˈæsɪd/", defEn: "A monomer building block of proteins.", defVi: "Đơn phân cấu tạo nên chuỗi protein." },
  { id: 17, code: "017_Protein", word: "Protein", ipa: "/ˈprəʊtiːn/", defEn: "A macromolecule composed of amino acids.", defVi: "Đại phân tử sinh học cấu tạo từ các amino acid." },
  { id: 18, code: "018_Gene", word: "Gene", ipa: "/dʒiːn/", defEn: "A DNA sequence encoding a functional product.", defVi: "Đoạn trình tự DNA mã hóa cho sản phẩm chức năng." },
  { id: 19, code: "019_Enzyme", word: "Enzyme", ipa: "/ˈenzaɪm/", defEn: "A biological catalyst accelerating chemical reactions.", defVi: "Chất xúc tác sinh học làm tăng tốc độ phản ứng." },
  { id: 20, code: "020_Ribozyme", word: "Ribozyme", ipa: "/ˈraɪbəzaɪm/", defEn: "An RNA molecule with catalytic activity.", defVi: "Phân tử RNA có hoạt tính xúc tác." },
 { id: 21, code: "021_Purine", word: "Purine", ipa: "/ˈpjʊəriːn/", defEn: "A double-ring nitrogenous base group.", defVi: "Nhóm base chứa nitrogen có cấu trúc hai vòng." },
  { id: 22, code: "022_Uric_acid", word: "Uric acid", ipa: "/ˌjʊərɪk ˈæsɪd/", defEn: "A waste product of purine breakdown.", defVi: "Sản phẩm bài tiết từ quá trình chuyển hóa purine." },
  { id: 23, code: "023_Gout", word: "Gout", ipa: "/ɡaʊt/", defEn: "Arthritis caused by urate crystal buildup.", defVi: "Bệnh viêm khớp do tích tụ tinh thể urate." }
];
const ARENA_CONFIG = { validCode: "195", durationMinutes: 10 };

const ARENA_QUESTIONS = [
  { id: 1, type: "mcq", question: "Phân tử nào sau đây mang thông tin di truyền quy định cấu trúc của tất cả các protein trong cơ thể sinh vật?", options: ["Ribosome", "DNA", "Enzyme", "Ribose"], answer: "DNA" },
  { id: 2, type: "mcq", question: "Base nào sau đây là loại pyrimidine chỉ có trong phân tử RNA mà không có trong DNA?", options: ["Thymine", "Adenine", "Uracil", "Guanine"], answer: "Uracil" },
  { id: 3, type: "mcq", question: "Đơn vị cấu tạo (monomer) cơ bản nhất của các đại phân tử protein là:", options: ["Nucleotide", "Glucose", "Fatty acid", "Amino acid"], answer: "Amino acid" },
  { id: 4, type: "mcq", question: "Chất xúc tác sinh học có bản chất là phân tử RNA có hoạt tính xúc tác được gọi là gì?", options: ["Ribozyme", "Enzyme", "Polynucleotide", "Purine"], answer: "Ribozyme" },
  { id: 5, type: "mcq", question: "Sự lắng đọng của các tinh thể muối urate tại khớp xương do rối loạn chuyển hóa purine dẫn đến bệnh lý nào?", options: ["Tiểu đường", "Gout (Goute)", "Loãng xương", "Viêm dạ dày"], answer: "Gout (Goute)" },
  { id: 6, type: "tf", question: "Đường pentose cấu tạo nên phân tử RNA là Ribose (đường 5 carbon).", answer: "True" },
  { id: 7, type: "tf", question: "Trong phân tử DNA sợi kép, base Adenine liên kết với Cytosine bằng 3 liên kết hydrogen.", answer: "False" },
  { id: 8, type: "tf", question: "Phân tử RNA thông thường là chuỗi polynucleotide mạch đơn tham gia trực tiếp vào quá trình tổng hợp protein.", answer: "True" },
  { id: 9, type: "num", question: "Một đoạn phân tử DNA xoắn kép có 300 Adenine và 200 Guanine. Tổng số liên kết hydrogen của đoạn DNA này là:", answer: "1200" },
  { id: 10, type: "num", question: "Một chuỗi polypeptide hoàn chỉnh gồm 50 amino acid. Quá trình liên kết tạo chuỗi này đã giải phóng bao nhiêu phân tử nước?", answer: "49" }
];

let currentUser = { name: "", className: "" };
let currentVocabIndex = 0;
let userSpelling = [];
let reviewQuestions = [];
let reviewAnswers = {};
let arenaUserAnswers = {};
let arenaTimerInterval = null;
let arenaTimeRemaining = ARENA_CONFIG.durationMinutes * 60;

document.addEventListener("DOMContentLoaded", () => {
  fetchVisitorCount();
  setupEventListeners();
  renderVocabCard(0);
});

function showScreen(screenId) {
  document.querySelectorAll(".screen-panel").forEach(p => p.classList.remove("active"));
  const target = document.getElementById(screenId);
  if (target) target.classList.add("active");
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function fetchVisitorCount() {
  if (GOOGLE_SHEET_API_URL.includes("SAMPLE_CODE")) {
    document.getElementById("views-count").innerText = "1";
    return;
  }
  fetch(GOOGLE_SHEET_API_URL)
    .then(res => res.json())
    .then(data => {
      if (data && data.views) document.getElementById("views-count").innerText = data.views;
    })
    .catch(() => {
      document.getElementById("views-count").innerText = "---";
    });
}

function renderVocabCard(index) {
  currentVocabIndex = index;
  const item = VOCABULARY_DATA[index];
  document.getElementById("vocab-counter").innerText = `Thuật ngữ ${index + 1} / ${VOCABULARY_DATA.length}`;
  
  // Tải file trực tiếp: ảnh .png, audio .mp3, video .mp4 (dùng dấu gạch dưới)
  document.getElementById("vocab-img").src = `${item.code}.png`;
  
  const audioElem = document.getElementById("vocab-audio");
  audioElem.src = `${item.code}.mp3`;
  audioElem.load();
  
  const videoElem = document.getElementById("vocab-video");
  videoElem.src = `${item.code}.mp4`;
  videoElem.load();
  
  document.getElementById("btn-prev-vocab").disabled = (index === 0);
  document.getElementById("btn-next-vocab").disabled = (index === VOCABULARY_DATA.length - 1);

  initScrambleGame(item.word);
}

function initScrambleGame(rawWord) {
  const cleanWord = rawWord.toUpperCase().replace(/\s+/g, '');
  const shuffled = cleanWord.split('').sort(() => Math.random() - 0.5);
  userSpelling = [];
  
  const tileContainer = document.getElementById("letter-tiles");
  const slotContainer = document.getElementById("target-slots");
  tileContainer.innerHTML = "";
  slotContainer.innerHTML = "";
  document.getElementById("scramble-feedback").innerHTML = "";
  
  for (let i = 0; i < cleanWord.length; i++) {
    const slot = document.createElement("div");
    slot.className = "target-slot";
    slot.id = `slot-${i}`;
    slotContainer.appendChild(slot);
  }
  
  shuffled.forEach((char, idx) => {
    const btn = document.createElement("button");
    btn.className = "letter-tile";
    btn.innerText = char;
    btn.id = `tile-${idx}`;
    btn.onclick = () => {
      if (userSpelling.length >= cleanWord.length) return;
      btn.classList.add("used");
      const currentSlotIndex = userSpelling.length;
      userSpelling.push({ char, tileId: `tile-${idx}` });
      document.getElementById(`slot-${currentSlotIndex}`).innerText = char;
      
      if (userSpelling.length === cleanWord.length) {
        const spelled = userSpelling.map(u => u.char).join("");
        if (spelled === cleanWord) {
          document.getElementById("scramble-feedback").innerHTML = "<b style='color:#059669;'>🎉 Chính xác! Tuyệt vời!</b>";
        } else {
          document.getElementById("scramble-feedback").innerHTML = "<b style='color:#ef4444;'>❌ Chưa chính xác, hãy bấm 'Xếp lại'!</b>";
        }
      }
    };
    tileContainer.appendChild(btn);
  });
}

function generateReviewQuiz() {
  const shuffledVocab = [...VOCABULARY_DATA].sort(() => Math.random() - 0.5);
  const selected20 = shuffledVocab.slice(0, 20);
  reviewQuestions = [];
  reviewAnswers = {};
  
  for (let i = 0; i < 10; i++) reviewQuestions.push({ type: 'scramble', item: selected20[i] });
  for (let i = 10; i < 15; i++) reviewQuestions.push({ type: 'fill', item: selected20[i] });
  for (let i = 15; i < 20; i++) {
    const correct = selected20[i];
    const wrongOptions = VOCABULARY_DATA.filter(v => v.id !== correct.id).sort(() => Math.random() - 0.5).slice(0, 3);
    const options = [correct, ...wrongOptions].sort(() => Math.random() - 0.5);
    reviewQuestions.push({ type: 'mcq_def', item: correct, options: options });
  }
  
  renderReviewQuizUI();
  showScreen("screen-review-quiz");
}

function renderReviewQuizUI() {
  const container = document.getElementById("review-questions-list");
  container.innerHTML = "";
  
  reviewQuestions.forEach((q, idx) => {
    const box = document.createElement("div");
    box.className = "card-box";
    box.style.marginBottom = "20px";
    
    let html = `<h4>Câu ${idx + 1}: `;
    if (q.type === 'scramble') {
      const cleanWord = q.item.word.toUpperCase().replace(/\s+/g, '');
      const letters = cleanWord.split('').sort(() => Math.random() - 0.5).join(" - ");
      html += `Sắp xếp chữ cái: <span style="color:var(--primary); font-size:1.1rem; letter-spacing:2px;">[ ${letters} ]</span></h4>`;
      html += `<p style="font-size:0.9rem; color:#64748b; margin:6px 0;">Gợi ý: ${q.item.defVi}</p>`;
      html += `<input type="text" class="form-control" placeholder="Nhập từ..." onchange="reviewAnswers[${idx}] = this.value.trim().toUpperCase()">`;
    } else if (q.type === 'fill') {
      const cleanWord = q.item.word.toUpperCase();
      let masked = cleanWord.length > 4 ? cleanWord[0] + " _ " + cleanWord.slice(2, -1) + " _ " : cleanWord[0] + " _ " + cleanWord.slice(2);
      html += `Điền từ còn thiếu: <b style="letter-spacing:2px; color:var(--secondary); font-size:1.1rem;">${masked}</b></h4>`;
      html += `<p style="font-size:0.9rem; color:#64748b; margin:6px 0;">Định nghĩa: ${q.item.defEn}</p>`;
      html += `<input type="text" class="form-control" placeholder="Nhập từ..." onchange="reviewAnswers[${idx}] = this.value.trim().toUpperCase()">`;
    } else if (q.type === 'mcq_def') {
      html += `Chọn thuật ngữ đúng với định nghĩa:</h4>`;
      html += `<p style="margin:8px 0; font-weight:600; color:#0284c7;">"${q.item.defEn}"</p>`;
      html += `<div class="quiz-options">`;
      q.options.forEach(opt => {
        html += `<button class="quiz-opt-btn" onclick="reviewAnswers[${idx}] = '${opt.word}'; this.parentElement.querySelectorAll('.quiz-opt-btn').forEach(b=>b.classList.remove('selected')); this.classList.add('selected');">${opt.word}</button>`;
      });
      html += `</div>`;
    }
    
    box.innerHTML = html;
    container.appendChild(box);
  });
}

function submitReviewQuiz() {
  let score = 0;
  reviewQuestions.forEach((q, idx) => {
    const userAns = (reviewAnswers[idx] || "").replace(/\s+/g, '');
    const correctAns = q.item.word.toUpperCase().replace(/\s+/g, '');
    if (userAns === correctAns) score++;
  });
  alert(`Kết quả bài tập 20 câu: Đúng ${score} / 20 câu.`);
  showScreen("screen-vocab");
}

function startArenaContest() {
  const code = document.getElementById("arena-code-input").value.trim();
  if (code !== ARENA_CONFIG.validCode) {
    alert("⚠️ Mã phòng thi chưa chính xác! Vui lòng liên hệ giáo viên.");
    return;
  }
  arenaUserAnswers = {};
  arenaTimeRemaining = ARENA_CONFIG.durationMinutes * 60;
  startArenaTimer();
  renderArenaQuestions();
  showScreen("screen-arena-board");
}

function startArenaTimer() {
  clearInterval(arenaTimerInterval);
  arenaTimerInterval = setInterval(() => {
    arenaTimeRemaining--;
    const mins = Math.floor(arenaTimeRemaining / 60);
    const secs = arenaTimeRemaining % 60;
    document.getElementById("arena-timer").innerText = `⏱️ ${mins}:${secs < 10 ? '0' : ''}${secs}`;
    
    if (arenaTimeRemaining <= 0) {
      clearInterval(arenaTimerInterval);
      alert("Hết giờ thi! Tự động nộp bài.");
      submitArena();
    }
  }, 1000);
}

function renderArenaQuestions() {
  const container = document.getElementById("arena-questions-container");
  container.innerHTML = "";
  
  ARENA_QUESTIONS.forEach((q, index) => {
    const qBox = document.createElement("div");
    qBox.className = "card-box";
    qBox.style.marginBottom = "20px";
    
    let html = `<h4>Câu ${index + 1}: ${q.question}</h4>`;
    if (q.type === "mcq") {
      html += `<div class="quiz-options">`;
      q.options.forEach(opt => {
        html += `<button class="quiz-opt-btn" onclick="arenaUserAnswers[${q.id}]='${opt}'; this.parentElement.querySelectorAll('.quiz-opt-btn').forEach(b=>b.classList.remove('selected')); this.classList.add('selected');">${opt}</button>`;
      });
      html += `</div>`;
    } else if (q.type === "tf") {
      html += `
        <div style="display:flex; gap:12px; margin-top:14px;">
          <button class="quiz-opt-btn" style="flex:1; text-align:center;" onclick="arenaUserAnswers[${q.id}]='True'; this.parentElement.querySelectorAll('.quiz-opt-btn').forEach(b=>b.classList.remove('selected')); this.classList.add('selected');">✔️ ĐÚNG</button>
          <button class="quiz-opt-btn" style="flex:1; text-align:center;" onclick="arenaUserAnswers[${q.id}]='False'; this.parentElement.querySelectorAll('.quiz-opt-btn').forEach(b=>b.classList.remove('selected')); this.classList.add('selected');">✖️ SAI</button>
        </div>
      `;
    } else if (q.type === "num") {
      html += `
        <div style="margin-top:14px;">
          <input type="number" class="form-control" placeholder="Nhập kết quả số..." onchange="arenaUserAnswers[${q.id}] = this.value.trim()">
        </div>
      `;
    }
    
    qBox.innerHTML = html;
    container.appendChild(qBox);
  });
}

function submitArena() {
  clearInterval(arenaTimerInterval);
  let correctCount = 0;
  
  ARENA_QUESTIONS.forEach(q => {
    if (String(arenaUserAnswers[q.id] || "").trim().toLowerCase() === String(q.answer).trim().toLowerCase()) {
      correctCount++;
    }
  });
  
  const score = (correctCount * 1.0).toFixed(1);
  const timeSpentMins = Math.floor((ARENA_CONFIG.durationMinutes * 60 - arenaTimeRemaining) / 60);
  const timeSpentSecs = (ARENA_CONFIG.durationMinutes * 60 - arenaTimeRemaining) % 60;
  const timeSpentStr = `${timeSpentMins}m ${timeSpentSecs}s`;
  
  document.getElementById("arena-score-display").innerText = `${correctCount} / 10`;
  document.getElementById("arena-mark-display").innerText = `Điểm: ${score}`;
  showScreen("screen-arena-result");
  
  if (!GOOGLE_SHEET_API_URL.includes("SAMPLE_CODE")) {
    fetch(GOOGLE_SHEET_API_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: currentUser.name,
        className: currentUser.className,
        roomCode: ARENA_CONFIG.validCode,
        score: score,
        correctCount: correctCount,
        timeSpent: timeSpentStr
      })
    });
  }
}

function setupEventListeners() {
  document.getElementById("btn-start-app").onclick = () => {
    const name = document.getElementById("student-name").value.trim();
    const cls = document.getElementById("student-class").value.trim();
    if (!name || !cls) {
      alert("Vui lòng điền Họ tên và Lớp trước khi học bài!");
      return;
    }
    currentUser.name = name;
    currentUser.className = cls;
    showScreen("screen-vocab");
  };

  document.getElementById("btn-arena-header").onclick = () => {
    if (!currentUser.name) {
      alert("Vui lòng nhập Họ tên và Lớp trước khi vào Đấu trường!");
      showScreen("screen-welcome");
      return;
    }
    document.getElementById("arena-user-display").innerText = `Thí sinh: ${currentUser.name} - Lớp: ${currentUser.className}`;
    showScreen("screen-arena-lobby");
  };

  document.getElementById("btn-play-audio").onclick = () => {
    document.getElementById("vocab-audio").play();
  };

  document.getElementById("btn-prev-vocab").onclick = () => {
    if (currentVocabIndex > 0) renderVocabCard(currentVocabIndex - 1);
  };
  
  document.getElementById("btn-next-vocab").onclick = () => {
    if (currentVocabIndex < VOCABULARY_DATA.length - 1) renderVocabCard(currentVocabIndex + 1);
  };

  document.getElementById("btn-reset-scramble").onclick = () => {
    initScrambleGame(VOCABULARY_DATA[currentVocabIndex].word);
  };

  document.getElementById("btn-open-review").onclick = generateReviewQuiz;
  document.getElementById("btn-submit-review").onclick = () => {
    if (confirm("Xác nhận nộp bài tập tổng hợp?")) submitReviewQuiz();
  };

  document.getElementById("btn-arena-enter").onclick = startArenaContest;
  document.getElementById("btn-submit-arena").onclick = () => {
    if (confirm("Xác nhận nộp bài Đấu trường?")) submitArena();
  };
}
